import HachiLink from '../../assets/hachi-link.png'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router';

export default function RenderHome() {
    let [visible, setVisibility] = useState(false);
    let location = useLocation();

    useEffect(() => {
    if (location.pathname === "/") {
      setVisibility(false)
      requestAnimationFrame(() => setVisibility(true))
    } else {
      setVisibility(false)
    }
  }, [location.pathname])


    return (
        <div className='flex justify-start items-end min-h-dvh w-full overflow-hidden'>
            <img src={HachiLink} 
            className={
                `w-96 h-auto
                transition-all duration-500 ease-out
                ${visible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}
                `}/>
        </div>
    )
}