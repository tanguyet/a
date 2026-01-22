
import React, { useState, useEffect } from 'react';
import { MOCK_USER, ACHIEVEMENTS, REWARDS } from '../constants';
import { getLoyaltyAdvice } from '../services/geminiService';

export const Dashboard: React.FC = () => {
  const [aiAdvice, setAiAdvice] = useState<string>('');
  const [loadingAdvice, setLoadingAdvice] = useState(false);

  useEffect(() => {
    const fetchAdvice = async () => {
      setLoadingAdvice(true);
      const advice = await getLoyaltyAdvice(MOCK_USER, REWARDS, ACHIEVEMENTS);
      setAiAdvice(advice || 'No advice today!');
      setLoadingAdvice(false);
    };
    fetchAdvice();
  }, []);

  return (
    <div className="space-y-8">
      {/* Top Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-indigo-600 to-violet-700 rounded-3xl p-6 text-white shadow-xl">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-indigo-100 text-sm font-medium">Available Balance</p>
              <h2 className="text-4xl font-bold mt-1">{MOCK_USER.points.toLocaleString()} <span className="text-xl font-normal opacity-80">EP</span></h2>
            </div>
            <div className="bg-white/20 p-3 rounded-2xl backdrop-blur-md">
              <i className="fas fa-wallet text-2xl"></i>
            </div>
          </div>
          <div className="mt-8 flex items-center justify-between text-sm">
            <span>Lifetime: {MOCK_USER.totalEarned.toLocaleString()} EP</span>
            <span className="flex items-center bg-white/10 px-2 py-1 rounded-lg">
              <i className="fas fa-arrow-trend-up mr-1"></i> +12%
            </span>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-amber-50 rounded-xl flex items-center justify-center text-amber-500">
                <i className="fas fa-medal text-xl"></i>
              </div>
              <h3 className="font-bold text-gray-800">Current Level</h3>
            </div>
            <p className="text-2xl font-bold text-gray-800">Silver Member</p>
            <div className="w-full bg-gray-100 h-2 rounded-full mt-4 overflow-hidden">
              <div className="bg-amber-400 h-full rounded-full" style={{ width: '65%' }}></div>
            </div>
            <p className="text-xs text-gray-400 mt-2">750 EP more to Gold</p>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-500">
                <i className="fas fa-calendar-check text-xl"></i>
              </div>
              <h3 className="font-bold text-gray-800">Weekly Progress</h3>
            </div>
            <p className="text-2xl font-bold text-gray-800">450 EP earned</p>
            <p className="text-sm text-gray-500 mt-1">You are in top 5% of the week!</p>
          </div>
          <button className="mt-4 text-indigo-600 font-semibold text-sm hover:underline">View reports &rarr;</button>
        </div>
      </div>

      {/* AI Assistant Section */}
      <div className="bg-indigo-50 border border-indigo-100 rounded-3xl p-6 flex flex-col md:flex-row items-center gap-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-4 opacity-5">
            <i className="fas fa-robot text-9xl"></i>
        </div>
        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-indigo-600 shadow-sm shrink-0">
          <i className="fas fa-wand-magic-sparkles text-2xl animate-pulse"></i>
        </div>
        <div className="flex-1">
          <h3 className="text-indigo-900 font-bold text-lg mb-1">Loyalty Coach Suggestion</h3>
          <div className="text-indigo-700 prose prose-indigo">
            {loadingAdvice ? (
              <div className="flex items-center space-x-2 animate-pulse">
                <div className="h-4 bg-indigo-200 rounded w-1/2"></div>
                <div className="h-4 bg-indigo-200 rounded w-1/4"></div>
              </div>
            ) : (
              <div className="whitespace-pre-line text-sm leading-relaxed">
                {aiAdvice}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Grid: Achievements & Activities */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold text-gray-800">Recommended Achievements</h3>
            <button className="text-indigo-600 text-sm font-bold">See All</button>
          </div>
          <div className="space-y-4">
            {ACHIEVEMENTS.map((ach) => (
              <div key={ach.id} className="bg-white p-4 rounded-2xl border border-gray-100 flex items-center group hover:border-indigo-200 transition-all cursor-pointer">
                <div className="w-14 h-14 bg-gray-50 rounded-xl flex items-center justify-center text-gray-400 group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-colors mr-4">
                  <i className={`fas ${ach.icon} text-2xl`}></i>
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-gray-800">{ach.title}</h4>
                  <p className="text-sm text-gray-500 line-clamp-1">{ach.description}</p>
                </div>
                <div className="text-right">
                  <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap">
                    +{ach.points} EP
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold text-gray-800">Recent Transactions</h3>
            <button className="text-indigo-600 text-sm font-bold">Full History</button>
          </div>
          <div className="bg-white rounded-3xl border border-gray-100 overflow-hidden">
            <div className="divide-y divide-gray-50">
              {[
                { title: 'Project Alpha Deployment', type: 'earn', amount: 150, date: 'Today, 10:00' },
                { title: 'Redeemed Starbucks Voucher', type: 'redeem', amount: -500, date: 'Yesterday, 15:30' },
                { title: 'Peer Appreciation Bonus', type: 'earn', amount: 50, date: 'Oct 24, 09:12' },
                { title: 'Internal Training Completion', type: 'earn', amount: 200, date: 'Oct 20, 14:00' },
              ].map((tx, idx) => (
                <div key={idx} className="p-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
                  <div className="flex items-center space-x-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${tx.type === 'earn' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
                      <i className={`fas ${tx.type === 'earn' ? 'fa-plus' : 'fa-minus'}`}></i>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">{tx.title}</p>
                      <p className="text-xs text-gray-400">{tx.date}</p>
                    </div>
                  </div>
                  <p className={`font-bold ${tx.type === 'earn' ? 'text-green-600' : 'text-red-600'}`}>
                    {tx.amount > 0 ? '+' : ''}{tx.amount} EP
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
