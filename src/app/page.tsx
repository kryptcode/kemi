import Header from '@/components/Header'
import Hero from '@/components/Hero'
import WID from '@/components/WID'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen">
      <div>
          <Header />
          <Hero />
          <WID />
      </div>
    </main>
  )
}
