import Image from 'next/image';
import { GlobeAltIcon, MenuIcon, SearchIcon, UserCircleIcon, UserIcon, UsersIcon } from '@heroicons/react/outline';
import { useState } from 'react';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';

function Header() {
    const [searchInput, setSearchInput] = useState("")
    const [startDate, setStartDate] = useState( new Date());
    const [endDate, setEndDate] = useState( new Date());
    const [noOfGuests, setNoOfGuests] = useState(1);

    const selectionRanges ={
        startDate: startDate,
        endDate: endDate,
        key: 'selection'
    }

    // const functionName =()=>{}
    function handleDateChange(ranges){
        setStartDate(ranges.selection.startDate)
        setEndDate(ranges.selection.endDate)
    }
    const resetInput=()=>{
        setSearchInput("")
    }
    return (
        <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md py-5
        md:px-10">
            
            <div className="relative flex items-center h-10 cursor-pointer 
            my-auto">

                <Image src="https://links.papareact.com/qd3" layout="fill"
                objectFit="contain" objectPosition="left"  />
               
        
            </div>
             {/* search bar */}
             <div className="flex items-center rounded-full md:border-2 md:shadow-md">
                    <input value={searchInput} onChange={(e)=> setSearchInput(e.target.value)} className="flex-grow pl-4 bg-transparent outline-none text-gray-600 placeholder-gray-400" type="text" placeholder="start your search" />
                    <SearchIcon className="hidden md:inline-flex
                     h-8 bg-red-500 text-white rounded-full p-2 cursor-pointer" />
                </div>

                {/* right hand side */}
                <div className="flex items-center space-x-4 text-gray-600 justify-end">
                    <p className="hidden md:inline cursor-pointer">Become a host</p>
                    <GlobeAltIcon className=" h-6 cursor-pointer"/>

                    <div className="flex border-2 border-gray-400 rounded-full cursor-pointer ">
                        <MenuIcon className="h-6" />
                        <UserCircleIcon className="h-6" />
                    </div>
                </div>

            {searchInput && (
                <div className="flex flex-col col-span-3 mx-auto">
                    <DateRangePicker ranges={[selectionRanges]} minDate={ new Date() } 
                    rangeColors={['#FD5B61']} onChange={handleDateChange} />
                    <div className="flex items-center border-b mb-4">
                        <h2 className="text-2xl flex-grow font-semibold">Number of guests</h2>
                        <UsersIcon className="h-5" />
                        <input value={noOfGuests} type="number" min={1} className="w-12 pl-2 text-lg outline-none text-red-400" onChange={e=> setNoOfGuests(e.target.value)}  />
                    </div>
                    <div className="flex">
                        <button onClick={resetInput} className="flex-grow">Cancel</button>
                        <button className="flex-grow text-red-400" >Search</button>
                    </div>
                </div>
            )}

        </header>


    )
}

export default Header
