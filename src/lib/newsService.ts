import { 
  collection, 
  doc, 
  getDocs, 
  getDoc, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  query, 
  where, 
  orderBy, 
  limit,
  Timestamp,
  increment
} from 'firebase/firestore';
import { db } from './firebase';

export interface NewsAuthor {
  name: string;
  role: string;
}

export interface NewsArticle {
  id?: string;
  title: string;
  subtitle: string;
  content: string;
  imageUrl: string;
  category: string;
  author: NewsAuthor;
  date: Date;
  readTime: string;
  tags: string[];
  featured: boolean;
  published: boolean;
  likes: number;
  views: number;
}

const NEWS_COLLECTION = 'news';

// Fallback news data in case Firebase fails
const fallbackNews: NewsArticle[] = [
  {
    id: '1',
    title: "SAIVO Achieves 70M Som Turnover Milestone",
    subtitle: "Our company celebrates reaching 70 million som in turnover within just 6 months of operation",
    content: `
      <p>SAIVO has achieved a remarkable milestone by reaching 70 million som in turnover within just 6 months of operation. This achievement represents not just financial success, but a testament to our team's dedication and our clients' trust in our innovative solutions.</p>
      
      <p>Starting from our first major project worth 35 million som in November 2024, we have consistently delivered high-quality software solutions that have exceeded client expectations. Our rapid growth demonstrates the strong demand for quality tech services in Uzbekistan's evolving digital landscape.</p>
      
      <p>"This milestone is just the beginning," says CEO Bahodir Buxorov. "We're committed to continuing our growth trajectory while maintaining the high standards of quality and innovation that our clients expect from us."</p>
      
      <p>The success has been driven by our focus on custom software development, mobile applications, and AI-powered solutions that help businesses streamline their operations and achieve their digital transformation goals.</p>
      
      <p>Looking ahead, SAIVO plans to expand its service offerings and explore new market opportunities while continuing to serve as a trusted technology partner for businesses across Uzbekistan and beyond.</p>
    `,
    imageUrl: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80",
    category: "Company News",
    author: { name: "Bahodir Buxorov", role: "CEO" },
    date: new Date("2025-05-15"),
    readTime: "4",
    tags: ["milestone", "growth", "success", "turnover"],
    featured: true,
    published: true,
    likes: 24,
    views: 156
  },
  {
    id: '2',
    title: "The Future of AI in Business Automation",
    subtitle: "Exploring how artificial intelligence is revolutionizing business processes",
    content: `
      <p>Artificial Intelligence is no longer a futuristic concept—it's a present reality transforming how businesses operate across the globe. At SAIVO, we've witnessed firsthand how AI-powered solutions can dramatically improve efficiency and drive growth for our clients.</p>
      
      <p>In Uzbekistan's rapidly evolving business landscape, companies are increasingly recognizing the need to adopt AI technologies to remain competitive. From automated customer service chatbots to predictive analytics for inventory management, AI is reshaping traditional business models.</p>
      
      <p>Our experience in developing AI solutions has shown us that successful implementation requires more than just cutting-edge technology—it demands a deep understanding of business processes and clear strategic vision. We work closely with our clients to identify the areas where AI can deliver the most significant impact.</p>
      
      <p>Key areas where we've seen AI make a difference include:</p>
      <ul>
        <li>Customer service automation through intelligent chatbots</li>
        <li>Predictive analytics for better decision-making</li>
        <li>Process automation to reduce manual tasks</li>
        <li>Data analysis for actionable business insights</li>
      </ul>
      
      <p>As we look to the future, we believe that businesses that embrace AI today will be the leaders of tomorrow. The question isn't whether to adopt AI, but how quickly and effectively you can integrate it into your operations.</p>
    `,
    imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    category: "Technology",
    author: { name: "Salimbay Elimuratov", role: "CTO" },
    date: new Date("2025-05-10"),
    readTime: "6",
    tags: ["AI", "automation", "technology", "business"],
    featured: false,
    published: true,
    likes: 18,
    views: 98
  }
];

// Get all documents and filter/sort on client side to avoid composite indexes
const getAllDocuments = async (): Promise<NewsArticle[]> => {
  try {
    const querySnapshot = await getDocs(collection(db, NEWS_COLLECTION));
    const news = querySnapshot.docs.map(doc => {
      const data = doc.data();
      return {
        id: doc.id,
        ...data,
        date: data.date?.toDate ? data.date.toDate() : new Date(data.date)
      };
    }) as NewsArticle[];
    
    return news;
  } catch (error) {
    console.error('Error fetching all documents:', error);
    return fallbackNews;
  }
};

// Get all published news articles
export const getAllNews = async (): Promise<NewsArticle[]> => {
  try {
    const allNews = await getAllDocuments();
    
    // Filter and sort on client side
    const publishedNews = allNews
      .filter(article => article.published === true)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    
    return publishedNews.length > 0 ? publishedNews : fallbackNews;
  } catch (error) {
    console.error('Error fetching news, using fallback data:', error);
    return fallbackNews;
  }
};

// Get featured news articles
export const getFeaturedNews = async (): Promise<NewsArticle[]> => {
  try {
    const allNews = await getAllDocuments();
    
    // Filter for published and featured, then sort on client side
    const featuredNews = allNews
      .filter(article => article.published === true && article.featured === true)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    
    return featuredNews;
  } catch (error) {
    console.error('Error fetching featured news:', error);
    return fallbackNews.filter(article => article.featured);
  }
};

