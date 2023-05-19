import { React, useState, useEffect } from 'react';

const MenuItems = [
    { name: 'Home', link: '#home' },
    { name: 'About', link: '#about' },
    { name: 'Portfolio', link: '#portfolio' },
    { name: 'Clients', link: '#client' },
    { name: 'Contact', link: '#contact' }
];

const Header = () => {
    const [isHamburgerActive, setIsHamburgerActive] = useState(false);

    const click = () => {
        setIsHamburgerActive(current => !current);
    };

    const [isShrunk, setShrunk] = useState(false);
    useEffect(() => {
        const onScroll = () => {
            setShrunk((isShrunk) => {
                if (!isShrunk && (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20)) {
                    return true;
                }

                if (isShrunk && document.body.scrollTop < 4 && document.documentElement.scrollTop < 4) {
                    return false;
                }

                return isShrunk;
            });
        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header className={`bg-transparent absolute top-0 left-0 w-full flex items-center z-10 ${isShrunk ? 'navbar-fixed' : ''}`}>
            <div className="container">
                <div className="flex items-center justify-between relative">
                    <div className="px-4">
                        <a href="/" className={`font-bold text-lg text-primary block py-6`}>teguh.ziliwu</a>
                    </div>
                    <div className="flex items-center px-4">
                        <button id="hamburger" name="hamburger" className={`block absolute right-4 lg:hidden ${isHamburgerActive ? 'hamburger-active' : ''}`} onClick={click}>
                            <span className="hamburger-line transition duration-300 ease-in-out origin-top-left"></span>
                            <span className="hamburger-line transition duration-300 ease-in-out"></span>
                            <span className="hamburger-line transition duration-300 ease-in-out origin-bottom-left"></span>
                        </button>

                        <nav id="nav-menu" className={`absolute py-5 bg-white shadow-lg rounded-lg max-w-[250px] w-full top-full right-4 lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none ${isHamburgerActive ? '' : 'hidden'}`}>
                            <ul className="block lg:flex">
                                {MenuItems.map((item, index) => (
                                    <li key={index} className="group">
                                        <a href={item.link} className="text-base font-bold text-dark py-2 mx-8 flex group-hover:text-primary w-full">{item.name}</a>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;