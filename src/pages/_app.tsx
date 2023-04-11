import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Montserrat } from 'next/font/google'
import Head from 'next/head'
import NavBar from '@/components/NavBar'
import Footer from "@/components/Footer";

const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-mont' })

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <meta
                    name={'viewport'}
                    content={'width=device-width, initial-scale=1.0'}
                />
                <link rel="icon" href="/favicon.ico" />
                <title>Portfolio</title>
            </Head>
            <main
                className={`${montserrat.variable} font-mont bg-light w-full min-h-screen`}
            >
                <NavBar />
                <Component {...pageProps} />
                <Footer/>
            </main>
        </>
    )
}
