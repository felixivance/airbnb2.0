import Image from 'next/image';

function MediumCard({item}) {
    return (
        <div className="cursor-pointer hover:scale-105 transition transform 
        duration-300 ease-out">
           <div className="relative h-80 w-80 ">
                <Image src={item.img} layout="fill" className="rounded-2xl"/>
            
           </div>
           <p className="text-2xl mt-3">{item.title}</p>
        </div>
    )
}

export default MediumCard
