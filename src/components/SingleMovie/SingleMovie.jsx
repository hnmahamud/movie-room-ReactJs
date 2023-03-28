import React from 'react';

const SingleMovie = ({ singleData, handleBuyNow }) => {
  console.log(singleData);
  const { poster, movieName, description, watchTime, imdbRating } = singleData;
  return (
    <div className="card card-compact bg-base-100 border rounded-md">
      <div className="flex justify-center align-middle p-2">
        <img className="h-52" src={poster} alt="" />
      </div>
      <div className="card-body">
        <h2 className="card-title">{movieName}</h2>
        <p>{description}</p>
      </div>
      <div className="flex justify-around mb-4">
        <p>Watch Time: {watchTime}</p>
        <p>Rating: {imdbRating}</p>
      </div>
      <div className="card-actions">
        <button onClick={() => handleBuyNow(watchTime)} type="button" className="w-full btn btn-xs">Buy Now</button>
      </div>
    </div>
  );
};

export default SingleMovie;
