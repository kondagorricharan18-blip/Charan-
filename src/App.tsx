import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Diamond, 
  Coins, 
  Gamepad2, 
  ShoppingBag, 
  User, 
  Shield, 
  Sword, 
  Menu, 
  X,
  Search,
  CheckCircle2,
  LockOpen
} from 'lucide-react';
import { MOCK_ITEMS } from './types';

export default function App() {
  const [activeTab, setActiveTab] = useState<'inventory' | 'shop' | 'character'>('inventory');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const categories = ['All', 'Skins', 'Weapons', 'Emotes', 'Bundles'];
  const filteredItems = selectedCategory === 'All' 
    ? MOCK_ITEMS 
    : MOCK_ITEMS.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-[#0a0a0c] text-white font-sans selection:bg-cyan-500/30">
      {/* --- Top Status Bar --- */}
      <header className="fixed top-0 left-0 right-0 h-16 bg-[#121216]/80 backdrop-blur-md border-b border-white/5 flex items-center justify-between px-6 z-50">
        <div className="flex items-center gap-3">
          <button 
            onClick={() => setSidebarOpen(true)}
            className="p-2 hover:bg-white/5 rounded-lg lg:hidden"
          >
            <Menu className="w-6 h-6" />
          </button>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-cyan-500 rounded-md flex items-center justify-center shadow-lg shadow-cyan-500/20">
              <Gamepad2 className="w-5 h-5 text-black" />
            </div>
            <span className="font-black italic tracking-tighter text-xl bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
              STRIKE OPS
            </span>
          </div>
        </div>

        <div className="flex items-center gap-6">
          {/* Gold */}
          <div className="hidden sm:flex items-center gap-2 bg-black/40 px-3 py-1.5 rounded-full border border-yellow-500/30">
            <Coins className="w-4 h-4 text-yellow-400" />
            <span className="text-sm font-bold tracking-wider text-yellow-100">999,999,999</span>
          </div>
          {/* Diamonds */}
          <div className="flex items-center gap-2 bg-black/40 px-3 py-1.5 rounded-full border border-cyan-500/30">
            <Diamond className="w-4 h-4 text-cyan-400" />
            <span className="text-sm font-bold tracking-wider text-cyan-100">999,999,999</span>
          </div>
          {/* User Profile */}
          <div className="flex items-center gap-3 border-l border-white/10 pl-6">
            <div className="text-right hidden xs:block">
              <p className="text-[10px] uppercase font-bold tracking-widest text-white/40 leading-none mb-1">Elite Commander</p>
              <p className="text-sm font-bold leading-none">PLAYER_ONE</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-cyan-500 to-purple-500 p-[2px]">
              <div className="w-full h-full rounded-full bg-black flex items-center justify-center overflow-hidden">
                <User className="w-6 h-6 text-white/60" />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* --- Main Layout --- */}
      <div className="pt-16 flex min-h-screen">
        
        {/* Sidebar Navigation */}
        <nav className={`
          fixed inset-y-0 left-0 w-64 bg-[#0d0d0f] border-r border-white/5 transform transition-transform duration-300 z-[60]
          lg:relative lg:translate-x-0 lg:pt-8
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        `}>
          <div className="p-6 flex flex-col gap-2">
            <button 
              onClick={() => setSidebarOpen(false)}
              className="absolute top-4 right-4 p-2 lg:hidden"
            >
              <X className="w-5 h-5" />
            </button>

            {[
              { id: 'inventory', icon: Shield, label: 'Vault' },
              { id: 'shop', icon: ShoppingBag, label: 'Store' },
              { id: 'character', icon: User, label: 'Profile' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id as any);
                  setSidebarOpen(false);
                }}
                className={`
                  flex items-center gap-4 px-4 py-3 rounded-xl transition-all group
                  ${activeTab === tab.id 
                    ? 'bg-cyan-500 text-black shadow-lg shadow-cyan-500/20' 
                    : 'text-white/40 hover:bg-white/5 hover:text-white'}
                `}
              >
                <tab.icon className={`w-5 h-5 ${activeTab === tab.id ? 'text-black' : 'group-hover:scale-110 transition-transform'}`} />
                <span className="font-bold tracking-wide uppercase text-sm">{tab.label}</span>
              </button>
            ))}

            <div className="mt-8 pt-8 border-t border-white/5">
              <p className="px-4 text-[10px] font-black uppercase tracking-[0.2em] text-white/20 mb-4">Quick Actions</p>
              <button className="w-full flex items-center gap-4 px-4 py-3 text-white/40 hover:text-white transition-colors">
                <Sword className="w-5 h-5" />
                <span className="text-sm font-bold uppercase tracking-wide">Battle Pass</span>
              </button>
            </div>
          </div>
        </nav>

        {/* --- Content Area --- */}
        <main className="flex-1 p-6 lg:p-12 overflow-y-auto">
          <AnimatePresence mode="wait">
            {activeTab === 'inventory' && (
              <motion.div
                key="inventory"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="max-w-6xl mx-auto"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
                  <div>
                    <h1 className="text-4xl lg:text-5xl font-black italic uppercase tracking-tighter mb-2">The Vault</h1>
                    <p className="text-white/40 font-medium">Manage your elite collection and battle gear.</p>
                  </div>
                  
                  <div className="flex items-center gap-3 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
                    {categories.map((cat) => (
                      <button
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        className={`
                          px-5 py-2 rounded-full text-xs font-black uppercase tracking-widest whitespace-nowrap transition-all
                          ${selectedCategory === cat 
                            ? 'bg-white text-black' 
                            : 'bg-white/5 text-white/40 hover:bg-white/10 hover:text-white'}
                        `}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {filteredItems.map((item, index) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.05 }}
                      className="group relative bg-[#121216] border border-white/5 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300"
                    >
                      {/* Item Image */}
                      <div className="aspect-square relative overflow-hidden bg-[#0a0a0c]">
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#121216] via-transparent to-transparent" />
                        
                        {/* Rarity Badge */}
                        <div className={`
                          absolute top-4 left-4 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest
                          ${item.rarity === 'Mythic' ? 'bg-purple-500 text-white shadow-lg shadow-purple-500/40' : 
                            item.rarity === 'Legendary' ? 'bg-amber-500 text-black' : 'bg-cyan-500 text-black'}
                        `}>
                          {item.rarity}
                        </div>

                        {/* Unlocked Icon */}
                        <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md p-2 rounded-full">
                          <LockOpen className="w-4 h-4 text-green-400" />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-5">
                        <p className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-1">{item.category}</p>
                        <h3 className="font-bold text-lg mb-4 line-clamp-1">{item.name}</h3>
                        <button className="w-full py-3 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center gap-2 font-bold uppercase tracking-widest text-xs hover:bg-white hover:text-black transition-all">
                          <CheckCircle2 className="w-4 h-4" />
                          Equipped
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === 'shop' && (
              <motion.div
                key="shop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex items-center justify-center h-full min-h-[60vh] text-center"
              >
                <div>
                  <ShoppingBag className="w-16 h-16 text-white/10 mx-auto mb-6" />
                  <h2 className="text-3xl font-black italic uppercase tracking-tighter mb-2">Black Market</h2>
                  <p className="text-white/40 max-w-md mx-auto">
                    All premium items are currently <span className="text-green-400 font-bold underline decoration-green-400/30">unlocked</span> for your account level. No further purchases required.
                  </p>
                </div>
              </motion.div>
            )}

            {activeTab === 'character' && (
              <motion.div
                key="character"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12 items-center"
              >
                <div className="flex-1 space-y-8">
                  <div>
                    <h2 className="text-5xl font-black italic uppercase tracking-tighter leading-none mb-4">Commander</h2>
                    <div className="flex items-center gap-3">
                      <span className="px-3 py-1 bg-cyan-500 text-black font-black uppercase tracking-widest text-[10px] rounded-full">Lvl 100</span>
                      <span className="text-white/40 font-bold uppercase tracking-[0.2em] text-[10px]">Prestige III</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { label: 'K/D Ratio', value: '4.82', icon: Sword },
                      { label: 'Win Rate', value: '82%', icon: Shield },
                      { label: 'Total Wins', value: '1,240', icon: CheckCircle2 },
                      { label: 'Headshots', value: '15,802', icon: Search }
                    ].map((stat) => (
                      <div key={stat.label} className="bg-white/5 border border-white/10 p-4 rounded-2xl">
                        <div className="flex items-center gap-2 mb-2">
                          <stat.icon className="w-3 h-3 text-cyan-400" />
                          <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest">{stat.label}</p>
                        </div>
                        <p className="text-xl font-black tracking-tight">{stat.value}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative w-full max-w-sm aspect-[3/4] bg-gradient-to-t from-cyan-500/10 to-transparent rounded-3xl overflow-hidden border border-white/5">
                   <div className="absolute inset-0 flex items-center justify-center">
                     <User className="w-32 h-32 text-white/5" />
                   </div>
                   <div className="absolute bottom-8 left-0 right-0 text-center px-8">
                      <div className="h-1 bg-white/10 w-full rounded-full mb-2">
                        <div className="h-full bg-cyan-500 w-[85%] rounded-full shadow-[0_0_10px_rgba(6,182,212,0.5)]" />
                      </div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-white/40">EXP: 94,200 / 100,000</p>
                   </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </main>
      </div>

      {/* --- Footer / Mobile Nav Overlay --- */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[55] lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
}
