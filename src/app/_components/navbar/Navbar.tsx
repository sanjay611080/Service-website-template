"use client";
import React, { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isFixed, setIsFixed] = useState(true);

  const navbarHeight = 80;

  const mobileMenuRef = useRef<HTMLDivElement | null>(null);
  const toggleButtonRef = useRef<HTMLButtonElement | null>(null);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > navbarHeight) {
      if (currentScrollY > lastScrollY && !menuOpen) {
        setIsFixed(false); // Scroll down, hide navbar
      } else {
        setIsFixed(true); // Scroll up or stop, show navbar
      }
    } else {
      setIsFixed(true); // Always fixed when at the top
    }

    setLastScrollY(currentScrollY);
  }, [lastScrollY, menuOpen]);

  const handleClickOutside = (e: MouseEvent) => {
    // Check if click is outside both mobile menu and toggle button
    if (
      mobileMenuRef.current &&
      !mobileMenuRef.current.contains(e.target as Node) &&
      !toggleButtonRef.current?.contains(e.target as Node)
    ) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleScroll]);

  return (
    <nav
      className={`bg-white text-black p-3 flex justify-between shadow-lg items-center px-6 sm:px-16 fixed w-full z-50 transition-all duration-300 ${
        isFixed ? "top-0" : "-top-20"
      }`}
    >
      {/* Logo Section */}
      <div className="text-xl font-bold">
        <Link href={'/'}>
          <Image
            src="/img/logo.svg"
            alt="Company Logo"
            width={60}
            height={20}
          />
        </Link>
      </div>

      {/* Desktop Navigation Links */}
      <div className="hidden md:flex space-x-8">
        <Link href="/" className="hover:text-gray-400">Home</Link>
        <Link href="/creation" className="hover:text-gray-400">Creation</Link>
        <Link href="/business" className="hover:text-gray-400">Business</Link>
        <Link href="/about" className="hover:text-gray-400">About</Link>
      </div>

      {/* Hamburger Icon for Mobile */}
      <div className="md:hidden flex items-center">
        <button
          ref={toggleButtonRef}
          onClick={toggleMenu}
          className="focus:outline-none"
        >
          {menuOpen ? (
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          ) : (
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        ref={mobileMenuRef}
        className={`${
          menuOpen
            ? "translate-x-0 opacity-100 visible"
            : "translate-x-full opacity-0 invisible"
        } fixed top-[53px] right-0 h-[calc(100vh)] w-64 bg-black bg-opacity-90 transition-all duration-300 ease-in-out md:hidden`}
      >
        <div className="flex flex-col items-center justify-center py-4 space-y-8">
          <Link href="/" className="text-white text-2xl" onClick={toggleMenu}>Home</Link>
          <Link href="/creation" className="text-white text-2xl" onClick={toggleMenu}>Creation</Link>
          <Link href="/business" className="text-white text-2xl" onClick={toggleMenu}>Business</Link>
          <Link href="/about" className="text-white text-2xl" onClick={toggleMenu}>About Us</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
