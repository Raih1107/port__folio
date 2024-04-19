import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};
const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};

const Links = () => {
  const items = ["Homepage", "Services", "Portfolio", "Contact"];
  return (
    <>
      <motion.div className="links" variants={variants}>
        {items.map((item) => (
          <motion.a
            href={`#${item}`}
            key={item}
            variants={itemVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {item}
          </motion.a>
        ))}
        <motion.div variants={variants}>
          {}
          <motion.a
            variants={itemVariants}
            className="socials"
            href="https://github.com/Raih1107/"
            target="blank"
          >
            <FaGithub color="#000" size={40}></FaGithub>
          </motion.a>
          <motion.a
            variants={itemVariants}
            className="socials"
            href="https://www.linkedin.com/in/himanshu-rai-b4117a255/"
            target="blank"
          >
            <FaLinkedin color="#000" size={40}></FaLinkedin>
          </motion.a>
          <motion.a
            variants={itemVariants}
            className="socials"
            href="https://twitter.com/HimanshuRa927887/"
            target="blank"
          >
            <FaTwitter color="#000" size={40}></FaTwitter>
          </motion.a>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Links;
