import Head from 'next/head'
import Banner from '../components/Banner'
import Header from '../components/Header'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Air Bnb 2.0</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Header/>
      {/* banner */}
      <Banner/>
      {/*  */}
    
    

      
    </div>
  )
}
