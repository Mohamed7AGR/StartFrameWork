import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";

export default function Footer() {
  return (
    <>
      <footer className=" text-white  ">
        <div className="grid  md:grid-cols-3 gap-4 bg-main py-6 mx-auto text-center">
          <div>
            <h1 className="text-3xl font-bold">LOCATION</h1>
            <p>2215 John Daniel Drive</p>
            <p>Clark, MO 65243</p>
          </div>
          <div>
            <h1 className="text-3xl font-bold">AROUND THE WEB</h1>
            <ul className="flex justify-center gap-7 mt-2">
              <li className="border rounded-full p-2">
                <FaFacebookF />
              </li>
              <li className="border rounded-full p-2">
                <IoLogoYoutube />
              </li>
              <li className="border rounded-full p-2">
                <FaTwitter />
              </li>
              <li className="border rounded-full p-2">
                <FaLinkedinIn />
              </li>
            </ul>
          </div>
          <div>
            <h1 className="text-3xl font-bold">ABOUT FREELANCER</h1>
            <p>Freelance is a free to use, licensed Bootstrap theme created </p>
            <p>by Route</p>
          </div>
        </div>
        <div className=" bg-gray-900 py-6 mx-auto text-center">
          <p> Copyright &copy; Your Website 2021</p>
        </div>
      </footer>
    </>
  );
}
