import { useState, useRef } from "react";
import VideoCard from "./VideoCard";
import { motion } from "framer-motion";

function Video({ videos, videoRef }) {
  const [activeVideo, setActiveVideo] = useState(videos[0].url);
  const [showMore, setShowMore] = useState(false);
  const _videoRef = useRef();
  return (
    <section
      className={
        "h-auto flex flex-col justify-center items-center uppercase bg-light pb-10 scroll-mt-14"
      }
      ref={videoRef}
    >
      <h1 className={"text-5xl sm:text-6xl font-bold my-16 text-dark"}>
        Video
      </h1>
      <iframe
        className={"w-4/5 aspect-video mb-5 scroll-m-20"}
        title="video"
        src={activeVideo}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        ref={_videoRef}
      />
      <div
        className={"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-4/5"}
      >
        {videos
          .slice(0, showMore ? videos.length : 6)
          .map(({ title, image, url }) => (
            <VideoCard
              key={title}
              title={title}
              image={image}
              url={url}
              setActiveVideo={setActiveVideo}
              _videoRef={_videoRef}
            />
          ))}
      </div>
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => {
          if (showMore) {
            setShowMore(false);
            _videoRef.current.scrollIntoView({ behavior: "smooth" });
          } else {
            setShowMore(true);
          }
        }}
        className={
          "font-semibold text-black rounded-sm bg-light p-2 brightness-[1.1] shadow-xl"
        }
      >
        {showMore ? "Show Fewer Videos" : "Load More Videos"}
      </motion.button>
    </section>
  );
}

export default Video;
