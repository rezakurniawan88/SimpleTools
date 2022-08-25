import React, {useEffect, useRef, useState} from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isDark, setIsDark] = useState(false);
    const menuRef = useRef();

    useEffect(() => {
        document.addEventListener("mousedown", (e) => {
            if(!menuRef.current.contains(e.target)) {
                setIsOpen(false);
            }
        })
    },[])
    
    function toggleMenu() {
        setIsOpen(!isOpen);
    };

    function switchTheme() {
        setIsDark(!isDark);
        document.documentElement.classList.toggle("dark");
    }

    function showHideMenu() {
        document.getElementById("menu-container").classList.toggle("h-10");
        document.getElementById("menu-list").classList.toggle("hidden");
        document.getElementById("chevron-button").classList.toggle("rotate-180");
    }

    return (
        <nav ref={menuRef} className="navbar border dark:border-slate-700 py-4 flex justify-between">
            <div onClick={toggleMenu} className={isOpen ? "open menubar relative flex justify-center items-center w-[2.5rem] h-[2.5rem] ml-4 cursor-pointer z-20" : "menubar relative flex justify-center items-center w-[2.5rem] h-[2.5rem] ml-4 cursor-pointer z-20"}>
                <div className="menu-burger bg-[#374151] before:bg-[#374151] after:bg-[#374151] rounded-2xl dark:bg-white dark:before:bg-white dark:after:bg-white"></div>
            </div>
            <div className="items">
                <button className="mr-4" onClick={switchTheme}>
                    {isDark === false ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 26 26" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-white">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                        </svg>
                    )}
                </button>
                <a href="https://github.com/rezakurniawan88" target="_blank" rel="noreferrer">
                    <button className="mr-6">
                        <svg width="24" height="24" fill="currentColor" className="mr-3 dark:text-white text-opacity-50 transform">
                                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.606 9.606 0 0112 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48C19.137 20.107 22 16.373 22 11.969 22 6.463 17.522 2 12 2z"></path>
                        </svg>
                    </button>
                </a>
            </div>
            <div className={isOpen ? "menu absolute w-56 h-full top-0 left-0 pt-6 transition-all bg-white border-r-[1px] shadow-sm dark:bg-[#112240]" : "-ml-56 menu absolute w-56 h-full top-0 left-0 pt-6 transition-all bg-white border-r-[1px] shadow-sm dark:bg-[#112240]"}>
                <div className="menu-list pl-6 flex flex-col gap-3">
                    <h2 className="font-semibold text-base pl-10 dark:text-white">SimpleTools</h2>
                    <div className="cryptography mt-6 py-2 cursor-pointer transition-all" onClick={showHideMenu}>
                        <div className="title-menu flex justify-between pb-1" id="menu-container">
                            <h2 className="font-semibold dark:text-white">Cryptography</h2>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mt-1 mr-4 dark:text-white transition-all" id="chevron-button">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                            </svg>
                        </div>
                        <div id="menu-list" className="transition-all">
                            <Link to="/" onClick={toggleMenu}>
                                <p className="text-sm text-[#44435C] font-medium hover:text-green-500 my-2 dark:text-slate-300">Base64 Encode/Decode</p>
                            </Link>
                            <Link to="/rot13" onClick={toggleMenu}>
                                <p className="text-sm text-[#44435C] font-medium hover:text-green-500 my-2 dark:text-slate-300">ROT13 Encode/Decode</p>
                            </Link>
                            <Link to="/md-hash-encode" onClick={toggleMenu}>
                                <p className="text-sm text-[#44435C] font-medium hover:text-green-500 my-2 dark:text-slate-300">MD Hash Encode</p>
                            </Link>
                            <Link to="/sha-hash-encode" onClick={toggleMenu}>
                                <p className="text-sm text-[#44435C] font-medium hover:text-green-500 my-2 dark:text-slate-300">SHA Hash Encode</p>
                            </Link>
                        </div>
                    </div>
                    <div className="numbers cursor-pointer transition-all" onClick={showHideMenu}>
                        <div className="title-menu flex justify-between" id="menu-container">
                            <h2 className="font-semibold dark:text-white">Numbers</h2>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mt-1 mr-4 transition-all dark:text-white" id="chevron-button">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                            </svg>
                        </div>
                        <div id="menu-list" className="transition-all">
                            <Link to="/decimal" onClick={toggleMenu}>
                                <p className="text-sm text-[#44435C] font-medium hover:text-green-500 my-2 dark:text-slate-300">Decimal Converter</p>
                            </Link>
                            <Link to="/binary" onClick={toggleMenu}>
                                <p className="text-sm text-[#44435C] font-medium hover:text-green-500 my-2 dark:text-slate-300">Binary Converter</p>
                            </Link>
                        </div>
                    </div>
                    <div className="other cursor-pointer transition-all" onClick={showHideMenu}>
                        <div className="title-menu flex justify-between" id="menu-container">
                            <h2 className="font-semibold dark:text-white">Others</h2>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mt-1 mr-4 transition-all dark:text-white" id="chevron-button">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                            </svg>
                        </div>
                        <div id="menu-list" className="transition-all">
                            <Link to="/subfinder" onClick={toggleMenu}>
                                <p className="text-sm text-[#44435C] font-medium hover:text-green-500 my-2 dark:text-slate-300">Subdomain Finder</p>
                            </Link>
                            <Link to="/screen-size" onClick={toggleMenu}>
                                <p className="text-sm text-[#44435C] font-medium hover:text-green-500 my-2 dark:text-slate-300">What Is My Screen Size?</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;