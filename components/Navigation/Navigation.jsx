import { AiOutlineInstagram, AiFillYoutube } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { BsSpotify } from "react-icons/bs";
import { HiMail } from "react-icons/hi";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useMediaQuery } from "react-responsive";

function Navigation({ homeRef, videoRef, showsRef, mediaRef, socialRef }) {
  const [navOpen, setNavOpen] = useState(false);
  const [atTop, setAtTop] = useState(true);
  const isMobile = useMediaQuery({ query: "(max-width: 640px)" });
  useEffect(() => {
    if (!isMobile) {
      setNavOpen(false);
      window.addEventListener("scroll", () => {
        if (window.scrollY > 90) {
          setAtTop(false);
        } else {
          setAtTop(true);
        }
      });
    }
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, [isMobile]);
  return (
    <>
      {/* Desktop */}
      <nav
        className={
          "hidden sm:flex flex-col justify-center items-center bg-light text-dark text-center sm:absolute py-5 left-0 right-0 top-0 uppercase z-50"
        }
      >
        <div className={"flex justify-center items-center gap-6 text-lg mb-3"}>
          <a href="" target="_blank">
            <AiFillYoutube />
          </a>
          <a href="" target="_blank">
            <BsSpotify />
          </a>
          <a href="" target="_blank">
            <AiOutlineInstagram />
          </a>
          <a href="" target="_blank">
            <FaFacebookF />
          </a>
          <a href="" target="_blank">
            <HiMail />
          </a>
        </div>
        <div className={"flex justify-center items-center gap-6 font-bold"}>
          <a
            onClick={() =>
              showsRef.current.scrollIntoView({ behavior: "smooth" })
            }
            className={
              "text-sm cursor-pointer relative before:content-[''] before:absolute before:-my-0.5 before:w-full before:h-0.5 before:bottom-0 before:bg-linkUnderline before:invisible before:transition-all before:duration-300 before:ease-in-out before:scale-x-0 before:hover:visible before:hover:scale-x-100"
            }
          >
            Shows
          </a>
          <a
            onClick={() =>
              videoRef.current.scrollIntoView({ behavior: "smooth" })
            }
            className={
              "text-sm cursor-pointer relative before:content-[''] before:absolute before:-my-0.5 before:w-full before:h-0.5 before:bottom-0 before:bg-linkUnderline before:invisible before:transition-all before:duration-300 before:ease-in-out before:scale-x-0 before:hover:visible before:hover:scale-x-100"
            }
          >
            Video
          </a>
          <h1
            onClick={() => {
              if (!atTop) {
                homeRef.current.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className={`text-4xl tracking-wide ${
              atTop ? "cursor-default" : "cursor-pointer"
            }`}
          >
            Davinia
          </h1>
          <a
            onClick={() =>
              mediaRef.current.scrollIntoView({ behavior: "smooth" })
            }
            className={
              "text-sm cursor-pointer relative before:content-[''] before:absolute before:-my-0.5 before:w-full before:h-0.5 before:bottom-0 before:bg-linkUnderline before:invisible before:transition-all before:duration-300 before:ease-in-out before:scale-x-0 before:hover:visible before:hover:scale-x-100"
            }
          >
            Media
          </a>
          <a
            onClick={() =>
              socialRef.current.scrollIntoView({ behavior: "smooth" })
            }
            className={
              "text-sm cursor-pointer relative before:content-[''] before:absolute before:-my-0.5 before:w-full before:h-0.5 before:bottom-0 before:bg-linkUnderline before:invisible before:transition-all before:duration-300 before:ease-in-out before:scale-x-0 before:hover:visible before:hover:scale-x-100"
            }
          >
            Social
          </a>
        </div>
      </nav>

      <AnimatePresence>
        {!atTop && (
          <motion.nav
            initial={{ opacity: 0, y: -25 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -25 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className={
              "hidden sm:flex flex-col justify-center items-center bg-gradient-to-t from-[rgba(235,232,216,0)] to-[rgba(235,232,216,1)] text-dark text-center fixed pt-3 pb-8 left-0 right-0 top-0 uppercase z-50"
            }
          >
            <div className={"flex justify-center items-center gap-6 font-bold"}>
              <a
                onClick={() =>
                  showsRef.current.scrollIntoView({ behavior: "smooth" })
                }
                className={
                  "text-[0.8rem] cursor-pointer relative before:content-[''] before:absolute before:-my-0.5 before:w-full before:h-0.5 before:bottom-0 before:bg-linkUnderline before:invisible before:transition-all before:duration-300 before:ease-in-out before:scale-x-0 before:hover:visible before:hover:scale-x-100"
                }
              >
                Shows
              </a>
              <a
                onClick={() =>
                  videoRef.current.scrollIntoView({ behavior: "smooth" })
                }
                className={
                  "text-[0.8rem] cursor-pointer relative before:content-[''] before:absolute before:-my-0.5 before:w-full before:h-0.5 before:bottom-0 before:bg-linkUnderline before:invisible before:transition-all before:duration-300 before:ease-in-out before:scale-x-0 before:hover:visible before:hover:scale-x-100"
                }
              >
                Video
              </a>
              <h1
                onClick={() =>
                  homeRef.current.scrollIntoView({ behavior: "smooth" })
                }
                className={
                  "text-xl cursor-pointer tracking-wide relative before:content-[''] before:absolute before:-my-0.5 before:w-full before:h-0.5 before:bottom-0 before:bg-linkUnderline before:invisible before:transition-all before:duration-300 before:ease-in-out before:scale-x-0 before:hover:visible before:hover:scale-x-100"
                }
              >
                Davinia
              </h1>
              <a
                onClick={() =>
                  mediaRef.current.scrollIntoView({ behavior: "smooth" })
                }
                className={
                  "text-[0.8rem] cursor-pointer relative before:content-[''] before:absolute before:-my-0.5 before:w-full before:h-0.5 before:bottom-0 before:bg-linkUnderline before:invisible before:transition-all before:duration-300 before:ease-in-out before:scale-x-0 before:hover:visible before:hover:scale-x-100"
                }
              >
                Media
              </a>
              <a
                onClick={() =>
                  socialRef.current.scrollIntoView({ behavior: "smooth" })
                }
                className={
                  "text-[0.8rem] cursor-pointer relative before:content-[''] before:absolute before:-my-0.5 before:w-full before:h-0.5 before:bottom-0 before:bg-linkUnderline before:invisible before:transition-all before:duration-300 before:ease-in-out before:scale-x-0 before:hover:visible before:hover:scale-x-100"
                }
              >
                Social
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Mobile */}
      <nav
        className={`sm:hidden z-50 uppercase fixed top-0 w-full bg-gradient-to-t from-[rgba(235,232,216,0)] to-[rgba(235,232,216,1)]
        }`}
      >
        <div
          className={"w-full flex justify-between items-center px-5 pt-4 pb-10"}
        >
          <h1 className={"text-2xl font-bold"}>Davinia</h1>
          <div
            className={
              "relative cursor-pointer transition-all ease-in-out duration-500 w-10 h-6 rotate-0"
            }
            onClick={() => setNavOpen(!navOpen)}
          >
            <span
              className={`block absolute w-full h-1 left-0 rotate-0 transition-all ease-in-out duration-[250ms] bg-dark top-0 ${
                navOpen && "w-[0%] left-1/2 top-2.5"
              }`}
            ></span>
            <span
              className={`block absolute w-full h-1 left-0 rotate-0 transition-all ease-in-out duration-[250ms] bg-dark top-2.5 ${
                navOpen && "rotate-45"
              }`}
            ></span>
            <span
              className={`block absolute w-full h-1 left-0 rotate-0 transition-all ease-in-out duration-[250ms] bg-dark top-2.5 ${
                navOpen && "-rotate-45"
              }`}
            ></span>
            <span
              className={`block absolute w-full h-1 left-0 rotate-0 transition-all ease-in-out duration-[250ms] bg-dark top-5 ${
                navOpen && "w-[0%] left-1/2 top-2.5"
              }`}
            ></span>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {navOpen && (
          <motion.nav
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 25 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className={
              "h-screen flex flex-col justify-center items-center gap-1 text-4xl font-bold bg-light bg-opacity-80 z-40 fixed top-0 w-full"
            }
          >
            <a
              onClick={() => {
                homeRef.current.scrollIntoView({ behavior: "smooth" });
                setNavOpen(false);
              }}
              className={"cursor-pointer"}
            >
              Home
            </a>
            <a
              onClick={() => {
                showsRef.current.scrollIntoView({ behavior: "smooth" });
                setNavOpen(false);
              }}
              className={"cursor-pointer"}
            >
              Shows
            </a>
            <a
              onClick={() => {
                videoRef.current.scrollIntoView({ behavior: "smooth" });
                setNavOpen(false);
              }}
              className={"cursor-pointer"}
            >
              Video
            </a>
            <a
              onClick={() => {
                mediaRef.current.scrollIntoView({ behavior: "smooth" });
                setNavOpen(false);
              }}
              className={"cursor-pointer"}
            >
              Media
            </a>
            <a
              onClick={() => {
                socialRef.current.scrollIntoView({ behavior: "smooth" });
                setNavOpen(false);
              }}
              className={"cursor-pointer"}
            >
              Social
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navigation;
