import { type JSX } from 'react';

export default function Homepage(): JSX.Element {
    return (
        <div className='flex flex-col md:flex-row'>

            {/*homepage-left*/}
            <div className='flex flex-col justify-between bg-main-light min-h-dvh md:w-1/2 md:px-16'>
                {/*homepage-left-top*/}
                <div className='flex flex-col gap-8'>
                    <div className='flex justify-start items-start md:gap-20 gap-16 pt-12 pl-12 md:pl-6'>
                        <h1 className='font-poppins text-[25px] md:text-[40px] whitespace-nowrap'>/*</h1>
                        <h1 className='font-poppins text-[25px] md:text-[40px]'>JOSHUA <br /> CONCEPCION <br /> *Site In-Progress*</h1>
                    </div>
                    <div className='flex justify-start items-start md:gap-24 gap-14 pt-12 pl-12 md:pl-6'>
                        <h1 className='font-ltsoul text-[26px] md:text-[20px]'>1.1 <br /> 1.2 <br /> 1.3 <br /> 1.4 <br /> 1.5 <br /> 1.6</h1>
                        <h1 className='font-ltsoul text-[26px] md:text-[20px]'>work <br /> code <br /> design <br /> photos <br /> github <br /> linkedin</h1>
                    </div>
                </div>

                {/*homepage-left-bottom*/}
                <div className='w-full flex justify-start items-start md:gap-20 gap-10 pl-16 md:pl-6 pr-2'>
                    <h1 className='font-ltsoul text-[18px] md:text-[20px]'>about</h1>
                    <h1 className='font-ltsoul text-[18px] md:text-[20px] pb-12 pr-4 '>this space is a growing archive  of the projects i’ve built and the ideas i’m exploring  in development and design. 
                        when i’m not coding, i’m probably cafe hopping, exploring the city with my cats, or rewatching old cowboy movies. 
                        part portfolio, part sandbox, this is my corner of the web.</h1>
                </div>
            </div>

            {/*homepage-right*/}
            <div className='flex flex-col bg-main-dark h-dvh md:w-1/2'></div>

        </div>
    )
}