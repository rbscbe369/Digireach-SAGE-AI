import * as React from 'react';

export function KpiGrid() {
  const kpis = [
    { label: 'Total Revenue Generated', value: '$12,450', trend: '+14%', isPositive: true },
    { label: 'AI Cost Savings (vs Agency)', value: '$8,200', trend: '+22%', isPositive: true },
    { label: 'Content Pieces Published', value: '142', trend: '+5%', isPositive: true },
    { label: 'Total Impressions (All Channels)', value: '1.2M', trend: '-2%', isPositive: false },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-6">
      {kpis.map((kpi, index) => (
        <div key={index} className="bg-white border rounded-xl p-5 shadow-sm">
          <p className="text-sm font-medium text-gray-500 mb-1">{kpi.label}</p>
          <div className="flex items-end justify-between">
            <h3 className="text-2xl font-bold text-gray-900">{kpi.value}</h3>
            <span className={`text-sm font-medium ${kpi.isPositive ? 'text-emerald-600' : 'text-red-600'}`}>
              {kpi.trend}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
