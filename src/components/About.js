import React from 'react';
import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';


const About = () => {
    return (
        <section id="about" className="pt-36 pb-32">
            <div className="container">
                <div className="flex flex-wrap">
                    <div className="w-full px-4 mb-10 lg:w-1/2">
                        <h1 className="font-bold uppercase text-primary text-lg mb-3">About Me</h1>
                        <h2 className="font-bold text-dark text-3xl mb-5 max-w-md lg:text-4xl">Yuk jadi orang kaya dengan programming.</h2>
                        <p className="font-medium text-base text-secondary max-w-xl lg:text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus inventore facilis, fuga nostrum possimus officia.</p>
                    </div>
                    <div className="w-full px-4 lg:w-1/2">
                        <h3 className="font-semibold text-dark text-2xl mb-4 lg:text-3xl lg:pt-10">Let's be Friends!</h3>
                        <p className="font-medium text-base text-secondary mb-6 lg:text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima ducimus iure repellat, in nam voluptate aliquid enim suscipit, corrupti obcaecati fuga veritatis, sequi reiciendis fugit impedit error molestias facere nemo maiores dolorum ipsam! Deserunt quis assumenda veritatis veniam quae tenetur adipisci delectus! Consectetur itaque dolor reiciendis provident similique molestiae quisquam?</p>
                        <div className="flex items-center">
                            <a href="https://www.linkedin.com/in/teguh-ziliwu" aria-label="Linkedin" target="_blank" className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 text-slate-300 hover:border-primary hover:bg-primary hover:text-white" rel="noopener noreferrer">
                                <FaLinkedin />
                            </a>
                            <a href="https://www.instagram.com/teguh.ziliwu" aria-label="Instagram" target="_blank" className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 text-slate-300 hover:border-primary hover:bg-primary hover:text-white" rel="noopener noreferrer">
                                <FaInstagram />
                            </a>
                            <a href="https://github.com/TeguhZiliwu" aria-label="GitHub" target="_blank" className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 text-slate-300 hover:border-primary hover:bg-primary hover:text-white" rel="noopener noreferrer">
                                <FaGithub />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;