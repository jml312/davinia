import urlFor from "lib/urlFor";
import Image from "next/image";
import { motion } from "framer-motion";

function Home({ image, bio, homeRef }) {
  return (
    <section
      className={
        "h-screen bg-light flex gap-2 flex-col justify-center items-center uppercase"
      }
      ref={homeRef}
    >
      <div
        className={
          "flex flex-col sm:flex-row-reverse justify-center items-center w-full h-full gap-y-12 sm:gap-y-0 gap-x-32 px-10"
        }
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.75, delay: 0.05 }}
          className={"relative w-3/4 xs:w-auto -translate-x sm:translate-x-0"}
        >
          <Image
            src={urlFor(image).url()}
            alt="Davinia"
            width={300}
            height={400}
            className={"object-cover rounded-sm z-20"}
          />
          <motion.span
            initial={{ opacity: 0, translateY: "0%", translateX: "0%" }}
            animate={{ opacity: 1, translateY: "11%", translateX: "11%" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className={
              "absolute right-0 w-full h-[95%] z-1 bg-neutral-500 sepia rounded-sm"
            }
          ></motion.span>
        </motion.div>
        <div className={"flex flex-col justify-center items-center gap-3"}>
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className={"text-3xl sm:text-5xl"}
          >
            Davinia
          </motion.h1>
          <motion.h4
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.05 }}
            className={"text-sm sm:text-[1rem]"}
          >
            {bio}
          </motion.h4>
        </div>
      </div>
    </section>
  );
}

export default Home;
