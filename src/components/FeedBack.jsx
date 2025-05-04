import React from 'react';

const FeedBack = ({ feedBack }) => {
  const { name, userImg, review } = feedBack;

  return (
    <div className="min-w-[250px] bg-gradient-to-br border-2 rounded-xl shadow-md p-4 flex-shrink-0">
      <div className="flex items-center space-x-4 mb-3">
        <img
          src={userImg}
          alt={name}
          className="w-12 h-12 rounded-full object-cover border-2 border-white"
        />
        <h3 className="text-lg font-semibold">{name}</h3>
      </div>
      <p className="text-sm">{review}</p>
    </div>
  );
};

export default FeedBack;
