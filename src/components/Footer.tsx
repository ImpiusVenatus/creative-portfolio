import { MoveUpRight } from 'lucide-react';
import React from 'react';

const currentYear = new Date().getFullYear();

const Footer: React.FC = () => {
  return (
    <div className="bg-[#C9D0D5] py-16">
        <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-between items-start">
            <div className="w-full md:w-1/3 mb-8 md:mb-0">
                <h2 className="text-3xl font-bold mb-4">We would love to hear from you.</h2>
                <p className="text-gray-600 mb-6">Feel free to reach out if you want to collaborate with us, or simply have a chat.</p>
                <button className="bg-white text-black px-4 py-2 rounded-full shadow hover:bg-gray-100 transition">
                Become a Client <span className="ml-2">→</span>
                </button>
                <p className="mt-4 text-gray-600">Don’t like the forms? Drop us a line via email.</p>
                <p className="text-black font-bold">info@awsmd.com</p>
            </div>

            <div className="w-full md:w-1/3 mb-8 md:mb-0">
                <h3 className="text-lg font-semibold mb-4">Contact us</h3>
                <p className="text-[#64686a]">Our Email</p>
                <p className="text-[#64686a] pb-4">info@hunky.com</p>
                <p className="text-[#64686a]">Our Phone</p>
                <p className="text-[#64686a] pb-4">+1(234)567-89-01</p>
                <p className="text-[#64686a]">House-105, Banani, San Fransisco, Dhaka</p>
            </div>

            <div className="w-full md:w-1/6 mb-8 md:mb-0">
                <h3 className="text-lg font-semibold mb-2">Follow us</h3>
                <ul className="text-[#64686a] space-y-4">
                <li className="flex items-center space-x-1">
                    <span>dribbble</span> <MoveUpRight />
                </li>
                <li className="flex items-center space-x-1">
                    <span>linkedin</span> <MoveUpRight />
                </li>
                <li className="flex items-center space-x-1">
                    <span>clutch</span> <MoveUpRight />
                </li>
                <li className="flex items-center space-x-1">
                    <span>instagram</span> <MoveUpRight />
                </li>
                </ul>
            </div>

            <div className="w-full md:w-1/6">
                <h3 className="text-lg font-semibold mb-2">Services</h3>
                <ul className="text-[#64686a] space-y-4">
                <li>Mobile development</li>
                <li>Web development</li>
                <li>Solid design solutions</li>
                <li>About</li>
                <li>Development</li>
                <li>Blog</li>
                <li>Reviews</li>
                </ul>
            </div>
            </div>

            <div className="mt-16 flex justify-between items-center text-gray-600">
            <p>© Hunky {currentYear}. All rights reserved • <span className="underline cursor-pointer">Privacy Policy</span></p>
            <p className="flex items-center space-x-1">
                <span>Back to the top</span> <span>↑</span>
            </p>
            </div>
        </div>
    </div>
  );
};

export default Footer;
