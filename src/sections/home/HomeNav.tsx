import { type JSX } from "react"
import { NavLink } from "react-router"

export default function HomeNav(): JSX.Element {
    const linkClass = ({isActive}: {isActive: boolean}) => 
        'transition-opacity ${isActive ? opacity-100 : opacity-50 hover:opacity-80}'

    return (
        <div className='flex justify-start items-start md:gap-24 gap-14 pt-12 pl-12 md:pl-6'>
            <h1 className='font-ltsoul text-[26px] md:text-[20px]'>
                <div>1.1</div>
                <div>1.2</div>
                <div>1.3</div>
                <div>1.4</div>
            </h1>
            <h1 className='font-ltsoul text-[26px] md:text-[20px]'>
                <NavLink to = '/' end className={linkClass}>
                    projects
                </NavLink>
            </h1>
        </div>
    )
}