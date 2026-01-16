import React, { useState } from 'react';
import { MOCK_ORDERS } from '../constants';
import { Download, Package, Clock, FileText, CheckCircle, Search, AlertCircle } from 'lucide-react';

export const Dashboard = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'orders' | 'documents'>('overview');

  return (
    <div className="bg-earth-50 min-h-screen py-8 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-8">
          <h1 className="text-3xl font-serif font-bold text-earth-900">Client Portal</h1>
          <p className="text-earth-600">Welcome back, Organic Foods Ltd.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Sidebar Nav */}
          <div className="w-full lg:w-64 flex-shrink-0">
            <div className="bg-white rounded-xl shadow-sm border border-earth-100 overflow-hidden">
              <nav className="flex lg:flex-col">
                {[
                  { id: 'overview', label: 'Overview', icon: <Package className="h-4 w-4"/> },
                  { id: 'orders', label: 'Order History', icon: <Clock className="h-4 w-4"/> },
                  { id: 'documents', label: 'Certificates', icon: <FileText className="h-4 w-4"/> }
                ].map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`flex-1 lg:flex-none flex items-center gap-3 px-6 py-4 text-sm font-medium border-b lg:border-b-0 lg:border-l-4 transition-colors ${
                      activeTab === tab.id 
                      ? 'border-nature-600 bg-nature-50 text-nature-900' 
                      : 'border-transparent text-earth-600 hover:bg-earth-50'
                    }`}
                  >
                    {tab.icon}
                    {tab.label}
                  </button>
                ))}
              </nav>
            </div>
            
            <div className="mt-6 bg-nature-800 rounded-xl p-6 text-white text-center">
              <h4 className="font-bold mb-2">Need Sourcing?</h4>
              <p className="text-sm text-nature-100 mb-4">Request a custom quote for bulk grain orders.</p>
              <button className="w-full py-2 bg-white text-nature-900 rounded-lg text-sm font-bold hover:bg-nature-50 transition-colors">
                Contact Specialist
              </button>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            
            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <div className="space-y-6">
                <div className="grid sm:grid-cols-3 gap-6">
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-earth-100">
                    <p className="text-sm text-earth-500 font-medium">Active Orders</p>
                    <p className="text-3xl font-bold text-earth-900 mt-2">1</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-earth-100">
                    <p className="text-sm text-earth-500 font-medium">Total Spent (YTD)</p>
                    <p className="text-3xl font-bold text-earth-900 mt-2">£3,800</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-earth-100">
                    <p className="text-sm text-earth-500 font-medium">Pending Docs</p>
                    <div className="flex items-center gap-2 mt-2">
                       <p className="text-3xl font-bold text-earth-900">0</p>
                       <CheckCircle className="h-5 w-5 text-nature-600" />
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-sm border border-earth-100 overflow-hidden">
                  <div className="px-6 py-4 border-b border-earth-100 flex justify-between items-center">
                    <h3 className="font-bold text-earth-900">Recent Activity</h3>
                  </div>
                  <div className="divide-y divide-earth-50">
                    {MOCK_ORDERS.map(order => (
                      <div key={order.id} className="p-6 flex items-center justify-between hover:bg-earth-50 transition-colors">
                         <div>
                           <p className="font-medium text-earth-900">Order #{order.id}</p>
                           <p className="text-sm text-earth-500">{order.date}</p>
                         </div>
                         <div className="flex items-center gap-4">
                           <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                             order.status === 'Delivered' ? 'bg-nature-100 text-nature-800' :
                             order.status === 'Shipped' ? 'bg-blue-100 text-blue-800' :
                             'bg-grain-100 text-grain-800'
                           }`}>
                             {order.status}
                           </span>
                           <span className="font-mono text-earth-700">£{order.total.toFixed(2)}</span>
                         </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Orders Tab */}
            {activeTab === 'orders' && (
              <div className="bg-white rounded-xl shadow-sm border border-earth-100 overflow-hidden">
                <div className="p-4 border-b border-earth-100 flex gap-4">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-earth-400" />
                    <input 
                      type="text" 
                      placeholder="Search by order ID or product..." 
                      className="w-full pl-10 pr-4 py-2 rounded-lg border border-earth-200 text-sm focus:outline-none focus:ring-2 focus:ring-nature-500"
                    />
                  </div>
                  <select className="border border-earth-200 rounded-lg px-4 py-2 text-sm bg-white text-earth-600">
                    <option>Last 30 Days</option>
                    <option>Last 6 Months</option>
                    <option>2023</option>
                  </select>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-left">
                    <thead className="bg-earth-50 text-earth-500 font-medium">
                      <tr>
                        <th className="px-6 py-3">Order ID</th>
                        <th className="px-6 py-3">Date</th>
                        <th className="px-6 py-3">Items</th>
                        <th className="px-6 py-3">Total</th>
                        <th className="px-6 py-3">Status</th>
                        <th className="px-6 py-3">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-earth-100">
                      {MOCK_ORDERS.map((order) => (
                        <tr key={order.id} className="hover:bg-earth-50/50">
                          <td className="px-6 py-4 font-medium text-earth-900">{order.id}</td>
                          <td className="px-6 py-4 text-earth-600">{order.date}</td>
                          <td className="px-6 py-4 text-earth-600">
                            {order.items.map(i => `${i.quantityKg}kg ${i.productName}`).join(', ')}
                          </td>
                          <td className="px-6 py-4 text-earth-900 font-mono">£{order.total.toFixed(2)}</td>
                          <td className="px-6 py-4">
                            <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium ${
                               order.status === 'Delivered' ? 'bg-nature-100 text-nature-800' :
                               order.status === 'Shipped' ? 'bg-blue-100 text-blue-800' :
                               'bg-grain-100 text-grain-800'
                            }`}>
                              {order.status}
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <button className="text-nature-700 hover:text-nature-900 font-medium">View</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Documents Tab */}
            {activeTab === 'documents' && (
               <div className="space-y-6">
                 <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 flex items-start gap-3">
                   <AlertCircle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                   <div>
                     <h4 className="font-bold text-amber-800 text-sm">Certificate Verification</h4>
                     <p className="text-sm text-amber-700 mt-1">All downloaded certificates are digitally signed and trackable via our blockchain ledger.</p>
                   </div>
                 </div>

                 <div className="grid md:grid-cols-2 gap-4">
                   {MOCK_ORDERS.flatMap(o => o.documents.map((doc, i) => ({doc, date: o.date, orderId: o.id, key: `${o.id}-${i}`}))).map((item) => (
                     <div key={item.key} className="bg-white p-4 rounded-xl border border-earth-200 flex items-center justify-between group hover:border-nature-300 transition-colors">
                       <div className="flex items-center gap-3">
                         <div className="bg-earth-100 p-2 rounded-lg text-earth-600 group-hover:bg-nature-50 group-hover:text-nature-700">
                           <FileText className="h-5 w-5" />
                         </div>
                         <div>
                           <p className="font-medium text-earth-900 text-sm">{item.doc}</p>
                           <p className="text-xs text-earth-500">Linked to {item.orderId} • {item.date}</p>
                         </div>
                       </div>
                       <button className="p-2 text-earth-400 hover:text-nature-700 hover:bg-nature-50 rounded-full transition-all">
                         <Download className="h-5 w-5" />
                       </button>
                     </div>
                   ))}
                 </div>
               </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
};