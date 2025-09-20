import { Music, Award, Users, Clock, Guitar, Mic } from "lucide-react";

const About = () => {
  const achievements = [
    {
      icon: Users,
      number: "500+",
      label: "Students Taught",
      description:
        "Our instructors have successfully guided over 500 students in their musical journey",
    },
    {
      icon: Clock,
      number: "10+",
      label: "Years Collective Experience",
      description:
        "A decade of combined professional music instruction and performance",
    },
    {
      icon: Award,
      number: "50+",
      label: "Certifications",
      description:
        "Our team holds multiple certifications in music education and performance techniques",
    },
    {
      icon: Music,
      number: "1000+",
      label: "Lessons Completed",
      description:
        "Thousands of successful lessons across guitar, vocals, and more",
    },
  ];

  const qualifications = [
    "Bachelor's & Master's Degrees in Music Performance",
    "Certified Guitar Instructors (RGT & International Boards)",
    "Vocal Performance Certifications",
    "Music Theory & Composition Expertise",
    "Stage & Live Performance Training",
    "Audio Production & Recording Specialists",
  ];

  return (
    <section id="about" className="section-padding bg-background">
      <div className="container-musical">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-musical text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-gradient-musical">Melody Workshop</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A passionate team of music educators dedicated to nurturing talent,
            inspiring creativity, and building confident performers.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Team Visual & Qualifications */}
          <div className="space-y-8">
            {/* Team Image/Logo Container */}
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-musical-blue to-musical-purple p-1">
                <div className="w-full h-full bg-background rounded-xl flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-r from-musical-gold to-musical-blue rounded-full flex items-center justify-center">
                      <Users className="h-16 w-16 text-white" />
                    </div>
                    <h3 className="font-musical text-2xl font-bold mb-2">
                      Our Team
                    </h3>
                    <p className="text-muted-foreground">
                      Guitar & Vocal Instructors
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Musical Elements */}
              <div className="absolute -top-4 -right-4 music-note-float">
                <div className="bg-musical-gold rounded-full p-3">
                  <Guitar className="h-6 w-6 text-white" />
                </div>
              </div>
              <div
                className="absolute -bottom-4 -left-4 music-note-float"
                style={{ animationDelay: "1s" }}
              >
                <div className="bg-musical-blue rounded-full p-3">
                  <Mic className="h-6 w-6 text-white" />
                </div>
              </div>
            </div>

            {/* Qualifications */}
            <div className="card-musical p-6">
              <h3 className="font-musical text-2xl font-bold mb-4 text-gradient-musical">
                Team Qualifications & Certifications
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {qualifications.map((qualification, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-musical-gold rounded-full"></div>
                    <span className="text-sm font-medium">{qualification}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Story & Values */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="font-musical text-3xl font-bold text-gradient-musical">
                Our Musical Journey
              </h3>

              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  At Melody Workshop, music has been the heartbeat of our team
                  for over a decade. From guitarists to vocalists, we discovered
                  the transformative power of music and its ability to connect
                  souls, express emotions, and create lasting memories.
                </p>

                <p>
                  Our passion for teaching comes from witnessing the joy and
                  confidence that music brings to students' lives. Every student
                  is unique, and we believe in crafting personalized learning
                  experiences that honor their individual goals and learning
                  styles.
                </p>

                <p>
                  Whether you're picking up a guitar for the first time,
                  improving your vocal technique, or preparing for professional
                  performances, our team is here to guide you every step of the
                  way.
                </p>
              </div>
            </div>

            {/* Teaching Philosophy */}
            <div className="card-musical p-6">
              <h3 className="font-musical text-2xl font-bold mb-4 text-gradient-musical">
                Our Teaching Philosophy
              </h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-musical-gold rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Personalized Learning</h4>
                    <p className="text-sm text-muted-foreground">
                      Every student learns differently, so our instructors adapt
                      their teaching methods to fit each unique style.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-musical-blue rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Progressive Development</h4>
                    <p className="text-sm text-muted-foreground">
                      We build skills step-by-step to ensure a solid foundation
                      and sustainable growth.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-musical-purple rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Practical Application</h4>
                    <p className="text-sm text-muted-foreground">
                      We teach through real songs, live performances, and
                      recording opportunities to make music engaging and
                      relevant.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Achievements Grid */}
        <div className="mt-20">
          <h3 className="text-center font-musical text-3xl font-bold mb-12 text-gradient-musical">
            Achievements & Impact
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <div key={index} className="card-musical p-6 text-center group">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-musical-gold to-musical-blue rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gradient-musical mb-2">
                    {achievement.number}
                  </div>
                  <h4 className="font-semibold mb-2">{achievement.label}</h4>
                  <p className="text-sm text-muted-foreground">
                    {achievement.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
