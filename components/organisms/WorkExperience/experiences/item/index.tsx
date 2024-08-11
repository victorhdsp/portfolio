"use client";

import { useEffect, useState } from "react";
import ExperienceDesktop from "./desktop";
import { ExperienceProps } from "./lib";
import ExperienceMobile from "./mobile";
import { Skeleton } from "@/components/ui/skeleton"

function Experience({information, image}:ExperienceProps) {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [isMobile, setIsMobile] = useState<boolean>();

    useEffect(() => {
        setIsMobile(window.innerWidth < 768);
        setIsLoading(false);
    }, [])

    return (<>
        { 
            isLoading ? (
                <div className="flex gap-2">
                    <Skeleton className="w-32 h-32" />
                    <div className="flex flex-col gap-1">
                        <Skeleton className="w-full h-10" />
                        <Skeleton className="w-full h-10" />
                        <Skeleton className="w-full h-10" />
                    </div>
                </div>
            ) : isMobile ? (
                <ExperienceMobile
                    information={information}
                    image={image}
                />
            ) : (
                <ExperienceDesktop
                    information={information}
                    image={image}
                />
            )
        }
    </>)
}

export default Experience;