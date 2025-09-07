import { motion } from 'framer-motion';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';
import { styles } from '../styles';
import { textVariant } from '../utils/motion';

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubTextLight}>My skills</p>
        <h2 className={styles.sectionHeadTextLight}>Technologies.</h2>
      </motion.div>

        <div className="flex flex-wrap justify-center gap-10 mt-14 bg-white/50 rounded-lg p-6">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <img
              src={technology.icon}
              alt={technology.name}
              loading="lazy"
              className="w-full h-full object-contain"
              title={technology.name}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, '');
