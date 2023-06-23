import {Canvas, useFrame} from '@react-three/fiber'
import {OrbitControls, Stage} from '@react-three/drei'
import React from 'react'
import Samurai from './Samurai'

const Samuraisection = () => {
    return(
        <div className='h-[50vh] w-full md:h-[100vh] md:w-[50vw]'>
            <Canvas>
                <Stage environment="city" intensity={0.6}>
                    <Samurai/>
                </Stage>
            <OrbitControls 
                enableZoom={false} 
                autoRotate={true}
                autoRotateSpeed={8}
                maxPolarAngle={Math.PI / 2}
                minPolarAngle={Math.PI / 2}
                />
        </Canvas>
        </div>
        
    )
}


export default Samuraisection