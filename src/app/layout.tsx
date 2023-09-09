

import { ReactNode } from 'react'
import { Preloader } from '../components/loaders/preloader';

import Head from './head';
// animate css
import 'animate.css';
// import swiper css
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';
// video player css
import 'plyr-react/plyr.css';
// glightbox css
import 'glightbox/dist/css/glightbox.css';
// custom scrollcue css
import 'plugins/scrollcue/scrollCue.css';
// Bootstrap and custom scss
import 'assets/scss/style.scss';
// Footer section
import { Footer11 } from 'components/blocks/footer';


export default function RootLayout({  children, }: {  children: ReactNode }) {
  
  return (
    <html lang="pt-br">
                 
      <Head />
       
      <body>
      
        {children}
        {/* ========== footer section ========== */}
      <Footer11 />
      </body>
  
      
    
    </html>
  )
}


