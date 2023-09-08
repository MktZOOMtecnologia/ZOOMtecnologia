
import { ReactNode } from 'react'

import Head from 'next/head';
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
export default function RootLayout({  children, }: {  children: ReactNode }) {
  return (
    <html lang="pt-br">
                 
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Sandbox - Modern & Multipurpose NextJS Template</title>
      </Head>
      <body>
        {children}
      </body>
  
      
    
    </html>
  )
}
