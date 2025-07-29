'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Bookmark, Bot, Heart, MessageCircle, Send } from 'lucide-react';
import Image, { StaticImageData } from 'next/image';

interface AboutProps {
  characterImage?: string | StaticImageData;
  profileImage?: string | StaticImageData;
}

const About = ({
  characterImage = "/assets/image/yukiImage2.jpg",
  profileImage = "/assets/image/yukiImage1.jpg"
}: AboutProps) => {
  return (
    <div id="about" className="min-h-screen relative overflow-hidden bg-gray-50 flex pt-16 sm:pt-20 pb-10 sm:pb-12 items-center">
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-blue-100" />
        <motion.div
          className="absolute inset-0 opacity-20"
          animate={{
            backgroundPosition: ['0px 0px', '60px 60px'],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'linear'
          }}
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(139, 92, 246, 0.1) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="container mx-auto px-4 xs:px-5 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-20 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-6 sm:gap-8 md:gap-12 lg:gap-16">
          <motion.div
            className="w-full max-w-xs xs:max-w-sm sm:max-w-md lg:w-96 flex-shrink-0"
            initial={{ x: -100, opacity: 0, rotate: 0 }}
            animate={{ x: 0, opacity: 1, rotate: -8 }}
            transition={{ duration: 1, ease: [0.6, -0.05, 0.01, 0.99] }}
            whileHover={{
              rotate: -12,
              scale: 1.02
            }}
            viewport={{ once: true }}>
            <div className="bg-white rounded-xl xs:rounded-2xl sm:rounded-3xl shadow-lg sm:shadow-xl md:shadow-2xl overflow-hidden">
              <div className="p-2.5 xs:p-3 sm:p-4 flex items-center gap-2 xs:gap-3">
                <div className="w-7 h-7 xs:w-8 xs:h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden">
                  <Image
                    src={profileImage}
                    alt="Yuki Profile"
                    width={40}
                    height={40}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-xs xs:text-sm sm:text-base">Yuki Suou</h3>
                  <p className="text-xxs xs:text-xs sm:text-sm text-gray-500">Today</p>
                </div>
              </div>
              <div className="relative aspect-square">
                <Image
                  src={characterImage}
                  alt="Yuki Character"
                  fill
                  className="object-cover"
                  priority/>
              </div>
              <div className="p-2.5 xs:p-3 sm:p-4">
                <div className="flex items-center justify-between mb-1.5 xs:mb-2 sm:mb-3">
                  <div className="flex items-center gap-1 xs:gap-1.5 sm:gap-2">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-0.5 xs:p-1">
                      <Heart className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 cursor-pointer text-black hover:text-red-500 transition-colors" />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-0.5 xs:p-1">
                      <MessageCircle className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 cursor-pointer text-black hover:text-blue-500 transition-colors" />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-0.5 xs:p-1">
                      <Send className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 cursor-pointer text-black hover:text-purple-500 transition-colors" />
                    </motion.button>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-0.5 xs:p-1">
                    <Bookmark className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 cursor-pointer text-black hover:text-yellow-500 transition-colors" />
                  </motion.button>
                </div>
                <div className="flex items-center gap-1.5 xs:gap-2 mb-1 xs:mb-2">
                  <Heart className="w-2.5 h-2.5 xs:w-3 xs:h-3 sm:w-4 sm:h-4 text-red-500 fill-current" />
                  <span className="font-semibold text-gray-900 text-xxs xs:text-xs sm:text-sm">200 Likes</span>
                </div>
                <div className="text-xxs xs:text-xs sm:text-sm text-gray-700">
                  <span className="font-semibold">Yuki Suou</span> Lunch
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="flex-1 text-center lg:text-left lg:pl-6 xl:pl-8 pt-10 sm:pt-12 md:pt-15"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.6, -0.05, 0.01, 0.99] }}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}>
              <p className="text-purple-600 font-semibold text-xs xs:text-sm sm:text-base lg:text-lg mb-2 xs:mb-3 sm:mb-4">
                Meta AI Contribution
              </p>

              <h1 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] xl:text-5xl 2xl:text-6xl font-bold text-gray-900 mb-4 xs:mb-5 sm:mb-6 md:mb-8 leading-snug sm:leading-tight">
                Let's Make Discord Server More
                <br className="hidden xs:block" />
                <span className="text-gray-700">Interesting and Attractive with</span>
                <br className="hidden xs:block" />
                <span className="text-gray-800">YUKISUOU</span>
              </h1>

              <div className="max-w-full lg:max-w-2xl mb-6 xs:mb-7 sm:mb-8 md:mb-10 lg:mb-12">
                <p className="text-gray-600 text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
                  Yuki Suou is a community bot designed to enhance your server with
                  a more engaging and modern experience, featuring an Indonesian-language
                  chatbot powered by <span className="font-semibold text-gray-800">Meta AI</span>.
                </p>
              </div>

              <motion.button
                className="bg-gray-800 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-5 xs:px-6 sm:px-8 py-2.5 xs:py-3 sm:py-4 rounded-lg sm:rounded-xl font-semibold text-xs xs:text-sm sm:text-base lg:text-lg hover:bg-gray-700 transition-colors shadow-lg flex items-center gap-1.5 xs:gap-2 sm:gap-3 mx-auto lg:mx-0"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)"
                }}
                whileTap={{ scale: 0.95 }}>
                <Bot size={16} className="xs:w-5 xs:h-5 sm:w-6 sm:h-6" />
                Invite
                <ArrowRight size={16} className="xs:w-5 xs:h-5 sm:w-6 sm:h-6" />
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
