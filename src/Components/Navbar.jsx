import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { HiX } from "react-icons/hi";
const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-black/90 backdrop-blur border-b border-gray-800">
            <div className=" px-6 py-4 flex items-center justify-between">

                {/* LOGO */}
                <h3 className="text-3xl font-extrabold text-red-700 tracking-wide cursor-pointer">
                    Insharah<span className="text-white">.</span>
                </h3>

                {/* DESKTOP MENU */}
                <ul className="hidden md:flex gap-10 text-md font-bold tracking-wide">
                    {["Home", "About", "Projects", "Contact"].map((item) => (
                        <li
                            key={item}
                            onClick={() => {
                                document.getElementById(item.toLowerCase()).scrollIntoView({
                                    behavior: "smooth",
                                });
                            }}
                            className="relative text-white cursor-pointer transition hover:text-red-700"
                        >
                            {item}
                        </li>
                    ))}

                </ul>

                {/* MOBILE MENU ICON */}
                <button
                    onClick={() => setOpen(!open)}
                    className="md:hidden text-white text-2xl"
                >
                    {open ? <HiX /> : <IoMenu />}
                </button>
            </div>

            {/* MOBILE MENU */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-500 ${open ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
                    }`}
            >
                <ul className="flex flex-col gap-6 px-6 pb-6 pt-4 bg-black border-t border-gray-800 text-sm font-semibold">
                    {["Home", "About", "Projects", "Contact"].map((item) => (
                        <li
                            key={item}
                            onClick={() => {
                                document.getElementById(item.toLowerCase()).scrollIntoView({
                                    behavior: "smooth",
                                });
                                setOpen(false);
                            }}
                            className="text-white hover:text-red-500 transition cursor-pointer"
                        >
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
