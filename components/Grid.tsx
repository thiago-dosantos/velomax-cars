import React from 'react'
import Image from 'next/image'
import grid1 from '@/public/assets/Images/grid1.webp'
import grid2 from '@/public/assets/Images/grid2.webp'
import grid3 from '@/public/assets/Images/grid3.webp'

export default function Grid() {

  return (
    <div className="grid grid-cols-3 grid-rows-1 justify-center md:grid-cols-1 md:grid-row-3 items-center gap-4 mb-[20vh] mt-[10vh] mx-[10%] ">
      <div className="h-[30vh] bg-center bg-cover rounded-[10px] m-[2%] relative">
          <div className='relative overflow-hidden h-[40vh] w-[100%] rounded-[10px] hover:scale-[1.02] hover:object-fill transition ease-out duration-300 box-border hover:box-content'>
            <Image
                src={grid1}
                alt="grid-1"
                placeholder="blur"
                quality={100}
                style={{
                  objectFit: 'cover',
                  alignContent: 'center',
                  alignItems: 'center',
                  height: '30vh',
                  width: '100%',
                  borderRadius: '10px',
                  transition: 'transform 0.3s ease-out',
                  inset: '0'
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
      <div className="h-[30vh] bg-center bg-cover rounded-[10px] m-[2%] relative">
        <div className='h-[40vh] w-[100%] rounded-[10px] hover:scale-[1.02] hover:object-fill transition ease-out duration-300 box-border hover:box-content'>
          <Image
              src={grid2}
              alt="grid-2"
              placeholder="blur"
              quality={100}
              style={{
                objectFit: 'cover',
                alignContent: 'center',
                alignItems: 'center',
                height: '30vh',
                width: '100%',
                borderRadius: '10px',
                transition: 'transform 0.3s ease-out',
                inset: '0'
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
      <div className="h-[30vh] bg-center bg-cover rounded-[10px] m-[2%] relative">
        <div className='h-[40vh] w-[100%] rounded-[10px] hover:scale-[1.02] hover:object-fill transition ease-out duration-300 box-border hover:box-content'>
          <Image
              src={grid3}
              alt="grid-3"
              placeholder="blur"
              quality={100}
              style={{
                objectFit: 'cover',
                alignContent: 'center',
                alignItems: 'center',
                height: '30vh',
                width: '100%',
                borderRadius: '10px',
                transition: 'transform 0.3s ease-out',
                inset: '0'
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
  )
}