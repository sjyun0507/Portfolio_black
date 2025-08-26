import { motion } from 'framer-motion';
import { styles } from '../styles';
import { bwmap, worldmap } from '../assets';
import { useEffect, useState } from 'react';
import p1 from '../assets/images/projects/p1.png';
import p2 from '../assets/images/projects/p2.png';
import p3 from '../assets/images/projects/p3.png';

const Hero = () => {
  const keywords = [
    'Full‑Stack Developer',
    'Problem Solver',
    'Tech Enthusiast',
  ];
  const thumbs = [
    p1,
    p2,
    p3,
  ];
  const [kwIndex, setKwIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(() => {
      setKwIndex((i) => (i + 1) % keywords.length);
    }, 1800);
    return () => clearInterval(id);
  }, []);
  return (
    <>
      <div className="absolute top-0 left-0 z-0 h-[85vh] sm:h-[90vh] w-screen opacity-70">
        <img
          src={bwmap}
          alt="world map"
          className="w-full h-full sm:block hidden object-cover"
        />
      </div>
      <div className="absolute top-0 left-0 z-0 h-[85vh] sm:h-[90vh] w-screen opacity-70">
        <img
          src={worldmap}
          alt="world map"
          className="w-full h-full sm:hidden block object-cover"
        />
      </div>
      <section
        className="relative flex sm:flex-row flex-col w-full h-[85vh] sm:h-[90vh] mx-auto
        sm:bg-hero bg-hero-mobile overflow-hidden">
        <div
          className={`absolute inset-0 sm:top-[250px] top-[150px] 
          lg:top-[150px] xl:top-[250px] ${styles.paddingX} 
          max-w-7xl mx-auto flex flex-row items-start
          justify-between gap-3`}>
          <div className="flex flex-col justify-center items-center mt-5 ml-3">
            <div className="w-5 h-5 rounded-full bg-[#0a0a0a] sm:hidden" />
            <div className="w-1 sm:h-80 h-40 bw-gradient sm:hidden" />
          </div>

          <div>
            <h1
              className={`${styles.heroHeadText} text-eerieBlack font-poppins uppercase`}>
              Hi, I'm<br />
              <span
                className="sm:text-battleGray sm:text-[56px] text-eerieBlack text-[24px] font-mova font-extrabold uppercase tracking-tight whitespace-nowrap">
                Seojeong Yun
              </span>
            </h1>
            <motion.div
              key={kwIndex}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-3 sm:mt-4 text-[14px] sm:text-[18px] font-medium text-gray-700">
              {keywords[kwIndex]}
            </motion.div>
          </div>
          <div
            className="w-screen flex flex-col items-start
            justify-center sm:-ml-[3rem] xxs:mt-4"></div>

          <div
              className="absolute right-0 sm:-right-8 lg:-right-16 top-[16vh] sm:top-[12vh] lg:top-[10vh] hidden md:block z-[5] pointer-events-none"
            aria-hidden="true"
          >
            <div className="relative w-[360px] sm:w-[440px] lg:w-[520px] h-[340px] sm:h-[420px] lg:h-[480px]">
              {/* Tile 1: top right */}
              <img
                src={thumbs[0]}
                alt="project thumbnail 1"
                className="absolute top-0 right-0 w-[38%] sm:w-[42%] lg:w-[44%] object-cover rounded-xl opacity-80 blur-[2px] brightness-95 shadow-lg grayscale"
              />
              {/* Tile 2: center bottom */}
              <img
                src={thumbs[1]}
                alt="project thumbnail 2"
                className="absolute bottom-2.5 left-1/2 -translate-x-1/2 w-[56%] sm:w-[58%] lg:w-[60%] object-cover rounded-xl opacity-80 blur-[2px] brightness-95 shadow-md rotate-[1.5deg] grayscale"
              />
              {/* Tile 3: bottom right */}
              <img
                src={thumbs[2]}
                alt="project thumbnail 3"
                className="absolute bottom-4 right-0 w-[28%] sm:w-[30%] lg:w-[32%] object-cover rounded-xl opacity-80 blur-[2px] brightness-95 shadow-md -rotate-[2deg] grayscale"
              />
            </div>
          </div>
        </div>

        <div
          className="absolute bottom-6 w-full
          flex justify-center items-center">
          <a href="#about">
            <div
              className="w-[35px] h-[64px] rounded-3xl border-4
            border-french border-dim flex
            justify-center items-start p-2">
              <motion.div
                animate={{
                  y: [0, 24, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: 'loop',
                }}
                className="w-3 h-3 rounded-full bg-taupe mb-1"
              />
            </div>
          </a>
        </div>
      </section>
    </>
  );
};

export default Hero;
