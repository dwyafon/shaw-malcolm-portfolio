import Link from "next/link";
import { AiOutlineLinkedin, AiOutlineGithub } from "react-icons/ai";
import { IconContext } from "react-icons";

const Footer = () => {
  return (
    <div className="footer flex flex-col sm:p-3 sm:items-center lg:items-end lg:fixed lg:bottom-0 lg:bg-charcoal lg:opacity-90">
      <IconContext.Provider value={{ size: "1.5rem" }}>
        <div className="icons flex mb-2 lg:mb-1 space-x-6 lg:space-x-2">
          <a
            href="https://www.linkedin.com/in/shawmalcolm/"
            referrerPolicy="no-referrer"
            target="_blank"
          >
            <AiOutlineLinkedin className="" />
          </a>
          <a
            href="https://github.com/dwyafon"
            referrerPolicy="no-referrer"
            target="_blank"
          ></a>

          <AiOutlineGithub className="" />
        </div>
      </IconContext.Provider>

      <div className="mb-1">
        <ul className="flex text-sm">
          <Link href="/">
            <a className="mx-2 anchor">Home</a>
          </Link>
          |
          <Link href="/projects">
            <a className="mx-2 anchor">Projects</a>
          </Link>
          |
          <Link href="/blog">
            <a className="mx-2 lg:mr-0 anchor">Blog</a>
          </Link>
        </ul>
      </div>
      <div className="text-sm">
        Copyright &copy; {new Date().getFullYear()} Shaw Malcolm
      </div>
    </div>
  );
};

export default Footer;
