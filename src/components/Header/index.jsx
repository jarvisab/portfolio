"use client";

import { useState, useEffect } from "react";
import NavLinks from "./nav-links";
import MobileNav from "./mobile-show";
import MobileMenu from "./mobile-menu";

export default function Header() {

    const links = [
        { path: "/", label: "Home" },
        { path: "/about", label: "About" },
        { path: "/projects", label: "Projects" },
        { path: "/contact", label: "Contact" },
    ];

    const [show, setShow] = useState(false);
    const [hasBeenShown, setHasBeenShown] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    const handleShow = () => {
        setShow(!show);
        document.body.classList.toggle("overflow-y-hidden", !show);
    };

    useEffect(() => {
        if (show) {
            setHasBeenShown(true);
        }
    }, [show]);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        checkMobile();
        window.addEventListener("resize", checkMobile);

        return () => {
            window.removeEventListener("resize", checkMobile);
        };
    }, []);

    return (
        <header className="flex md:justify-center max-md:justify-center items-center bg-white label-slate-800 py-3 md:border-b-2 sm:mx-3 lg:mx-0 dark:label-neutral-200 dark:bg-zinc-900 sticky top-0 z-10">
            <nav className="hidden md:flex justify-between items-center">
                <NavLinks
                    links={links}
                />
            </nav>
            {isMobile &&
                <MobileNav
                    show={show}
                    hasBeenShown={hasBeenShown}
                    handleShow={handleShow}
                />
            }
            <MobileMenu
                show={show}
                handleShow={handleShow}
                links={links}
            />
        </header>
    );
}