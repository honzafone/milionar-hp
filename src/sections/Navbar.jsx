import { useState } from "react";
import { NavLink } from "react-router-dom"; // Import NavLink
import { navLinks } from "../constants/index.js";

const NavItems = () => {
    return (
        <ul className="nav-ul">
            {navLinks.map(({ id, href, name }) => (
                <li key={id} className="nav-li">
                    <NavLink
                        to={href}
                        className={({ isActive }) =>
                            `nav-li_a ${
                                isActive
                                    ? "text-yellow-400 pb-7 border-b-0 md:border-b-2 border-yellow-400" // Aktivní odkaz: modrý text + čára pod textem
                                    : "text-neutral-400"
                            }`
                        }
                    >
                        {name}
                    </NavLink>
                </li>
            ))}
        </ul>
    );
};

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(prevIsOpen => !prevIsOpen);
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-black/90">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-center justify-between py-5 mx-auto c-space">
                    <NavLink
                        to="/"
                        className="text-neutral-400 font-bold text-xl hover:text-white transition-colors"
                    >
                        Milionář HP edice
                    </NavLink>
                    <button
                        onClick={toggleMenu}
                        className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex"
                        aria-label="Toggle menu"
                    >
                        <img
                            src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
                            alt="toggle"
                            className="w-6 h-6"
                        />
                    </button>

                    <nav className="sm:flex hidden">
                        <NavItems />
                    </nav>
                </div>
            </div>
            <div className={`nav-sidebar ${isOpen ? "max-h-screen" : "max-h-0"}`}>
                <nav className="p-5">
                    <NavItems />
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
