import React from 'react';

const Blog = () => {
    return (
        <section id="blog" className="pt-36 pb-32 bg-slate-100">
            <div className="container">
                <div className="w-full px-4">
                    <div className="max-w-xl mx-auto text-center mb-16">
                        <h4 className="font-semibold text-lg text-primary mb-2">Blog</h4>
                        <h2 className="font-bold text-dark text-3xl mb-4 sm:text-4xl lg:text-5xl">Tulisan Terkini</h2>
                        <p className="font-medium text-md text-secondary md:text-lg">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius similique a ex rerum assumenda! Aperiam..</p>
                    </div>
                </div>
                <div className="flex flex-wrap">
                    <div className="w-full px-4 lg:w-1/2 xl:w-1/3">
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-10">
                            <img src="https://source.unsplash.com/360x200?programming" alt="Programming" className="w-full" />
                            <div className="py-8 px-6">
                                <h3>
                                    <a href="#" className="block mb-3 font-semibold text-xl text-dark hover:text-primary truncate">Tips Belajar Programming</a>
                                </h3>
                                <p className="font-medium text-base text-secondary mb-6">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores ducimus quidem ut accusamus tempora eos odio reiciendis temporibus, et ab?</p>
                                <a href="#" className="font-medium text-sm text-white bg-primary py-2 px-4 rounded-lg hover:opacity-70 ">Baca Selengkapnya</a>
                            </div>
                        </div>
                    </div>
                    <div className="w-full px-4 lg:w-1/2 xl:w-1/3">
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-10">
                            <img src="https://source.unsplash.com/360x200?mechanical+keyboard" alt="Keyboard" className="w-full" />
                            <div className="py-8 px-6">
                                <h3>
                                    <a href="#" className="block mb-3 font-semibold text-xl text-dark hover:text-primary truncate">Keyboard Gaming Zaman Now</a>
                                </h3>
                                <p className="font-medium text-base text-secondary mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae pariatur corrupti quisquam voluptate, corporis, fugit, non odio porro cupiditate ipsam qui possimus adipisci cumque doloremque?</p>
                                <a href="#" className="font-medium text-sm text-white bg-primary py-2 px-4 rounded-lg hover:opacity-70 ">Baca Selengkapnya</a>
                            </div>
                        </div>
                    </div>
                    <div className="w-full px-4 lg:w-1/2 xl:w-1/3">
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-10">
                            <img src="https://source.unsplash.com/360x200?sky" alt="Sky" className="w-full" />
                            <div className="py-8 px-6">
                                <h3>
                                    <a href="#" className="block mb-3 font-semibold text-xl text-dark hover:text-primary truncate">Beautiful Sky</a>
                                </h3>
                                <p className="font-medium text-base text-secondary mb-6">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut sint laboriosam, eaque libero consequatur alias. Iusto placeat odit dolore architecto.</p>
                                <a href="#" className="font-medium text-sm text-white bg-primary py-2 px-4 rounded-lg hover:opacity-70 ">Baca Selengkapnya</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blog;