import React from "react";
import Image from "next/image";
import car1 from '@/public/assets/Images/car1.jpg'

export default function Grid2() {
    return (
    <div className="flex justify-center items-center ">
        <div className="grid grid-cols-2 grid-rows-3 justify-center gap-[4%] mt-[10vh] mb-[20vh] md:grid-cols-1 items-center">
            <div className="relative ml-[30vh]">
                <div className="min-h-full">
                    <Image
                        src={car1}
                        alt="car-1"
                        placeholder="blur"
                        quality={100}
                        style={{
                            objectFit: 'cover',
                            alignContent: 'center',
                            alignItems: 'center',
                            height: '80vh',
                            width: '100%',
                            borderRadius: '10px',
                            transition: 'transform 0.3s ease-out',
                        }}
                    />
                </div>
                <div className="absolute top-[70%] bottom-0 right-[18%] flex text-center items-center justify-center">
                    <div className="text-white text-center flex grid-2 items-center cursor-pointer">
                        <h2 className="text-lg 2xl:text-xs font-bold">Velomax between electric cars</h2>
                        <span className="ml-[10px] text-2xl transition-transform transform hover:translate-x-2">&rarr;</span>
                    </div>
                </div>
            </div>
            <div className="relative mr-[30vh]">
                <div className="max-w-[100%] min-h-full">
                    <Image
                        src={car1}
                        alt="car-1"
                        placeholder="blur"
                        quality={100}
                        style={{
                            objectFit: 'cover',
                            alignContent: 'center',
                            alignItems: 'center',
                            height: '80vh',
                            width: '100%',
                            borderRadius: '10px',
                            transition: 'transform 0.3s ease-out',
                        }}
                    />
                </div>
                <div className="absolute top-[70%] bottom-0 right-[18%] flex text-center items-center justify-center">
                    <div className="text-white text-center flex grid-2 items-center cursor-pointer">
                        <h2 className="text-lg 2xl:text-xs font-bold">Velomax between electric cars</h2>
                        <span className="ml-[10px] text-2xl transition-transform transform hover:translate-x-2">&rarr;</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
)}