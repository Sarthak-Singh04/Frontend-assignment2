import Link from "next/link";

function ProductCard({ gpuName, osName, gpuCount, gpuRAM, cpu, cpuPerGPU, ramPerGPU, systemDisk, dataDisk, bandwidth, pricing }) {
    return (
      <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-md shadow-md p-4 w-[1200px] mb-4 transform transition-all duration-300">
        <h3 className="text-2xl text-white font-semibold mb-4">{gpuName}</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="text-white">
            <span className="font-semibold">GPU Count:</span> {gpuCount}
          </div>
          <div className="text-white">
            <span className="font-semibold">GPU RAM:</span> {gpuRAM}
          </div>
          <div className="text-white">
            <span className="font-semibold">CPU:</span> {cpu}
          </div>
          <div className="text-white">
            <span className="font-semibold">CPU per GPU:</span> {cpuPerGPU}
          </div>
        </div>
        <div className="text-white mt-4">
          <span className="font-semibold">OS:</span> {osName}
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div className="text-white">
            <span className="font-semibold">RAM per GPU:</span> {ramPerGPU}
          </div>
          <div className="text-white">
            <span className="font-semibold">System Disk:</span> {systemDisk}
          </div>
        </div>
        <div className="text-white mt-4">
          <span className="font-semibold">Data Disk:</span> {dataDisk}
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div className="text-white">
            <span className="font-semibold">Bandwidth Up:</span> {bandwidth.up}
          </div>
          <div className="text-white">
            <span className="font-semibold">Bandwidth Down:</span> {bandwidth.down}
          </div>
        </div>
        <div className="flex justify-end mt-4">
          <div className="text-white">
            <span className="font-semibold">Hourly Rate:</span> {pricing.hourlyRate}
          </div>
          <div className="text-white ml-4">
            <span className="font-semibold">Up:</span> {pricing.up}
          </div>
        </div>
        <Link href="/purchase">
        <button className="mt-6 py-2 px-4 bg-purple-600 text-white font-semibold rounded-md transition-all duration-300 hover:bg-purple-900">
          Buy Now
        </button>

        </Link>
       
      </div>
    );
  }
  
  export default ProductCard;
  