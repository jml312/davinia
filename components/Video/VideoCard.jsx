import Image from "next/image";
import urlFor from "lib/urlFor";
import { FaPlay } from "react-icons/fa";
import { motion } from "framer-motion";

function VideoCard({ title, image, url, _videoRef, setActiveVideo }) {
  const variants = {
    rest: {
      opacity: 0,
    },
    hover: {
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeInOut",
      },
    },
  };
  return (
    <motion.div
      className={"relative cursor-pointer group"}
      initial="rest"
      whileHover="hover"
      onClick={() => {
        setActiveVideo(url);
        _videoRef.current.scrollIntoView({
          behavior: "smooth",
        });
      }}
    >
      <FaPlay
        className={
          "text-2xl absolute top-0 left-0 right-0 bottom-0 m-auto z-30 -translate-x-1/2 text-light"
        }
      />
      <Image
        src={urlFor(image).url()}
        alt={title}
        width={1600}
        height={900}
        className={`object-cover grayscale-[40%]`}
      />
      <motion.h2
        variants={variants}
        className={"text-lg italic text-dark text-center"}
      >
        {title}
      </motion.h2>
    </motion.div>
  );
}

export default VideoCard;
