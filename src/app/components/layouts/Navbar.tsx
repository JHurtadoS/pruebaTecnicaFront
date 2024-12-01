"use client";

import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link,
} from "@nextui-org/react";
import { Profile } from "../profile";
import Image from "next/image";

const menuItems = [
  { label: "Popular", href: "#" },
  { label: "Favorites", href: "#" },
];

const Logo = () => (
  <Link href="/" className=" hover:opacity-100">
    <Image
      src="/images/Logo.webp"
      alt="QuickBet Movies Logo"
      width={150}
      height={50}
      priority
      className="object-contain"
    />
  </Link>
);

const NavbarComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  console.log("test");
  return (
    <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className="bg-black text-white shadow-md fixed w-full z-40"
      maxWidth="2xl"
    >

      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarContent justify="center" className="sm:hidden">
        <NavbarBrand>
          <Logo />
        </NavbarBrand>
      </NavbarContent>


      <NavbarContent className="hidden sm:flex gap-6" justify="center">
        <NavbarBrand>
          <Logo />
        </NavbarBrand>
        {menuItems.map((item) => (
          <NavbarItem key={item.label}>
            <Link
              href={item.href}
              className="text-white hover:opacity-80 font-medium text-lg"
            >
              {item.label}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>


      <NavbarContent justify="end">
        <NavbarItem>
          <Profile />
        </NavbarItem>
      </NavbarContent>


      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.label}-${index}`}>
            <Link
              className="w-full text-center text-white hover:opacity-80 font-medium  text-lg"
              href={item.href}
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default NavbarComponent;
