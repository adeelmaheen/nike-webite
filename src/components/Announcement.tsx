import Image from 'next/image';
import Link from 'next/link';
import blackmen from "../../public/assests/blackmen.png";

function AnnouncementBar() {
  return (
    <>
    {/* Top bar */}
    <div className="bg-[#fafafa] flex justify-between items-center px-6 py-2 md:text-[11px] sm:text-[9px] text-[8px] font-medium text-gray-500">
      <Image src={blackmen} alt={''} width={24} height={24}/>
      <div>
      
    </div>
      <div className="flex md:gap-4 sm:gap-3 gap-2">
        <Link href="/location" className="hover:text-gray-800">Find Link Store</Link>
        <Link href="/featured" className="hover:text-gray-800">Help</Link>
        <Link href="/joinin" className="hover:text-gray-800">Join Us</Link>
        <Link href="/joinus" className="hover:text-gray-800">Sign In</Link>
      </div>
    </div>
    </>
   
  );
}

export default AnnouncementBar;
