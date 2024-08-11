"use client";

import { Button, ButtonProps } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

interface DownloadProps extends ButtonProps {
    children: React.ReactNode
    href: string
}

function Download({ children, ...props }:DownloadProps) {
    return (
        <a href={props.href} download>
            <Button size="lg" {...props}>
                { children }
            </Button>
        </a>
    )
}

export default Download;