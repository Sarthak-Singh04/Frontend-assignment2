"use client"
import DummyData from '@/DummyData';
import StoreData from '@/StoreData';
import React, { useState } from 'react';

const SelectData = () => {
  const [title, setTitle] = useState('');
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedGPUCount, setSelectedGPUCount] = useState(0);
  const [categoryError, setCategoryError] = useState(false);
  const [showSelection, setShowSelection] = useState(false);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleCategoryClick = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((cat) => cat !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const handleGPUCountChange = (e) => {
    setSelectedGPUCount(parseInt(e.target.value, 10));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form fields
    if (title.trim() === '') {
      setCategoryError(true);
      return;
    }

    if (selectedCategories.length === 0) {
      setCategoryError(true);
      return;
    }

    // Handle form submission
    console.log('Title:', title);
    console.log('Selected Categories:', selectedCategories);
    console.log('Selected GPU Count:', selectedGPUCount);

    const data = {
      id: DummyData.length + 1,
      title: title,
      categories: selectedCategories,
      gpuCount: selectedGPUCount,
    };

    StoreData.push(data)

    // StoreData.push(data);
    console.log(data);

    setTitle('');
    setSelectedCategories([]);
    setSelectedGPUCount(0);
    setCategoryError(false);
    setShowSelection(true);
  };

  return (
    <div className="py-4 sm:p-12">
      <div className="mx-auto max-w-md">
        <h1 className="text-2xl font-bold mb-8">Select option</h1>
        <form onSubmit={handleSubmit} noValidate className="bg-white border-0 shadow-lg sm:rounded-3xl px-6 py-12">
          <div className="mb-5">
            <label htmlFor="title" className="text-gray-500">
              Enter title
            </label>
            <input
              type="text"
              name="title"
              placeholder=" "
              required
              value={title}
              onChange={handleTitleChange}
              className={`pt-3 pb-2 block w-full bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200 ${
                categoryError && title.trim() === '' ? 'border-red-500' : ''
              }`}
            />
            {categoryError && title.trim() === '' && (
              <span className="text-sm text-red-600">Gpu name is required</span>
            )}
          </div>

          <div className="mb-5">
            <label className="text-gray-500">Select System</label>
            <div className="flex flex-wrap">
              {Array.from(new Set(DummyData.flatMap((book) => book.os.map((category) => category.name)))).map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => handleCategoryClick(category)}
                  className={`px-3 py-1 bg-gray-300 text-gray-700 rounded-full mr-2 mb-2 ${
                    selectedCategories.includes(category) ? 'bg-blue-500 text-white' : ''
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            {categoryError && selectedCategories.length === 0 && (
              <span className="text-sm text-red-600">Category is required</span>
            )}
          </div>

          <div className="mb-5">
            <label htmlFor="gpuCount" className="text-gray-500">
              Select GPU Count
            </label>
            <select
              id="gpuCount"
              name="gpuCount"
              value={selectedGPUCount}
              onChange={handleGPUCountChange}
              className="block w-full bg-white border border-gray-300 rounded-md py-2 px-3 mt-1 mb-3 focus:outline-none focus:ring-0 focus:border-black sm:text-sm"
            >
              <option value={0}>None</option>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
            </select>
          </div>

          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
            Submit
          </button>
        </form>

        <div className="mt-8">
          {title && (
            <div className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full mr-2 mb-2">
              <span className="font-bold">Title:</span> {title}
            </div>
          )}
          {selectedCategories.length > 0 && (
            <div className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full mr-2 mb-2">
              <span className="font-bold">Select System:</span>{' '}
              {selectedCategories.map((category) => (
                <span
                  key={category}
                  className="inline-block px-2 py-1 bg-gray-300 text-gray-700 rounded-full mx-1"
                >
                  {category}
                </span>
              ))}
            </div>
          )}
          {selectedGPUCount > 0 && (
            <div className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full mr-2 mb-2">
              <span className="font-bold">Selected GPU Count:</span> {selectedGPUCount}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SelectData;
