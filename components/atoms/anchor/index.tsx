"use client";

import { Button, ButtonProps } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

interface AnchorProps extends ButtonProps {
    children: React.ReactNode
    href: string
}

function Anchor({ children, ...props }:AnchorProps) {
    const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();
        const href = event.currentTarget.getAttribute("href");
        if (!href) return;
        const el = document.querySelector(href) as HTMLElement;
        if (!el) return;

        scrollTo({
            top: el.offsetTop,
            behavior: "smooth"
        })
    }
    return (
        <Link onClick={handleClick} href={props.href}>
            <Button size="lg" {...props}>
                { children }
            </Button>
        </Link>
    )
}

export default Anchor;