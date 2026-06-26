import * as React from 'react';
import Link from 'next/link';

const menuItems = [
  { name: 'General', href: '/workspace/general' },
  { name: 'Team', href: '/workspace/team' },
  { name: 'Roles & Permissions', href: '/workspace/roles' },
  { name: 'Branding', href: '/workspace/branding', comingSoon: true },
  { name: 'Storage', href: '/workspace/storage', comingSoon: true },
  { name: 'API Keys', href: '/workspace/api', comingSoon: true },
  { name: 'Integrations', href: '/workspace/integrations', comingSoon: true },
  { name: 'Billing', href: '/workspace/billing', comingSoon: true },
  { name: 'Security', href: '/workspace/security', comingSoon: true },
  { name: 'Activity Logs', href: '/workspace/activity', comingSoon: true },
  { name: 'Audit Logs', href: '/workspace/audit', comingSoon: true },
  { name: 'Danger Zone', href: '/workspace/danger', comingSoon: true },
];

export function WorkspaceSidebar() {
  return (
    <aside className="w-64 border-r bg-white min-h-screen">
      <div className="p-6">
        <h2 className="text-lg font-bold tracking-tight">Workspace</h2>
      </div>
      <nav className="space-y-1 px-4">
        {menuItems.map((item) => {
          if (item.comingSoon) {
            return (
              <div
                key={item.name}
                className="flex items-center justify-between px-3 py-2 text-sm font-medium rounded-md text-gray-400 cursor-not-allowed select-none"
                aria-disabled="true"
                title={`${item.name} (Coming Soon)`}
              >
                <span>{item.name}</span>
                <span className="text-[10px] font-semibold bg-gray-100 text-gray-500 px-1.5 py-0.5 rounded">
                  Soon
                </span>
              </div>
            );
          }
          return (
            <Link
              key={item.name}
              href={item.href}
              className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors"
            >
              {item.name}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
