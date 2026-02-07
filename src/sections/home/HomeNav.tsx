import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"

export default function HomeNav() {
    const [mounted, setMounted] = useState<boolean>(false);

    const linkClass = ({ isActive }: { isActive: boolean }) =>
        `transition-opacity ${
            isActive ? 'opacity-100' : 'opacity-50 hover:opacity-80'
    }`
    
    useEffect(() => {
        const timer = setTimeout(() => setMounted(true), 600);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={`flex justify-start items-start md:gap-24 gap-14 pt-12 pl-12 md:pl-6
                        transition-all ease-out duration-1000
                        ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
            <h1 className='font-ltsoul text-[26px] md:text-[20px]'>
                <div>1.1</div>
                <div>1.2</div>
                <div>1.3</div>
                <div>1.4</div>
            </h1>

            <h1 className='font-ltsoul text-[26px] md:text-[20px]'>
                <div>
                    <NavLink to='/' end className={linkClass}>
                        projects
                    </NavLink>
                </div>
                <div>
                    <NavLink to='/lab' className={linkClass}>
                        lab
                    </NavLink>
                </div>
                <div className='opacity-50'>
                    <div>
                        <a href='https://www.linkedin.com/in/joshuareyesconcepcion/' target='_blank'>
                            linkedin
                        </a>
                    </div>
                    <div>
                        <a href='https://github.com/joshuarconcepcion' target='_blank'>
                            github
                        </a>
                    </div>
                </div>
            </h1>
        </div>
    )
}
