import React, { useEffect, useState } from 'react';
import { useStore } from '../../context/Store';
import { AlertTriangle, Calendar, Activity, Download, Save } from 'lucide-react';
import { Link } from 'react-router-dom';

const MemberDashboard: React.FC = () => {
  const { user, payments, updateMemberProfile } = useStore();
  const [showExpiryModal, setShowExpiryModal] = useState(false);
  const [activeTab, setActiveTab] = useState<'overview' | 'profile' | 'tools' | 'history'>('overview');

  // Local state for profile form
  const [profileForm, setProfileForm] = useState({
    age: user?.profile?.age || 0,
    weight: user?.profile?.weight || 0,
    height: user?.profile?.height || 0,
    goal: user?.profile?.goal || 'General Fitness'
  });

  // Calculator states
  const [bmi, setBmi] = useState<number | null>(null);
  const [bmr, setBmr] = useState<number | null>(null);
  const [activityLevel, setActivityLevel] = useState(1.2);

  const daysLeft = user?.planEndDate 
    ? Math.ceil((new Date(user.planEndDate).getTime() - Date.now()) / (1000 * 60 * 60 * 24))
    : 0;

  const isExpiringSoon = daysLeft <= 7 && daysLeft > 0;

  useEffect(() => {
    if (isExpiringSoon) setShowExpiryModal(true);
  }, [isExpiringSoon]);

  if (!user) return <div className="text-white">Access Denied</div>;

  const handleProfileUpdate = () => {
    updateMemberProfile(user.id, profileForm);
    alert('Profile updated successfully!');
  };

  const calculateBMI = () => {
    if (profileForm.height && profileForm.weight) {
      const hM = profileForm.height / 100;
      const val = profileForm.weight / (hM * hM);
      setBmi(parseFloat(val.toFixed(1)));
    }
  };

  const calculateBMR = () => {
    // Mifflin-St Jeor Equation
    if (profileForm.weight && profileForm.height && profileForm.age) {
        let base = (10 * profileForm.weight) + (6.25 * profileForm.height) - (5 * profileForm.age);
        base = user.profile?.gender === 'Male' ? base + 5 : base - 161;
        setBmr(Math.round(base));
    }
  };

  const myPayments = payments.filter(p => p.memberId === user.id);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h1 className="text-3xl font-black text-white font-montserrat uppercase tracking-tight">Dashboard</h1>
          <p className="text-slate-400">Welcome back, {user.name}.</p>
        </div>
        <div className="mt-4 md:mt-0 flex gap-2">
            <span className={`px-4 py-2 rounded-lg text-sm font-bold uppercase tracking-wider ${daysLeft > 7 ? 'bg-green-500/10 text-green-500 border border-green-500/20' : 'bg-red-500/10 text-red-500 border border-red-500/20'}`}>
                {daysLeft > 0 ? `${daysLeft} Days Left` : 'Expired'}
            </span>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex space-x-2 border-b border-white/10 mb-8 overflow-x-auto">
        {(['overview', 'profile', 'tools', 'history'] as const).map(tab => (
            <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 text-sm font-bold uppercase tracking-wide transition-all whitespace-nowrap border-b-2 ${activeTab === tab ? 'border-green-500 text-green-500' : 'border-transparent text-slate-400 hover:text-white'}`}
            >
                {tab}
            </button>
        ))}
      </div>

      {/* Content */}
      <div className="min-h-[400px]">
        {activeTab === 'overview' && (
            <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-[#0a0f26] p-8 rounded-2xl border border-white/5">
                    <h3 className="text-lg font-bold text-white mb-6 flex items-center uppercase tracking-wide"><Calendar className="h-5 w-5 mr-2 text-green-500"/> Membership Status</h3>
                    <div className="space-y-4">
                        <div className="flex justify-between border-b border-white/5 pb-3">
                            <span className="text-slate-400 text-sm">Plan</span>
                            <span className="font-bold text-white">{user.currentPlanId ? 'Active Plan' : 'No Active Plan'}</span>
                        </div>
                        <div className="flex justify-between border-b border-white/5 pb-3">
                            <span className="text-slate-400 text-sm">Start Date</span>
                            <span className="font-bold text-white">{user.planStartDate ? new Date(user.planStartDate).toLocaleDateString() : '-'}</span>
                        </div>
                        <div className="flex justify-between border-b border-white/5 pb-3">
                            <span className="text-slate-400 text-sm">End Date</span>
                            <span className="font-bold text-white">{user.planEndDate ? new Date(user.planEndDate).toLocaleDateString() : '-'}</span>
                        </div>
                        {isExpiringSoon && (
                             <div className="bg-orange-500/10 border border-orange-500/20 text-orange-400 p-4 rounded-xl text-sm flex items-start mt-6">
                                <AlertTriangle className="h-5 w-5 mr-3 flex-shrink-0" />
                                <div>
                                    <p className="font-bold uppercase mb-1">Membership Expiring Soon</p>
                                    <p className="opacity-80">Your access ends in {daysLeft} days. Renew now to avoid interruption.</p>
                                    <Link to="/plans" className="inline-block mt-3 text-white font-bold underline hover:text-green-400">Renew Now &rarr;</Link>
                                </div>
                             </div>
                        )}
                    </div>
                </div>
                <div className="bg-[#0a0f26] p-8 rounded-2xl border border-white/5">
                    <h3 className="text-lg font-bold text-white mb-6 flex items-center uppercase tracking-wide"><Activity className="h-5 w-5 mr-2 text-blue-500"/> Quick Log</h3>
                    <p className="text-slate-400 text-sm mb-6">Track your daily progress.</p>
                    <div className="p-6 bg-[#050816] rounded-xl text-center border border-white/5">
                        <p className="text-xs font-bold text-slate-400 uppercase mb-3">Today's Weight</p>
                        <div className="flex justify-center gap-2">
                             <input type="number" placeholder="0.0" className="w-24 p-2 bg-[#0a0f26] border border-white/10 rounded text-center text-white focus:border-green-500 outline-none"/>
                             <button className="px-4 py-2 bg-green-600 text-black font-bold rounded hover:bg-green-500 uppercase text-xs">Log</button>
                        </div>
                    </div>
                </div>
            </div>
        )}

        {activeTab === 'profile' && (
            <div className="bg-[#0a0f26] p-8 rounded-2xl border border-white/5 max-w-2xl">
                <h3 className="text-lg font-bold text-white mb-8 uppercase tracking-wide">Health Profile</h3>
                <div className="grid grid-cols-2 gap-6">
                    <div>
                        <label className="block text-xs font-bold text-slate-400 uppercase mb-2">Age</label>
                        <input 
                            type="number" 
                            value={profileForm.age} 
                            onChange={(e) => setProfileForm({...profileForm, age: parseInt(e.target.value)})}
                            className="w-full bg-[#050816] border border-white/10 rounded-lg p-3 text-white focus:border-green-500 outline-none"
                        />
                    </div>
                    <div>
                        <label className="block text-xs font-bold text-slate-400 uppercase mb-2">Gender</label>
                         <select className="w-full bg-[#050816] border border-white/10 rounded-lg p-3 text-slate-400 focus:border-green-500 outline-none" disabled>
                            <option>{user.profile?.gender || 'Male'}</option>
                         </select>
                    </div>
                    <div>
                        <label className="block text-xs font-bold text-slate-400 uppercase mb-2">Height (cm)</label>
                        <input 
                            type="number" 
                            value={profileForm.height} 
                            onChange={(e) => setProfileForm({...profileForm, height: parseInt(e.target.value)})}
                            className="w-full bg-[#050816] border border-white/10 rounded-lg p-3 text-white focus:border-green-500 outline-none"
                        />
                    </div>
                    <div>
                        <label className="block text-xs font-bold text-slate-400 uppercase mb-2">Weight (kg)</label>
                        <input 
                            type="number" 
                            value={profileForm.weight} 
                            onChange={(e) => setProfileForm({...profileForm, weight: parseInt(e.target.value)})}
                            className="w-full bg-[#050816] border border-white/10 rounded-lg p-3 text-white focus:border-green-500 outline-none"
                        />
                    </div>
                    <div className="col-span-2">
                        <label className="block text-xs font-bold text-slate-400 uppercase mb-2">Goal</label>
                         <select 
                            value={profileForm.goal}
                            onChange={(e) => setProfileForm({...profileForm, goal: e.target.value as any})}
                            className="w-full bg-[#050816] border border-white/10 rounded-lg p-3 text-white focus:border-green-500 outline-none"
                         >
                            <option value="Weight Loss">Weight Loss</option>
                            <option value="Muscle Gain">Muscle Gain</option>
                            <option value="Maintenance">Maintenance</option>
                         </select>
                    </div>
                </div>
                <button onClick={handleProfileUpdate} className="mt-8 w-full py-4 bg-white text-black font-black uppercase tracking-wide rounded-xl hover:bg-slate-200 transition-colors flex items-center justify-center">
                    <Save className="h-4 w-4 mr-2" /> Save Profile
                </button>
            </div>
        )}

        {activeTab === 'tools' && (
            <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-[#0a0f26] p-8 rounded-2xl border border-white/5">
                    <h3 className="font-bold text-lg text-white mb-2 uppercase">BMI Calculator</h3>
                    <div className="text-sm text-slate-500 mb-6">Based on: {profileForm.height}cm, {profileForm.weight}kg</div>
                    <button onClick={calculateBMI} className="bg-green-600 text-black px-6 py-2 rounded-lg text-sm font-bold uppercase hover:bg-green-500">Calculate</button>
                    
                    {bmi && (
                        <div className="mt-6 p-6 bg-[#050816] rounded-xl border border-white/5">
                            <p className="text-4xl font-black text-white">{bmi}</p>
                            <p className="text-sm text-green-500 font-bold uppercase mt-1">
                                {bmi < 18.5 ? 'Underweight' : bmi < 25 ? 'Normal weight' : 'Overweight'}
                            </p>
                        </div>
                    )}
                </div>

                 <div className="bg-[#0a0f26] p-8 rounded-2xl border border-white/5">
                    <h3 className="font-bold text-lg text-white mb-6 uppercase">Daily Calories</h3>
                    <div className="mb-6">
                        <label className="text-xs text-slate-400 font-bold uppercase block mb-2">Activity Level</label>
                        <select 
                            value={activityLevel} 
                            onChange={(e) => setActivityLevel(parseFloat(e.target.value))}
                            className="w-full bg-[#050816] border border-white/10 p-3 rounded-lg text-white outline-none"
                        >
                            <option value={1.2}>Sedentary (Office job)</option>
                            <option value={1.375}>Light Exercise (1-2 days/week)</option>
                            <option value={1.55}>Moderate Exercise (3-5 days/week)</option>
                            <option value={1.725}>Heavy Exercise (6-7 days/week)</option>
                        </select>
                    </div>
                    <button onClick={calculateBMR} className="bg-green-600 text-black px-6 py-2 rounded-lg text-sm font-bold uppercase hover:bg-green-500">Calculate Needs</button>
                     {bmr && (
                        <div className="mt-6 p-6 bg-[#050816] rounded-xl border border-white/5">
                            <p className="text-sm text-slate-500 uppercase tracking-wider mb-1">Maintenance</p>
                            <p className="text-3xl font-black text-white">{Math.round(bmr * activityLevel)} <span className="text-base font-normal text-slate-500">kcal/day</span></p>
                        </div>
                    )}
                </div>
            </div>
        )}

        {activeTab === 'history' && (
             <div className="bg-[#0a0f26] rounded-2xl border border-white/5 overflow-hidden">
                <table className="min-w-full divide-y divide-white/10">
                    <thead className="bg-[#050816]">
                        <tr>
                            <th className="px-6 py-4 text-left text-xs font-bold text-slate-400 uppercase tracking-wider">Plan</th>
                            <th className="px-6 py-4 text-left text-xs font-bold text-slate-400 uppercase tracking-wider">Date</th>
                            <th className="px-6 py-4 text-left text-xs font-bold text-slate-400 uppercase tracking-wider">Amount</th>
                            <th className="px-6 py-4 text-left text-xs font-bold text-slate-400 uppercase tracking-wider">Status</th>
                            <th className="px-6 py-4 text-left text-xs font-bold text-slate-400 uppercase tracking-wider">Action</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                        {myPayments.map(pay => (
                            <tr key={pay.id} className="hover:bg-white/5 transition-colors">
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-white font-medium">{pay.planName}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-400">{new Date(pay.date).toLocaleDateString()}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-white">${pay.amount}</td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span className="px-3 py-1 inline-flex text-xs leading-5 font-bold rounded-full bg-green-500/10 text-green-500 border border-green-500/20 uppercase">
                                        {pay.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-400 hover:text-blue-300 cursor-pointer">
                                    <span className="flex items-center"><Download className="h-4 w-4 mr-1"/> Invoice</span>
                                </td>
                            </tr>
                        ))}
                        {myPayments.length === 0 && (
                            <tr><td colSpan={5} className="px-6 py-8 text-center text-slate-500">No payment history found.</td></tr>
                        )}
                    </tbody>
                </table>
             </div>
        )}
      </div>

      {/* Expiry Modal */}
      {showExpiryModal && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
            <div className="bg-[#0a0f26] rounded-2xl max-w-md w-full p-8 text-center border border-white/10">
                <div className="w-16 h-16 bg-orange-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <AlertTriangle className="h-8 w-8 text-orange-500" />
                </div>
                <h3 className="text-2xl font-black text-white mb-2 uppercase font-montserrat">Access Expiring!</h3>
                <p className="text-slate-400 mb-8 leading-relaxed">
                    Your membership expires on <b className="text-white">{new Date(user.planEndDate!).toLocaleDateString()}</b>. 
                    Don't lose your streak.
                </p>
                <div className="flex gap-4">
                    <button onClick={() => setShowExpiryModal(false)} className="flex-1 py-3 text-slate-400 font-bold hover:text-white transition-colors">Later</button>
                    <Link to="/plans" className="flex-1 py-3 bg-green-600 text-black rounded-xl font-black uppercase hover:bg-green-500 transition-colors">Renew Now</Link>
                </div>
            </div>
        </div>
      )}
    </div>
  );
};

export default MemberDashboard;