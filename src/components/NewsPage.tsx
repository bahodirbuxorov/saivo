import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Search, Filter, Calendar, User, Clock, ArrowRight, Loader2, Wifi, WifiOff, Heart, Eye, Star, AlertCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { getAllNews, getNewsByCategory, searchNews, getFeaturedNews, NewsArticle, checkFirebaseConnection, getCategories } from '../lib/newsService';

interface NewsPageProps {
  onNavigate: (page: string, id?: string) => void;
}

export function NewsPage({ onNavigate }: NewsPageProps) {
  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const [filteredArticles, setFilteredArticles] = useState<NewsArticle[]>([]);
  const [featuredArticles, setFeaturedArticles] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchLoading, setSearchLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isOnline, setIsOnline] = useState(true);
  const [usingFallback, setUsingFallback] = useState(false);
  const [categories, setCategories] = useState<string[]>(['All']);

  // Load articles and categories from Firebase
  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Check Firebase connection first
        const isConnected = await checkFirebaseConnection();
        setIsOnline(isConnected);
        
        if (!isConnected) {
          setUsingFallback(true);
          setError('Using offline data. Some features may be limited.');
        }
        
        // Load data with timeout
        const dataPromises = [
          getAllNews(),
          getFeaturedNews(),
          getCategories()
        ];
        
        // Add timeout to prevent hanging
        const timeoutPromise = new Promise<never>((_, reject) =>
          setTimeout(() => reject(new Error('Request timeout')), 20000)
        );
        
        const results = await Promise.race([
          Promise.all(dataPromises),
          timeoutPromise
        ]) as [NewsArticle[], NewsArticle[], string[]];
        
        const [newsData, featured, availableCategories] = results;
        
        setArticles(newsData);
        setFilteredArticles(newsData);
        setFeaturedArticles(featured);
        setCategories(['All', ...availableCategories]);
        
        // Check if we're using fallback data based on article IDs
        if (newsData.length > 0 && newsData[0].id && newsData[0].id.length < 10) {
          setUsingFallback(true);
          if (!error) {
            setError('Connected but using cached data.');
          }
        }
        
      } catch (err: any) {
        console.error('Error loading news:', err);
        setUsingFallback(true);
        setIsOnline(false);
        
        if (err.message === 'Request timeout') {
          setError('Request timed out. Using offline data.');
        } else {
          setError('Failed to connect to server. Using offline data.');
        }
        
        // Load fallback data
        try {
          const fallbackData = await getAllNews();
          setArticles(fallbackData);
          setFilteredArticles(fallbackData);
          setFeaturedArticles(fallbackData.filter(article => article.featured));
          setCategories(['All', 'Company News', 'Technology', 'Development', 'Industry']);
        } catch (fallbackError) {
          console.error('Even fallback failed:', fallbackError);
          setError('Unable to load news data. Please refresh the page.');
        }
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  // Handle search and filtering
  useEffect(() => {
    const handleSearch = async () => {
      if (!searchQuery.trim()) {
        // If no search query, filter by category
        if (selectedCategory === 'All') {
          setFilteredArticles(articles);
        } else {
          const filtered = articles.filter(article => article.category === selectedCategory);
          setFilteredArticles(filtered);
        }
        return;
      }

      try {
        setSearchLoading(true);
        
        // Add timeout for search
        const searchPromise = searchNews(searchQuery);
        const timeoutPromise = new Promise<never>((_, reject) =>
          setTimeout(() => reject(new Error('Search timeout')), 10000)
        );
        
        const searchResults = await Promise.race([searchPromise, timeoutPromise]) as NewsArticle[];
        
        // Apply category filter to search results
        const finalResults = selectedCategory === 'All' 
          ? searchResults 
          : searchResults.filter(article => article.category === selectedCategory);
          
        setFilteredArticles(finalResults);
      } catch (err: any) {
        console.error('Error searching news:', err);
        
        // Fallback to client-side search
        const clientSearchResults = articles.filter(article =>
          article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          article.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
          article.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())) ||
          article.author.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
        
        const finalResults = selectedCategory === 'All' 
          ? clientSearchResults 
          : clientSearchResults.filter(article => article.category === selectedCategory);
          
        setFilteredArticles(finalResults);
        
        if (err.message === 'Search timeout') {
          setError('Search timed out. Showing local results.');
        }
      } finally {
        setSearchLoading(false);
      }
    };

    const debounceTimer = setTimeout(handleSearch, 300);
    return () => clearTimeout(debounceTimer);
  }, [searchQuery, selectedCategory, articles]);

  // Handle category filter
  const handleCategoryFilter = async (category: string) => {
    try {
      setSelectedCategory(category);
      setSearchLoading(true);
      setError(null);

      if (category === 'All') {
        if (!searchQuery.trim()) {
          setFilteredArticles(articles);
        }
      } else {
        const categoryNews = await getNewsByCategory(category);
        if (!searchQuery.trim()) {
          setFilteredArticles(categoryNews);
        }
      }
    } catch (err) {
      console.error('Error filtering by category:', err);
      // Fallback to client-side filtering
      const filtered = articles.filter(article => 
        category === 'All' || article.category === category
      );
      setFilteredArticles(filtered);
    } finally {
      setSearchLoading(false);
    }
  };

  // Retry loading data
  const handleRetry = () => {
    window.location.reload();
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center py-32">
            <div className="text-center">
              <Loader2 className="h-12 w-12 animate-spin text-blue-600 mx-auto mb-4" />
              <p className="text-gray-600 text-lg">Loading latest news...</p>
              <p className="text-gray-500 text-sm mt-2">This may take a moment</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 pt-20">
      {/* Header */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Latest <span className="text-blue-600">News</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Stay updated with SAIVO's latest developments, industry insights, and technology trends
            </p>
            
            {/* Connection Status */}
            {(usingFallback || !isOnline) && (
              <motion.div
                className="inline-flex items-center gap-2 bg-yellow-50 border border-yellow-200 text-yellow-800 px-6 py-3 rounded-full text-sm font-medium"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <WifiOff className="h-4 w-4" />
                Using offline data - some features may be limited
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleRetry}
                  className="ml-2 h-6 px-2 text-xs bg-yellow-100 hover:bg-yellow-200"
                >
                  Retry
                </Button>
              </motion.div>
            )}
            
            {isOnline && !usingFallback && (
              <motion.div
                className="inline-flex items-center gap-2 bg-green-50 border border-green-200 text-green-800 px-6 py-3 rounded-full text-sm font-medium"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <Wifi className="h-4 w-4" />
                Connected to live data
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {/* Featured Articles */}
        {featuredArticles.length > 0 && (
          <motion.section
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <div className="flex items-center gap-2 mb-8">
              <Star className="h-6 w-6 text-yellow-500" />
              <h2 className="text-2xl font-bold text-gray-900">Featured Articles</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredArticles.slice(0, 3).map((article, index) => (
                <motion.div
                  key={article.id}
                  className="group bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                  onClick={() => onNavigate('news-detail', article.id)}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={article.imageUrl}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-yellow-500 text-white">
                        <Star className="h-3 w-3 mr-1" />
                        Featured
                      </Badge>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge variant="secondary" className="bg-blue-600 text-white">
                        {article.category}
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {article.subtitle}
                    </p>
                    
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <div className="flex items-center gap-3">
                        <span>{article.author.name}</span>
                        <span>{article.readTime} min</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1">
                          <Heart className="h-3 w-3" />
                          {article.likes}
                        </div>
                        <div className="flex items-center gap-1">
                          <Eye className="h-3 w-3" />
                          {article.views}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}

        {/* Search and Filter */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 h-12 text-lg border-gray-200 focus:border-blue-500"
                />
                {searchLoading && (
                  <Loader2 className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5 animate-spin" />
                )}
              </div>
              <div className="flex items-center gap-2">
                <Filter className="text-gray-400 h-5 w-5" />
                <span className="text-gray-600 font-medium">Filter:</span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => handleCategoryFilter(category)}
                  disabled={searchLoading}
                  className={`${
                    selectedCategory === category 
                      ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                      : 'border-gray-200 hover:border-blue-300 hover:text-blue-600'
                  }`}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Error State */}
        {error && (
          <motion.div
            className="mb-8 p-4 bg-yellow-50 border border-yellow-200 rounded-xl text-yellow-800"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex items-center gap-2">
              <AlertCircle className="h-5 w-5" />
              <span>{error}</span>
            </div>
          </motion.div>
        )}

        {/* Loading State for Search/Filter */}
        {searchLoading && (
          <div className="flex justify-center items-center py-12">
            <div className="text-center">
              <Loader2 className="h-8 w-8 animate-spin text-blue-600 mx-auto mb-2" />
              <span className="text-gray-600">Filtering articles...</span>
            </div>
          </div>
        )}

        {/* Articles Grid */}
        {!searchLoading && (
          <div className="grid gap-8 md:gap-12">
            {filteredArticles.length > 0 ? (
              filteredArticles.map((article, index) => (
                <motion.article
                  key={article.id}
                  className="group bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <div className="relative h-64 md:h-full overflow-hidden">
                        <img
                          src={article.imageUrl}
                          alt={article.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          loading="lazy"
                        />
                        <div className="absolute top-4 left-4 flex gap-2">
                          {article.featured && (
                            <Badge className="bg-yellow-500 text-white">
                              <Star className="h-3 w-3 mr-1" />
                              Featured
                            </Badge>
                          )}
                          <Badge variant="secondary" className="bg-blue-600 text-white">
                            {article.category}
                          </Badge>
                        </div>
                      </div>
                    </div>
                    
                    <div className="md:w-2/3 p-8">
                      <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {article.date.toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </div>
                        <div className="flex items-center gap-1">
                          <User className="h-4 w-4" />
                          {article.author.name}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {article.readTime} min read
                        </div>
                      </div>
                      
                      <h2 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                        {article.title}
                      </h2>
                      
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {article.subtitle}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-6 text-sm text-gray-500">
                          <div className="flex items-center gap-1">
                            <Heart className="h-4 w-4" />
                            {article.likes} likes
                          </div>
                          <div className="flex items-center gap-1">
                            <Eye className="h-4 w-4" />
                            {article.views} views
                          </div>
                        </div>
                        
                        <Button
                          onClick={() => onNavigate('news-detail', article.id)}
                          className="bg-blue-600 hover:bg-blue-700 text-white group"
                        >
                          Read More
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))
            ) : (
              <motion.div 
                className="text-center py-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <div className="text-6xl mb-4">📰</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">No Articles Found</h3>
                <p className="text-gray-600 mb-8">
                  {searchQuery ? 
                    `No articles found matching "${searchQuery}"` : 
                    `No articles found in the "${selectedCategory}" category`
                  }
                </p>
                <Button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('All');
                  }}
                  variant="outline"
                >
                  Show All Articles
                </Button>
              </motion.div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}