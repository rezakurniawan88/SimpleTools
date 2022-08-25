import React, { useEffect, useState } from "react";

const ScreenSize = () => {
    const [screenWidth, setScreenWidth] = useState(0);
    const [screenHeight, setScreenHeight] = useState(0);

    useEffect(() => {
        setScreenWidth(window.screen.width);
        setScreenHeight(window.screen.height);
    },[])

    return (
        <div className="screen-size h-full">
            <h1 className="font-bold text-2xl md:text-3xl dark:text-[#ccd6f6] text-center my-8">What Is My Screen Size?</h1>
            <div className="results mt-24">
                <h1 className="font-bold text-2xl text-slate-700 text-center my-5 dark:text-slate-200">Your screen size is :</h1>
                <h1 className="font-bold text-4xl text-green-500 text-center my-5">{screenWidth} x {screenHeight} pixels</h1>
            </div>
        </div>
    )
}

export default ScreenSize;