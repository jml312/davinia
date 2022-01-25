import client from "lib/client";
import Head from "next/head";
import Navigation from "components/Navigation";
import Home from "components/Home";
import Video from "components/Video";
import Shows from "components/Shows";
import Media from "components/Media";
import Social from "components/Social";
import Footer from "components/Footer";
import { useRef } from "react";

export default function Index({
  homeSection,
  videoSection,
  showsSection,
  mediaSection,
  socialSection,
}) {
  const homeRef = useRef();
  const videoRef = useRef();
  const showsRef = useRef();
  const mediaRef = useRef();
  const socialRef = useRef();
  return (
    <>
      <Head>
        <title>DAVINIA</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair Display:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main>
        <Navigation
          homeRef={homeRef}
          videoRef={videoRef}
          showsRef={showsRef}
          mediaRef={mediaRef}
          socialRef={socialRef}
        />
        <Home
          image={homeSection.image}
          bio={homeSection.bio}
          homeRef={homeRef}
        />
        <Shows shows={showsSection.shows} showsRef={showsRef} />
        <Video videos={videoSection.videos} videoRef={videoRef} />
        <Media media={mediaSection.media} mediaRef={mediaRef} />
        <Social socialRef={socialRef} instagram={socialSection.instagram} />
        <Footer />
      </main>
    </>
  );
}

export async function getServerSideProps() {
  const content = await client.fetch(`
    *[_type == "content"][0]{
      homeSection{
        bio,
        'image': image.asset._ref
      },
      videoSection{
        videos[]{
          title,
          url,
          'image': image.asset._ref
        }
      },
      showsSection{
        shows[]{
          datetime,
          venue
        }
      },
      mediaSection{
        media[]{
          caption,
          publisher,
          url,
        }
      },
      socialSection{
        instagram[]{
          url,
          'image': image.asset._ref
        }
      }
    }
  `);
  return {
    props: {
      ...content,
    },
  };
}
