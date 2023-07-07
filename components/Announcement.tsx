'use client';
import React from "react";
import { ChevronLeft, ChevronRight } from 'react-feather'
import { Zoom } from 'react-slideshow-image';

export default function Announcement () {
    const images = [
        "https://quatrorodas.abril.com.br/wp-content/uploads/2021/07/Aston-Martin-Valhalla-19x9-1.jpg?quality=70&strip=info",
    ];

    const zoomInProperties = {
        scale:1,
        duration:8000,
        transitionDuration:300,
        infinity:true,

        prevArrow:(
            <div className="top-[45%] z-[9999]">
                <ChevronLeft className="h-9 w-12 text-white cursor-pointer" />
            </div>    
        ),
        nextArrow:(
            <div className="top-[45%]">
                <ChevronRight className="h-9 w-12 text-white cursor-pointer" />
            </div>    
        ),
    }

    return (
     <div className="w-full h-[90hv] z-[5]">

        <Zoom {...zoomInProperties}> 
            {[
                <div>
                    <video autoPlay loop muted className="relative object-cover h-screen w-screen">
                        <source
                            src="https://www.astonmartin.com/-/media/db12-homepage-takeover/desktop_db12_hook_15seconds.mp4?rev=1edd109e9f6b4c07a93180ea6005d141"
                            type="video/mp4"
                        />
                    </video>
                    <div className="absolute inset-0">
                        <div className="absolute bottom-0 left-0 p-[5%] w-[100%]">
                            <h1 className="text-6xl uppercase font-semibold tracking-wid">Excalibur</h1>
                            <div className="mt-4 flex">
                                <button className="mr-2 bg-bgbtn text-textbtncolor font-semibold py-2 px-4 rounded-[2px] shadow-3xl w-[10vw] md:w-[30vw]">Explore</button>
                                <button className="backdrop-blur-sm bg-white/10 shadow-3xl hover:bg-black/5 font-semibold py-2 px-4 rounded-[2px] w-[20vw] h-[8vh] md:w-[30vw] md:text-sm md:whitespace-normal">Enquire whit your dealer</button>
                            </div>
                        </div>
                    </div>
                </div>,
                <div>
                    <video autoPlay loop muted className="relative object-cover h-screen w-screen">
                        <source
                            src="https://ferrari-cdn.thron.com/static/W9P9XN_cover_f1-sf23_video_beauty_1920x1080__1080p_RFVZEC.mp4?xseo="
                            type="video/mp4"
                        />
                    </video>
                    <div className="absolute inset-0">
                        <div className="absolute bottom-0 left-0 p-[5%] w-[100%]">
                        <h1 className="text-6xl md:text-xl uppercase font-semibold tracking-wid">Meet the Excalibur: Elegance & Power</h1>
                            <div className="mt-4 flex">
                                <button className="mr-2 bg-bgbtn text-textbtncolor font-semibold py-2 px-4 rounded-[2px] shadow-3xl w-[10vw] h-[50px] md:w-[30vw]">Explore</button>
                            </div>
                        </div>
                    </div>
                </div>,    
                ...images.map((each, index) => (
                    <div key={index} className="flex justify-center md:items-center items-start w-screen h-screen relative">
                        <img className='relative object-cover w-screen' src={each} />
                        <div className="absolute inset-0">
                            <div className="absolute bottom-0 left-0 p-[5%] w-[100%]">
                            <h2 className="uppercase text-sm">Master Driven </h2>
                            <h1 className="text-6xl uppercase font-semibold tracking-wid">Valkyrie</h1>
                            <div className="md:flex-col mt-4 flex">
                                <button className="mr-2 md:mb-2 bg-bgbtn text-textbtncolor font-semibold py-2 px-4 rounded-[2px] shadow-3xl w-[10vw] md:w-[30vw]">Explore</button>
                                <button className="backdrop-blur-sm bg-white/10 shadow-3xl hover:bg-black/5 font-semibold py-2 px-4 rounded-[2px] w-[10vw] md:w-[30vw] h-[8vh]">Enquire</button>
                            </div>
                            </div>
                        </div>
                    </div>    
                ))
            ]}
        </Zoom>
     </div>   
    )
}

