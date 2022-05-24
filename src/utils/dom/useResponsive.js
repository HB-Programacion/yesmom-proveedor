
import {useEffect, useRef, useState} from 'react'

const useResponsive = (minWidth) => {

    const windowRef = useRef();
    const [state, setState] = useState({
        windowWidth: window.innerWidth,
        isDesiredWidth: false,
    });

    useEffect(()=>{
      windowRef.current=window.innerWidth;
      if(windowRef.current < minWidth){
        setState(prev => ({
          ...prev,
          isDesiredWidth : true,
        }))
      }
    },[minWidth])

    useEffect(() => {
        const resizeHandler = () => {
          const currentWindowWidth = window.innerWidth;
          const isDesiredWidth = currentWindowWidth < minWidth;
          setState({ windowWidth: currentWindowWidth, isDesiredWidth });
        };
        
        window.addEventListener("resize", resizeHandler);
        return () => window.removeEventListener("resize", resizeHandler);
    }, [minWidth, state]);

    return state.isDesiredWidth;
}

export default useResponsive