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
            <h1 className="font-bold text-3xl text-center my-6">What Is My Screen Size?</h1>
            <div className="results mt-28">
                <h1 className="font-bold text-2xl text-center my-5">Your screen size is :</h1>
                <h1 className="font-bold text-4xl text-center my-5">{screenWidth} x {screenHeight} pixels</h1>
            </div>
        </div>
    )
}

export default ScreenSize;