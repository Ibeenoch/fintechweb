"use client";
import Link from "next/link";
import React, { useState } from "react";
import BrandLogo from "../common/BrandLogo";
import MobileNavBar from "./MobileNavBar";
import MenuProvider from "./MenuContext";
import MobileSideBar from "./MobileSideBar";
import Button from "../common/Button";

export default function NavBar() {
  // darkerblack #060606 lighterblack #141414 green #b0f127
  const links = ["Home", "About", "Blog", "Contact", "Cart"];

  return (
    <header className=" fixed w-full z-40">
      <nav className="bg-lighterblack">
        <div className="p-5 md:p-8 flex justify-between bg-lighterblack items-center z-40">
          <BrandLogo />
          <ul className="flex gap-2 md:gap-6 items-center">
            {links.map((link, i) => (
              <li key={i} className="hidden sm:flex items-center">
                <Link
                  className={` hover:text-[#b0f127] sm:block md:text-[19px] text-white font-medium`}
                  href={link.toLowerCase() === "home" ? "/" : `/${link}`}
                >
                  {link}
                </Link>
                {link.toLowerCase() === "cart" && (
                  <div className="text-brand text-lg font-medium">(0)</div>
                )}
              </li>
            ))}

            <div className="hidden sm:block">
              <Button
                text="Download App"
                fontSize="normal"
                fontWeight="semibold"
              />
            </div>

            <MobileNavBar />
          </ul>
        </div>

        {/* 
             limitation of usecontext
             <MenuProvider>
                <MobileNavBar />
                <MobileSideBar />
            </MenuProvider> */}

        <MobileSideBar />
      </nav>
    </header>
  );
}
