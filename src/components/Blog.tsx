import { Calendar, Clock, User, ArrowRight, Music, Guitar, Mic, BookOpen, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "5 Essential Guitar Techniques Every Beginner Should Master",
      excerpt: "Discover the fundamental guitar techniques that form the foundation of your playing style and accelerate your learning journey.",
      content: "Learning guitar can be overwhelming. This guide explores the five crucial techniques every beginner should focus on first...",
      author: "Melody Workshop Team",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "Guitar",
      tags: ["Beginner", "Techniques", "Guitar", "Practice"],
      image: "/placeholder.svg",
      featured: true
    },
    {
      id: 2,
      title: "How to Improve Your Vocal Range: Step-by-Step Guide",
      excerpt: "Learn proven exercises and techniques to expand your vocal range safely and effectively.",
      content: "With consistent practice and proper technique, your vocal range can grow significantly. Here's a practical guide...",
      author: "Melody Workshop Team",
      date: "2024-01-10",
      readTime: "12 min read",
      category: "Vocals",
      tags: ["Vocals", "Range", "Exercises", "Technique"],
      image: "/placeholder.svg",
      featured: false
    },
    {
      id: 3,
      title: "The Psychology of Stage Performance: Overcoming Nerves",
      excerpt: "Professional tips to manage performance anxiety and build confidence on stage.",
      content: "Stage fright is common. Understanding the psychology behind it helps you perform confidently and effectively...",
      author: "Melody Workshop Team",
      date: "2024-01-05",
      readTime: "6 min read",
      category: "Performance",
      tags: ["Performance", "Psychology", "Confidence", "Tips"],
      image: "/placeholder.svg",
      featured: false
    },
    {
      id: 4,
      title: "Creating Your First Home Recording Setup on a Budget",
      excerpt: "Set up a professional-quality home studio without breaking the bank.",
      content: "Modern technology makes home recording easier than ever. Here's how to start with minimal investment...",
      author: "Melody Workshop Team",
      date: "2023-12-28",
      readTime: "10 min read",
      category: "Recording",
      tags: ["Recording", "Home Studio", "Budget", "Equipment"],
      image: "/placeholder.svg",
      featured: false
    },
    {
      id: 5,
      title: "Music Theory Basics: Understanding Chord Progressions",
      excerpt: "A beginner-friendly guide to chord progressions and how they create emotion in music.",
      content: "Chord progressions are the backbone of songs. Understanding them improves your playing and songwriting...",
      author: "Melody Workshop Team",
      date: "2023-12-20",
      readTime: "15 min read",
      category: "Theory",
      tags: ["Theory", "Chords", "Songwriting", "Beginner"],
      image: "/placeholder.svg",
      featured: true
    },
    {
      id: 6,
      title: "10 Songs Every Guitarist Should Know How to Play",
      excerpt: "A curated list of essential songs to improve your guitar skills and impress your audience.",
      content: "These classic songs cover various techniques and styles, perfect for building a versatile repertoire...",
      author: "Melody Workshop Team",
      date: "2023-12-15",
      readTime: "7 min read",
      category: "Guitar",
      tags: ["Guitar", "Songs", "Repertoire", "Practice"],
      image: "/placeholder.svg",
      featured: false
    }
  ];

  const categories = [
    { name: "All", count: blogPosts.length, icon: BookOpen },
    { name: "Guitar", count: blogPosts.filter(p => p.category === "Guitar").length, icon: Guitar },
    { name: "Vocals", count: blogPosts.filter(p => p.category === "Vocals").length, icon: Mic },
    { name: "Performance", count: blogPosts.filter(p => p.category === "Performance").length, icon: Music },
    { name: "Theory", count: blogPosts.filter(p => p.category === "Theory").length, icon: BookOpen },
    { name: "Recording", count: blogPosts.filter(p => p.category === "Recording").length, icon: Music }
  ];

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Guitar': return 'bg-musical-gold dark:bg-musical-gold/90';
      case 'Vocals': return 'bg-musical-blue dark:bg-musical-blue/90';
      case 'Performance': return 'bg-musical-purple dark:bg-musical-purple/90';
      case 'Theory': return 'bg-green-500 dark:bg-green-600';
      case 'Recording': return 'bg-purple-500 dark:bg-purple-600';
      default: return 'bg-gray-500 dark:bg-gray-600';
    }
  };

  return (
    <section id="blog" className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="container-musical">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-1.5 text-musical-gold border-musical-gold/50 dark:border-musical-gold/30">
            Educational Content
          </Badge>
          <h2 className="font-musical text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Music Blog & Resources
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
            Expert tips, techniques, and insights from the Melody Workshop team to enhance your musical journey
          </p>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map(category => {
              const Icon = category.icon;
              return (
                <Button 
                  key={category.name} 
                  variant="outline" 
                  className="rounded-full px-4 py-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-musical-gold dark:hover:border-musical-gold hover:text-musical-gold dark:hover:text-musical-gold transition-colors"
                >
                  <Icon className="mr-2 h-4 w-4" />
                  {category.name} 
                  <Badge variant="secondary" className="ml-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                    {category.count}
                  </Badge>
                </Button>
              );
            })}
          </div>
        </div>

        {/* Featured Post */}
        {featuredPost && (
          <div className="mb-16 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden border border-gray-200 dark:border-gray-700">
            <div className="lg:grid lg:grid-cols-2">
              <div className="aspect-video lg:aspect-auto bg-gradient-to-br from-musical-gold to-orange-500 dark:from-musical-gold/80 dark:to-orange-600 flex items-center justify-center relative p-8">
                <div className="absolute top-4 left-4">
                  <Badge className="bg-white dark:bg-gray-900 text-musical-gold dark:text-musical-gold font-medium">
                    Featured Article
                  </Badge>
                </div>
                <div className="text-center text-white">
                  <BookOpen className="h-16 w-16 mx-auto mb-4 opacity-90" />
                  <p className="text-sm opacity-90">In-depth guide</p>
                </div>
              </div>
              
              <div className="p-8 lg:p-10">
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date(featuredPost.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{featuredPost.readTime}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <User className="h-4 w-4" />
                    <span>{featuredPost.author}</span>
                  </div>
                </div>
                
                <h3 className="font-musical text-2xl lg:text-3xl font-bold mb-4 text-gray-900 dark:text-white leading-tight">
                  {featuredPost.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge className={getCategoryColor(featuredPost.category)}>
                    {featuredPost.category}
                  </Badge>
                  {featuredPost.tags.slice(0, 3).map((tag, i) => (
                    <Badge key={i} variant="outline" className="border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <Button className="bg-gradient-to-r from-musical-gold to-orange-500 hover:from-musical-gold/90 hover:to-orange-500/90 text-white font-medium group">
                  Read Full Article 
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {regularPosts.map(post => (
            <article 
              key={post.id} 
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-700 group hover:translate-y-[-4px]"
            >
              <div className="aspect-video bg-gradient-to-br from-musical-blue to-cyan-500 dark:from-musical-blue/80 dark:to-cyan-600 flex items-center justify-center relative overflow-hidden">
                <BookOpen className="h-12 w-12 text-white/90 group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute top-3 left-3">
                  <Badge className={`${getCategoryColor(post.category)} text-white font-medium`}>
                    {post.category}
                  </Badge>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center space-x-3 text-xs text-gray-500 dark:text-gray-400 mb-3">
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-3 w-3" />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-3 w-3" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                
                <h3 className="font-semibold text-lg mb-3 text-gray-900 dark:text-white group-hover:text-musical-gold dark:group-hover:text-musical-gold transition-colors line-clamp-2 leading-tight">
                  {post.title}
                </h3>
                
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {post.tags.slice(0, 2).map((tag, i) => (
                    <Badge key={i} variant="outline" className="text-xs border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-400">
                      {tag}
                    </Badge>
                  ))}
                  {post.tags.length > 2 && (
                    <Badge variant="outline" className="text-xs border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-400">
                      +{post.tags.length - 2}
                    </Badge>
                  )}
                </div>
                
                <Button variant="ghost" className="p-0 h-auto text-sm font-medium text-musical-gold hover:text-musical-gold/80 dark:text-musical-gold dark:hover:text-musical-gold/80 group-hover:underline">
                  Read More 
                  <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter */}
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 md:p-12 text-center max-w-4xl mx-auto border border-gray-200 dark:border-gray-600">
          <Mail className="h-12 w-12 text-musical-gold mx-auto mb-4" />
          <h3 className="font-musical text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-white">
            Stay Updated with New Articles
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg max-w-2xl mx-auto">
            Get the latest music tips, tutorials, and insights delivered directly to your inbox
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-musical-gold focus:border-transparent"
            />
            <Button className="bg-gradient-to-r from-musical-gold to-orange-500 hover:from-musical-gold/90 hover:to-orange-500/90 text-white font-medium py-3 px-6">
              Subscribe
            </Button>
          </div>
          
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-4">
            No spam, unsubscribe anytime. We respect your privacy.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Blog;