function Shows({ shows, showsRef }) {
  const formatDate = (ISODateString) => {
    const [_date, _time] = new Date(ISODateString)
      .toLocaleString("en-us")
      .split(",");
    const date = new Date(_date).toLocaleDateString("en-us", {
      month: "short",
      day: "numeric",
    });
    const [time, _, period] = _time.split(":");
    return [date, `${time}:${period}`];
  };
  return (
    <section
      className={
        "h-screen bg-gradient-to-r from-black to-[#2d3436] text-light flex gap-2 flex-col justify-center items-center uppercase scroll-mt-14 text-center"
      }
      ref={showsRef}
    >
      <div className={"flex flex-col justify-evenly items-center gap-8 px-10"}>
        <h1 className={"text-5xl sm:text-6xl font-bold text-light mb-10"}>
          Upcoming Shows
        </h1>
        {shows.length > 0 ? (
          shows.map(({ datetime, venue }) => {
            const [date, period] = formatDate(datetime);
            return (
              <div
                key={venue}
                className={"flex flex-col justify-center items-center"}
              >
                <h2 className={"text-[1rem] md:text-2xl font-bold"}>{venue}</h2>
                <h2 className={"text-sm md:text-lg"}>
                  {date} &nbsp;|&nbsp; {period}
                </h2>
              </div>
            );
          })
        ) : (
          <div className={"flex flex-col justify-center items-center"}>
            <h1 className={"text-[1rem] md:text-2xl"}>
              Come back soon to check on the latest show dates!
            </h1>
          </div>
        )}
      </div>
    </section>
  );
}

export default Shows;
