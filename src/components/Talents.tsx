import { Guitar, Mic, Piano, Drum, Volume2 } from "lucide-react";

const InstrumentProficiency = () => {
  const instruments = [
    { icon: Guitar, name: "Acoustic Guitar", proficiency: "Expert" },
    { icon: Guitar, name: "Electric Guitar", proficiency: "Expert" },
    { icon: Mic, name: "Vocals", proficiency: "Expert" },
    { icon: Drum, name: "Percussion", proficiency: "Advanced" },
    { icon: Volume2, name: "Mridangam", proficiency: "Advanced" }, // Capitalized
  ];

  const proficiencyColors = {
    Expert: "bg-green-100 text-green-700 dark:bg-green-800 dark:text-green-400",
    Advanced: "bg-blue-100 text-blue-700 dark:bg-blue-800 dark:text-blue-400",
    Intermediate: "bg-yellow-100 text-yellow-700 dark:bg-yellow-800 dark:text-yellow-400",
  };

  return (
    <section
      id="instrument-proficiency"
      className="py-16 sm:py-20 bg-gray-50 dark:bg-[#111318] transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        {/* Section Header */}
        <h2 className="font-musical text-4xl md:text-5xl font-bold mb-12">
          Instrument Proficiency
        </h2>

        {/* Instruments Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 w-full"> {/* Changed to 5 columns since you have 5 instruments */}
          {instruments.map((instrument, index) => {
            const Icon = instrument.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                <div className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 mb-3 rounded-full bg-gray-100 dark:bg-[#22252b] transition-colors duration-300">
                  <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-indigo-600 dark:text-indigo-400" />
                </div>
                <span className="font-medium text-sm sm:text-base text-gray-900 dark:text-gray-100 mb-1">
                  {instrument.name}
                </span>
                <span
                  className={`text-xs px-2 py-1 rounded-full font-semibold ${
                    proficiencyColors[instrument.proficiency]
                  }`}
                >
                  {instrument.proficiency}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default InstrumentProficiency;