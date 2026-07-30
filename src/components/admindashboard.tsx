// src/components/AdminDashboard.tsx
'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';

interface Order {
  id: string;
  stripe_session_id: string;
  customer_email: string;
  license_type: string;
  amount_total: number;
  created_at: string;
  beats?: {
    title: string;
  };
}

export default function AdminDashboard() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('orders')
      .select('*, beats(title)')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error loading orders:', error.message);
    } else {
      setOrders(data || []);
    }
    setLoading(false);
  };

  // Compute key metrics
  const totalRevenue = orders.reduce((acc, order) => acc + Number(order.amount_total || 0), 0);
  const totalSales = orders.length;
  const avgOrderValue = totalSales > 0 ? (totalRevenue / totalSales).toFixed(2) : '0.00';

  if (loading) {
    return <div className="text-zinc-400 text-sm py-8 text-center">Loading sales metrics...</div>;
  }

  return (
    <div className="space-y-6">
      {/* 📊 Key Metrics Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-zinc-900 border border-zinc-800 p-5 rounded-xl">
          <p className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">Total Gross Revenue</p>
          <p className="text-3xl font-extrabold text-emerald-400 mt-2">${totalRevenue.toFixed(2)}</p>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 p-5 rounded-xl">
          <p className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">Total Beat Licenses Sold</p>
          <p className="text-3xl font-extrabold text-white mt-2">{totalSales}</p>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 p-5 rounded-xl">
          <p className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">Avg Order Value</p>
          <p className="text-3xl font-extrabold text-white mt-2">${avgOrderValue}</p>
        </div>
      </div>

      {/* 📜 Recent Sales Table */}
      <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden">
        <div className="p-4 border-b border-zinc-800 flex justify-between items-center">
          <h2 className="font-bold text-white text-lg">Recent Transactions</h2>
          <button
            onClick={fetchOrders}
            className="text-xs px-3 py-1 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 rounded transition"
          >
            🔄 Refresh
          </button>
        </div>

        {orders.length === 0 ? (
          <div className="p-8 text-center text-zinc-500 text-sm">
            No sales recorded yet. Completed Stripe transactions will appear here automatically.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-zinc-300">
              <thead className="bg-zinc-950 text-xs uppercase text-zinc-500 border-b border-zinc-800">
                <tr>
                  <th className="py-3 px-4">Date</th>
                  <th className="py-3 px-4">Customer Email</th>
                  <th className="py-3 px-4">Beat</th>
                  <th className="py-3 px-4">License</th>
                  <th className="py-3 px-4 text-right">Amount</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800/60">
                {orders.map((order) => (
                  <tr key={order.id} className="hover:bg-zinc-800/40 transition">
                    <td className="py-3 px-4 text-xs text-zinc-400">
                      {new Date(order.created_at).toLocaleDateString()}
                    </td>
                    <td className="py-3 px-4 font-mono text-xs">{order.customer_email}</td>
                    <td className="py-3 px-4 font-medium text-white">
                      {order.beats?.title || 'Unknown Beat'}
                    </td>
                    <td className="py-3 px-4">
                      <span className="inline-block px-2 py-0.5 text-[10px] font-bold uppercase rounded bg-zinc-800 text-emerald-400 border border-emerald-500/20">
                        {order.license_type}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-right font-bold text-white">
                      ${Number(order.amount_total).toFixed(2)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}