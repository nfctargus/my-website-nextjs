import Footer from './pages/Footer'
import Header from './pages/Header'
import Hero from './pages/Hero'
import Portfolio from './pages/Portfolio'
import Resume from './pages/Resume'

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
