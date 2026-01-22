
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const NavItem = ({ to, icon, label, active }: { to: string; icon: string; label: string; active: boolean }) => (
  <Link
    to={to}
    className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all ${
      active ? 'bg-indigo-600 text-white shadow-lg' : 'text-gray-500 hover:bg-indigo-50 hover:text-indigo-600'
    }`}
  >
    <i className={`fas ${icon} w-6`}></i>
    <span className="font-medium">{label}</span>
  </Link>
);

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="hidden md:flex flex-col w-64 bg-white border-r border-gray-200 p-6 fixed h-full">
        <div className="flex items-center space-x-2 mb-10">
          <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center text-white text-xl">
            <i className="fas fa-leaf"></i>
          </div>
          <span className="text-xl font-bold text-gray-800 tracking-tight">EcoPoints</span>
        </div>

        <nav className="flex-1 space-y-2">
          <NavItem to="/" icon="fa-chart-pie" label="Dashboard" active={location.pathname === '/'} />
          <NavItem to="/rewards" icon="fa-gift" label="Rewards" active={location.pathname === '/rewards'} />
          <NavItem to="/history" icon="fa-history" label="History" active={location.pathname === '/history'} />
          <NavItem to="/leaderboard" icon="fa-trophy" label="Leaderboard" active={location.pathname === '/leaderboard'} />
          <NavItem to="/integration" icon="fa-plug" label="AppSheet nhúng" active={location.pathname === '/integration'} />
        </nav>

        <div className="mt-auto pt-6 border-t border-gray-100">
          <div className="bg-indigo-50 p-4 rounded-xl">
            <p className="text-xs text-indigo-500 font-bold uppercase mb-1">Hỗ trợ</p>
            <p className="text-sm text-gray-600 mb-3">Bạn muốn tích hợp thêm?</p>
            <Link to="/integration" className="block w-full py-2 bg-white border border-indigo-200 text-indigo-600 rounded-lg text-sm font-semibold text-center hover:bg-indigo-100 transition-colors">
              Xem hướng dẫn
            </Link>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 md:ml-64 pb-24 md:pb-6">
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6 sticky top-0 z-10">
          <div className="md:hidden flex items-center space-x-2">
            <div className="w-8 h-8 bg-indigo-600 rounded flex items-center justify-center text-white">
              <i className="fas fa-leaf text-sm"></i>
            </div>
            <span className="font-bold text-gray-800">EcoPoints</span>
          </div>
          <div className="hidden md:block">
            <h1 className="text-gray-500 font-medium capitalize">
              {location.pathname === '/' ? 'Xin chào, Nguyễn Văn A!' : location.pathname.split('/').pop()}
            </h1>
          </div>
          <div className="flex items-center space-x-4">
             <div className="flex items-center space-x-3 bg-indigo-50 p-1 pr-3 rounded-full border border-indigo-100">
               <img src="https://picsum.photos/id/64/40" className="w-8 h-8 rounded-full border border-white" />
               <p className="text-xs font-bold text-indigo-700">1,250 EP</p>
             </div>
          </div>
        </header>

        <div className="p-4 md:p-8 max-w-7xl mx-auto">
          {children}
        </div>
      </main>

      {/* Floating Action Button for Scan (Mobile focused) */}
      <button className="fixed bottom-24 right-6 w-14 h-14 bg-indigo-600 text-white rounded-full shadow-2xl flex items-center justify-center text-xl z-40 hover:scale-110 transition-transform md:bottom-10">
        <i className="fas fa-qrcode"></i>
      </button>

      {/* Bottom Nav for Mobile */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-lg border-t border-gray-200 flex justify-around items-center py-3 z-50 px-2">
        <Link to="/" className={`flex flex-col items-center space-y-1 ${location.pathname === '/' ? 'text-indigo-600' : 'text-gray-400'}`}>
          <i className="fas fa-chart-pie"></i>
          <span className="text-[10px] font-bold">Home</span>
        </Link>
        <Link to="/rewards" className={`flex flex-col items-center space-y-1 ${location.pathname === '/rewards' ? 'text-indigo-600' : 'text-gray-400'}`}>
          <i className="fas fa-gift"></i>
          <span className="text-[10px] font-bold">Quà</span>
        </Link>
        <div className="w-12"></div> {/* Space for FAB */}
        <Link to="/leaderboard" className={`flex flex-col items-center space-y-1 ${location.pathname === '/leaderboard' ? 'text-indigo-600' : 'text-gray-400'}`}>
          <i className="fas fa-trophy"></i>
          <span className="text-[10px] font-bold">BXH</span>
        </Link>
        <Link to="/integration" className={`flex flex-col items-center space-y-1 ${location.pathname === '/integration' ? 'text-indigo-600' : 'text-gray-400'}`}>
          <i className="fas fa-plug"></i>
          <span className="text-[10px] font-bold">Nhúng</span>
        </Link>
      </nav>
    </div>
  );
};
