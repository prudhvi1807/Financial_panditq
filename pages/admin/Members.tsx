import React, { useState } from 'react';
import { useStore } from '../../context/Store';
import { exportToExcel } from '../../services/excelService';
import { Download, Search, Plus, Edit, MessageSquare } from 'lucide-react';
import { User } from '../../types';

const Members: React.FC = () => {
  const { users, addMember } = useStore();
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newMember, setNewMember] = useState<Partial<User>>({
    name: '', email: '', phone: '', role: 'member', status: 'active'
  });

  const filteredUsers = users.filter(u => 
    u.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    u.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleExport = () => {
    const dataToExport = filteredUsers.map(u => ({
        Name: u.name,
        Email: u.email,
        Phone: u.phone,
        Status: u.status,
        Plan: u.currentPlanId || 'None',
        Expiry: u.planEndDate ? new Date(u.planEndDate).toLocaleDateString() : 'N/A'
    }));
    exportToExcel(dataToExport, 'Gym_Members_List');
  };

  const handleAddMember = (e: React.FormEvent) => {
    e.preventDefault();
    const id = 'u' + Date.now();
    addMember({ 
        ...newMember, 
        id, 
        joinedDate: new Date().toISOString() 
    } as User);
    setIsModalOpen(false);
    setNewMember({ name: '', email: '', phone: '', role: 'member', status: 'active' });
  };

  const sendWhatsApp = (phone: string) => {
    window.open(`https://wa.me/${phone.replace('+', '')}?text=Hi, gentle reminder from PUB FITNESS...`, '_blank');
  };

  return (
    <div className="p-6">
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        <h1 className="text-2xl font-black text-white font-montserrat uppercase tracking-tight">Member Management</h1>
        <div className="flex gap-2">
             <button onClick={() => setIsModalOpen(true)} className="flex items-center px-4 py-2 bg-green-600 text-black font-bold rounded-lg hover:bg-green-500 uppercase text-xs tracking-wider">
                <Plus className="h-4 w-4 mr-2" /> Add Member
            </button>
            <button onClick={handleExport} className="flex items-center px-4 py-2 bg-[#1e293b] text-white border border-white/10 rounded-lg hover:bg-[#2d3a52] text-xs font-bold uppercase tracking-wider">
                <Download className="h-4 w-4 mr-2" /> Export Excel
            </button>
        </div>
      </div>

      {/* Search */}
      <div className="relative mb-6">
        <Search className="absolute left-3 top-3 h-5 w-5 text-slate-500" />
        <input 
            type="text" 
            placeholder="SEARCH MEMBERS..." 
            className="w-full pl-10 pr-4 py-3 bg-[#0a0f26] border border-white/10 rounded-xl focus:outline-none focus:border-green-500 text-white placeholder-slate-600 font-bold text-sm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Table */}
      <div className="bg-[#0a0f26] rounded-2xl shadow-sm overflow-hidden border border-white/5">
        <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-white/10">
            <thead className="bg-[#050816]">
                <tr>
                    <th className="px-6 py-4 text-left text-xs font-bold text-slate-400 uppercase tracking-wider">Name</th>
                    <th className="px-6 py-4 text-left text-xs font-bold text-slate-400 uppercase tracking-wider">Contact</th>
                    <th className="px-6 py-4 text-left text-xs font-bold text-slate-400 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-4 text-left text-xs font-bold text-slate-400 uppercase tracking-wider">Actions</th>
                </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
                {filteredUsers.map(user => (
                    <tr key={user.id} className="hover:bg-white/5 transition-colors">
                        <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                                <div className="h-10 w-10 rounded-full bg-green-500/10 flex items-center justify-center text-green-500 font-bold border border-green-500/20">
                                    {user.name.charAt(0)}
                                </div>
                                <div className="ml-4">
                                    <div className="text-sm font-bold text-white">{user.name}</div>
                                    <div className="text-xs text-slate-500">ID: {user.id}</div>
                                </div>
                            </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-slate-300">{user.email}</div>
                            <div className="text-xs text-slate-500">{user.phone}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`px-2 py-1 inline-flex text-xs leading-5 font-bold rounded uppercase tracking-wider ${user.status === 'active' ? 'bg-green-500/10 text-green-500 border border-green-500/20' : 'bg-red-500/10 text-red-500 border border-red-500/20'}`}>
                                {user.status}
                            </span>
                             {user.planEndDate && (
                                <div className="text-xs text-slate-500 mt-1">
                                    Exp: {new Date(user.planEndDate).toLocaleDateString()}
                                </div>
                             )}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-3">
                            <button onClick={() => sendWhatsApp(user.phone)} className="text-green-500 hover:text-green-400 inline-flex items-center">
                                <MessageSquare className="h-4 w-4 mr-1"/> Notify
                            </button>
                            <button className="text-blue-400 hover:text-blue-300 inline-flex items-center">
                                <Edit className="h-4 w-4 mr-1"/> Edit
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
        </div>
      </div>

      {/* Add Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
            <div className="bg-[#0a0f26] rounded-2xl max-w-md w-full p-8 border border-white/10">
                <h2 className="text-xl font-black text-white mb-6 uppercase tracking-wide">Add New Member</h2>
                <form onSubmit={handleAddMember} className="space-y-4">
                    <input 
                        className="w-full bg-[#050816] border border-white/10 p-3 rounded-xl text-white outline-none focus:border-green-500" 
                        placeholder="FULL NAME" 
                        value={newMember.name} 
                        onChange={e => setNewMember({...newMember, name: e.target.value})}
                        required
                    />
                     <input 
                        className="w-full bg-[#050816] border border-white/10 p-3 rounded-xl text-white outline-none focus:border-green-500" 
                        placeholder="EMAIL" 
                        type="email"
                        value={newMember.email} 
                        onChange={e => setNewMember({...newMember, email: e.target.value})}
                        required
                    />
                     <input 
                        className="w-full bg-[#050816] border border-white/10 p-3 rounded-xl text-white outline-none focus:border-green-500" 
                        placeholder="PHONE (+91...)" 
                        value={newMember.phone} 
                        onChange={e => setNewMember({...newMember, phone: e.target.value})}
                        required
                    />
                    <div className="flex justify-end gap-3 mt-8">
                        <button type="button" onClick={() => setIsModalOpen(false)} className="px-4 py-2 text-slate-400 font-bold uppercase tracking-wide hover:text-white">Cancel</button>
                        <button type="submit" className="px-6 py-2 bg-green-600 text-black rounded-lg font-black uppercase tracking-wide hover:bg-green-500">Create</button>
                    </div>
                </form>
            </div>
        </div>
      )}
    </div>
  );
};

export default Members;