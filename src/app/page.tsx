import Image from 'next/image'
import Hero from './sections/hero'
import Contact from './sections/Contact'
import NavigationBar from '@/views/navBar'
import Footer from '@/views/Footer'
import Expertise from './sections/Expertise'
import Checkups from './sections/Checkups'
import Publicity from './sections/Publicity'
import CustomerReviews from './sections/CustomerReviews'
import Services from './sections/Services'

export default function Home() {
  return (
   <main>
       <main className=' '>
        <NavigationBar /> 
      <section className=' padding'>
        <Hero />
      </section>
      <section className='padding'>
        <Expertise />
      </section>
      <section className='padding'>
        <Checkups />
      </section>
      <section className='padding-x py-10'>
        <Services/>
      </section>
      <section className='bg-[rgb(0,104,135)] padding'>
        <CustomerReviews /> 
      </section>
      <section className='bg-[#fff7ed] padding'>
        <Publicity /> 
      </section>
      <section className=' bg-[#592f56] padding-x padding-t pb-8'>
        <Contact />
        <Footer/> 
      </section>
    </main>
   </main>
  )
}
