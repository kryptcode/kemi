import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen">
      <div>
          <Header />
          <Hero />
      </div>
    </main>
  )
}
