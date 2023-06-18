"use client"
import React, { useState } from 'react';
import StoreData from '@/StoreData';

function Page() {
  const [data, setData] = useState(StoreData);

  const handleDelete = (itemId) => {
    setData((prevData) => prevData.filter((item) => item.id !== itemId));
  };

  return (
    <div className="max-w-[1200px] mx-auto py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.map((item) => (
          <div key={item.id} className="bg-white rounded-lg shadow-md item-card">
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2">{item.title}</h2>
              <div className="flex items-center justify-between mt-4">
                <span className="text-gray-600">{item.gpuCount}</span>
                <span className="text-gray-600">{item.categories[0]}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Page;
