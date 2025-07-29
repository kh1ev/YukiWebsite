import { motion } from 'framer-motion';
import { Book, FileText, Globe, Heart, Mail, Shield, Star, Users, Zap } from 'lucide-react';
import { ReactElement } from 'react';

interface NavItem {
  id: string;
  label: string;
  icon: ReactElement;
}

interface InfoItem {
  href: string;
  label: string;
  icon: ReactElement;
  external?: boolean;
  email?: boolean;
}

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems: NavItem[] = [
    { id: 'home', label: 'Home', icon: <Star className="w-3 h-3 xs:w-4 xs:h-4" /> },
    { id: 'about', label: 'About', icon: <Users className="w-3 h-3 xs:w-4 xs:h-4" /> },
    { id: 'features', label: 'Features', icon: <Heart className="w-3 h-3 xs:w-4 xs:h-4" /> },
    { id: 'premium', label: 'Premium', icon: <Zap className="w-3 h-3 xs:w-4 xs:h-4" /> },
  ];

  const infoItems: InfoItem[] = [
    {
      href: "https://kh1ev.my.id",
      label: "Kh1ev Community",
      icon: <Globe className="w-3 h-3 xs:w-4 xs:h-4" />,
      external: true
    },
    {
      href: "mailto:team@yukisuou.com",
      label: "team@yukisuou.xyz",
      icon: <Mail className="w-3 h-3 xs:w-4 xs:h-4" />,
      email: true
    }
  ];

  const legalLinks = [
    { href: "/privacy-policy", label: "Privacy Policy", icon: <Shield className="w-3 h-3 xs:w-4 xs:h-4" /> },
    { href: "/terms-of-service", label: "Terms of Service", icon: <FileText className="w-3 h-3 xs:w-4 xs:h-4" /> },
    { href: "/community-guidelines", label: "Community Guidelines", icon: <Book className="w-3 h-3 xs:w-4 xs:h-4" /> }
  ];

  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-purple-950/20 to-slate-950 border-t border-purple-500/20">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 xs:px-5 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 xs:gap-6 sm:gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-2 xs:space-y-3 sm:space-y-4 lg:space-y-6">
            <div className="text-xl xs:text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-500 to-pink-400 bg-clip-text text-transparent">
              YUKI<span className="text-purple-400">SUOU</span>
            </div>
            <p className="text-gray-300 text-xxs xs:text-xs sm:text-sm lg:text-base leading-relaxed">
              The ultimate Discord bot for anime lovers and community builders.
              Join thousands of servers already enjoying premium features.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-2 xs:space-y-3 sm:space-y-4 lg:space-y-6">
            <h3 className="text-xs xs:text-sm sm:text-lg lg:text-xl font-semibold text-white relative">
              Navigation
              <div className="absolute -bottom-1 xs:-bottom-1.5 sm:-bottom-2 left-0 w-6 xs:w-8 sm:w-10 lg:w-12 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
            </h3>
            <div className="grid grid-cols-2 gap-1.5 xs:gap-2 sm:gap-3 lg:gap-4">
              {navItems.map((item, index) => (
                <motion.button
                  key={index}
                  onClick={() => scrollToSection(item.id)}
                  whileHover={{ scale: 1.05, x: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="cursor-pointer flex items-center space-x-1.5 xs:space-x-2 sm:space-x-3 p-1.5 xs:p-2 sm:p-3 bg-slate-800/30 hover:bg-gradient-to-r hover:from-purple-500/10 hover:to-pink-500/10 rounded-lg border border-slate-700/50 hover:border-purple-500/30 transition-all duration-300 group text-left">
                  {item.icon}
                  <span className="text-xxs xs:text-xs sm:text-sm lg:text-base text-gray-300 group-hover:text-white transition-colors">
                    {item.label}
                  </span>
                </motion.button>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-2 xs:space-y-3 sm:space-y-4 lg:space-y-6">
            <h3 className="text-xs xs:text-sm sm:text-lg lg:text-xl font-semibold text-white relative">
              Information
              <div className="absolute -bottom-1 xs:-bottom-1.5 sm:-bottom-2 left-0 w-6 xs:w-8 sm:w-10 lg:w-12 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
            </h3>
            <div className="space-y-1.5 xs:space-y-2 sm:space-y-3 lg:space-y-4">
              {infoItems.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  target={item.external ? "_blank" : "_self"}
                  rel={item.external ? "noopener noreferrer" : ""}
                  whileHover={{ scale: 1.05, x: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center space-x-1.5 xs:space-x-2 sm:space-x-3 p-1.5 xs:p-2 sm:p-3 bg-slate-800/30 hover:bg-gradient-to-r hover:from-purple-500/10 hover:to-pink-500/10 rounded-lg border border-slate-700/50 hover:border-purple-500/30 transition-all duration-300 group">
                  {item.icon}
                  <span className={`text-xxs xs:text-xs sm:text-sm lg:text-base text-gray-300 group-hover:text-white transition-colors ${item.email ? "break-all" : ""}`}>
                    {item.label}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true, margin: "-50px" }}
          className="mt-6 xs:mt-8 sm:mt-12 lg:mt-16 pt-4 xs:pt-6 sm:pt-8 border-t border-slate-800/50">
          <div className="flex flex-col space-y-2 xs:space-y-3 sm:space-y-4">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-1.5 xs:space-y-2 sm:space-y-3 md:space-y-0">
              <p className="text-xxs xs:text-xs sm:text-sm text-gray-400 flex items-center space-x-1.5">
                <span>Made by Kh1ev Community</span>
              </p>
              <div className="flex items-center space-x-2 xs:space-x-3 sm:space-x-6 text-xxs xs:text-xs sm:text-sm text-gray-400">
                <span>© 2024 YukiSuou Bot</span>
                <div className="w-0.5 xs:w-1 h-0.5 xs:h-1 bg-gray-600 rounded-full"></div>
                <span>All rights reserved</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-center items-center space-y-1 xs:space-y-1.5 sm:space-y-0 sm:space-x-3 lg:space-x-6">
              {legalLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center space-x-1 xs:space-x-1.5 sm:space-x-2 text-xxs xs:text-xs sm:text-sm text-gray-400 hover:text-purple-400 transition-colors duration-300">
                  {link.icon}
                  <span>{link.label}</span>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
