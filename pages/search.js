import Footer from "../components/Footer"
import Header from "../components/Header"

function Search() {
    return (
        <div className="h-screen">
            <Header/>
            
            <main className="flex">
                <section>
                    <p className="text-xs">300+ Stays for 5 number of guests</p>
                    <h1 className="text-3xl font-semibold mt-6 mb-6">
                        Stays in mars
                    </h1>
{/* hidden lg:inline-flex */}
                    <div className="hidden md:inline-flex space-x-2 text-gray-800 whitespace-nowrap">
                        <div className="button">Cancellation flexibility</div>
                        <div className="button">Type of place</div>
                        <div className="button">Price</div>
                        <div className="button">Rooms and beds</div>
                        <div className="button">More filters</div>
                    </div>

                </section>
            </main>

            <Footer/>
        </div>
    )
}

export default Search
