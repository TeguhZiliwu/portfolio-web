import React from 'react';
import ProfilePict from '../assets/img/profile picture.png';

const Hero = () => {
    return (
        <section id="home" className="pt-36">
            <div className="container">
                <div className="flex flex-wrap">
                    <div className="w-full self-center px-4 lg:w-1/2">
                        <h1 className="text-base font-semibold text-primary md:text-xl">Hi 👋, I'm <span className="block font-bold text-4xl mt-1 text-dark lg:text-5xl"> Teguh Ziliwu</span></h1>
                        <h2 className="font-medium text-secondary text-lg mb-5 lg:text-2xl">Human & <span className="text-dark">Software Engineer</span>
                        </h2>
                        <p className="font-medium text-secondary mb-10 leading-relaxed">Programming is easy and fun, right? <span className="text-dark font-semibold">Of course not!</span></p>
                        <a href="contact" className="text-base font-semibold text-white bg-primary py-3 px-8 rounded-full hover:shadow-lg hover:opacity-70 transition duration-300 ease-in-out">Contact Me</a>
                    </div>
                    <div className="w-full self-end px-4 lg:w-1/2">
                        <div className="relative mt-10 lg:mt-9 lg:right-0">
                            <img src={ProfilePict} alt="Profile" className="max-w-full mx-auto" />
                            <span className="absolute bottom-0 -z-10 left-1/2 -translate-x-1/2 md:scale-25">
                                <svg height="400" width="400" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                                    <path fill="#14B8A6" d="M41,-31.7C48.8,-22.8,48,-6,46.4,14.6C44.9,35.1,42.7,59.5,29.5,68.8C16.3,78.1,-7.9,72.4,-29.5,61.8C-51.1,51.2,-70.1,35.7,-69.9,20.5C-69.8,5.2,-50.6,-9.9,-35.8,-20.5C-21,-31,-10.5,-36.9,3,-39.3C16.5,-41.7,33.1,-40.6,41,-31.7Z" transform="translate(100 100) scale(1.2)" />
                                </svg>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;