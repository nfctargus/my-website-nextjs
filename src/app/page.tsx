import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Portfolio from './components/Portfolio'
import Skills from './components/Skills'
import WorkHistory from './components/WorkHistory'

export default function Home() {
	return (
		<div className='min-h-screen relative w-full'>
			<div className='pb-56 '>
                <Header />
                <Hero />
                <Portfolio />
                <Skills />
                <WorkHistory />
            </div>
			<Footer />
		</div>
	)
}
