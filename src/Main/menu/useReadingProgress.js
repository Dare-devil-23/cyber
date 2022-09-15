import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const useReadingProgress = () =>{
    const [completion , setCompletion] = useState(0)

    useEffect(()=>{
        const updateScrollCompletion =()=>{
            const scrollProgress = window.scrollY;
            const scrollHeight = document.body.scrollHeight - window.innerHeight;
            if(scrollHeight){
                setCompletion(
                    Number((scrollProgress / scrollHeight).toFixed(2)) * 100
                )
            }
        }
        window.addEventListener('scroll' , updateScrollCompletion)

        return() =>{
            window.removeEventListener('scroll' , updateScrollCompletion)
        }
    },[])
    return (completion)
}

export default useReadingProgress;