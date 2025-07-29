'use client';
import { motion } from 'framer-motion';
import { ArrowRight, Bot, ChevronRight } from 'lucide-react';
import Image, { StaticImageData } from 'next/image';

interface HeroProps {
  characterImage?: string | StaticImageData;
  title?: string;
  subtitle?: string;
  description?: string;
  communityLogoImage?: string | StaticImageData;
  metaAiLogoImage?: string | StaticImageData;
}

const Hero = ({
  characterImage = "/assets/image/yukiHome.svg",
  title = "Yuki Suou",
  subtitle = "Discord Bot",
  description = "Yuki is a Discord bot that helps you manage your server and community. and this is official bot from Kh1ev Community. Yuki have many features that can help you to manage your server.",
  communityLogoImage = "/assets/image/kh1ev.png",
  metaAiLogoImage = "/assets/image/meta.svg"
}: HeroProps) => {
  return (
    <div id="home" className="min-h-screen pt-24 xs:pt-28 sm:pt-32 md:pt-40 lg:pt-0 relative overflow-hidden bg-white">
      <div className="container mx-auto px-4 xs:px-5 sm:px-6 lg:px-8 h-auto sm:min-h-screen flex flex-col lg:flex-row items-center relative z-10">
        <motion.div
          className="w-full lg:w-1/2 text-left md:text-center lg:text-left mb-6 xs:mb-8 sm:mb-10 lg:mb-0 lg:pr-6 xl:pr-12 2xl:pr-20"
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.6, -0.05, 0.01, 0.99] }}>
          <motion.div initial="hidden" animate="visible">
            <motion.div className="relative overflow-hidden mb-3 xs:mb-4">
              <motion.h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] xl:text-[5rem] 2xl:text-[6rem] font-black relative text-blue-500 leading-tight">
                {title.split(' ')[0]} <span className='text-purple-500'>{title.split(' ')[1]}</span>
              </motion.h1>
              <motion.div
                className="h-1 xs:h-1.5 sm:h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-1 xs:mt-2 mx-left md:mx-auto lg:mx-0"
                initial={{ width: 0 }}
                animate={{ width: "60%" }}
                transition={{ duration: 1.5, delay: 0.8 }}
              />
            </motion.div>

            <motion.div className="relative overflow-hidden mb-4 xs:mb-5 sm:mb-6 lg:mb-8">
              <motion.h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-[2.5rem] xl:text-[3rem] 2xl:text-[3.5rem] text-gray-800 relative font-semibold">
                {subtitle}
              </motion.h2>
            </motion.div>

            <motion.div className="relative overflow-hidden mb-6 xs:mb-8 sm:mb-10 lg:mb-12">
              <motion.p
                className="text-gray-600 text-xs xs:text-sm sm:text-base lg:text-lg xl:text-xl leading-relaxed max-w-2xl font-medium mx-auto lg:mx-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5, delay: 0.6 }}>
                {description}
              </motion.p>
            </motion.div>

            <motion.div className="flex flex-col xs:flex-row gap-3 xs:gap-4 sm:gap-5 md:gap-6 justify-center lg:justify-start">
              <motion.button
                className="cursor-pointer relative bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 xs:px-8 sm:px-10 md:px-12 py-3 xs:py-4 sm:py-5 rounded-xl xs:rounded-2xl font-bold shadow-lg xs:shadow-xl flex items-center justify-center gap-2 xs:gap-3 text-xs xs:text-sm sm:text-base md:text-lg overflow-hidden group"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 15px 30px rgba(139, 92, 246, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                animate={{
                  boxShadow: [
                    "0 8px 20px rgba(139, 92, 246, 0.2)",
                    "0 12px 30px rgba(59, 130, 246, 0.3)",
                    "0 8px 20px rgba(139, 92, 246, 0.2)"
                  ]
                }}
                transition={{
                  boxShadow: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                }}>
                <span className="relative z-10 flex items-center gap-2 xs:gap-3">
                  <Bot size={16} className="xs:w-5 xs:h-5 sm:w-6 sm:h-6" />
                  Invite Now
                  <ArrowRight size={16} className="xs:w-5 xs:h-5 sm:w-6 sm:h-6" />
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 skew-x-12"
                  animate={{
                    x: ["-100%", "100%"]
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatDelay: 2
                  }}
                />
              </motion.button>

              <motion.button
                className="cursor-pointer relative border-2 border-gray-300 text-gray-700 px-5 xs:px-6 sm:px-8 md:px-10 py-3 xs:py-4 sm:py-5 rounded-xl xs:rounded-2xl font-bold flex items-center justify-center gap-1.5 xs:gap-2 sm:gap-3 text-xs xs:text-sm sm:text-base md:text-lg hover:border-purple-500 hover:text-purple-500 transition-all duration-300 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}>
                <span className="flex items-center gap-1 xs:gap-2">
                  Learn More
                  <ChevronRight size={14} className="xs:w-4 xs:h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.button>
            </motion.div>

            <motion.div
              className="mt-6 xs:mt-8 sm:mt-10 lg:mt-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.2 }}>
              <motion.p
                className="text-gray-500 text-xs xs:text-sm sm:text-base font-medium mb-3 xs:mb-4 text-center lg:text-left"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.4 }}>
                Powered by
              </motion.p>
              <div className="flex items-center justify-center lg:justify-start gap-6 xs:gap-8 sm:gap-10 md:gap-12 cursor-pointer">
                <motion.div
                  className="group"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 1.8 }}
                  whileHover={{ scale: 1.05 }}>
                  <Image
                    src={metaAiLogoImage}
                    alt="Meta AI Logo"
                    width={120} 
                    height={120} 
                    className="h-8 xs:h-10 sm:h-12 lg:h-14 w-auto object-contain"
                    quality={100} 
                    unoptimized={false} 
                  />
                </motion.div>
                <motion.div
                  className="group"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 1.6 }}
                  whileHover={{ scale: 1.05 }}>
                  <Image
                    src={communityLogoImage}
                    alt="Community Logo"
                    width={180}
                    height={180} 
                    className="h-10 xs:h-12 sm:h-14 lg:h-16 xl:h-18 w-auto object-contain"
                    quality={100}
                    unoptimized={false}
                  />
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          className="w-full lg:w-1/2 h-full relative max-w-xs xs:max-w-sm sm:max-w-md md:max-w-lg lg:max-w-none mx-auto lg:mx-0 hidden sm:block"
          initial={{ opacity: 0, x: 80, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.6, -0.05, 0.01, 0.99] }}>
          <motion.div
            className="relative w-full h-[500px] lg:h-[600px] xl:h-[700px] rounded-xl xs:rounded-2xl lg:rounded-3xl overflow-hidden"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            whileHover={{
              scale: 1.02,
              filter: "brightness(1.05) contrast(1.1)"
            }}>
            <Image
              src={characterImage}
              alt="Yuki Suou Character"
              fill
              className="object-contain object-center lg:object-right-bottom"
              style={{
                filter: "drop-shadow(0 8px 20px rgba(0, 0, 0, 0.1))"
              }}
              priority
              quality={100}
              unoptimized={false}
            />
            <motion.div
              className="absolute inset-0 bg-gradient-to-tr from-purple-500/5 via-transparent to-blue-500/5"
              animate={{
                opacity: [0.05, 0.15, 0.05]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute top-3 xs:top-4 sm:top-6 right-3 xs:right-4 sm:right-6 w-10 xs:w-12 sm:w-14 h-10 xs:h-12 sm:h-14 border-t-2 border-r-2 border-purple-400 opacity-30"
        animate={{
          borderColor: [
            "rgba(139, 92, 246, 0.3)",
            "rgba(59, 130, 246, 0.3)",
            "rgba(139, 92, 246, 0.3)"
          ],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 3, repeat: Infinity }}
      />

      <motion.div
        className="absolute bottom-3 xs:bottom-4 sm:bottom-6 left-3 xs:left-4 sm:left-6 w-10 xs:w-12 sm:w-14 h-10 xs:h-12 sm:h-14 border-b-2 border-l-2 border-blue-400 opacity-30"
        animate={{
          borderColor: [
            "rgba(59, 130, 246, 0.3)",
            "rgba(236, 72, 153, 0.3)",
            "rgba(59, 130, 246, 0.3)"
          ],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
      />

      <motion.div
        className="absolute top-1/2 right-4 xs:right-5 sm:right-6 lg:right-8 xl:right-12 flex flex-col gap-2 xs:gap-3 sm:gap-4 hidden sm:flex"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1.2 }}>
        {[1, 2, 3].map((i) => (
          <motion.div
            key={i}
            className="w-1.5 xs:w-2 sm:w-2.5 h-1.5 xs:h-2 sm:h-2.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.3
            }}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default Hero;