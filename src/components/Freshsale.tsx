import Image from "next/image"
import { CategoryCard } from './CategoryCard';
import { ProductCard } from './ProductCard';

function FreshSales(){
    return (
      <>
        <main>
       <section className="max-w-6xl mx-auto px-4 py-12">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Best of Air Max</h2>
        <button className="text-sm">More</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <ProductCard
          name="Nike Air Max Pulse"
          price="$150"
          image="/womenshoes.png" // Ensure this starts with a leading slash
        />
        <ProductCard
          name="Nike Air Max Plus"
          price="$175"
          image="/menshoe.png" // Ensure this starts with a leading slash
        />
        <ProductCard
          name="Nike Air Max 97"
          price="$175"
          image="/menshoes2.png" // Ensure this starts with a leading slash
        />
      </div>
    </section>
    {/* Featured Section */}
    <section className="relative mb-12 p-16">
        <Image
          src="/Mwalk.png"
          alt="Step Into What Feels Good"
          width={1920}
          height={1080}
          className=""
        />
        <div className=" flex flex-col items-center justify-center text-center text-black">
          <h2 className="text-5xl font-medium mb-4 mt-4">STEP INTO WHAT FEELS GOOD</h2>
          <p className='pb-4 flex justify-center text-center'>Cause everyone should know the feeling of running in that perfect pair.</p>
          <button className="bg-black text-white px-6 py-2 rounded-full">
            Shop Now
          </button>
        </div>
      </section>
      {/* Gear Up Section */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Gear Up</h2>
          <button className="text-sm">More</button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <ProductCard
            name="Men's T-Shirt"
            price="$30"
            image="/menshirt.png"
          />
          <ProductCard
            name="Men's Shorts"
            price="$45"
            image="/blackShort.png"
          />
          <ProductCard
            name="Men's T-Shirt"
            price="$35"
            image="/menTshirt.png"
          />
          <ProductCard
            name="Women's Pants"
            price="$65"
            image="/Btrouser.png"
          />
        </div>
      </section>
      {/* Flight Essentials */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="w-full flex grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Image
              src="/heroImage2.png"
              alt="Flight Essentials"
              width={800}
              height={600}
              className="w-full"
            />
            
          </div>
          <div className="text-center">
            <h2 className="text-5xl font-bold mb-4">FLIGHT ESSENTIALS</h2>
            <p className="mb-6">Gear up for your next move with style and comfort.</p>
            <button className="bg-black text-white px-6 py-2 rounded-full">
              Shop
            </button>
          </div>
        </div>
      </section>
       {/* Categories */}
       <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-6">The Essentials</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <CategoryCard
            title="Shoes"
            image="/blackshoe.png"
            href="/shoes"
          />
          <CategoryCard
            title="Shorts"
            image="/blackShort.png"
            href="/shorts"
          />
          <CategoryCard
            title="Clothing"
            image="/skybgirl.png"
            href="/clothing"
          />
          <CategoryCard
            title="Gear"
            image="/men-sando.png"
            href="/gear"
          />
        </div>
      </section>
      </main>


         
    
         </>
    )
}
export default FreshSales;  