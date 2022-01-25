function Media({ media, mediaRef }) {
  return (
    <section
      className={
        "h-screen bg-gradient-to-r from-black to-[#2d3436] text-light flex gap-2 flex-col justify-center items-center uppercase scroll-mt-14 text-center"
      }
      ref={mediaRef}
    >
      <div className={"flex flex-col justify-evenly items-center gap-8"}>
        <h1 className={"text-5xl sm:text-6xl font-bold text-light mb-10"}>
          Media
        </h1>
        {media.map(({ caption, publisher, url }) => (
          <a
            href={url}
            className={
              "flex flex-col justify-center items-center text-center px-10"
            }
            target="_blank"
            rel="noreferrer"
            key={caption}
          >
            <h2
              className={
                "text-[1rem] md:text-2xl font-bold italic hover:underline"
              }
            >
              {caption}
            </h2>
            <h2 className={"text-sm md:text-lg"}>{publisher}</h2>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Media;
