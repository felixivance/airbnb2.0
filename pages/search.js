import { format } from "date-fns";
import { useRouter } from "next/dist/client/router"
import Footer from "../components/Footer"
import Header from "../components/Header"
import InfoCard from "../components/InfoCard";

function Search({searchResults}) {
    const router = useRouter();
    const { location, startDate, endDate, guests} = router.query;

    const formattedStartDate = format( new Date(startDate),"dd MMMM yy");
    const formattedEndDate = format( new Date(endDate),"dd MMMM yy");
    

    return (
        <div className="h-screen">
            <Header/>
            
            <main className="flex">
                <section className="flex-grow pt-14 px-6">
                    <p className="text-xs">300+ Stays - {formattedStartDate} - {formattedEndDate} - for {guests} guests</p>
                    <h1 className="text-3xl font-semibold mt-6 mb-6">
                        Stays in {location}
                    </h1>
{/* hidden lg:inline-flex */}
                    <div className="hidden md:inline-flex space-x-2 text-gray-800 whitespace-nowrap">
                        <div className="button">Cancellation flexibility</div>
                        <div className="button">Type of place</div>
                        <div className="button">Price</div>
                        <div className="button">Rooms and beds</div>
                        <div className="button">More filters</div>
                    </div>

                    <div className="flex flex-col">
                        {searchResults.map( (item,key)=>  (
                                <InfoCard item={item} key={key} />
                            )
                        )}
                    </div>

                </section>
            </main>

            <Footer/>
        </div>
    )
}

export default Search

export async function getServerSideProps(){
    const searchResults = await fetch("https://links.papareact.com/isz")
    .then(res=> res.json());
    return {
        props:{
            searchResults: searchResults
        }
    }
} 