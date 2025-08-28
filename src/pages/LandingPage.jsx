
import Hero from './Leanding/Hero'
import Features from './Leanding/Features'
import Ecosystem from './Leanding/Ecosystem'
import News from './Leanding/News'
import CTA from './Leanding/CTA'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#111111]">

      <Hero />
      <Features />
      <Ecosystem />
      <News />
      <CTA />

    </div>
  )
}
