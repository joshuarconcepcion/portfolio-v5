import { type JSX } from "react"

export default function HomeNav(): JSX.Element {
    return (
        <div className='flex justify-start items-start md:gap-24 gap-14 pt-12 pl-12 md:pl-6'>
            <h1 className='font-ltsoul text-[26px] md:text-[20px]'>1.1 <br /> 1.2 <br /> 1.3 <br /> 1.4 <br /> 1.5 <br /> 1.6</h1>
            <h1 className='font-ltsoul text-[26px] md:text-[20px]'>work <br /> code <br /> design <br /> photos <br /> github <br /> linkedin</h1>
        </div>
    )
}