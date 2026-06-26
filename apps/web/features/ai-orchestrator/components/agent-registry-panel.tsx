import * as React from 'react';

export function AgentRegistryPanel() {
  const agents = [
    { name: 'Research Agent', status: 'AVAILABLE', version: '1.2.0' },
    { name: 'Fact Verification', status: 'AVAILABLE', version: '1.1.0' },
    { name: 'Citation Agent', status: 'AVAILABLE', version: '1.0.5' },
    { name: 'SEO Agent', status: 'AVAILABLE', version: '2.0.0' },
  ];

  return (
    <aside className="w-80 border-r bg-white flex flex-col hidden lg:flex">
      <div className="p-4 border-b bg-gray-50 flex items-center justify-between">
        <h3 className="font-semibold text-sm">Agent Registry</h3>
        <span className="text-xs bg-purple-100 text-purple-700 px-2 py-0.5 rounded-full font-medium">32 Total</span>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {agents.map((agent) => (
          <div key={agent.name} className="p-3 border rounded-lg shadow-sm hover:border-purple-300 transition-colors cursor-pointer">
            <div className="flex items-center justify-between mb-1">
              <h4 className="font-medium text-sm text-gray-900">{agent.name}</h4>
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
            </div>
            <div className="flex items-center justify-between text-xs text-gray-500">
              <span>v{agent.version}</span>
              <span className="uppercase">{agent.status}</span>
            </div>
          </div>
        ))}
        
        <div className="pt-4 border-t mt-4 text-center">
          <button className="text-sm text-purple-600 font-medium hover:underline">
            View All Registered Agents &rarr;
          </button>
        </div>
      </div>
    </aside>
  );
}
