import React from 'react';
import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-dark pt-24 pb-12">
            <div className="container">
                <div className="flex flex-wrap">
                    <div className="w-full px-4 mb-12 text-slate-300 font-medium md:w-1/3">
                        <h2 className="font-bold text-4xl text-white mb-5">PT. Celindo Pratama</h2>
                        <h3 className="font-bold text-2xl mb-2">Hubungi Kami</h3>
                        <p>teguh.ziliwu@gmail.com</p>
                        <p>Ruko Batu Batam Permai</p>
                        <p>Blok 2 No 3, Baloi</p>
                        <p>Batam</p>
                    </div>
                    <div className="w-full px-4 mb-12 md:w-1/3">
                        <h3 className="font-semibold text-xl text-white mb-5">Kategori Tulisan</h3>
                        <ul className="text-slate-300">
                            <li>
                                <a href="" className="inline-block text-base hover:text-primary mb-3">Programming</a>
                            </li>
                            <li>
                                <a href="" className="inline-block text-base hover:text-primary mb-3">Teknologi</a>
                            </li>
                            <li>
                                <a href="" className="inline-block text-base hover:text-primary mb-3">Gaya Hidup</a>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full px-4 mb-12 md:w-1/3">
                        <h3 className="font-semibold text-xl text-white mb-5">Tautan</h3>
                        <ul className="text-slate-300">
                            <li>
                                <a href="#home" className="inline-block text-base hover:text-primary mb-3">Home</a>
                            </li>
                            <li>
                                <a href="#about" className="inline-block text-base hover:text-primary mb-3">About</a>
                            </li>
                            <li>
                                <a href="#portfolio" className="inline-block text-base hover:text-primary mb-3">Portfolio</a>
                            </li>
                            <li>
                                <a href="#client" className="inline-block text-base hover:text-primary mb-3">Clients</a>
                            </li>
                            <li>
                                <a href="#contact" className="inline-block text-base hover:text-primary mb-3">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="w-full pt-10 border-t border-slate-700">
                    <div className="flex items-center justify-center mb-5">
                        <a href="https://www.linkedin.com/in/teguh-ziliwu" target="_blank" className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 text-slate-300 hover:border-primary hover:bg-primary hover:text-white" rel="noopener noreferrer" aria-label="Linkedin">
                            <FaLinkedin />
                        </a>
                        <a href="https://www.instagram.com/teguh.ziliwu" target="_blank" className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 text-slate-300 hover:border-primary hover:bg-primary hover:text-white" rel="noopener noreferrer" aria-label="Instagram">
                            <FaInstagram />
                        </a>
                        <a href="www.linkedin.com/in/teguh-ziliwu" target="_blank" className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 text-slate-300 hover:border-primary hover:bg-primary hover:text-white" aria-label="GitHub">
                            <FaGithub />
                        </a>
                    </div>
                    <p className="font-medium text-xs text-slate-500 text-center">Dibuat dengan <span className="text-pink-500">❤</span> oleh <a href="https://www.instagram.com/teguh.ziliwu" target="_blank" className="font-bold text-primary" rel="noreferrer noopener">Teguh Ziliwu</a>, menggunakan <a href="https://react.dev/" target="_blank" className="text-[#61DAFB]" rel="noreferrer noopener">ReactJS</a> & <a href="https://tailwindcss.com" target="_blank" className="font-bold text-sky-500" rel="noreferrer noopener">Tailwind</a>.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;