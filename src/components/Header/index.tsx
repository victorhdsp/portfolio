'use client';

import css from "./styles.module.scss"

// import Link from "next/link"
import ThemeSelector from "./ThemeSelector"
import { usePathname } from "next/navigation"

import {Navbar, NavbarMenuToggle, NavbarMenu, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import { useState } from "react";

export default function Header () {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  const CreateLink = ({href, text}:{href: string, text: string}) => {
    return (
      <NavbarItem className={css["navbar-item"]}>
        <Link className={css["navbar-link"]} href={href} data-active={pathname === href}>
          {text}
        </Link>
      </NavbarItem>
    )
  }

  const Menu = () => (
    <>
      <CreateLink href="/" text="Inicio" />
      <CreateLink href="/sobre" text="Sobre mim" />
      <CreateLink href="/curriculo" text="curriculo" />
      {/* <ThemeSelector /> */}
    </>
  )

  return (
    <Navbar className={css["header"]} shouldHideOnScroll onMenuOpenChange={setIsMenuOpen}>
      <NavbarBrand className={css["navbar-brand"]}>
        <p>Logo</p>
      </NavbarBrand>

      <NavbarMenuToggle
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className={`sm:hidden ${css["navbar-menu-toggle"]}`}
      />

      <NavbarContent className={css["navbar-content"]} justify="end">
        <Menu />
      </NavbarContent>

      <NavbarMenu className={css["navbar-menu"]}>
        <Menu />
      </NavbarMenu>
      {/* <div className="container"></div> */}
    </Navbar>
  )
}