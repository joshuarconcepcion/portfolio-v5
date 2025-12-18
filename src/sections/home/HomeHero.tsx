import { type JSX } from 'react';

export default function HomeHero(): JSX.Element {
    return (
        <div className='flex justify-start items-start md:gap-20 gap-16 pt-12 pl-12 md:pl-6'>
            <h1 className='font-poppins text-[25px] md:text-[40px] whitespace-nowrap'>/*</h1>
            <h1 className='font-poppins text-[25px] md:text-[40px]'>JOSHUA <br /> CONCEPCION</h1>
        </div>
    )
}