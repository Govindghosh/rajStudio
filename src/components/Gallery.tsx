import { useState } from 'react';
import { Play, ExternalLink, Calendar, MapPin, Users, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Gallery = () => {
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [activeFilter, setActiveFilter] = useState('all');

  const galleryItems = [
    {
      id: 1,
      type: 'image',
      category: 'performance',
      title: 'Live Concert Performance',
      description: 'Performing at the Annual Music Festival 2023',
      date: 'December 2023',
      location: 'City Music Hall',
      attendees: '200+',
      image: '/placeholder.svg',
      tags: ['Live Performance', 'Guitar', 'Concert']
    },
    {
      id: 2,
      type: 'video',
      category: 'lesson',
      title: 'Guitar Lesson: Fingerpicking Basics',
      description: 'Tutorial on fundamental fingerpicking techniques',
      date: 'November 2023',
      duration: '15:30',
      views: '10k+',
      videoId: 'dQw4w9WgXcQ', // YouTube video ID
      thumbnail: '/placeholder.svg',
      tags: ['Tutorial', 'Guitar', 'Fingerpicking']
    },
    {
      id: 3,
      type: 'image',
      category: 'students',
      title: 'Student Showcase Event',
      description: 'Annual student performance showcase',
      date: 'October 2023',
      location: 'Music Academy',
      attendees: '150+',
      image: '/placeholder.svg',
      tags: ['Students', 'Showcase', 'Performance']
    },
    {
      id: 4,
      type: 'video',
      category: 'performance',
      title: 'Acoustic Session - Original Composition',
      description: 'Intimate acoustic performance of original song',
      date: 'September 2023',
      duration: '8:45',
      views: '5k+',
      videoId: 'dQw4w9WgXcQ',
      thumbnail: '/placeholder.svg',
      tags: ['Acoustic', 'Original', 'Solo']
    },
    {
      id: 5,
      type: 'image',
      category: 'studio',
      title: 'Recording Studio Session',
      description: 'Professional recording session for new album',
      date: 'August 2023',
      location: 'Harmony Studios',
      image: '/placeholder.svg',
      tags: ['Studio', 'Recording', 'Production']
    },
    {
      id: 6,
      type: 'video',
      category: 'lesson',
      title: 'Vocal Warm-up Exercises',
      description: 'Essential vocal exercises for singers',
      date: 'July 2023',
      duration: '12:20',
      views: '8k+',
      videoId: 'dQw4w9WgXcQ',
      thumbnail: '/placeholder.svg',
      tags: ['Vocal', 'Warm-up', 'Tutorial']
    },
    {
      id: 7,
      type: 'image',
      category: 'performance',
      title: 'Wedding Performance',
      description: 'Live performance at outdoor wedding ceremony',
      date: 'June 2023',
      location: 'Garden Venue',
      attendees: '100+',
      image: '/placeholder.svg',
      tags: ['Wedding', 'Acoustic', 'Live']
    },
    {
      id: 8,
      type: 'video',
      category: 'performance',
      title: 'Band Collaboration - Rock Cover',
      description: 'Collaborative performance with local band',
      date: 'May 2023',
      duration: '6:15',
      views: '15k+',
      videoId: 'dQw4w9WgXcQ',
      thumbnail: '/placeholder.svg',
      tags: ['Band', 'Rock', 'Collaboration']
    }
  ];

  const filters = [
    { id: 'all', label: 'All', count: galleryItems.length },
    { id: 'performance', label: 'Performances', count: galleryItems.filter(item => item.category === 'performance').length },
    { id: 'lesson', label: 'Lessons', count: galleryItems.filter(item => item.category === 'lesson').length },
    { id: 'students', label: 'Students', count: galleryItems.filter(item => item.category === 'students').length },
    { id: 'studio', label: 'Studio', count: galleryItems.filter(item => item.category === 'studio').length }
  ];

  const filteredItems = activeFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  const Modal = ({ item, onClose }: { item: any, onClose: () => void }) => (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-background rounded-xl max-w-4xl w-full max-h-[90vh] overflow-auto">
        <div className="sticky top-0 bg-background border-b border-border p-4 flex justify-between items-center">
          <h3 className="font-musical text-xl font-bold">{item.title}</h3>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-5 w-5" />
          </Button>
        </div>
        
        <div className="p-6">
          {item.type === 'video' ? (
            <div className="aspect-video mb-6">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${item.videoId}`}
                title={item.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg"
              ></iframe>
            </div>
          ) : (
            <div className="aspect-video mb-6 bg-muted rounded-lg flex items-center justify-center">
              <span className="text-muted-foreground">Image Preview</span>
            </div>
          )}
          
          <div className="space-y-4">
            <p className="text-muted-foreground">{item.description}</p>
            
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center space-x-1">
                <Calendar className="h-4 w-4 text-musical-blue" />
                <span>{item.date}</span>
              </div>
              
              {item.location && (
                <div className="flex items-center space-x-1">
                  <MapPin className="h-4 w-4 text-musical-purple" />
                  <span>{item.location}</span>
                </div>
              )}
              
              {item.attendees && (
                <div className="flex items-center space-x-1">
                  <Users className="h-4 w-4 text-musical-gold" />
                  <span>{item.attendees}</span>
                </div>
              )}
              
              {item.views && (
                <div className="flex items-center space-x-1">
                  <Play className="h-4 w-4 text-green-500" />
                  <span>{item.views} views</span>
                </div>
              )}
            </div>
            
            <div className="flex flex-wrap gap-2">
              {item.tags.map((tag: string, index: number) => (
                <Badge key={index} variant="secondary">{tag}</Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section id="gallery" className="section-padding bg-muted/30">
      <div className="container-musical">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-musical text-4xl md:text-5xl font-bold mb-4">
            Performance <span className="text-gradient-musical">Gallery</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore my musical journey through performances, lessons, and collaborative projects
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filters.map((filter) => (
            <Button
              key={filter.id}
              variant={activeFilter === filter.id ? "default" : "outline"}
              onClick={() => setActiveFilter(filter.id)}
              className={`${activeFilter === filter.id ? 'btn-hero' : 'btn-secondary-musical'}`}
            >
              {filter.label}
              <Badge variant="secondary" className="ml-2 bg-white/20 text-current">
                {filter.count}
              </Badge>
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="card-musical p-0 overflow-hidden cursor-pointer group"
              onClick={() => setSelectedItem(item)}
            >
              {/* Thumbnail */}
              <div className="aspect-video relative overflow-hidden">
                {item.type === 'video' ? (
                  <div className="w-full h-full bg-gradient-to-br from-musical-blue to-musical-purple flex items-center justify-center relative">
                    <Play className="h-12 w-12 text-white group-hover:scale-110 transition-transform duration-300" />
                    <div className="absolute top-2 right-2">
                      <Badge className="bg-red-500 text-white">
                        {item.duration}
                      </Badge>
                    </div>
                  </div>
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-musical-gold to-musical-purple flex items-center justify-center">
                    <ExternalLink className="h-12 w-12 text-white group-hover:scale-110 transition-transform duration-300" />
                  </div>
                )}
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-medium">View {item.type === 'video' ? 'Video' : 'Image'}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  {item.title}
                </h3>
                
                <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                  {item.description}
                </p>
                
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>{item.date}</span>
                  {item.views && (
                    <div className="flex items-center space-x-1">
                      <Play className="h-3 w-3" />
                      <span>{item.views}</span>
                    </div>
                  )}
                </div>
                
                <div className="flex flex-wrap gap-1 mt-2">
                  {item.tags.slice(0, 2).map((tag: string, index: number) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                  {item.tags.length > 2 && (
                    <Badge variant="outline" className="text-xs">
                      +{item.tags.length - 2}
                    </Badge>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* YouTube Channel CTA */}
        <div className="text-center">
          <div className="card-musical p-8 max-w-2xl mx-auto">
            <h3 className="font-musical text-2xl font-bold mb-4 text-gradient-musical">
              More Content on YouTube
            </h3>
            <p className="text-muted-foreground mb-6">
              Subscribe to my YouTube channel for regular tutorials, performances, and music tips
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-hero">
                <Play className="mr-2 h-4 w-4" />
                Subscribe to Channel
              </Button>
              <Button variant="outline">
                <ExternalLink className="mr-2 h-4 w-4" />
                View All Videos
              </Button>
            </div>
          </div>
        </div>

        {/* Modal */}
        {selectedItem && (
          <Modal item={selectedItem} onClose={() => setSelectedItem(null)} />
        )}
      </div>
    </section>
  );
};

export default Gallery;