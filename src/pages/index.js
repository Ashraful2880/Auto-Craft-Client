import Image from 'next/image'
import { Inter } from 'next/font/google'
import Bannar from '@/Components/Bannar/Bannar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
     <Bannar />
     
    </main>
  )
}
