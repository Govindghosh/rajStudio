import {
  Music,
  Award,
  Users,
  Clock,
  Guitar,
  Mic,
  MapPin,
  Wallet,
} from "lucide-react";

const About = () => {
  const highlights = [
    { icon: Users, number: "200+", label: "Students Trained" },
    { icon: Clock, number: "10+", label: "Years Experience" },
    { icon: Award, number: "Professional", label: "Certified Teacher" },
    { icon: Music, number: "1000+", label: "Lessons Delivered" },
  ];

  return (
    <section
      id="about"
      className="py-16 sm:py-20 bg-gray-50 dark:bg-[#111318] transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-musical text-4xl md:text-5xl font-bold mb-4">
            About Melody Workshop
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg md:text-xl max-w-2xl mx-auto">
            We believe that music is more than just practice - it's
            self-expression, confidence, and joy. Founded by passionate
            musicians, our academy is designed to bring structured, enjoyable,
            and professional training to every student.
          </p>
        </div>

        {/* Info + Visual */}
        {/* Info + Visual */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Info */}
          <div className="space-y-8 sm:space-y-10">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                Why Choose Melody Workshop?
              </h3>
              <ul className="grid gap-6 sm:gap-8 sm:grid-cols-2">
                <li className="flex items-start gap-4 p-5 rounded-2xl bg-gray-50 dark:bg-gray-800/50 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-indigo-100 dark:bg-indigo-900">
                    <Mic className="w-5 h-5 text-indigo-600 dark:text-indigo-300" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-gray-100">
                      Expert Instructors
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Learn from experienced teachers who know how to make
                      lessons fun and effective.
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-4 p-5 rounded-2xl bg-gray-50 dark:bg-gray-800/50 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-indigo-100 dark:bg-indigo-900">
                    <MapPin className="w-5 h-5 text-indigo-600 dark:text-indigo-300" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-gray-100">
                      Learn From Anywhere
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Online classes designed to fit into your schedule.
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-4 p-5 rounded-2xl bg-gray-50 dark:bg-gray-800/50 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-indigo-100 dark:bg-indigo-900">
                    <Users className="w-5 h-5 text-indigo-600 dark:text-indigo-300" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-gray-100">
                      Small Batches
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      More interaction and personalized attention for every
                      student.
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-4 p-5 rounded-2xl bg-gray-50 dark:bg-gray-800/50 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-indigo-100 dark:bg-indigo-900">
                    <Wallet className="w-5 h-5 text-indigo-600 dark:text-indigo-300" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-gray-100">
                      Affordable Pricing
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Quality training at reasonable rates with bundle
                      discounts.
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-4 p-5 rounded-2xl bg-gray-50 dark:bg-gray-800/50 shadow-sm hover:shadow-md transition-shadow sm:col-span-2">
                  <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-indigo-100 dark:bg-indigo-900">
                    <Music className="w-5 h-5 text-indigo-600 dark:text-indigo-300" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-gray-100">
                      Performance Opportunities
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Show your talent in online recitals & events.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Visual / Team Card */}
          <div className="relative w-72 sm:w-72 md:w-80 mx-auto">
            <div className="rounded-2xl bg-white dark:bg-[#1a1c20] shadow-md p-6 sm:p-8 flex flex-col items-center justify-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-[9rem] h-[9rem] sm:w-[10rem] sm:h-[10rem] rounded-full bg-gray-100 dark:bg-[#22252b] flex items-center justify-center mb-4">
                <Users className="w-[7rem] h-[7rem] sm:w-[8rem] sm:h-[8rem] text-gray-700 dark:text-gray-200" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-gray-100 mb-1 text-center">
                Certified Instructors
              </h3>
              <p className="text-sm sm:text-base text-gray-500 dark:text-gray-300 text-center">
                Guitar & Vocal Specialists
              </p>
            </div>

            {/* Floating Minimal Icons */}
            <Guitar className="absolute -top-3 -right-3 w-5 sm:w-6 h-5 sm:h-6 text-indigo-600 dark:text-indigo-400" />
            <Mic className="absolute -bottom-3 -left-3 w-5 sm:w-6 h-5 sm:h-6 text-indigo-600 dark:text-indigo-400" />
          </div>
        </div>

        {/* Highlights */}
        <div className="mt-12 sm:mt-16 max-w-5xl mx-auto">
          <h3 className="text-center text-2xl sm:text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-8 sm:mb-12">
            Key Highlights
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
            {highlights.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="bg-white dark:bg-[#1a1c20] rounded-lg shadow p-4 sm:p-6 flex flex-col items-center justify-center text-center hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 mb-2 sm:mb-3 flex items-center justify-center bg-gray-100 dark:bg-[#22252b] rounded-full">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <div className="text-lg sm:text-xl font-bold text-gray-900 dark:text-gray-100">
                    {item.number}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-300">
                    {item.label}
                  </div>
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
