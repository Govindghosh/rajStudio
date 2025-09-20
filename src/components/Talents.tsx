import { 
  Guitar, 
  Mic, 
  Music, 
  PlayCircle, 
  Headphones, 
  Radio,
  Volume2,
  Disc3,
  Music2,
  Piano,
  Drum,
  Settings
} from 'lucide-react';

const Talents = () => {
  const skills = [
    {
      icon: Guitar,
      title: "Guitar Expertise",
      level: 95,
      description: "Acoustic, Electric, Classical",
      color: "from-musical-gold to-orange-400",
      specialties: ["Fingerstyle", "Rock", "Blues", "Jazz", "Classical"]
    },
    {
      icon: Mic,
      title: "Vocal Training",
      level: 92,
      description: "All genres and techniques",
      color: "from-musical-blue to-cyan-400",
      specialties: ["Pop", "Rock", "R&B", "Classical", "Folk"]
    },
    {
      icon: Music,
      title: "Music Theory",
      level: 98,
      description: "Composition and arrangement",
      color: "from-musical-purple to-pink-400",
      specialties: ["Harmony", "Composition", "Arrangement", "Analysis"]
    },
    {
      icon: PlayCircle,
      title: "Performance",
      level: 90,
      description: "Stage presence and confidence",
      color: "from-green-500 to-emerald-400",
      specialties: ["Stage Presence", "Crowd Engagement", "Solo Performance"]
    },
    {
      icon: Headphones,
      title: "Audio Production",
      level: 88,
      description: "Recording and mixing",
      color: "from-purple-500 to-indigo-400",
      specialties: ["Recording", "Mixing", "Mastering", "Sound Design"]
    },
    {
      icon: Piano,
      title: "Piano & Keys",
      level: 85,
      description: "Keyboard accompaniment",
      color: "from-rose-500 to-pink-400",
      specialties: ["Classical", "Jazz", "Pop", "Accompaniment"]
    }
  ];

  const instruments = [
    { icon: Guitar, name: "Acoustic Guitar", proficiency: "Expert" },
    { icon: Guitar, name: "Electric Guitar", proficiency: "Expert" },
    { icon: Mic, name: "Vocals", proficiency: "Expert" },
    { icon: Piano, name: "Piano/Keyboards", proficiency: "Advanced" },
    { icon: Drum, name: "Percussion", proficiency: "Intermediate" },
    { icon: Volume2, name: "Bass Guitar", proficiency: "Advanced" }
  ];

  const expertise = [
    {
      category: "Teaching Specialties",
      items: [
        "Beginner to Advanced Instruction",
        "Personalized Learning Plans",
        "Performance Preparation",
        "Music Theory Integration",
        "Technique Development",
        "Creative Expression"
      ]
    },
    {
      category: "Performance Experience",
      items: [
        "Live Concert Performances",
        "Studio Recording Sessions",
        "Open Mic Hosting",
        "Wedding & Event Entertainment",
        "Collaborative Projects",
        "Music Video Production"
      ]
    },
    {
      category: "Production Skills",
      items: [
        "Home Studio Setup",
        "Digital Audio Workstations",
        "Microphone Techniques",
        "Audio Mixing & Mastering",
        "Song Arrangement",
        "Demo Production"
      ]
    }
  ];

  return (
    <section id="talents" className="section-padding bg-background">
      <div className="container-musical">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-musical text-4xl md:text-5xl font-bold mb-4">
            Skills & <span className="text-gradient-musical">Talents</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive skill set developed through years of dedicated practice, performance, and teaching
          </p>
        </div>

        {/* Main Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skills.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <div key={index} className="card-musical p-8 group hover:scale-105 transition-all duration-300">
                {/* Skill Header */}
                <div className="text-center mb-6">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${skill.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-musical text-xl font-bold mb-2">{skill.title}</h3>
                  <p className="text-sm text-muted-foreground">{skill.description}</p>
                </div>

                {/* Skill Level */}
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">Proficiency</span>
                    <span className="text-sm font-bold text-gradient-musical">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>

                {/* Specialties */}
                <div>
                  <h4 className="font-semibold mb-3 text-sm">Specializations:</h4>
                  <div className="flex flex-wrap gap-2">
                    {skill.specialties.map((specialty, idx) => (
                      <span 
                        key={idx}
                        className="px-2 py-1 bg-muted rounded-md text-xs font-medium"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Instrument Proficiency */}
        <div className="mb-16">
          <h3 className="text-center font-musical text-3xl font-bold mb-8 text-gradient-musical">
            Instrument Proficiency
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {instruments.map((instrument, index) => {
              const IconComponent = instrument.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="card-musical p-6 mb-3 group-hover:scale-105 transition-transform duration-300">
                    <IconComponent className="h-8 w-8 mx-auto text-musical-blue group-hover:text-musical-gold transition-colors duration-300" />
                  </div>
                  <h4 className="font-semibold text-sm mb-1">{instrument.name}</h4>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    instrument.proficiency === 'Expert' ? 'bg-green-100 text-green-700' :
                    instrument.proficiency === 'Advanced' ? 'bg-blue-100 text-blue-700' :
                    'bg-yellow-100 text-yellow-700'
                  }`}>
                    {instrument.proficiency}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Expertise Categories */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {expertise.map((category, index) => (
            <div key={index} className="card-musical p-8">
              <h3 className="font-musical text-xl font-bold mb-6 text-gradient-musical">
                {category.category}
              </h3>
              <ul className="space-y-3">
                {category.items.map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-3">
                    <div className={`w-2 h-2 rounded-full mt-2 ${
                      index === 0 ? 'bg-musical-gold' :
                      index === 1 ? 'bg-musical-blue' : 'bg-musical-purple'
                    }`}></div>
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Interactive Elements */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Sound Visualizer */}
          <div className="card-musical p-8 text-center">
            <h3 className="font-musical text-xl font-bold mb-6 text-gradient-musical">
              Live Performance Skills
            </h3>
            <div className="flex justify-center items-end space-x-2 mb-6">
              {[...Array(12)].map((_, i) => (
                <div
                  key={i}
                  className="bg-gradient-to-t from-musical-gold to-musical-blue sound-wave-bar"
                  style={{
                    width: '6px',
                    height: `${Math.random() * 60 + 20}px`,
                    animationDelay: `${i * 0.1}s`
                  }}
                ></div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              Years of stage experience have honed my ability to connect with audiences and deliver memorable performances.
            </p>
          </div>

          {/* Recording Equipment */}
          <div className="card-musical p-8 text-center">
            <h3 className="font-musical text-xl font-bold mb-6 text-gradient-musical">
              Studio & Technology
            </h3>
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="group">
                <Music2 className="h-12 w-12 mx-auto mb-2 text-musical-blue group-hover:text-musical-gold transition-colors duration-300" />
                <span className="text-xs">DAW</span>
              </div>
              <div className="group">
                <Radio className="h-12 w-12 mx-auto mb-2 text-musical-blue group-hover:text-musical-gold transition-colors duration-300" />
                <span className="text-xs">Audio Interface</span>
              </div>
              <div className="group">
                <Settings className="h-12 w-12 mx-auto mb-2 text-musical-blue group-hover:text-musical-gold transition-colors duration-300" />
                <span className="text-xs">Effects</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Professional-grade equipment and software for high-quality recording and production.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Talents;