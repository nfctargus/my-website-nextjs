import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Portfolio from './components/Portfolio'
import Resume from './components/Resume'

export default function Home() {
	return (
		<div className='min-h-screen relative w-full'>
			<div className='pb-56 '>
                <Header />
                <Hero />
                <Portfolio />
                <Resume />
            </div>
			<Footer />
		</div>
	)
}
