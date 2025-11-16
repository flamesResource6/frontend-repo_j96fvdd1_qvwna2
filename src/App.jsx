import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Cards from './components/Cards'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main>
        <Hero />
        <Features />
        <Cards />
        <Testimonials />
        <Pricing />
      </main>
      <Footer />
    </div>
  )
}

export default App
