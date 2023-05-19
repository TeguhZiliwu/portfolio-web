import React from 'react';
import ECapacityProjectPicture from '../assets/img/Portfolio/ECAPACITY Project.jpeg';
import DMSProjectPicture from '../assets/img/Portfolio/DMS Project.jpeg';

const Portfolio = () => {
    return (
        <section id="portfolio" className="pt-36 pb-16 bg-slate-100">
            <div className="container">
                <div className="w-full px-4">
                    <div className="max-w-xl mx-auto text-center mb-16">
                        <h4 className="font-semibold text-lg text-primary mb-2">Portfolio</h4>
                        <h2 className="font-bold text-dark text-3xl mb-4 sm:text-4xl lg:text-5xl">Project Terbaru</h2>
                        <p className="font-medium text-md text-secondary md:text-lg">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem accusamus perferendis, cum hic architecto nostrum ea. Nostrum tenetur deleniti sapiente natus! Natus soluta tempore laudantium odit quia delectus ad! Voluptatibus.</p>
                    </div>
                </div>

                <div className="w-full px-4 flex flex-wrap justity-center xl:w-10/12 xl:mx-auto">
                    <div className="mb-12 p-4 md:w-1/2">
                        <div className="rounded-md shadow-md overflow-hidden">
                            <img src={ECapacityProjectPicture} alt="Project DMS" width="w-full" />
                        </div>
                        <h3 className="font-semibold text-xl text-dark mt-5 mb-3">E-Capacity</h3>
                        <p className="font-medium text-base text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, facere error omnis natus labore animi quod et molestias similique laborum!</p>
                    </div>
                    <div className="mb-12 p-4 md:w-1/2">
                        <div className="rounded-md shadow-md overflow-hidden">
                            <img src={DMSProjectPicture} alt="E-Capacity DMS" width="w-full" />
                        </div>
                        <h3 className="font-semibold text-xl text-dark mt-5 mb-3">Document Management System (DMS)</h3>
                        <p className="font-medium text-base text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, facere error omnis natus labore animi quod et molestias similique laborum!</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;