import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { github, pineapple, pineappleHover } from '../assets';
import { projects } from '../constants';
import { fadeIn, textVariant, staggerContainer } from '../utils/motion';
// 이미 있다면 맨 아래에 추가

const ProjectCard = ({
  id,
  name,
  description,
  image,
  repo,
  demo,
  index,
  active,
  handleClick,
  onOpenComingSoon,
}) => {
  return (
    <motion.div
      variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
      className={`${active === id ? 'lg:flex-[1.25] flex-[1.05]' : 'lg:flex-[0.9] flex-[0.95]'} relative flex items-center justify-center min-w-[220px] h-[420px] cursor-pointer card-shadow transition-all duration-300`}
      onClick={() => handleClick(id)}
    >
      <div
        className="absolute top-0 left-0 z-10 bg-jetLight
      h-full w-full opacity-[0.5] rounded-[24px]"></div>

      <img
        src={image}
        alt={name}
        className="absolute w-full h-full object-cover rounded-[24px]"
      />

      {active !== id ? (
        <div className="flex items-center justify-start pr-[4.5rem]">
          <h3
            className="font-extrabold font-beckman uppercase w-[200px] h-[30px]
        whitespace-nowrap sm:text-[27px] text-timberWolf tracking-[1px]
        absolute z-0 lg:bottom-[7rem] lg:rotate-[-90deg] lg:origin-[0,0]
        leading-none z-20">
            {name}
          </h3>
        </div>
      ) : (
        <>
          <div
            className="absolute bottom-0 p-8 justify-start w-full
            flex-col bg-[rgba(122,122,122,0.5)] rounded-b-[24px] z-20">
            <div className="absolute inset-0 flex justify-end m-3">
              <div
                onClick={(e) => { e.stopPropagation(); window.open(repo, '_blank'); }}
                className="bg-night sm:w-11 sm:h-11 w-10 h-10 rounded-full
                  flex justify-center items-center cursor-pointer
                  sm:opacity-[0.9] opacity-[0.8]">
                <img
                  src={github}
                  alt="source code"
                  className="w-4/5 h-4/5 object-contain"
                />
              </div>
            </div>

            <h2
              className="font-bold sm:text-[32px] text-[24px]
              text-timberWolf uppercase font-beckman sm:mt-0 -mt-[1rem]">
              {name}
            </h2>
            <p
              className="text-silver sm:text-[14px] text-[12px]
              max-w-3xl sm:leading-[24px] leading-[18px]
              font-poppins tracking-[1px]">
              {description}
            </p>
            <div className="flex gap-3 sm:mt-[22px] mt-[16px]">
              <button
                className="live-demo flex justify-between
                sm:text-[16px] text-[14px] text-timberWolf
                font-bold font-beckman items-center py-5 pl-2 pr-3
                whitespace-nowrap gap-1 sm:w-[138px] sm:h-[50px]
                w-[125px] h-[46px] rounded-[10px] glassmorphism
                hover:bg-battleGray
                hover:text-eerieBlack transition duration-[0.2s]
                ease-in-out"
                onClick={(e) => {
                  e.stopPropagation();
                  if (demo) {
                    window.open(demo, '_blank');
                  } else {
                    if (onOpenComingSoon) onOpenComingSoon();
                  }
                }}
                onMouseOver={(e) => {
                  const icon = e.currentTarget.querySelector('.btn-icon');
                  if (icon) icon.setAttribute('src', pineappleHover);
                }}
                onMouseOut={(e) => {
                  const icon = e.currentTarget.querySelector('.btn-icon');
                  if (icon) icon.setAttribute('src', pineapple);
                }}>
                <img
                  src={pineapple}
                  alt="pineapple"
                  className="btn-icon sm:w-[34px] sm:h-[34px]
                    w-[30px] h-[30px] object-contain"
                />
                LIVE DEMO
              </button>
              <button
                className="view-code flex justify-between
                  sm:text-[16px] text-[14px] text-timberWolf
                  font-bold font-beckman items-center py-5 px-3
                  w-[140px] h-[46px] rounded-[10px] glassmorphism
                  hover:bg-battleGray hover:text-eerieBlack
                  transition duration-[0.2s] ease-in-out"
                onClick={(e) => { e.stopPropagation(); window.open(repo, '_blank'); }}
              >
                <img
                  src={github}
                  alt="github"
                  className="sm:w-[24px] sm:h-[24px] w-[20px] h-[20px] object-contain"
                />
                VIEW CODE
              </button>
            </div>
          </div>
        </>
      )}
    </motion.div>
  );
};

const Projects = () => {
  const [active, setActive] = useState('project-2');
  const [comingSoonOpen, setComingSoonOpen] = useState(false);

  return (
    <div className="-mt-[6rem]">
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>Case Studies</p>
        <h2 className={`${styles.sectionHeadTextLight}`}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className="mt-4 text-taupe text-[18px] max-w-4xl leading-[30px]">
          These projects demonstrate my expertise with practical examples of
          some of my work, including brief descriptions and links to code
          repositories and live demos. They showcase my ability to tackle
          intricate challenges, adapt to various technologies, and efficiently
          oversee projects.
        </motion.p>
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}>
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {projects.slice(0, 3).map((project, index) => (
            <ProjectCard
              key={project.id}
              index={index}
              {...project}
              active={active}
              handleClick={setActive}
              onOpenComingSoon={() => setComingSoonOpen(true)}
            />
          ))}
        </div>
      </motion.div>
      {comingSoonOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50">
          <div role="dialog" aria-modal="true" className="bg-white rounded-lg p-6 shadow-2xl w-[320px] text-center">
            <p className="text-lg font-semibold text-gray-900">준비중입니다 🚧</p>
            <p className="mt-2 text-sm text-gray-600">라이브 데모는 곧 공개될 예정입니다.</p>
            <button
              className="mt-4 px-4 py-2 rounded-md bg-gray-900 text-white hover:bg-gray-700 transition"
              onClick={() => setComingSoonOpen(false)}
            >
              닫기
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SectionWrapper(Projects, 'projects');
