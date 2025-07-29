import { motion } from 'framer-motion';
import { ChevronRight, Shield, Sparkles, Users, Zap } from 'lucide-react';
import { ReactNode } from 'react';

interface FeatureItem {
  icon: ReactNode;
  title: string;
  description: string;
  color: string;
}

const Features = () => {
  const features: FeatureItem[] = [
    {
      icon: <Sparkles className="w-6 xs:w-7 sm:w-8 h-6 xs:h-7 sm:h-8" />,
      title: "Image Generation",
      description: "Create stunning AI-powered images with advanced generation capabilities",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Users className="w-6 xs:w-7 sm:w-8 h-6 xs:h-7 sm:h-8" />,
      title: "Indonesian ChatBot",
      description: "Advanced chatbot with Indonesian language support for better communication",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: <Shield className="w-6 xs:w-7 sm:w-8 h-6 xs:h-7 sm:h-8" />,
      title: "Community Safe",
      description: "Comprehensive moderation tools to keep your Discord server safe and friendly",
      color: "from-blue-600 to-blue-700"
    },
    {
      icon: <Zap className="w-6 xs:w-7 sm:w-8 h-6 xs:h-7 sm:h-8" />,
      title: "Fast Performance",
      description: "Lightning-fast responses with optimized performance for the best user experience",
      color: "from-orange-600 to-orange-700"
    }
  ];

  return (
    <section id="features" className="py-12 xs:py-16 sm:py-20 relative bg-gradient-to-br from-slate-50 to-slate-50">
      <div className="max-w-7xl mx-auto px-4 xs:px-5 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-10 xs:mb-12 sm:mb-16">
          <h2 className="text-2xl xs:text-3xl sm:text-4xl font-bold mb-3 xs:mb-4">
            <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent">
              Amazing Features
            </span>
          </h2>
          <p className="text-sm xs:text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto px-2">
            Discover the powerful capabilities that make Yuki-Suou the perfect Discord bot for your server
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 xs:gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{
                scale: 1.03,
                y: -5,
                boxShadow: "0 10px 30px rgba(59, 130, 246, 0.1)"
              }}
              className="relative group">
              <div className="bg-white/80 backdrop-blur-sm rounded-xl xs:rounded-2xl p-5 xs:p-6 sm:p-7 md:p-8 border border-gray-200/50 hover:border-blue-300/50 transition-all duration-300 shadow-md hover:shadow-lg">
                <div className={`w-12 xs:w-14 sm:w-16 h-12 xs:h-14 sm:h-16 rounded-lg xs:rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 xs:mb-5 sm:mb-6 group-hover:scale-105 transition-transform duration-300 shadow-md`}>
                  <div className="text-white">{feature.icon}</div>
                </div>

                <h3 className="text-lg xs:text-xl sm:text-2xl font-bold mb-2 xs:mb-3 sm:mb-4 text-gray-800">
                  {feature.title}
                </h3>
                <p className="text-xs xs:text-sm sm:text-base text-gray-600 leading-relaxed mb-3 xs:mb-4">
                  {feature.description}
                </p>

                <motion.button
                  whileHover={{ x: 3 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-1 xs:mt-2 text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1 xs:gap-2 transition-colors duration-300 text-xs xs:text-sm">
                  Learn More <ChevronRight size={14} className="xs:w-4 xs:h-4" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
