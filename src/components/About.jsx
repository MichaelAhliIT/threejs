import Michael from '../assets/Michael.jpg'
import '../css/about.css'
import GridBackgroundRight from './GridBackgroundRight'
import GridBackgroundLeft from './GridBackgroundLeft'


const About = () => {
    return(
        <div className="flex flex-col h-[91.6vh] md:h-[92.7vh] w-full p-5 md:justify-center md:items-center md:flex-row md:gap-10 bg-slate-600 relative">
            <div className="">
                <h1 className="font-bold font-[Spicy] text-5xl mt-10 xl:text-7xl text-white">Hi. I'm Michael.</h1>
                <h1 className=' text-base tracking-wide md:text-xl mt-5 text-white font-[Spicy]'>This is my first portfolio website. Built with React, Tailwind, AnimeJS, and ThreeJS.</h1>
                <h1 className=' text-base tracking-wide md:text-xl text-white font-[Spicy]'>Hope you guys enjoy it.</h1>
            </div>
            <div className='flex flex-col xl:flex-row'>
                <div className='flex justify-center mt-10 md:mt-0 z-20'>
                    <div id='box' className="relative md:w-[30vw] md:h-[55vh] w-[60vw] h-[40vh] rounded-full overflow-hidden bg-[#24265c]">
                        <div id='content' className='absolute rounded-full overflow-hidden inset-2'>
                            <img className='top-0 left-0 w-full h-full object-cover' src={Michael} alt=""/>
                        </div>
                    </div>
                </div>  
            </div>

            {/* XL Display */}
            <div className='absolute left-0 top-0 p-4 hidden xl:inline'>
                {Array.from({ length: 19 }, (_, index) => (
                    <GridBackgroundLeft key={index} dotCount={20 - index} />
                ))}
            </div>

            <div className='absolute right-0 bottom-0 p-4 hidden xl:inline'>
                {Array.from({ length: 19 }, (_, index) => (
                    <GridBackgroundRight key={index} dotCount={2 + index} />
                ))}
            </div>
            
            {/* Medium Display */}
            <div className='absolute left-0 top-0 p-4 hidden md:inline'>
                {Array.from({ length: 9 }, (_, index) => (
                    <GridBackgroundLeft key={index} dotCount={10 - index} />
                ))}
            </div>

            <div className='absolute right-0 bottom-0 p-4 hidden md:inline'>
                {Array.from({ length: 9 }, (_, index) => (
                    <GridBackgroundRight key={index} dotCount={2 + index} />
                ))}
            </div>

            {/* Small Display */}

            <div className='absolute right-0 bottom-0 p-4 md:hidden'>
                {Array.from({ length: 7 }, (_, index) => (
                    <GridBackgroundRight key={index} dotCount={2 + index} />
                ))}
            </div>
        </div>
    )
}

export default About