import React from "react";

const FeedBack = ({ feedBack }) => {
  const { name, userImg, review } = feedBack;

  return (
    <div className="min-w-[250px] bg-gradient-to-br rounded-xl shadow-md p-4 flex-shrink-0">
      <div className="flex items-center space-x-4 mb-3">
        <img
          src={userImg}
          alt={name}
          className="w-12 h-12 rounded-full object-cover border-2 border-white"
        />
        <h3 className="text-lg font-semibold">{name}</h3>
      </div>

      <p className="text-sm mb-4">{review}</p>

      {/* Rating */}
      <div className="flex items-center justify-between">
        <div className="rating rating-sm">
          <input
            type="radio"
            name={`rating-${feedBack.reviewId}`}
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name={`rating-${feedBack.reviewId}`}
            className="mask mask-star-2 bg-orange-400"
            defaultChecked
          />
          <input
            type="radio"
            name={`rating-${feedBack.reviewId}`}
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name={`rating-${feedBack.reviewId}`}
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name={`rating-${feedBack.reviewId}`}
            className="mask mask-star-2 bg-orange-400"
          />
        </div>

        <button className=" bg-[#FFD700]  text-black text-xs px-3 py-1 rounded-full font-semibold hover:bg-yellow-300 transition">
          Review
        </button>
      </div>
    </div>
  );
};

export default FeedBack;
