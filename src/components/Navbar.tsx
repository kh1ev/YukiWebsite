import { AnimatePresence, motion } from 'framer-motion';
import { Bot, ChevronRight, Crown, Home, Menu, Sparkles, Star, User, X } from 'lucide-react';
import { useEffect, useState } from 'react';

interface NavItem {
  id: string;
  label: string;
  icon: React.ElementType;
}

interface NavbarProps {
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
  scrollY: number;
}

const Navbar = ({ activeSection, scrollToSection, scrollY }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems: NavItem[] = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'features', label: 'Features', icon: Star },
    { id: 'premium', label: 'Premium', icon: Crown }
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isMenuOpen && !target.closest('nav') && !target.closest('.mobile-menu')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMenuOpen]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrollY > 50
            ? 'bg-white/90 backdrop-blur-md shadow-lg border-b border-gray-100/50'
            : 'bg-transparent lg:bg-transparent bg-white/95 backdrop-blur-md shadow-sm'
        }`}>
        <div className="mx-auto px-3 xs:px-4 sm:px-5 lg:px-8 xl:px-12 2xl:px-20">
          <div className="flex items-center justify-between h-14 xs:h-16 sm:h-18 lg:h-20">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center space-x-2 cursor-pointer z-60 transition-all duration-300 ${
                isMenuOpen ? 'blur-sm lg:blur-none' : ''
              }`}
              onClick={() => scrollToSection('home')} >
              <div className="w-6 xs:w-7 sm:w-8 lg:w-9 xl:w-10 h-6 xs:h-7 sm:h-8 lg:h-9 xl:h-10 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg">
                <Bot className="text-white w-3 xs:w-3.5 sm:w-4 lg:w-4.5 xl:w-5 h-3 xs:h-3.5 sm:h-4 lg:h-4.5 xl:h-5" />
              </div>
              <div className="text-sm xs:text-base sm:text-lg lg:text-xl xl:text-2xl font-bold">
                <span className="text-blue-500">YUKI</span>
                <span className="text-purple-500">SUOU</span>
              </div>
            </motion.div>

            <div className="hidden lg:flex items-center space-x-1 sm:space-x-1.5 xl:space-x-2">
              {navigationItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-3 xs:px-3.5 sm:px-4 xl:px-5 py-2 xs:py-2.5 rounded-lg xs:rounded-xl transition-all duration-300 text-xs xs:text-sm sm:text-base font-medium group ${
                    activeSection === item.id
                      ? 'text-purple-600 bg-gradient-to-r from-purple-50 to-blue-50 shadow-sm'
                      : 'text-gray-700 hover:text-purple-600 hover:bg-purple-50/50'
                  }`}>
                  {item.label}
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
                    />
                  )}
                </motion.button>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden cursor-pointer lg:flex items-center gap-1.5 xs:gap-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-4 xs:px-5 py-2 xs:py-2.5 rounded-lg xs:rounded-xl font-semibold transition-all duration-300 shadow-lg group">
              <Sparkles className="w-3 xs:w-3.5 sm:w-4 group-hover:animate-pulse" />
              <span className="text-xs xs:text-sm sm:text-base">Invite Now</span>
              <ChevronRight className="w-3 xs:w-3.5 sm:w-4 group-hover:translate-x-1 transition-transform" />
            </motion.button>

            <div className="lg:hidden">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-1 xs:p-1.5 rounded-lg xs:rounded-xl hover:bg-purple-50 transition-colors text-gray-700 relative z-60"
                aria-label="Toggle menu">
                <motion.div
                  animate={{ rotate: isMenuOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}>
                  {isMenuOpen ? (
                    <X className="w-5 xs:w-6 h-5 xs:h-6" />
                  ) : (
                    <Menu className="w-5 xs:w-6 h-5 xs:h-6" />
                  )}
                </motion.div>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            onClick={() => setIsMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3, ease: 'easeInOut' }}
            className="mobile-menu lg:hidden fixed top-0 right-0 h-full w-72 xs:w-80 max-w-[85vw] bg-white shadow-2xl z-50 overflow-y-auto">
            <div className="p-4 xs:p-5 sm:p-6 border-b border-gray-100 bg-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 xs:space-x-3">
                  <div className="w-8 xs:w-9 sm:w-10 h-8 xs:h-9 sm:h-10 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg xs:rounded-xl flex items-center justify-center shadow-lg">
                    <Bot className="text-white w-4 xs:w-4.5 sm:w-5 h-4 xs:h-4.5 sm:h-5" />
                  </div>
                  <div className="text-base xs:text-lg sm:text-xl font-bold">
                    <span className="text-blue-500">YUKI</span>
                    <span className="text-purple-500">SUOU</span>
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsMenuOpen(false)}
                  className="p-1 xs:p-1.5 rounded-lg hover:bg-white/50 transition-colors"
                  aria-label="Close menu">
                  <X className="text-gray-600 w-4 xs:w-5 h-4 xs:h-5" />
                </motion.button>
              </div>
            </div>

            <div className="p-3 xs:p-4 sm:p-5 bg-white space-y-1 xs:space-y-2">
              {navigationItems.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    whileHover={{ scale: 1.02, x: 4 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleNavClick(item.id)}
                    className={`flex items-center w-full text-left px-3 py-2.5 xs:px-4 xs:py-3 rounded-lg xs:rounded-xl transition-all duration-300 group ${
                      activeSection === item.id
                        ? 'bg-gradient-to-r from-purple-100 to-blue-100 text-purple-600 shadow-sm border-l-4 border-purple-500'
                        : 'text-gray-700 hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 hover:text-purple-600'
                    }`}>
                    <IconComponent
                      className={`mr-2 xs:mr-3 transition-colors w-4 xs:w-4.5 sm:w-5 h-4 xs:h-4.5 sm:h-5 ${
                        activeSection === item.id ? 'text-purple-500' : 'text-gray-400 group-hover:text-purple-500'
                      }`}
                    />
                    <span className="font-medium text-xs xs:text-sm sm:text-base">{item.label}</span>
                    {activeSection === item.id && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="ml-auto w-1.5 xs:w-2 h-1.5 xs:h-2 bg-purple-500 rounded-full"
                      />
                    )}
                    <ChevronRight
                      className={`ml-auto transition-transform w-3 xs:w-3.5 sm:w-4 h-3 xs:h-3.5 sm:h-4 ${
                        activeSection === item.id ? 'text-purple-500' : 'text-gray-400 group-hover:translate-x-1 group-hover:text-purple-500'
                      }`}
                    />
                  </motion.button>
                );
              })}
            </div>

            <div className="p-4 xs:p-5 sm:p-6 border-t border-gray-100 bg-white">
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-4 py-2.5 xs:py-3 rounded-lg xs:rounded-xl font-semibold transition-all duration-300 shadow-lg flex items-center justify-center gap-2 xs:gap-3 group">
                <Sparkles className="w-3.5 xs:w-4 sm:w-5 h-3.5 xs:h-4 sm:h-5 group-hover:animate-pulse" />
                <span className="text-xs xs:text-sm sm:text-base">Invite Now</span>
                <ChevronRight className="w-3.5 xs:w-4 sm:w-5 h-3.5 xs:h-4 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <div className="mt-2 xs:mt-3 sm:mt-4 text-center text-xxs xs:text-xs sm:text-sm text-gray-500">
                Experience the future of AI
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;