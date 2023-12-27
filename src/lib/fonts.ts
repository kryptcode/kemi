import { Inter, Roboto_Mono, Poppins, DM_Serif_Display } from 'next/font/google'
 
export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})
 
export const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
})

export const poppins = Poppins({
    subsets: ['latin'],
    display: 'swap',
    weight: ['200','300','400','500', '600', '700', '800', '900']
})

export const dm_serif = DM_Serif_Display({
    subsets: ['latin'],
    display: 'swap',
    weight: ['400']
})