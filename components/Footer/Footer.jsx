import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiFillYoutube,
} from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { BsSpotify } from "react-icons/bs";
import { HiMail } from "react-icons/hi";

function Footer() {
  return (
    <footer
      className={
        "h-auto bg-light flex flex-col justify-center items-center gap-3 uppercase p-8"
      }
    >
      <div className={"flex justify-center items-center gap-6 text-lg"}>
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
    </footer>
  );
}

export default Footer;
