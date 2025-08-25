export interface NewsArticle {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  publishedAt: string;
  readTime: string;
  image: string;
  tags: string[];
  featured: boolean;
}

export const newsData: NewsArticle[] = [
  {
    id: '1',
    title: 'SAIVO Reaches 70 Million Som Revenue Milestone in Record Time',
    excerpt: 'From our first breakthrough project to becoming a leading tech company in Uzbekistan, discover how SAIVO achieved exponential growth in just 6 months.',
    content: `
      <p>It's been an incredible journey since SAIVO was founded in November 2024. What started as an ambitious vision to transform businesses through technology has rapidly evolved into one of Uzbekistan's most promising tech companies.</p>
      
      <h3>The Breakthrough Moment</h3>
      <p>Our journey began with a single project worth 35 million som that proved our capabilities and set the foundation for everything that followed. This initial success wasn't just about the revenue – it was validation that our approach to custom software development, AI-powered solutions, and comprehensive digital transformation could deliver real results for businesses.</p>
      
      <h3>Exponential Growth</h3>
      <p>By May 2025, just six months after our founding, SAIVO had reached over 70 million som in total revenue. This growth trajectory reflects not just financial success, but the trust our clients place in our ability to solve complex business challenges through innovative technology solutions.</p>
      
      <h3>What Sets Us Apart</h3>
      <p>Our success stems from three core principles: deep technical expertise, client-centric approach, and relentless focus on delivering measurable business outcomes. Whether we're building custom CRM platforms, developing AI-powered automation bots, or creating e-commerce solutions, every project is approached with the same level of dedication and innovation.</p>
      
      <h3>Looking Forward</h3>
      <p>As we continue to grow, our mission remains unchanged: to help businesses across Uzbekistan and beyond harness the power of technology to achieve their goals. With 10+ successful projects completed and 2 international clients already in our portfolio, we're just getting started.</p>
    `,
    category: 'Company News',
    author: {
      name: 'Bahodir Buxorov',
      role: 'CEO & Founder',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face'
    },
    publishedAt: '2025-01-15',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1705234384679-119488a72a2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwY29tcGFueSUyMGdyb3d0aCUyMG1pbGVzdG9uZXxlbnwxfHx8fDE3NTYwNTA1NjN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['Milestone', 'Growth', 'Company News'],
    featured: true
  },
  {
    id: '2',
    title: 'The Future of AI in Business Automation: Insights from SAIVO\'s Latest Projects',
    excerpt: 'Exploring how artificial intelligence is revolutionizing business processes and what it means for companies in Uzbekistan and Central Asia.',
    content: `
      <p>Artificial Intelligence is no longer a futuristic concept – it's a present reality that's transforming how businesses operate across every industry. At SAIVO, we've been at the forefront of implementing AI solutions that deliver tangible results for our clients.</p>
      
      <h3>Real-World AI Applications</h3>
      <p>Our recent projects have demonstrated the practical applications of AI in various business contexts. From intelligent chatbots that handle customer inquiries 24/7 to automated data analysis systems that provide actionable insights, AI is proving to be a game-changer for operational efficiency.</p>
      
      <h3>The Uzbekistan Advantage</h3>
      <p>Central Asia, and particularly Uzbekistan, presents unique opportunities for AI adoption. With a growing digital economy and government support for technological innovation, businesses here can leapfrog traditional automation stages and implement cutting-edge AI solutions from the ground up.</p>
      
      <h3>Key Benefits We've Observed</h3>
      <ul>
        <li><strong>Cost Reduction:</strong> AI automation can reduce operational costs by 30-50% in many business processes</li>
        <li><strong>24/7 Availability:</strong> AI-powered systems work around the clock without breaks</li>
        <li><strong>Scalability:</strong> AI solutions can handle increased workload without proportional cost increases</li>
        <li><strong>Data-Driven Insights:</strong> AI can analyze vast amounts of data to reveal patterns humans might miss</li>
      </ul>
      
      <h3>What's Next?</h3>
      <p>As we continue to develop AI solutions for our clients, we're excited about emerging technologies like GPT-4 integration, computer vision applications, and predictive analytics. The future is bright for businesses ready to embrace AI-driven transformation.</p>
    `,
    category: 'Technology',
    author: {
      name: 'Salimbay Elimuratov',
      role: 'CTO',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
    },
    publishedAt: '2025-01-10',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1694903110330-cc64b7e1d21d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwYnVzaW5lc3MlMjBhdXRvbWF0aW9ufGVufDF8fHx8MTc1NjAyMzQ2MHww&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['AI', 'Automation', 'Technology', 'Innovation'],
    featured: true
  },
  {
    id: '3',
    title: 'Building Scalable E-Commerce Solutions: Lessons from the Field',
    excerpt: 'Our comprehensive guide to creating e-commerce platforms that grow with your business, based on real project experiences.',
    content: `
      <p>E-commerce has become essential for businesses of all sizes, especially in the post-pandemic world. At SAIVO, we've helped numerous clients build robust, scalable e-commerce solutions that not only meet current needs but also adapt to future growth.</p>
      
      <h3>The Foundation: Architecture Matters</h3>
      <p>A well-architected e-commerce platform is like a strong building foundation – it supports everything else. We always start with a modular architecture that allows for easy updates, integrations, and scaling as the business grows.</p>
      
      <h3>Key Components of Modern E-Commerce</h3>
      <p>Today's e-commerce solutions require more than just a shopping cart. Our clients benefit from integrated solutions that include:</p>
      <ul>
        <li>Advanced inventory management systems</li>
        <li>Multi-channel selling capabilities</li>
        <li>Integrated payment gateways</li>
        <li>Customer relationship management</li>
        <li>Analytics and reporting dashboards</li>
        <li>Mobile-responsive design</li>
      </ul>
      
      <h3>The Uzbekistan E-Commerce Landscape</h3>
      <p>The e-commerce market in Uzbekistan is rapidly evolving, with increasing internet penetration and changing consumer behaviors. Businesses that invest in professional e-commerce solutions now are positioning themselves for significant growth in the coming years.</p>
      
      <h3>Performance Optimization</h3>
      <p>Speed and reliability are crucial for e-commerce success. A one-second delay in page load time can result in a 7% reduction in conversions. Our optimization strategies ensure that client platforms deliver exceptional user experiences across all devices.</p>
    `,
    category: 'Development',
    author: {
      name: 'Shohruh Botirov',
      role: 'Head of Product',
      avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face'
    },
    publishedAt: '2025-01-05',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1612831661941-254341b885e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlLWNvbW1lcmNlJTIwZGV2ZWxvcG1lbnQlMjBsYXB0b3B8ZW58MXx8fHwxNzU2MDUwNTcwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['E-Commerce', 'Development', 'Scaling', 'Performance'],
    featured: false
  },
  {
    id: '4',
    title: 'Why Custom CRM Solutions Outperform Off-the-Shelf Alternatives',
    excerpt: 'Discover why businesses are choosing custom CRM development over generic solutions and how it impacts their bottom line.',
    content: `
      <p>In today's competitive business environment, customer relationship management is more critical than ever. While off-the-shelf CRM solutions might seem like the obvious choice, our experience at SAIVO has shown that custom CRM solutions often provide superior ROI and business outcomes.</p>
      
      <h3>The Limitation of Generic Solutions</h3>
      <p>Generic CRM platforms are designed to serve the broadest possible market, which means they often include features you don't need while lacking the specific functionality your business requires. This one-size-fits-all approach can lead to inefficiencies and workarounds that ultimately cost more than a custom solution.</p>
      
      <h3>Tailored to Your Business Processes</h3>
      <p>Custom CRM solutions are built around your existing business processes rather than forcing you to adapt to predefined workflows. This alignment results in higher user adoption rates, improved productivity, and better data quality.</p>
      
      <h3>Integration Capabilities</h3>
      <p>One of the biggest advantages of custom CRM development is seamless integration with your existing systems. Whether it's accounting software, inventory management, or specialized industry tools, custom solutions can integrate with any system your business relies on.</p>
      
      <h3>Long-term Cost Benefits</h3>
      <p>While the initial investment in custom CRM development might be higher, the long-term benefits often outweigh the costs:</p>
      <ul>
        <li>No recurring licensing fees</li>
        <li>No per-user charges as you scale</li>
        <li>Complete control over features and updates</li>
        <li>Better security and data ownership</li>
      </ul>
      
      <h3>Success Stories</h3>
      <p>Our CRM projects have consistently delivered measurable results for clients, including 40% improvements in sales process efficiency and 60% reduction in data entry time. These outcomes demonstrate the tangible value of investing in custom solutions.</p>
    `,
    category: 'Development',
    author: {
      name: 'Bahodir Buxorov',
      role: 'CEO & Founder',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face'
    },
    publishedAt: '2024-12-28',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1669023414162-5bb06bbff0ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDUk0lMjBzb2Z0d2FyZSUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NTYwNTA1NzR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['CRM', 'Custom Development', 'Business Process', 'ROI'],
    featured: false
  },
  {
    id: '5',
    title: 'Digital Transformation in Central Asia: Opportunities and Challenges',
    excerpt: 'An analysis of the digital transformation landscape in Central Asia and how businesses can navigate the opportunities ahead.',
    content: `
      <p>Central Asia is experiencing a digital revolution, with countries like Uzbekistan leading the charge in adopting new technologies and digitizing traditional business processes. This transformation presents both significant opportunities and unique challenges for businesses in the region.</p>
      
      <h3>The Regional Context</h3>
      <p>Central Asia's digital transformation is driven by several factors: government initiatives promoting digitalization, a young, tech-savvy population, and increasing internet penetration. These factors create a perfect storm for rapid technological adoption.</p>
      
      <h3>Key Opportunities</h3>
      <p>Businesses in Central Asia have several advantages when it comes to digital transformation:</p>
      <ul>
        <li><strong>Leapfrogging:</strong> The ability to skip outdated technologies and implement modern solutions</li>
        <li><strong>Government Support:</strong> Active government programs supporting digital initiatives</li>
        <li><strong>Growing Market:</strong> Expanding middle class with increasing digital literacy</li>
        <li><strong>Regional Hub Potential:</strong> Opportunity to serve broader Central Asian markets</li>
      </ul>
      
      <h3>Common Challenges</h3>
      <p>Despite the opportunities, businesses face several challenges in their digital transformation journey:</p>
      <ul>
        <li>Skill gaps in technology implementation</li>
        <li>Resistance to change from traditional business practices</li>
        <li>Infrastructure limitations in some areas</li>
        <li>Cybersecurity concerns</li>
      </ul>
      
      <h3>SAIVO's Role in Regional Development</h3>
      <p>As a Uzbekistan-based technology company, SAIVO is uniquely positioned to help businesses navigate digital transformation. Our understanding of local business culture, combined with international technology standards, allows us to bridge the gap between traditional practices and modern solutions.</p>
      
      <h3>The Path Forward</h3>
      <p>Successful digital transformation in Central Asia requires a thoughtful approach that respects local business cultures while embracing global technology trends. Companies that invest in digital capabilities now will be well-positioned to capitalize on the region's continued growth.</p>
    `,
    category: 'Industry Insights',
    author: {
      name: 'Salimbay Elimuratov',
      role: 'CTO',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
    },
    publishedAt: '2024-12-20',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1558383817-fc59379e2846?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwdHJhbnNmb3JtYXRpb24lMjBjZW50cmFsJTIwYXNpYXxlbnwxfHx8fDE3NTYwNTA1Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['Digital Transformation', 'Central Asia', 'Business Strategy', 'Regional Growth'],
    featured: false
  },
  {
    id: '6',
    title: 'Mobile-First Development: Why It Matters for Uzbekistan Businesses',
    excerpt: 'With mobile internet usage surpassing desktop in Uzbekistan, learn why mobile-first development is crucial for business success.',
    content: `
      <p>Mobile internet usage in Uzbekistan has reached a tipping point, with more users accessing the web through mobile devices than desktop computers. This shift fundamentally changes how businesses should approach their digital presence and development strategies.</p>
      
      <h3>The Mobile-First Imperative</h3>
      <p>Mobile-first development isn't just about responsive design – it's about reimagining the entire user experience from the ground up for mobile devices. This approach ensures optimal performance, usability, and engagement across all devices.</p>
      
      <h3>Local Market Insights</h3>
      <p>Our research shows that Uzbekistan users expect fast, intuitive mobile experiences. Apps and websites that don't perform well on mobile devices see significantly higher bounce rates and lower conversion rates.</p>
      
      <h3>Technical Considerations</h3>
      <p>Mobile-first development requires careful consideration of several factors:</p>
      <ul>
        <li>Touch-friendly interface design</li>
        <li>Optimized loading speeds for varying network conditions</li>
        <li>Simplified navigation structures</li>
        <li>Progressive web app capabilities</li>
        <li>Offline functionality where appropriate</li>
      </ul>
      
      <h3>Business Impact</h3>
      <p>Companies that have invested in mobile-first development see measurable improvements in key metrics:</p>
      <ul>
        <li>25% increase in user engagement</li>
        <li>30% improvement in conversion rates</li>
        <li>20% reduction in bounce rates</li>
        <li>Improved search engine rankings</li>
      </ul>
      
      <h3>Future-Proofing Your Business</h3>
      <p>As 5G networks expand across Uzbekistan and mobile devices become even more capable, businesses with mobile-first strategies will be best positioned to take advantage of new opportunities in mobile commerce, augmented reality, and IoT integration.</p>
    `,
    category: 'Technology',
    author: {
      name: 'Shohruh Botirov',
      role: 'Head of Product',
      avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face'
    },
    publishedAt: '2024-12-15',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1726935068680-73cef7e8412b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBkZXZlbG9wbWVudCUyMHNtYXJ0cGhvbmV8ZW58MXx8fHwxNzU2MDUwNTgxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['Mobile Development', 'User Experience', 'Market Trends', 'Performance'],
    featured: false
  }
];

export const categories = [
  'All',
  'Company News',
  'Technology',
  'Development',
  'Industry Insights'
];

export const getArticleById = (id: string): NewsArticle | undefined => {
  return newsData.find(article => article.id === id);
};

export const getRelatedArticles = (currentId: string, category: string, limit: number = 3): NewsArticle[] => {
  return newsData
    .filter(article => article.id !== currentId && article.category === category)
    .slice(0, limit);
};

export const getFeaturedArticles = (): NewsArticle[] => {
  return newsData.filter(article => article.featured);
};