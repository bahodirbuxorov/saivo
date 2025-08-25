import { addNews, NewsArticle } from './newsService';

// Original news data to seed Firebase
const seedNewsData: Omit<NewsArticle, 'id'>[] = [
  {
    title: "SAIVO Achieves 70M Som Turnover Milestone",
    excerpt: "Our company celebrates reaching 70 million som in turnover within just 6 months of operation, showcasing rapid growth in the Uzbekistan tech market.",
    content: `
      <p>SAIVO has achieved a remarkable milestone by reaching 70 million som in turnover within just 6 months of operation. This achievement represents not just financial success, but a testament to our team's dedication and our clients' trust in our innovative solutions.</p>
      
      <p>Starting from our first major project worth 35 million som in November 2024, we have consistently delivered high-quality software solutions that have exceeded client expectations. Our rapid growth demonstrates the strong demand for quality tech services in Uzbekistan's evolving digital landscape.</p>
      
      <p>"This milestone is just the beginning," says CEO Bahodir Buxorov. "We're committed to continuing our growth trajectory while maintaining the high standards of quality and innovation that our clients expect from us."</p>
      
      <p>The success has been driven by our focus on custom software development, mobile applications, and AI-powered solutions that help businesses streamline their operations and achieve their digital transformation goals.</p>
      
      <p>Looking ahead, SAIVO plans to expand its service offerings and explore new market opportunities while continuing to serve as a trusted technology partner for businesses across Uzbekistan and beyond.</p>
    `,
    imageUrl: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80",
    category: "Company News",
    author: "SAIVO Team",
    publishedAt: new Date("2025-05-15"),
    readTime: 4,
    tags: ["milestone", "growth", "success", "turnover"]
  },
  {
    title: "The Future of AI in Business Automation",
    excerpt: "Exploring how artificial intelligence is revolutionizing business processes and what it means for companies in Uzbekistan.",
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
    author: "Salimbay Elimuratov",
    publishedAt: new Date("2025-05-10"),
    readTime: 6,
    tags: ["AI", "automation", "technology", "business"]
  },
  {
    title: "Building Scalable E-commerce Solutions",
    excerpt: "Our approach to creating robust e-commerce platforms that grow with your business needs.",
    content: `
      <p>E-commerce has become a critical component of business success in today's digital economy. At SAIVO, we specialize in building scalable e-commerce solutions that not only meet current needs but also adapt to future growth requirements.</p>
      
      <p>Our development philosophy centers around creating flexible architectures that can handle increasing traffic, expanding product catalogs, and evolving business requirements. We've learned that the most successful e-commerce platforms are those built with scalability in mind from day one.</p>
      
      <p>Key principles we follow in e-commerce development:</p>
      <ul>
        <li>Modular architecture for easy feature additions</li>
        <li>Performance optimization for fast loading times</li>
        <li>Mobile-first design for optimal user experience</li>
        <li>Robust security measures to protect customer data</li>
        <li>Integration capabilities with third-party services</li>
      </ul>
      
      <p>We've successfully delivered e-commerce solutions that have helped our clients increase their online sales by up to 300%. These platforms feature intuitive admin panels, comprehensive analytics, and seamless payment integration.</p>
      
      <p>The e-commerce landscape in Uzbekistan is growing rapidly, and businesses need platforms that can compete on a global scale. Our solutions are designed to meet international standards while addressing local market needs.</p>
      
      <p>Whether you're a startup looking to establish an online presence or an established business seeking to upgrade your e-commerce capabilities, SAIVO has the expertise to deliver solutions that drive results.</p>
    `,
    imageUrl: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    category: "Development",
    author: "Shohruh Botirov",
    publishedAt: new Date("2025-05-05"),
    readTime: 5,
    tags: ["e-commerce", "scalability", "development", "online business"]
  },
  {
    title: "SAIVO Expands International Client Base",
    excerpt: "We're proud to announce our growing international presence with 2 new clients from neighboring countries.",
    content: `
      <p>SAIVO is excited to announce the expansion of our client base beyond Uzbekistan's borders. We have successfully onboarded 2 international clients, marking a significant milestone in our company's growth and international recognition.</p>
      
      <p>This expansion demonstrates our ability to deliver world-class software solutions that meet international standards and requirements. Our team has worked diligently to ensure that our services can adapt to different market needs and regulatory environments.</p>
      
      <p>Working with international clients has provided us with valuable insights into global business practices and has further enhanced our technical capabilities. These projects have challenged us to think beyond local requirements and consider broader market needs.</p>
      
      <p>Our international projects include:</p>
      <ul>
        <li>A comprehensive CRM system for a logistics company</li>
        <li>An AI-powered analytics platform for a retail chain</li>
      </ul>
      
      <p>The success of these international partnerships opens new opportunities for SAIVO to establish itself as a regional technology leader. We're committed to maintaining the same high standards of quality and service that have made us successful locally.</p>
      
      <p>Looking forward, we plan to continue expanding our international presence while maintaining our strong roots in the Uzbekistan market. This balanced approach allows us to grow sustainably while serving our diverse client base effectively.</p>
    `,
    imageUrl: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80",
    category: "Company News",
    author: "Bahodir Buxorov",
    publishedAt: new Date("2025-04-28"),
    readTime: 4,
    tags: ["international", "expansion", "clients", "growth"]
  },
  {
    title: "Mobile App Development Best Practices",
    excerpt: "Essential guidelines for creating mobile applications that users love and businesses benefit from.",
    content: `
      <p>Mobile applications have become indispensable tools for businesses looking to engage with their customers effectively. At SAIVO, we've developed numerous mobile apps across various industries, and we've learned valuable lessons about what makes a mobile app successful.</p>
      
      <p>User experience is paramount in mobile app development. Users expect apps to be intuitive, fast, and reliable. We focus on creating clean, user-friendly interfaces that make complex tasks simple and enjoyable.</p>
      
      <p>Our mobile development best practices include:</p>
      <ul>
        <li>User-centered design approach</li>
        <li>Performance optimization for smooth operation</li>
        <li>Cross-platform compatibility</li>
        <li>Robust security implementation</li>
        <li>Regular testing and quality assurance</li>
        <li>Scalable backend architecture</li>
      </ul>
      
      <p>We utilize modern development frameworks and tools to ensure our apps are maintainable, scalable, and future-proof. Our team stays current with the latest mobile development trends and technologies to deliver cutting-edge solutions.</p>
      
      <p>Security is a top priority in our mobile app development process. We implement industry-standard security measures to protect user data and ensure compliance with relevant regulations.</p>
      
      <p>The mobile app market continues to grow rapidly, and businesses that invest in quality mobile solutions gain a significant competitive advantage. Our approach ensures that every app we develop not only meets current needs but also adapts to future requirements.</p>
    `,
    imageUrl: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
    category: "Development",
    author: "SAIVO Development Team",
    publishedAt: new Date("2025-04-20"),
    readTime: 5,
    tags: ["mobile development", "best practices", "user experience", "apps"]
  },
  {
    title: "Digital Transformation in Uzbekistan",
    excerpt: "How local businesses are embracing digital technologies and what it means for the future of commerce.",
    content: `
      <p>Uzbekistan is experiencing a remarkable digital transformation as businesses across various sectors embrace technology to improve their operations and customer service. This shift is creating new opportunities and reshaping the business landscape.</p>
      
      <p>We've observed significant changes in how businesses approach technology adoption. Companies that were once hesitant to invest in digital solutions are now recognizing the competitive advantages that technology can provide.</p>
      
      <p>Key trends we're seeing in the market:</p>
      <ul>
        <li>Increased adoption of cloud-based solutions</li>
        <li>Growing demand for e-commerce platforms</li>
        <li>Integration of AI and automation tools</li>
        <li>Focus on data analytics and business intelligence</li>
        <li>Mobile-first approach to customer engagement</li>
      </ul>
      
      <p>The government's support for digital initiatives has also played a crucial role in accelerating this transformation. Favorable policies and investments in digital infrastructure are creating an environment where businesses can thrive.</p>
      
      <p>At SAIVO, we're proud to be part of this transformation, helping businesses navigate their digital journey with tailored solutions that address their specific needs and challenges.</p>
      
      <p>The future looks bright for Uzbekistan's digital economy. Companies that embrace this transformation today will be well-positioned to lead tomorrow's market. We're excited to continue supporting this growth with innovative technology solutions.</p>
    `,
    imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
    category: "Industry",
    author: "SAIVO Research Team",
    publishedAt: new Date("2025-04-15"),
    readTime: 6,
    tags: ["digital transformation", "Uzbekistan", "business", "technology"]
  }
];

// Function to seed the database with initial news data
export const seedDatabase = async (): Promise<void> => {
  try {
    console.log('Starting to seed news database...');
    
    for (const article of seedNewsData) {
      const id = await addNews(article);
      console.log(`Added article: ${article.title} with ID: ${id}`);
    }
    
    console.log('Database seeding completed successfully!');
  } catch (error) {
    console.error('Error seeding database:', error);
    throw error;
  }
};

// Uncomment the line below to run the seeding (run this once)
// seedDatabase();