import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";

export default function Contact() {
    return (
        <section id="contact" className="bg-white py-20 dark:bg-gray-900">
            <div className="container px-6 py-12 mx-auto">
                <div data-aos="zoom-out-up" className="text-center">
                    <h1 className="text-6xl font-bold mb-10"><span className="text-[#00ff0d]">C</span>ontact me</h1>

                    <h1 className="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl dark:text-white">Get in touch</h1>

                    <p className="mt-3 text-gray-500 dark:text-gray-400">{"I'm always here to chat."}</p>
                </div>

                <div className="grid grid-cols-1 gap-12 mt-20 md:grid-cols-2 lg:grid-cols-3">
                    <div data-aos="fade-right" className="flex flex-col items-center justify-center text-center">
                        <span className="p-3 text-4xl text-stone-950 duration-500 hover:text-[#00ff0d] rounded-full bg-blue-100/80 dark:bg-gray-800">
                            <CiLinkedin />
                        </span>

                        <h2 className="mt-4 text-lg font-medium text-gray-800 dark:text-white">LinkedIn</h2>
                        <a href="https://www.linkedin.com/in/eka-nazhifan-75b116293/" className="mt-2 text-blue-500 dark:text-white">Eka Syafrino Nazhifan</a>
                    </div>

                    <div data-aos="fade-down" className="flex flex-col items-center justify-center text-center">
                        <span className="p-3 text-4xl text-stone-950 duration-500 hover:text-[#00ff0d] rounded-full bg-blue-100/80 dark:bg-gray-800">
                            <MdOutlineEmail />
                        </span>
                        <h2 className="mt-4 text-lg font-medium text-gray-800 dark:text-white">Email</h2>
                        <a href="mailto:bloodsuker18@gmail.com" className="mt-2 text-blue-500 dark:text-white">bloodsuker18@gmail.com</a>
                    </div>

                    <div data-aos="fade-left" className="flex flex-col items-center justify-center text-center">
                        <span className="p-3 text-4xl text-stone-950 duration-500 hover:text-[#00ff0d] rounded-full bg-blue-100/80 dark:bg-gray-800">
                            <FaWhatsapp />
                        </span>
                        <h2 className="mt-4 text-lg font-medium text-gray-800 dark:text-white">WhatsApp</h2>
                        <a href="https://wa.me/6282329426612" target="_blank" className="mt-2 text-blue-500 dark:text-white">+6282329426612</a>
                    </div>
                </div>
            </div>
        </section>
    )
};    