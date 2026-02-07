import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react';

export default function HomeHero() {
    const [mounted, setMounted] = useState<boolean>(false);

    useEffect(() => {
        const timer = setTimeout(() => setMounted(true), 300);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={`flex justify-start items-start md:gap-20 gap-16 pt-12 pl-12 md:pl-6
                        transition-all ease-out duration-1000
                        ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
            <h1 className='font-poppins text-[25px] md:text-[40px] whitespace-nowrap'><Link to = '/'>/*</Link></h1>
            <h1 className='font-poppins text-[25px] md:text-[40px]'>JOSHUA <br /> CONCEPCION</h1>
        </div>
    )
}