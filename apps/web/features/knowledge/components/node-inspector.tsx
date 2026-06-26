import * as React from 'react';
import { KnowledgeNodeData } from '../types';

interface NodeInspectorProps {
  node: KnowledgeNodeData | null;
}

export function NodeInspector({ node }: NodeInspectorProps) {
  return (
    <aside className="w-80 border-l bg-white flex flex-col hidden lg:flex">
      <div className="p-4 border-b bg-gray-50 flex items-center justify-between">
        <h3 className="font-semibold text-sm">Node Inspector</h3>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4">
        {!node ? (
          <div className="flex flex-col items-center justify-center h-full text-center text-gray-500">
            <span className="text-sm">Click a node on the graph to inspect</span>
          </div>
        ) : (
          <div className="space-y-6">
            <div>
              <div className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-700 mb-2">
                {node.type}
              </div>
              <h2 className="text-lg font-bold leading-tight mb-2">{node.name}</h2>
              {node.description && (
                <p className="text-sm text-gray-600">{node.description}</p>
              )}
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <span className="block text-xs font-medium text-gray-500 uppercase">Trust Score</span>
                <span className={`text-sm font-bold ${node.trustScore > 80 ? 'text-green-600' : 'text-orange-500'}`}>
                  {node.trustScore}/100
                </span>
              </div>
              <div>
                <span className="block text-xs font-medium text-gray-500 uppercase">Usage</span>
                <span className="text-sm font-medium">{node.usageCount} times</span>
              </div>
            </div>

            <div className="pt-4 border-t">
              <h4 className="text-sm font-medium mb-2">Relationships</h4>
              <div className="text-xs text-gray-500 italic bg-gray-50 p-3 rounded border">
                Semantic relationships are calculated asynchronously.
              </div>
            </div>
          </div>
        )}
      </div>
    </aside>
  );
}
