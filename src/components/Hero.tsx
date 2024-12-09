import Image from "next/image"
import heroImage from "../../public/assests/heroImage.png"
import { Button } from "@/components/ui/button";

function Hero(){
    return(
        <>
         {/* Subheader */}
         <div className="bg-gray-100 py-3 text-center text-sm">
         <p>
             Hello Nike App
         <span className="block text-xs text-gray-600">
             Download the app to access everything Nike. Get Your Great
         </span>
         </p>
        </div>
        <div className="w-full flex justify-center items-center">
            
        
            <Image src={heroImage} alt='heroImage' width={1200} height={600}/>
        
            
        </div>
        <div className="p-8">
        {/* Main Content */}
        <span className="flex text-sm uppercase text-gray-500 tracking-wide justify-center items-center">
          First Look
        </span>
        <h1 className="flex justify-center font-bold md:text-2xl  tracking-tight">
          NIKE AIR MAX PULSE
        </h1>
        <p className="flex justify-center items-center max-w-2xl mx-auto text-gray-600 text-base">
             Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse
          <br className="justify-center items-center"/>
            — designed to push you past your limits and help you go to the max.
        </p>
        {/* Buttons */}
        <div className="flex justify-center gap-4 pt-4">
          <Button variant="default" size="lg" className="px-8 py-4">
            Notify Me
          </Button>
          <Button variant="outline" size="lg" className="px-8 py-4">
            Shop Air Max
          </Button>
        </div>
        </div>
        
        </>
    )
}
export default Hero;