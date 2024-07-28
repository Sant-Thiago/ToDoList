import React, { useEffect, useRef } from "react";
import "./Cursor.css"

function Cursor() {

    const cursor = useRef(null);
    const root = document.getElementById("root"); 

    const moveCursor = e => {
        let x = e.pageX;
        let y = e.pageY;

        console.log(e)

        if (cursor.current) {
            cursor.current.style.top = y + "px";
            cursor.current.style.left = x + "px";
        }

    };

    const outCursor = () => {
        cursor.current.display = "none"
    }

    useEffect(() => {

        root.addEventListener("mousemove", moveCursor);
        root.addEventListener("mouseout", outCursor)

        return () => {
            root.removeEventListener("mousemove", moveCursor);
            root.removeEventListener("mouseout", outCursor);
        };
    }, []);
    
    return (
        <div 
            ref={cursor}
            className="containerCursor">
        </div>
    )
}

export default Cursor;