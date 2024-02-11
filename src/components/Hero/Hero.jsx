import React from 'react'
import HeroText from './HeroText'
import HeroImage from './HeroImage'
const Hero = () => {
    return (
        <div className='min-h-[80vh] relative' id='home'>
            <main className='container px-10 mt-20 flex flex-row justify-around mx-auto  max-md:flex-col max-md:justify-center
                items-center'>
                <div className='max-md:flex'>
                    <HeroText />
                </div>
                <div className='z-20 max-md:mt-10 '>
                    <HeroImage />

                </div>
            </main>
            <section className="  w-[75%] max-sm:w-full gap-10 mx-auto m-0 flex flex-col justify-center">
                <img
                    src="/Achernar.svg"
                    className=" z-[-1] absolute right-[-20%] top-[-60px]   "
                />
            </section>
            {/* <div>
                <img src="/Element 06.svg" alt="element" className='absolute top-0'/>
                <img src="/Element 09.svg" alt="element" className='absolute right-0'/>
                <img src="/Union - Copie.svg" alt="element" className='absolute left-0'/>
                <img src="/Vector - Copie.svg" alt="element" className='absolute top-0'/>

            </div> */}
            
        </div>
    )
}

export default Hero