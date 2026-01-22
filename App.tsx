
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Dashboard } from './pages/Dashboard';
import { Rewards } from './pages/Rewards';
import { Integration } from './pages/Integration';

const PlaceholderPage = ({ title }: { title: string }) => (
  <div className="bg-white rounded-3xl p-12 text-center border border-gray-100 min-h-[400px] flex flex-col justify-center items-center">
    <div className="w-20 h-20 bg-indigo-50 text-indigo-600 rounded-3xl flex items-center justify-center text-3xl mb-6 shadow-sm">
      <i className="fas fa-construction"></i>
    </div>
    <h2 className="text-2xl font-bold text-gray-800 mb-2">{title} Page</h2>
    <p className="text-gray-500 max-w-md mx-auto">This section of the loyalty hub is currently being fine-tuned to give you the best experience possible.</p>
    <button onClick={() => window.history.back()} className="mt-8 px-8 py-3 bg-indigo-600 text-white rounded-2xl font-bold shadow-lg shadow-indigo-200 hover:bg-indigo-700 transition-colors">
      Go Back
    </button>
  </div>
);

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/rewards" element={<Rewards />} />
          <Route path="/integration" element={<Integration />} />
          <Route path="/history" element={<PlaceholderPage title="Transaction History" />} />
          <Route path="/leaderboard" element={<PlaceholderPage title="Company Leaderboard" />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
