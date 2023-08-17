'use client'

import { Center,Float,Stars } from "@react-three/drei"
import { PresentationControls,OrbitControls } from "@react-three/drei/web"

export default function Experience() {
    return (
        <>  
            <color args={ ['#412a78']} attach="background"/>
            <ambientLight intensity={ 0.5 } />
            <Center>
                <Float speed={0.2} floatingRange={[0.8,1]} >
                    <mesh position-x={ - 3 } scale={[1,0.3,0.1]}>
                        <boxGeometry />
                        <meshStandardMaterial color="#ffffff" />
                    </mesh>
                </Float>
                <mesh position={ [-1,-1.5,0] } scale={[3,0.3,0.1]}>
                        <boxGeometry />
                        <meshStandardMaterial color="#69b766" />
                </mesh>
            </Center>
        </>
    )
}