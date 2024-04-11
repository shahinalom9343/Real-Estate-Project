import { Link } from "react-router-dom";
import { FaTwitter, FaFacebook, FaYoutube } from "react-icons/fa";
const Footer = () => {
  return (
    <div>
      <footer className="footer px-6 py-2 lg:px-16 lg:py-6 bg-base-200 text-base-content bottom-0">
        <nav>
          <h5 className="footer-title">Services</h5>
          <a className="link link-hover">Branding</a>
          <Link to="/" className="link link-hover">
            Design
          </Link>

          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h5 className="footer-title">Company</h5>
          <Link to="/about" className="link link-hover">
            About us
          </Link>
          <Link to="/contact" className="link link-hover">
            Contact
          </Link>
          <a className="link link-hover">Carrer</a>
        </nav>
        <nav>
          <h5 className="footer-title">Legal</h5>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
      <footer className="footer px-4 lg:px-16 py-1 lg:py-4 border-t bg-base-200 text-base-content border-base-300">
        <aside className="items-center grid-flow-col">
          <img src={"/public/building.png"} className="h-\7 w-7" alt="" />
          <p>
            <span className="text-orange-500 font-bold text-base">
              Axis Commercial
            </span>{" "}
            | Where dream becomes reality <br />
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
