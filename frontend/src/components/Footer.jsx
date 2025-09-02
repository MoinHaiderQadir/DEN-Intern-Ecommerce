import React from "react";
import { assets } from "../assets/frontend_assets/assets";

const Footer = () =>{
    return(
        <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
            <div>
                <img src={assets.logo} className="mb-5 w-32" alt="" />
                <p className="w-full md:w-2/3 text-gray-600">
                Lorem ipsum is the most well known filler text and comes from various passages of a book from Cicero, written in 45 BC.
                </p>
            </div>

            <div>
                <p className="text-xl font-medium md-5">COMPANY</p>
                <ul className="flex flex-col gap-1 text-gray-600">
                    <li>Home</li>
                    <li>About</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>

            <div>
                <p className="text-xl font-medium md-5">GET IN TOUCH</p>
                <ul className="flex flex-col gap-1 text-gray-600">
                    <li>+92333957848</li>
                    <li>haidermoin367@gmail.com</li>
                </ul>
            </div>

            <div>
                <hr />
                <p className="py-5 text-sm text-center">Copyright 2025@ ghdero.com - All Right reserved</p>
            
            </div>

        </div>
    )
}
export default Footer