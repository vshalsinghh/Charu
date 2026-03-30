import Image from "next/image";
import Title from "./title";

export default function Map(){
    return(
        <section className="w-full bg-[#eeeeee] py-16 px-6">
            <div className="container text-center m-auto">
                <Title 
                    title="Countries We Serve"
                    subtitle="We serve global markets across the globe, supporting brands with export-ready manufacturing from India."
                    />
            </div>
            <div className="flex justify-center px-4">
            <Image  src="/home/home_map.png" alt="Map" width={800} height={400} className="object-contain"/>
            </div>
           

        </section>
    )
}