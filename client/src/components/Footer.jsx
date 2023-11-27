

import { Footer } from 'flowbite-react';
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';
//import logo from '../assets/logo.jpeg'
//import { Box } from "@mui/material";
const jose = new URL("../assets/logo.jpeg", import.meta.url).href;
//const jos = new URL("../assets/gg.jpg", import.meta.url).href;



const  Footerm = ()=> {
 
    return (
        <Footer container>
          <div className="w-full bg-slate-900">
            <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
              <div>
                <Footer.Brand
                  href="/"
                  src={jose}
                  alt="PIXELNNOVATE"
                  name="Pixellnovate"
                />
              </div>
              <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
                <div>
                  <Footer.Title title="about" />
                  <Footer.LinkGroup col>
                    <Footer.Link href="#">About Us</Footer.Link>
                    <Footer.Link href="#">REACT</Footer.Link>
                  </Footer.LinkGroup>
                </div>
                <div>
                  <Footer.Title title="Follow us" />
                  <Footer.LinkGroup col>
                    <Footer.Link href="#">Github</Footer.Link>
                    <Footer.Link href="#">Discord</Footer.Link>
                  </Footer.LinkGroup>
                </div>
                <div>
                  <Footer.Title title="Legal" />
                  <Footer.LinkGroup col>
                    <Footer.Link href="#">Privacy Policy</Footer.Link>
                    <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
                  </Footer.LinkGroup>
                </div>
              </div>
            </div>
            <Footer.Divider />
            <div className="w-full sm:flex sm:items-center sm:justify-between">
              <Footer.Copyright href="#" by="Pixellnovate™" year={2023} />
              <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                <Footer.Icon href="#" icon={BsFacebook} />
                <Footer.Icon href="#" icon={BsInstagram} />
                <Footer.Icon href="#" icon={BsTwitter} />
                <Footer.Icon href="#" icon={BsGithub} />
                <Footer.Icon href="#" icon={BsDribbble} />
              </div>
            </div>
          </div>
        </Footer>
  );
}
export default Footerm
