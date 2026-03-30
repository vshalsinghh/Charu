export default function Footer() {
    return (
      <footer className="bg-[#151515] text-white w-full">
        <div className="max-w-7xl mx-auto px-6 py-24">
          
          {/* Big Brand Section */}
          <div className="flex flex-col items-center text-center">
            
            <h2 className="text-6xl md:text-8xl font-extrabold tracking-tight">
              Charu
            </h2>
  
            <p className="mt-8 max-w-2xl text-gray-400 text-lg">
            Consumer care address: A-40, Sector 2,
            Noida, Uttar Pradesh, India -201301  
            </p>
            <p className="mt-8 max-w-2xl text-gray-400 text-lg">
            Manufacturer: Charu Apparel Mfg. Co. Pvt. Ltd, A-40, Sector 2,
            Noida, Uttar Pradesh, India -201301
            </p>
  
          </div>
  
          {/* Divider */}
          <div className="mt-20 border-t border-white/10"></div>
  
          {/* Bottom Row */}
          <div className="mt-8 flex flex-col md:flex-row items-center justify-between text-gray-500 text-sm gap-4">
            
            <p>
              © {new Date().getFullYear()} CHARU. All rights reserved.
            </p>
  
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition">
                Instagram
              </a>
              <a href="#" className="hover:text-white transition">
                Twitter
              </a>
              <a href="#" className="hover:text-white transition">
                Contact
              </a>
            </div>
  
          </div>
        </div>
      </footer>
    );
  }