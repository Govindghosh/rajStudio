import { useState, useRef, useEffect } from "react";
import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const [open, setOpen] = useState(false);
  const widgetRef = useRef<HTMLDivElement | null>(null);

  // Close on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (widgetRef.current && !widgetRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return (
    <div className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50" ref={widgetRef}>
      {/* Expanded Chat Preview */}
      <div
        className={`
          absolute bottom-20 right-0 w-72 sm:w-80
          rounded-2xl shadow-2xl overflow-hidden
          bg-white/90 dark:bg-gray-900/90
          backdrop-blur-xl border border-gray-200/30 dark:border-gray-700/30
          transition-all duration-300 origin-bottom-right
          ${open ? "scale-100 opacity-100" : "scale-90 opacity-0 pointer-events-none"}
        `}
      >
        <div className="flex items-center gap-3 p-4 border-b border-gray-200/50 dark:border-gray-700/50">
          <img
            src="/favicon.ico"
            alt="Melody Workshop"
            className="w-10 h-10 rounded-full"
          />
          <div>
            <p className="font-semibold text-gray-900 dark:text-gray-100">
              Melody Workshop
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Typically replies within 1 hr
            </p>
          </div>
        </div>

        <div className="p-4 space-y-3 text-sm">
          <div className="bg-green-100 dark:bg-green-700/40 text-gray-800 dark:text-gray-100 p-3 rounded-xl max-w-[80%]">
            👋 Hi! Looking to start your music journey?
          </div>
          <div className="bg-green-100 dark:bg-green-700/40 text-gray-800 dark:text-gray-100 p-3 rounded-xl max-w-[90%]">
            Tap below to chat with us on WhatsApp!
          </div>
        </div>

        <div className="p-4 border-t border-gray-200/50 dark:border-gray-700/50">
          <a
            href="https://wa.me/918791217050"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg 
              bg-green-500 hover:bg-green-600 text-white font-medium transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            Chat on WhatsApp
          </a>
        </div>
      </div>

      {/* Floating FAB */}
      <button
        onClick={() => setOpen(!open)}
        aria-label="WhatsApp Chat"
        className="
          relative flex items-center justify-center
          w-14 h-14 sm:w-16 sm:h-16
          rounded-full bg-green-500 hover:bg-green-600
          shadow-xl shadow-green-500/30
          transition-transform duration-300 hover:scale-110 active:scale-95
        "
      >
        <MessageCircle className="text-white w-7 h-7 sm:w-8 sm:h-8" />
      </button>
    </div>
  );
};

export default WhatsAppButton;
