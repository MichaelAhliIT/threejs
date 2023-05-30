import {Canvas, useFrame} from '@react-three/fiber'
import {OrbitControls, Stage} from '@react-three/drei'
import React from 'react'
import Samurai from './Samurai'

const About = () => {
    return(
        <div className='w-full h-[100vh] bg-slate-500'>
            <Canvas>
            <Stage environment="city" intensity={0.6}>
                <Samurai/>
                
            </Stage>
            <OrbitControls enableZoom={false}/>
        </Canvas>
        </div>
        
    )
}


export default About