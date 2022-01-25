import Image from "next/image";
import urlFor from "lib/urlFor";

function Instagram({ image, url }) {
  return (
    <a href={url} target="_blank" rel="noreferrer">
      <Image
        src={urlFor(image).url()}
        alt="Instagram"
        width={400}
        height={500}
        className={
          "object-cover hover:scale-110 transition-all ease-in-out duration-[600ms]"
        }
      />
    </a>
  );
}

export default Instagram;
