import { Link } from "react-router-dom";
import { FaTwitter, FaFacebook, FaYoutube } from "react-icons/fa";
const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-base-200 text-base-content bottom-0">
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
      <footer className="footer px-10 py-4 border-t bg-base-200 text-base-content border-base-300">
        <aside className="items-center grid-flow-col">
          <img src={"/public/building.png"} className="h-\7 w-7" alt="" />
          <p>
            Where dream becomes reality <br />
            Copyright &copy; reserved 2024.
          </p>
        </aside>
        <nav className="md:place-self-center md:justify-self-end">
          <div className="grid grid-flow-col gap-4">
            <Link className="text-3xl">
              <FaTwitter></FaTwitter>
            </Link>
            <Link className="text-3xl">
              <FaFacebook></FaFacebook>
            </Link>
            <Link className="text-3xl">
              <FaYoutube></FaYoutube>
            </Link>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
