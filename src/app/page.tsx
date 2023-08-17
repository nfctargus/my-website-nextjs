'use client'

import { Canvas } from '@react-three/fiber'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Portfolio from './components/Portfolio'
import Skills from './components/Skills'
import WorkHistory from './components/WorkHistory'
import Experience from './experience';
export default function Home() {
	return (
        <>
            <Canvas flat camera={{ fov:45,near:0.1,far:200 }}>
                <Experience />
            </Canvas>
            <div className='fixed top-0 h-fit w-full '>
                <div className='h-screen relative w-full flex align-middle overflow-scroll overflow-x-hidden'>
                    <div className='pb-56'>
                        <Header />
                        <Hero />
                        <Portfolio />
                        <Skills />
                        <WorkHistory />
                        <Footer />
                    </div>
                    
                </div>
                
            </div>
            
        </>
	)
}
