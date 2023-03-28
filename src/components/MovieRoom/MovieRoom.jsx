import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SideCart from '../SideCart/SideCart';
import SingleMovie from '../SingleMovie/SingleMovie';

const MovieRoom = () => {
  const [movieData, setMovieData] = useState([]);
  const [watchTime, setWatchTime] = useState(0);
  const [breakTime, setBreakTime] = useState(0);

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await axios.get('data.json');
        const { data } = response;
        setMovieData(data);
      } catch (error) {
        console.log(error);
      }
    };
    loadData();
  }, []);

  useEffect(() => {
    const isWatchTimeAvailable = JSON.parse(localStorage.getItem('watch-time'));
    const isBreakTimeAvailable = JSON.parse(localStorage.getItem('break-time'));
    if (isWatchTimeAvailable) {
      setWatchTime(isWatchTimeAvailable);
    }

    if (isBreakTimeAvailable) {
      setBreakTime(isBreakTimeAvailable);
    }
  }, []);

  const handleBuyNow = (time) => {
    const newWatchTime = (+watchTime) + (+time);
    setWatchTime(newWatchTime);
    localStorage.setItem('watch-time', newWatchTime);
  };

  const handleBreakTime = (time) => {
    setBreakTime(time);
    localStorage.setItem('break-time', time);
  };

  const handleComplete = (wTime, bTime) => {
    const finalTime = wTime - bTime;
    toast(`Your final watch time: ${finalTime}`);
    setWatchTime(0);
    setBreakTime(0);
    localStorage.removeItem('watch-time');
    localStorage.removeItem('break-time');
  };

  return (
    <div className="w-[85%] mx-auto mt-8">
      <div className="grid grid-cols-5 gap-4">
        <div className="col-span-4">
          <div className="grid grid-cols-3 gap-4">
            {movieData.map((singleData, index) => (
              <SingleMovie
                key={index}
                singleData={singleData}
                handleBuyNow={handleBuyNow}
              />
            ))}
          </div>
        </div>
        <div className="col-span-1 border rounded-md">
          <SideCart
            watchTime={watchTime}
            breakTime={breakTime}
            handleBreakTime={handleBreakTime}
            handleComplete={handleComplete}
          />
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default MovieRoom;
