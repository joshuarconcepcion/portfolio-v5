import { type JSX } from "react";

export default function HomeAbout(): JSX.Element {
    return (
        <div className='w-full flex justify-start items-start md:gap-20 gap-10 pl-16 md:pl-6 pr-2'>
            <h1 className='font-ltsoul text-[18px] md:text-[20px]'>about</h1>
            <h1 className='font-ltsoul text-[18px] md:text-[20px] pb-12 pr-4 '>this space is a growing archive  of the projects i’ve built and the ideas i’m exploring  in development and design. 
                when i’m not coding, i’m probably cafe hopping, exploring the city with my cats, or rewatching old cowboy movies. 
                part portfolio, part sandbox, this is my corner of the web.</h1>
        </div>
    )
}