import React, { useState } from 'react';

function LactationSpaces() {
  const [clickedButtons, setClickedButtons] = useState({
    mall: false,
    coffee: false,
    library: false,
    museum: false,
    park: false,
    restaurant: false,
    cafe: false,
    bazaar: false,
    other: false,
  });

  const handleClick = (category) => {
    setClickedButtons((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };


  const categoryImages = {
    mall: '/images/mall.jpg',
    coffee: '/images/coffee.jpg',
    library: '/images/library.jpg',
    museum: '/images/museum.jpg',
    park: '/images/park.jpg',
    restaurant: '/images/restaurant.jpg',
    cafe: '/images/cafe.jpg',
    bazaar: '/images/bazaar.jpg',
    other: '/images/other.jpg',
  };

  return (
    <>
      <div className='px-6'>
        <div className="flex justify-end py-3">
          <i className="bi bi-arrow-left text-2xl" onClick={() => navigate('/')}></i>
        </div>

        <h1 className='text-2xl'>Send request for adding a new lactation space</h1>

        <div className='mt-10'>
          <div>
            <p>*Adress</p>
            <input
              type="text"
              placeholder="Введите текст"
              className=" bg-gray-200 mt-2 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className=" mt-8">
            <p>*Adress</p>
            <input
              type="text"
              placeholder="Введите текст"
              className=" bg-gray-200 mt-2 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className='mt-10'>
          <h1>*Choose category:</h1>
          <div className='grid grid-cols-4 gap-2 mt-3'>
            {['mall', 'coffee', 'library', 'museum', 'park', 'restaurant', 'cafe', 'bazaar', 'other'].map((category) => (
              <div key={category} className="space-y-2">

                <button
                  onClick={() => handleClick(category)}
                  className={`text-sm p-1 rounded-full px-2 ${
                    clickedButtons[category] ? 'bg-blue-950 text-white' : 'bg-gray-200 text-gray-400'
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>

                <button
                  onClick={() => handleClick(category)}
                  className={`text-sm p-1 rounded-full px-2 ${
                    clickedButtons[category] ? 'bg-blue-950 text-white' : 'bg-gray-200 text-gray-400'
                  }`}
                >
                  <img
                    src={categoryImages[category]} 
                    alt={category}
                    className="w-8 h-8 object-cover rounded-full"
                  />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default LactationSpaces;
