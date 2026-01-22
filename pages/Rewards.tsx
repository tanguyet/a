
import React, { useState } from 'react';
import { REWARDS, MOCK_USER } from '../constants';

export const Rewards: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Experience', 'Merchandise', 'Voucher', 'Workplace'];

  const filteredRewards = filter === 'All' 
    ? REWARDS 
    : REWARDS.filter(r => r.category === filter);

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold text-gray-800">Rewards Catalog</h2>
          <p className="text-gray-500 mt-1">Redeem your hard-earned EcoPoints for exclusive perks.</p>
        </div>
        <div className="flex items-center space-x-2 bg-white p-2 rounded-2xl shadow-sm border border-gray-100">
           <span className="text-sm font-bold text-gray-400 px-2">Sort by:</span>
           <select className="bg-transparent text-sm font-semibold text-gray-700 outline-none">
             <option>Popular</option>
             <option>Price: Low to High</option>
             <option>Price: High to Low</option>
           </select>
        </div>
      </div>

      {/* Categories */}
      <div className="flex items-center space-x-2 overflow-x-auto pb-2 scrollbar-hide">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-5 py-2 rounded-full whitespace-nowrap text-sm font-bold transition-all ${
              filter === cat 
                ? 'bg-indigo-600 text-white shadow-md' 
                : 'bg-white text-gray-500 border border-gray-200 hover:border-indigo-300'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Rewards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredRewards.map((reward) => (
          <div key={reward.id} className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm flex flex-col group hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="relative h-48 overflow-hidden">
              <img src={reward.image} alt={reward.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute top-4 right-4">
                <span className="bg-white/90 backdrop-blur-md text-indigo-600 font-bold px-3 py-1 rounded-full text-xs shadow-sm">
                  {reward.category}
                </span>
              </div>
            </div>
            <div className="p-5 flex-1 flex flex-col">
              <h3 className="text-lg font-bold text-gray-800 mb-2">{reward.title}</h3>
              <p className="text-sm text-gray-500 mb-6 flex-1">{reward.description}</p>
              
              <div className="flex items-center justify-between mt-auto">
                <div>
                  <p className="text-xs text-gray-400 font-bold uppercase">Price</p>
                  <p className="text-xl font-black text-indigo-600">{reward.cost} <span className="text-sm font-normal">EP</span></p>
                </div>
                <button 
                  disabled={MOCK_USER.points < reward.cost}
                  className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${
                    MOCK_USER.points >= reward.cost
                      ? 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg'
                      : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  }`}
                >
                  {MOCK_USER.points >= reward.cost ? 'Redeem Now' : 'Not Enough'}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* No results */}
      {filteredRewards.length === 0 && (
        <div className="bg-white rounded-3xl p-12 text-center border border-dashed border-gray-200">
          <i className="fas fa-search text-gray-200 text-6xl mb-4"></i>
          <h3 className="text-xl font-bold text-gray-400">No rewards found in this category</h3>
          <button onClick={() => setFilter('All')} className="text-indigo-600 mt-2 font-bold hover:underline">Clear filters</button>
        </div>
      )}
    </div>
  );
};
