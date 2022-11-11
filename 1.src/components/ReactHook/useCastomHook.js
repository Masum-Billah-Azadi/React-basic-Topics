import { useEffect, useState } from 'react';
const useWindowWidth =(winSize)=>{
    const [size,setSize] = useState(false);
    const ChackScreenSize= ()=>{
        setSize(window.innerWidth < winSize)
    }
    useEffect(()=>{
        ChackScreenSize();
        window.addEventListener('resize',ChackScreenSize);
        return()=>window.removeEventListener('resize',ChackScreenSize);
    },[]);

    return(size);
}
export default useWindowWidth;