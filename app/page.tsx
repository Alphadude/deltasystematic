import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/sections/Hero'
import { Services } from '@/components/sections/Services'
import { Projects } from '@/components/sections/Projects'
import { About } from '@/components/sections/About'
import { Contact } from '@/components/sections/Contact'
import { ClientsPartners } from '@/components/sections/ClientsPartners'
import { Footer } from '@/components/sections/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary/20">
      <Navbar />
      <Hero />
      <Services />
      <Projects />
      <About />
      <Contact />
      <ClientsPartners />
      <Footer />
    </main>
  )
}
