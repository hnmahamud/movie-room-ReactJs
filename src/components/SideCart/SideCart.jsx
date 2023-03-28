import React from 'react';

const SideCart = ({ watchTime, breakTime, handleBreakTime, handleComplete }) => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-center">My Cart</h1>
      <div className="mt-12">
        <p>Total watch time:</p>
        <input type="text" value={watchTime} disabled className="input input-bordered input-sm w-full max-w-xs" />
      </div>
      <div className="mt-12 space-y-2">
        <p>Add Break Time:</p>
        <div className="flex justify-center align-middle gap-2">
          <button onClick={() => handleBreakTime(15)} type="button" className="btn btn-sm">15</button>
          <button onClick={() => handleBreakTime(20)} type="button" className="btn btn-sm">20</button>
          <button onClick={() => handleBreakTime(25)} type="button" className="btn btn-sm">25</button>
        </div>
        <input type="text" value={breakTime} disabled className="input input-bordered input-sm w-full max-w-xs" />
      </div>
      <div className="mt-12">
        <button onClick={() => handleComplete(watchTime, breakTime)} type="button" className="w-full btn btn-xs">Complete</button>
      </div>
    </div>
  );
};

export default SideCart;
