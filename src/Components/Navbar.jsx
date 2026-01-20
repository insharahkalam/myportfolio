const Navbar = () => {
    return (
        <nav className="flex justify-between border-b border-gray-800 items-center px-8 py-4 bg-black fixed w-full z-10">
            <h1 className="text-xl font-bold text-red-500">Insharah</h1>
            <ul className="flex gap-6 text-sm">
                <li className="hover:text-red-500 text-white cursor-pointer">Home</li>
                <li className="hover:text-red-500 text-white cursor-pointer">About</li>
                <li className="hover:text-red-500 text-white cursor-pointer">Projects</li>
                <li className="hover:text-red-500 text-white cursor-pointer">Contact</li>
            </ul>
        </nav>
    );
};

export default Navbar;
