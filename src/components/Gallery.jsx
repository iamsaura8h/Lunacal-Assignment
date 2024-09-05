import { useState } from 'react';

const Gallery = () => {
  const [images, setImages] = useState([/* initial image URLs */]);

  const addImage = () => {
    setImages([...images, 'https://via.placeholder.com/150']);
  };

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Gallery</h2>
        <button
          className="bg-blue-500 px-4 py-2 rounded-lg text-white font-semibold hover:bg-blue-600 transition-all duration-300"
          onClick={addImage}
        >
          + Add Image
        </button>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {images.map((image, idx) => (
          <div key={idx} className="relative group">
            <img
              src={image}
              alt={`Gallery ${idx}`}
              className="w-full h-40 object-cover rounded-lg shadow-lg transition-transform transform group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white text-center py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Image {idx + 1}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
