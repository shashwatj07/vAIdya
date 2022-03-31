import React from "react";


function Hello(){
    return(
        <div className='font-sans text-white pb-5' >
            <p className="text-6xl font-semibold">Hi!</p>
            <p className="text-4xl font-semibold">I am v<span className="text-5xl text-red-600 ">AI</span>dya,</p>
            {/* <p className="text-2xl font-light">what is your name?</p> */}
        </div>
    )
}

export default Hello;