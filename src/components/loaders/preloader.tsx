// Bootstrap and custom scss

import ThemeProvider from 'theme/ThemeProvider';
import 'assets/scss/style.scss';
import type { AppProps } from 'next/app';
import { useEffect, useState } from 'react';


export function Preloader ({ Component, pageProps }: AppProps) {
   
  const [loading, setLoading] = useState(true);
  // manage loading status
  useEffect(() => setLoading(false), []);  
  
    return (
        <>
        <ThemeProvider>
        {/* <div className="page-loader" /> */}
        {loading ? <div className="page-loader" /> : <Component {...pageProps} />}
      </ThemeProvider>
        </>
        );
}
    

