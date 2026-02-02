import { useEffect, useRef } from 'react';
import { HomeHero, HomeNav, HomeAbout } from '../sections/home';
import { Outlet, useLocation, useNavigationType } from 'react-router-dom';

export default function Homepage() {
    let outletRef = useRef<HTMLDivElement | null>(null);
    let location = useLocation();
    let navType = useNavigationType();

    useEffect(() => {
        if (window.innerWidth >= 768) return;
        if (navType === "POP") return;

        outletRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
        })
    }, [location.pathname, navType])

    return (
        <div className='flex flex-col md:flex-row'>
            <div className='flex flex-col justify-between bg-main-light min-h-dvh md:w-1/2 md:px-16'>
                <div className='flex flex-col gap-8'>
                    <HomeHero />
                    <HomeNav />
                </div>
                <HomeAbout />
            </div>

            <div ref = {outletRef} className='flex flex-col bg-main-dark min-h-dvh md:w-1/2'>
                <Outlet />
            </div>

        </div>
    )
}