import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';
import headshot from '../assets/personal/headshot.jpg';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <motion.div
      variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
      className="xs:w-[250px] w-full card-gradient p-[1px] rounded-[20px] shadow-card">
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-jetLight rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />
        <h3 className="text-taupe text-[18px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  );
};

const About = () => {
  return (
    <div className="-mt-[6rem]">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <div className="mt-4 flex flex-col md:flex-row items-start gap-8">
        <img
          src={headshot}
          alt="Rachel Yun headshot"
          className="w-40 h-50 rounded-xl object-cover ring ring-white/20 shadow-md flex-shrink-0"
        />
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className="text-taupe text-[18px] leading-[30px] md:max-w-4xl"
        >
            With a background in banking, English education, and logistics,
            I have cultivated strong problem-solving and communication skills that now enhance my approach to
            software development. Transitioning into full-stack development, I have built projects such as a
            Smart Parking System, Cafe Kiosk, and Movie Reservation System, applying technologies like
            React, Java, Spring Boot, and MariaDB. My English major also enables me to collaborate effectively
            in global teams and access diverse technical resources. I am preparing for a Full-Stack Developer role,
            where I aim to design user-friendly interfaces and build reliable backend systems that improve both
            user experience and business efficiency.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, 'about');
