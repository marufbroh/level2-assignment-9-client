/* eslint-disable react/jsx-no-undef */
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import FooterLogo from "@/assets/footerLogo-removebg-preview.png";
import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="bg-[rgb(242,246,252)]">
      <div className="footer p-10  bg-[rgb(242,246,252)] text-base-content">
        <aside>
        <Link href='/'>
        <span className="   flex items-center justify-center md:gap-2">    
              <Image src={FooterLogo} alt="logo" width={50} height={50}/>        
          <span  className="  font-bold md:mt-1 rancho-regular text-2xl font3rem"><span  className="text-red-500">Pet</span> Harmony</span>
        </span>
        </Link>
          <p className="text-md font-semibold footer-title">
           Pet Harmony care Ltd.
            <br />
            Providing pet care since 2012
          </p>
          <div className="social-icons flex gap-[2rem]">
            <a href="#" className="social-icon text-[#FF7D5A]">
              <FaFacebookF style={{ fontSize: "2rem" }} />
            </a>
            <a href="#" className="social-icon text-[#FF7D5A] ">
              <FaTwitter style={{ fontSize: "2rem" }} />
            </a>
            <a href="#" className="social-icon text-[#FF7D5A] ">
              <FaInstagram style={{ fontSize: "2rem" }} />
            </a>
          </div>
        </aside>
        <nav>
          <a href="/privacy-policy" className="link link-hover footer-title">
            Privacy Policy
          </a>
          <a href="/terms-of-service" className="link link-hover">
            Terms of Service
          </a>
          <a href="mailto:petharmony@gmail.com" className="link link-hover">
            Contact: petharmony@gmail.com
          </a>
          
        </nav>

        <nav>
          <h6 className="footer-title">Pet Care</h6>
          <a className="link link-hover">Dog Care</a>
          <a className="link link-hover">Cat Care</a>
          <a className="link link-hover">Small Pet Care</a>
        </nav>
        <nav>
          <h6 className="footer-title">Pet Health</h6>
          <a className="link link-hover">Dog Health</a>
          <a className="link link-hover">Cat Health</a>
          <a className="link link-hover">Small Pet Health</a>
        </nav>

        <nav>
          <h6 className="footer-title">
            Pet Behavior & <br /> Training
          </h6>
          <a className="link link-hover">
            Dog Behavior & <br /> Training
          </a>
          <a className="link link-hover">
            Cat Behavior & <br /> Training
          </a>
          <a className="link link-hover">
            Small Pet Behavior & <br /> Training
          </a>
        </nav>
        <nav>
          <h6 className="footer-title">
            Pet Adoption & <br /> Breeds
          </h6>
          <a className="link link-hover">Breed Guide</a>
          <a className="link link-hover">Dog Breeds</a>
          <a className="link link-hover">Cat Breeds</a>
          <a className="link link-hover">Small Pet Breeds</a>
        </nav>
      </div>

      <div className="footer footer-center p-4 text-base-content">
        <aside>
          <p>Copyright © 2024 - All right reserved by Pet Harmony care Ltd</p>
        </aside>
      </div>
    </footer>
  );
};

export default Footer;
