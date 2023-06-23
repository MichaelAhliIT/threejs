import Samuraisection from "./Samuraisection"

const Home = () => {
    return(
        <div className="bg-[#cfcdcc] w-full h-screen pt-28 p-3 overflow-hidden md:flex md:flex-row-reverse md:items-center md:justify-center md:pt-20">
            <div className="flex items-center justify-center">
                <Samuraisection />
            </div>
            <div className="xl:grid lg:ml-[18vw] ">
                <h1 className="font-bold font-[Spicy] select-none mt-10 hidden md:text-9xl xl:inline xl:h-fit ">Hello.</h1>
                <h1 className="text-center text-5xl font-bold font-[Spicy] select-none mt-10 md:flex md:w-50% md:text-5xl lg:text-left">Welcome to Michael's Portfolio Website.</h1>
            </div>
            
        </div>
    )
}

export default Home