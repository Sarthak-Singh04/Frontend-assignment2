"use client"
import React, { useState } from 'react';
import DummyData from '@/DummyData';
import ProductCard from '@/components/ProductCard';

function Home() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedGPUs, setSelectedGPUs] = useState(new Set());
  const [selectedOS, setSelectedOS] = useState(new Set());
  const [selectedGPUCores, setSelectedGPUCores] = useState(new Set());

  const uniqueOSNames = new Set(DummyData.flatMap(data => data.os.map(osData => osData.name)));
  const GpuCount = new Set(DummyData.flatMap(data => data.os.filter(osData => osData.gpuCount > 0).map(osData => osData.gpuCount)));

  const handleProductClick = (productId) => {
    setSelectedProduct(productId);
  };

  const handleGPUCheckboxChange = (event) => {
    const gpuName = event.target.value;
    if (selectedGPUs.has(gpuName)) {
      selectedGPUs.delete(gpuName);
    } else {
      selectedGPUs.add(gpuName);
    }
    setSelectedGPUs(new Set(selectedGPUs));
    setSelectedProduct(null);
  };

  const handleOSCheckboxChange = (event) => {
    const osName = event.target.value;
    if (selectedOS.has(osName)) {
      selectedOS.delete(osName);
    } else {
      selectedOS.add(osName);
    }
    setSelectedOS(new Set(selectedOS));
    setSelectedProduct(null);
  };

  const handleGPUCoreCheckboxChange = (event) => {
    const gpuCoreCount = parseInt(event.target.value);
    if (selectedGPUCores.has(gpuCoreCount)) {
      selectedGPUCores.delete(gpuCoreCount);
    } else {
      selectedGPUCores.add(gpuCoreCount);
    }
    setSelectedGPUCores(new Set(selectedGPUCores));
    setSelectedProduct(null);
  };

  const filterProducts = () => {
    if (selectedProduct) {
      return DummyData.filter((data) => data.id === selectedProduct);
    } else {
      return DummyData.filter((data) => {
        const hasSelectedGPU = selectedGPUs.size === 0 || selectedGPUs.has(data.gpuName);
        const hasSelectedOS = selectedOS.size === 0 || data.os.some((osData) => selectedOS.has(osData.name));
        const hasSelectedGPUCore = selectedGPUCores.size === 0 || data.os.some((osData) => selectedGPUCores.has(osData.gpuCount));
        const hasSelectedCPU = selectedOS.size === 0 || data.os.some((osData) => {
          if (selectedOS.has(osData.name)) {
            return selectedGPUs.size === 0 || selectedGPUs.has(data.gpuName);
          }
          return false;
        });

        return hasSelectedGPU && hasSelectedOS && hasSelectedGPUCore && hasSelectedCPU;
      });
    }
  };

  const filteredProducts = filterProducts();

  return (
    <div className="flex w-full min-h-screen bg-gray-200">
      <div className="flex overflow-auto h-full">
        <aside className="w-[300px] h-full overflow-y-auto overflow-x-hidden bg-white shadow-lg p-4">
          <h3 className="mb-4 ml-2 text-xl text-gray-800 font-semibold">Graphics Card</h3>
          {DummyData.map((data) => (
            <div key={data.id} className="flex items-center mb-2">
              <input
                id={`checkbox-${data.id}`}
                type="checkbox"
                className="w-4 h-4 text-blue-500 bg-gray-300 rounded-full focus:ring-blue-500 transition duration-300 ease-in-out"
                value={data.gpuName}
                checked={selectedGPUs.has(data.gpuName)}
                onChange={handleGPUCheckboxChange}
              />
              <label
                htmlFor={`checkbox-${data.id}`}
                className="ml-2 text-sm text-gray-800 cursor-pointer transition duration-300 ease-in-out hover:text-blue-500"
              >
                {data.gpuName}
              </label>
            </div>
          ))}

          <h3 className="mb-4 ml-2 mt-6 text-xl text-gray-800 font-semibold">System</h3>
          {Array.from(uniqueOSNames).map((name, index) => (
            <div key={index} className="flex items-center mb-2">
              <input
                id={`checkbox-system-${index}`}
                type="checkbox"
                className="w-4 h-4 text-blue-500 bg-gray-300 rounded-full focus:ring-blue-500 transition duration-300 ease-in-out"
                value={name}
                checked={selectedOS.has(name)}
                onChange={handleOSCheckboxChange}
              />
              <label
                htmlFor={`checkbox-system-${index}`}
                className="ml-2 text-sm text-gray-800 cursor-pointer transition duration-300 ease-in-out hover:text-blue-500"
              >
                {name}
              </label>
            </div>
          ))}

          <h3 className="mb-4 ml-2 mt-6 text-xl text-gray-800 font-semibold">GpuCount</h3>
          {Array.from(GpuCount).map((count, index) => {
            if (count > 0) {
              return (
                <div key={index} className="flex items-center mb-2">
                  <input
                    id={`checkbox-gpu-${index}`}
                    type="checkbox"
                    className="w-4 h-4 text-blue-500 bg-gray-300 rounded-full focus:ring-blue-500 transition duration-300 ease-in-out"
                    value={count}
                    checked={selectedGPUCores.has(count)}
                    onChange={handleGPUCoreCheckboxChange}
                  />
                  <label
                    htmlFor={`checkbox-gpu-${index}`}
                    className="ml-2 text-sm text-gray-800 cursor-pointer transition duration-300 ease-in-out hover:text-blue-500"
                  >
                    {count}
                  </label>
                </div>
              );
            }
            return null;
          })}
        </aside>

        <main className="flex-grow p-2">
          {filteredProducts.map((data) => (
            <ProductCard
              key={data.id}
              gpuName={data.gpuName}
              osName={data.os[0].name}
              gpuCount={data.os[0].gpuCount}
              gpuRAM={data.os[0].gpuRAM}
              cpu={data.os[0].cpu}
              cpuPerGPU={data.os[0].cpuPerGPU}
              ramPerGPU={data.os[0].ramPerGPU}
              systemDisk={data.os[0].systemDisk}
              dataDisk={data.os[0].dataDisk}
              bandwidth={data.os[0].bandwidth}
              pricing={data.os[0].pricing}
              onClick={() => handleProductClick(data.id)}
            />
          ))}
        </main>
      </div>
    </div>
  );
}

export default Home;
