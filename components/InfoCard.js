import { HeartIcon, StarIcon } from '@heroicons/react/outline';
import Image from 'next/image';

function InfoCard({item}) {

    // description, img, lat, location, long, price, star, title, total
    return (
        <div className="flex py-7 px-2 pr-4 border-b cursor-pointer hover:opacity-80 hover:shadow-lg 
                        transition duration-200 ease-out first:border-t">
           <div className="relative h-30 w-40 md:h-52 md:w-80 flex-shrink-0">
                <Image layout="fill" src={item.img} objectFit="cover" className="rounded-2xl" />
           </div>
           <div className="flex flex-col flex-grow pl-5">
               <div className="flex justify-between">
                   <p className="text-sm text-gray-500">{item.location}</p>
                   <HeartIcon className="cursor-pointer h-7" />
               </div>
               <h4 className="text-xl"> {item.title} </h4>

                <div className="border-b w-10 pt-2"></div>

                <p className="text-sm text-gray-500 pt-2 flex-grow">{item.description}</p>

                <div className="flex justify-between items-end pt-5">
                    <p className="flex items-center text-sm">
                        <StarIcon className="h-5 text-red-400" /> {item.star}
                    </p>

                    <div className="">
                        <p className="text-lg font-semibold pb-2 lg:text-2xl">{item.price}</p>
                        <p className="text-right font-extralight">{item.total}</p>
                    </div>

                </div>
           </div>

        </div>
    )
}

export default InfoCard
