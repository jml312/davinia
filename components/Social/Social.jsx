import Instagram from "./Instagram";

function Social({ instagram, socialRef }) {
  return (
    <section
      className={
        "h-auto bg-light flex flex-col justify-center items-center uppercase scroll-mt-14"
      }
      ref={socialRef}
    >
      <h1 className={"text-5xl sm:text-6xl font-bold text-dark my-12"}>
        Social
      </h1>
      <div id={"images-wrapper"} className={"p-[1rem]"}>
        {instagram.map((ig, i) => (
          <Instagram key={i} {...ig} />
        ))}
      </div>
    </section>
  );
}

export default Social;
