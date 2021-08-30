import Head from 'next/head'
import Banner from '../components/Banner'
import Header from '../components/Header'
import LargeCard from '../components/LargeCard';
import MediumCard from '../components/MediumCard';
import SmallCard from '../components/SmallCard';

export default function Home({ exploreData, cardsData}) {
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            { exploreData?.map((item, key) => (
              <SmallCard className="flex items-center" key={key} item={item} />
            ) )}

          </div>
        </section>

        <section>
          <h2 className="text-4xl front-semibold py-8">Live Anywhere</h2>
              
            <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 ml-2">
            { cardsData?.map((item, key)=>(
                <MediumCard key={key} item={item}/>
              ))}
            </div>
        </section>
        
        <section>
          <LargeCard img="https://links.papareact.com/4cj" title="The greatest outdoors"
          description="wishlist created by airbnb" buttonText="check me out" />
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

  const cardsData = await fetch('https://links.papareact.com/zp1').then(
    (res)=>res.json()
  ).catch(error=>{
    console.log(error)
  })

  return {
    props:{
      exploreData, cardsData
    }
  }
}