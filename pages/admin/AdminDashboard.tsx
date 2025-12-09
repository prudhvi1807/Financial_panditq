import React from 'react';
import { useStore } from '../../context/Store';
import { Users, CreditCard, UserPlus, TrendingUp } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const AdminDashboard: React.FC = () => {
  const { stats, payments } = useStore();

  // Prepare chart data (Last 6 payments for demo)
  const chartData = payments.slice(0, 6).map(p => ({
    name: new Date(p.date).toLocaleDateString(undefined, { month: 'short', day: 'numeric' }),
    amount: p.amount
  })).reverse();

  return (
    <div className="p-6">
      <h1 className="text-3xl font-black text-white mb-8 font-montserrat uppercase tracking-tight">Admin Dashboard</h1>
      
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-[#0a0f26] p-6 rounded-2xl border border-white/5">
            <div className="flex justify-between items-start">
                <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Total Members</p>
                    <p className="text-3xl font-black text-white mt-2">{stats.totalMembers}</p>
                </div>
                <div className="p-3 bg-blue-500/10 rounded-xl">
                    <Users className="h-6 w-6 text-blue-500" />
                </div>
            </div>
        </div>
        <div className="bg-[#0a0f26] p-6 rounded-2xl border border-white/5">
            <div className="flex justify-between items-start">
                <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Active Members</p>
                    <p className="text-3xl font-black text-white mt-2">{stats.activeMembers}</p>
                </div>
                <div className="p-3 bg-green-500/10 rounded-xl">
                    <UserPlus className="h-6 w-6 text-green-500" />
                </div>
            </div>
        </div>
        <div className="bg-[#0a0f26] p-6 rounded-2xl border border-white/5">
            <div className="flex justify-between items-start">
                <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Expiring Soon</p>
                    <p className="text-3xl font-black text-white mt-2">{stats.expiringSoon}</p>
                </div>
                <div className="p-3 bg-orange-500/10 rounded-xl">
                    <TrendingUp className="h-6 w-6 text-orange-500" />
                </div>
            </div>
        </div>
        <div className="bg-[#0a0f26] p-6 rounded-2xl border border-white/5">
            <div className="flex justify-between items-start">
                <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Total Revenue</p>
                    <p className="text-3xl font-black text-white mt-2">${stats.revenue}</p>
                </div>
                <div className="p-3 bg-purple-500/10 rounded-xl">
                    <CreditCard className="h-6 w-6 text-purple-500" />
                </div>
            </div>
        </div>
      </div>

      {/* Chart Section */}
      <div className="bg-[#0a0f26] p-6 rounded-2xl border border-white/5 mb-8 h-[400px]">
        <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-wide">Recent Revenue</h3>
        <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#1e293b" />
                <XAxis dataKey="name" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `$${value}`} />
                <Tooltip 
                    contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '8px', color: '#fff' }}
                    cursor={{fill: 'rgba(255,255,255,0.05)'}}
                />
                <Bar dataKey="amount" fill="#22c55e" radius={[4, 4, 0, 0]} />
            </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AdminDashboard;