// Get news by category
export const getNewsByCategory = async (category: string): Promise<NewsArticle[]> => {
  try {
    const allNews = await getAllNews();
    return allNews.filter(article => article.category === category);
  } catch (error) {
    console.error('Error fetching news by category, using fallback data:', error);
    return fallbackNews.filter(article => article.category === category);
  }
};

// Get single news article by ID and increment views
export const getNewsById = async (id: string, incrementViews: boolean = true): Promise<NewsArticle | null> => {
  try {
    const docRef = doc(db, NEWS_COLLECTION, id);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      const data = docSnap.data();
      const article = {
        id: docSnap.id,
        ...data,
        date: data.date?.toDate ? data.date.toDate() : new Date(data.date)
      } as NewsArticle;

      // Increment views if requested
      if (incrementViews) {
        try {
          await updateDoc(docRef, {
            views: increment(1)
          });
          article.views = (article.views || 0) + 1;
        } catch (error) {
          console.error('Error incrementing views:', error);
        }
      }

      return article;
    } else {
      // Try fallback data
      const fallbackArticle = fallbackNews.find(article => article.id === id);
      return fallbackArticle || null;
    }
  } catch (error) {
    console.error('Error fetching news by ID, trying fallback data:', error);
    const fallbackArticle = fallbackNews.find(article => article.id === id);
    return fallbackArticle || null;
  }
};

// Search news articles - client-side search to avoid complex queries
export const searchNews = async (searchTerm: string): Promise<NewsArticle[]> => {
  try {
    const allNews = await getAllNews();
    
    // Filter results on client side
    return allNews.filter(article =>
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.subtitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())) ||
      article.author.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  } catch (error) {
    console.error('Error searching news, using fallback data:', error);
    return fallbackNews.filter(article =>
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.subtitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())) ||
      article.author.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
};

// Like/unlike an article
export const toggleLike = async (id: string, increment: boolean): Promise<number> => {
  try {
    const docRef = doc(db, NEWS_COLLECTION, id);
    const updateData = {
      likes: increment ? increment(1) : increment(-1)
    };
    await updateDoc(docRef, updateData);
    
    // Get updated article to return current likes count
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return docSnap.data().likes || 0;
    }
    return 0;
  } catch (error) {
    console.error('Error updating likes:', error);
    throw error;
  }
};

// Add new news article
export const addNews = async (article: Omit<NewsArticle, 'id'>): Promise<string> => {
  try {
    const docRef = await addDoc(collection(db, NEWS_COLLECTION), {
      ...article,
      date: Timestamp.fromDate(article.date)
    });
    return docRef.id;
  } catch (error) {
    console.error('Error adding news:', error);
    throw error;
  }
};

// Update news article
export const updateNews = async (id: string, updates: Partial<NewsArticle>): Promise<void> => {
  try {
    const docRef = doc(db, NEWS_COLLECTION, id);
    const updateData = { ...updates };
    if (updates.date) {
      updateData.date = Timestamp.fromDate(updates.date);
    }
    await updateDoc(docRef, updateData);
  } catch (error) {
    console.error('Error updating news:', error);
    throw error;
  }
};

// Delete news article
export const deleteNews = async (id: string): Promise<void> => {
  try {
    await deleteDoc(doc(db, NEWS_COLLECTION, id));
  } catch (error) {
    console.error('Error deleting news:', error);
    throw error;
  }
};

// Get recent news (limited number)
export const getRecentNews = async (limitCount: number = 6): Promise<NewsArticle[]> => {
  try {
    const allNews = await getAllNews();
    return allNews.slice(0, limitCount);
  } catch (error) {
    console.error('Error fetching recent news, using fallback data:', error);
    return fallbackNews.slice(0, limitCount);
  }
};

// Helper function to check Firebase connection
export const checkFirebaseConnection = async (): Promise<boolean> => {
  try {
    const testQuery = query(collection(db, NEWS_COLLECTION), limit(1));
    await getDocs(testQuery);
    return true;
  } catch (error) {
    console.warn('Firebase connection failed:', error);
    return false;
  }
};

// Get categories from published articles
export const getCategories = async (): Promise<string[]> => {
  try {
    const allNews = await getAllNews();
    const categories = [...new Set(allNews.map(article => article.category))];
    return categories.sort();
  } catch (error) {
    console.error('Error fetching categories:', error);
    return ['Company News', 'Technology', 'Development', 'Industry'];
  }
};

// Get stats about news articles
export const getNewsStats = async (): Promise<{
  totalArticles: number;
  featuredArticles: number;
  totalViews: number;
  totalLikes: number;
}> => {
  try {
    const allNews = await getAllNews();
    return {
      totalArticles: allNews.length,
      featuredArticles: allNews.filter(article => article.featured).length,
      totalViews: allNews.reduce((sum, article) => sum + (article.views || 0), 0),
      totalLikes: allNews.reduce((sum, article) => sum + (article.likes || 0), 0)
    };
  } catch (error) {
    console.error('Error fetching news stats:', error);
    return {
      totalArticles: fallbackNews.length,
      featuredArticles: fallbackNews.filter(article => article.featured).length,
      totalViews: fallbackNews.reduce((sum, article) => sum + (article.views || 0), 0),
      totalLikes: fallbackNews.reduce((sum, article) => sum + (article.likes || 0), 0)
    };
  }
};