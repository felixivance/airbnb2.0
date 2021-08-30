import Head from 'next/head'
import Banner from '../components/Banner'
import Header from '../components/Header'
import SmallCard from '../components/SmallCard';

export default function Home({ exploreData}) {
  console.log(exploreData);
  return (
    <div className="">
      <Head>
        <title>Air Bnb 2.0</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Header/>
      {/* banner */}
      <Banner/>
      {/* mainn */}
      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>

        { exploreData?.map((item, key) => (
          <SmallCard className="flex items-center" key={key} item={item} />
        ) )}

        </section>
      </main>
    
    

      
    </div>
  )
}

export async function getStaticProps(){
  const exploreData = await fetch('https://links.papareact.com/pyp').then(
    (res)=>res.json()
  ).catch(error=>{
    console.log(error)
  })

  return {
    props:{
      exploreData 
    }
  }
}