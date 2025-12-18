import { type JSX } from 'react';
import { HomeHero, HomeNav, HomeAbout } from '../sections/home';

export default function Homepage(): JSX.Element {
    return (
        <div className='flex flex-col md:flex-row'>
            <div className='flex flex-col justify-between bg-main-light min-h-dvh md:w-1/2 md:px-16'>
                <div className='flex flex-col gap-8'>
                    <HomeHero />
                    <HomeNav />
                </div>
                <HomeAbout />
            </div>

            <div className='flex flex-col bg-main-dark h-dvh md:w-1/2'></div>

        </div>
    )
}