import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Calendar, User, Clock, Share2, Loader2, WifiOff, RefreshCw, Heart, Eye, Star } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { getNewsById, toggleLike, NewsArticle } from '../lib/newsService';

interface NewsDetailPageProps {
  onNavigate: (page: string, id?: string) => void;
  articleId?: string;
}

export function NewsDetailPage({ onNavigate, articleId }: NewsDetailPageProps) {
  const [article, setArticle] = useState<NewsArticle | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [retryCount, setRetryCount] = useState(0);
  const [isLiking, setIsLiking] = useState(false);
  const [hasLiked, setHasLiked] = useState(false);

  const loadArticle = async (showLoader = true) => {
    if (!articleId) {
      setError('Article ID not provided');
      setLoading(false);
      return;
    }

    try {
      if (showLoader) setLoading(true);
      setError(null);
      
      // Add timeout to prevent hanging
      const timeoutPromise = new Promise<never>((_, reject) =>
        setTimeout(() => reject(new Error('Request timeout')), 15000)
      );
      
      const articlePromise = getNewsById(articleId, true); // Increment views
      const articleData = await Promise.race([articlePromise, timeoutPromise]);
      
      if (articleData) {
        setArticle(articleData);
        // Check if user has liked this article (you could store this in localStorage)
        const likedArticles = JSON.parse(localStorage.getItem('likedArticles') || '[]');
        setHasLiked(likedArticles.includes(articleId));
      } else {
        setError('Article not found');
      }
    } catch (err: any) {
      console.error('Error loading article:', err);
      if (err.message === 'Request timeout') {
        setError('Request timed out. Please check your connection and try again.');
      } else {
        setError('Failed to load article. Using offline data may be limited.');
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadArticle();
  }, [articleId]);

  const handleRetry = () => {
    setRetryCount(prev => prev + 1);
    loadArticle(true);
  };

  const handleLike = async () => {
    if (!article || isLiking) return;

    try {
      setIsLiking(true);
      const likedArticles = JSON.parse(localStorage.getItem('likedArticles') || '[]');
      const isCurrentlyLiked = likedArticles.includes(articleId);
      
      // Toggle like status
      const newLikesCount = await toggleLike(articleId!, !isCurrentlyLiked);
      
      // Update local state
      setArticle(prev => prev ? { ...prev, likes: newLikesCount } : null);
      setHasLiked(!isCurrentlyLiked);
      
      // Update localStorage
      if (isCurrentlyLiked) {
        const updated = likedArticles.filter((id: string) => id !== articleId);
        localStorage.setItem('likedArticles', JSON.stringify(updated));
      } else {
        localStorage.setItem('likedArticles', JSON.stringify([...likedArticles, articleId]));
      }
    } catch (error) {
      console.error('Error toggling like:', error);
    } finally {
      setIsLiking(false);
    }
  };

  const handleShare = async () => {
    if (navigator.share && article) {
      try {
        await navigator.share({
          title: article.title,
          text: article.subtitle,
          url: window.location.href,
        });
      } catch (error) {
        console.log('Error sharing:', error);
        // Fallback to copying to clipboard
        try {
          await navigator.clipboard.writeText(window.location.href);
          // You could show a toast notification here
        } catch (clipboardError) {
          console.log('Clipboard error:', clipboardError);
        }
      }
    } else if (article) {
      // Fallback to copying to clipboard
      try {
        await navigator.clipboard.writeText(window.location.href);
        // You could show a toast notification here
      } catch (clipboardError) {
        console.log('Clipboard error:', clipboardError);
      }
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 pt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex justify-center items-center py-20">
            <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
            <span className="ml-2 text-gray-600">Loading article...</span>
          </div>
        </div>
      </div>
    );
  }

  if (error || !article) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 pt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Back Navigation */}
          <div className="mb-8">
            <Button
              variant="ghost"
              onClick={() => onNavigate('news')}
              className="text-gray-600 hover:text-gray-900 p-0"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to News
            </Button>
          </div>

          <div className="text-center">
            <div className="text-red-500 text-6xl mb-4">
              {error?.includes('timeout') ? '⏰' : '📰'}
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {error?.includes('timeout') ? 'Request Timed Out' : 'Article Not Found'}
            </h2>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              {error || 'The article you\'re looking for doesn\'t exist or couldn\'t be loaded.'}
            </p>
            <div className="flex gap-4 justify-center">
              <Button onClick={() => onNavigate('news')} variant="outline">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to News
              </Button>
              {error?.includes('timeout') || error?.includes('Failed') ? (
                <Button onClick={handleRetry} className="bg-blue-600 hover:bg-blue-700">
                  <RefreshCw className="h-4 w-4 mr-2" />
                  Try Again
                </Button>
              ) : (
                <Button onClick={() => window.location.reload()}>
                  <RefreshCw className="h-4 w-4 mr-2" />
                  Refresh Page
                </Button>
              )}
            </div>
            
            {retryCount > 0 && (
              <div className="mt-4 text-sm text-gray-500">
                Retry attempts: {retryCount}
              </div>
            )}
            
            {error?.includes('offline') && (
              <div className="mt-6 flex items-center justify-center gap-2 text-yellow-600">
                <WifiOff className="h-4 w-4" />
                <span className="text-sm">Connection issues detected</span>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Navigation */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <Button
            variant="ghost"
            onClick={() => onNavigate('news')}
            className="text-gray-600 hover:text-gray-900 p-0"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to News
          </Button>
        </motion.div>

        {/* Article Header */}
        <motion.header
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <div className="mb-6">
            <div className="flex gap-2 mb-4">
              {article.featured && (
                <Badge className="bg-yellow-500 text-white">
                  <Star className="h-3 w-3 mr-1" />
                  Featured
                </Badge>
              )}
              <Badge className="bg-blue-600 text-white">
                {article.category}
              </Badge>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              {article.title}
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed font-medium mb-6">
              {article.subtitle}
            </p>
            
            <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-6">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>
                  {article.date.toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>{article.author.name}</span>
                <Badge variant="outline" className="text-xs">
                  {article.author.role}
                </Badge>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{article.readTime} min read</span>
              </div>
              <div className="flex items-center gap-2">
                <Eye className="h-4 w-4" />
                <span>{article.views} views</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <Button
                variant="outline"
                size="sm"
                onClick={handleLike}
                disabled={isLiking}
                className={`${hasLiked ? 'text-red-600 border-red-200 bg-red-50' : ''}`}
              >
                <Heart className={`h-4 w-4 mr-2 ${hasLiked ? 'fill-current' : ''}`} />
                {article.likes} {article.likes === 1 ? 'Like' : 'Likes'}
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={handleShare}
                className="text-gray-600 hover:text-blue-600"
              >
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
            </div>
          </div>
        </motion.header>

        {/* Featured Image */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={article.imageUrl}
              alt={article.title}
              className="w-full h-64 md:h-96 object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
        </motion.div>

        {/* Article Content */}
        <motion.article
          className="prose prose-lg max-w-none mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 md:p-12">
            <div 
              className="text-gray-800 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: article.content }}
              style={{
                fontSize: '18px',
                lineHeight: '1.8',
              }}
            />
          </div>
        </motion.article>

        {/* Tags and Author Info */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-sm">
                      #{tag}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div className="text-right">
                <h3 className="font-semibold text-gray-900 mb-2">Author</h3>
                <p className="text-gray-800 font-medium">{article.author.name}</p>
                <p className="text-gray-600 text-sm">{article.author.role}</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Don't miss our latest news and insights. Follow our social media channels for regular updates.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => onNavigate('news')}
              variant="secondary"
              className="bg-white text-blue-600 hover:bg-blue-50"
            >
              Read More Articles
            </Button>
            <Button
              onClick={() => onNavigate('contact')}
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600"
            >
              Contact Us
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}