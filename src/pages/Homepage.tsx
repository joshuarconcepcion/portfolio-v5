import { type JSX } from 'react';

export default function Homepage(): JSX.Element {
    return (
        <div className='flex flex-col md:flex-row'>

            {/*homepage-left*/}
            <div className='flex flex-col bg-main-light h-screen md:min-w-[50vw] md:px-16'>
                {/*homepage-left-top*/}
                <div className='h-[75%] w-full'>
                    <div className='h-[25%] w-full flex justify-start items-start md:gap-20 gap-16 pt-12 pl-6'>
                        <h1 className='font-poppins text-[25px] md:text-[50px] '>/*</h1>
                        <h1 className='font-poppins text-[25px] md:text-[50px] '>JOSHUA <br /> CONCEPCION</h1>
                    </div>
                    <div className='h-[75%] w-full flex justify-start items-start md:gap-26 gap-16 pt-12 pl-6'>
                        <h1 className='font-ltsoul text-[26px] md:text-[20px] '>1.1 <br /> 1.2 <br /> 1.3 <br /> 1.4 <br /> 1.5 <br /> 1.6</h1>
                        <h1 className='font-ltsoul text-[26px] md:text-[20px] '>work <br /> code <br /> design <br /> photos <br /> github <br /> linkedin</h1>
                    </div>
                </div>

                {/*homepage-left-bottom*/}
                <div className='h-[25%] w-full flex justify-start items-start md:gap-20 gap-12 pl-8'>
                    <h1 className='font-ltsoul text-[16px] md:text-[20px] '>about</h1>
                    <h1 className='font-ltsoul text-[16px] md:text-[20px] md:pr-29 pr-6 '>this space is a growing archive  of the projects i’ve built and the ideas i’m exploring  in development and design. 
                        when i’m not coding, i’m probably cafe hopping, exploring the city with my cats, or rewatching old cowboy movies. 
                        part portfolio, part sandbox, this is my corner of the web.</h1>
                </div>
            </div>

            {/*homepage-right*/}
            <div className='flex flex-col bg-main-dark min-h-screen md:min-w-[50vw]'></div>

        </div>
    )
}