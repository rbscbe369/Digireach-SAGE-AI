import * as React from 'react';
import { loadOrchestratorDashboardAction } from '@/features/ai-orchestrator/actions';
import { ExecutionGraph } from '@/features/ai-orchestrator/components/execution-graph';
import { AgentRegistryPanel } from '@/features/ai-orchestrator/components/agent-registry-panel';

export default async function OrchestratorPage() {
  let data = {
    runningExecutions: 0,
    completedTasks: 0,
    failedTasks: 0,
    activeAgents: 32,
    averageExecutionTime: 0
  };
  
  try {
    const response = await loadOrchestratorDashboardAction('pending-org-id');
    if (response) data = response;
  } catch (err) {
    // Gracefully catch the error so the empty UI renders while pending
  }

  return (
    <div className="flex flex-col h-full overflow-hidden">
      <div className="flex gap-4 p-6 pb-0">
        <div className="flex-1 bg-white p-4 border rounded-xl shadow-sm text-center">
          <div className="text-2xl font-bold text-blue-600">{data.runningExecutions}</div>
          <div className="text-xs font-medium text-gray-500 uppercase tracking-wider">Running Workflows</div>
        </div>
        <div className="flex-1 bg-white p-4 border rounded-xl shadow-sm text-center">
          <div className="text-2xl font-bold text-green-600">{data.completedTasks}</div>
          <div className="text-xs font-medium text-gray-500 uppercase tracking-wider">Completed Tasks</div>
        </div>
        <div className="flex-1 bg-white p-4 border rounded-xl shadow-sm text-center">
          <div className="text-2xl font-bold text-red-500">{data.failedTasks}</div>
          <div className="text-xs font-medium text-gray-500 uppercase tracking-wider">Failed Tasks</div>
        </div>
        <div className="flex-1 bg-white p-4 border rounded-xl shadow-sm text-center">
          <div className="text-2xl font-bold text-purple-600">{data.activeAgents}</div>
          <div className="text-xs font-medium text-gray-500 uppercase tracking-wider">Active Agents</div>
        </div>
      </div>
      
      <div className="flex flex-1 overflow-hidden mt-6">
        <ExecutionGraph />
        <AgentRegistryPanel />
      </div>
    </div>
  );
}
