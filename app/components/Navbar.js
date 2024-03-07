'use client'
import React, { useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(true);

  useEffect(() => {
    window.innerWidth < 768 && setMobileMenuOpen(false);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const [scrolY, setScrolY] = useState(0);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrolY(window.scrollY);
    });
    return () => {
      window.removeEventListener("scroll", () => {
        setScrolY(window.scrollY);
      });
    };
  }, []);



  return (
    <nav className={`w-full fixed bg-white text-text-dark shadow py-1 `}
      style={{ zIndex: 49 }}
    >

      <div className="max-w-screen-xl mx-auto flex items-center justify-between w-full navBar">
        <a href="/" className="z-10 flex h-full items-center">
          <img src="/images/logo.png" alt="logo" className="h-[40px] xl:h-[50px] ml-2 my-2" /></a>
        <div
          className="md:hidden cursor-pointer z-10 mr-2"
          onClick={toggleMobileMenu}
        >
          <AiOutlineMenu className="text-[25px] text-black" />
        </div>
        <ul
          className={`bg-white ${isMobileMenuOpen ? 'flex flex-col gap-4' : 'hidden'} flex-col absolute px-4 py-2 top-[80px] left-0 right-0 w-[90%] md:w-auto mx-auto md:mx-0 md:top-0 text-text-dark md:flex md:flex-row justify-end md:items-centern gap-2 md:gap-6 md:relative`}
          
        >
          <li><a href="#home" className="text-base font-medium pb-1 border-b-2 border-transparent hover:border-brand-main hover:text-brand-main transition-all duration-300">Home</a></li>
          <li><a href="#about" className="text-base font-medium pb-1 border-b-2 border-transparent hover:border-brand-main hover:text-brand-main transition-all duration-300">About</a></li>
          <li><a href="#features" className="text-base font-medium pb-1 border-b-2 border-transparent hover:border-brand-main hover:text-brand-main transition-all duration-300">Features</a></li>
          <li><a href="#specifications" className="text-base font-medium pb-1 border-b-2 border-transparent hover:border-brand-main hover:text-brand-main transition-all duration-300">Prices & Specifications</a></li>

        </ul>
      </div>
    </nav >
  );
};

export default Navbar;  