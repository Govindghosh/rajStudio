import { Calendar, Clock, User, ArrowRight, Music, Guitar, Mic, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "5 Essential Guitar Techniques Every Beginner Should Master",
      excerpt: "Discover the fundamental guitar techniques that form the foundation of your playing style.",
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
      title: "How to Improve Your Vocal Range: Step-by-Step",
      excerpt: "Learn exercises and techniques to expand your vocal range safely and effectively.",
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
      excerpt: "Tips to manage performance anxiety and build confidence on stage.",
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

  return (
    <section id="blog" className="section-padding bg-background">
      <div className="container-musical text-center">
        <h2 className="font-musical text-4xl md:text-5xl font-bold mb-4">
          Music <span className="text-gradient-musical">Blog</span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
          Tips, techniques, and insights from the Melody Workshop team
        </p>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(c => {
            const Icon = c.icon;
            return (
              <Button key={c.name} variant="outline" className="btn-secondary-musical group">
                <Icon className="mr-2 h-4 w-4 group-hover:text-musical-gold transition-colors"/>
                {c.name} <Badge variant="secondary" className="ml-2">{c.count}</Badge>
              </Button>
            );
          })}
        </div>

        {/* Featured Post */}
        {featuredPost && (
          <div className="mb-16 card-musical lg:grid lg:grid-cols-2 overflow-hidden">
            <div className="aspect-video lg:aspect-auto bg-gradient-to-br from-musical-gold to-musical-blue flex items-center justify-center relative">
              <div className="absolute top-4 left-4">
                <Badge className="bg-musical-gold text-white">Featured</Badge>
              </div>
              <BookOpen className="h-24 w-24 text-white/80" />
            </div>
            <div className="p-8 lg:p-12 text-left">
              <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
                <div className="flex items-center space-x-1"><Calendar className="h-4 w-4"/> <span>{new Date(featuredPost.date).toLocaleDateString()}</span></div>
                <div className="flex items-center space-x-1"><Clock className="h-4 w-4"/> <span>{featuredPost.readTime}</span></div>
                <div className="flex items-center space-x-1"><User className="h-4 w-4"/> <span>{featuredPost.author}</span></div>
              </div>
              <h3 className="font-musical text-2xl lg:text-3xl font-bold mb-4 text-gradient-musical">{featuredPost.title}</h3>
              <p className="text-muted-foreground mb-6">{featuredPost.excerpt}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {featuredPost.tags.map((tag,i)=><Badge key={i} variant="outline">{tag}</Badge>)}
              </div>
              <Button className="btn-hero group">
                Read Full Article <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform"/>
              </Button>
            </div>
          </div>
        )}

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {regularPosts.map(post => (
            <article key={post.id} className="card-musical p-0 overflow-hidden group text-left">
              <div className="aspect-video bg-gradient-to-br from-musical-blue to-musical-purple flex items-center justify-center relative overflow-hidden">
                <BookOpen className="h-12 w-12 text-white/80 group-hover:scale-110 transition-transform"/>
                <div className="absolute top-3 left-3">
                  <Badge className={`${
                    post.category==='Guitar'?'bg-musical-gold':
                    post.category==='Vocals'?'bg-musical-blue':
                    post.category==='Performance'?'bg-musical-purple':
                    post.category==='Theory'?'bg-green-500':'bg-purple-500'
                  } text-white`}>{post.category}</Badge>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-4 text-xs text-muted-foreground mb-3">
                  <div className="flex items-center space-x-1"><Calendar className="h-3 w-3"/> {new Date(post.date).toLocaleDateString()}</div>
                  <div className="flex items-center space-x-1"><Clock className="h-3 w-3"/> {post.readTime}</div>
                </div>
                <h3 className="font-semibold text-lg mb-3 group-hover:text-primary transition-colors line-clamp-2">{post.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>
                <div className="flex flex-wrap gap-1 mb-4">{post.tags.slice(0,3).map((tag,i)=><Badge key={i} variant="secondary" className="text-xs">{tag}</Badge>)}</div>
                <Button variant="ghost" className="p-0 h-auto text-sm font-medium group-hover:text-primary">
                  Read More <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform"/>
                </Button>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter */}
        <div className="card-musical p-8 text-center max-w-2xl mx-auto">
          <h3 className="font-musical text-2xl font-bold mb-4 text-gradient-musical">Stay Updated with New Articles</h3>
          <p className="text-muted-foreground mb-6">Get the latest music tips, tutorials, and insights delivered to your inbox</p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input type="email" placeholder="Enter your email" className="flex-1 px-4 py-2 rounded-lg border border-border bg-background"/>
            <Button className="btn-hero">Subscribe</Button>
          </div>
          <p className="text-xs text-muted-foreground mt-3">No spam, unsubscribe anytime</p>
        </div>
      </div>
    </section>
  );
};

export default Blog;
