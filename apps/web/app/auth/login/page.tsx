'use client';

import React, { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('admin@digireach.ai');
  const [password, setPassword] = useState('pass1234');
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const result = await signIn('credentials', {
        email,
        password,
        redirect: false,
        callbackUrl: '/dashboard',
      });

      if (result?.error) {
        setError('Invalid email or password. Please try again.');
      } else {
        // Force session refresh and redirect
        router.refresh();
        router.push('/dashboard');
      }
    } catch (err: any) {
      setError(err?.message || 'An unexpected error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-800/80 rounded-2xl p-8 shadow-2xl relative overflow-hidden">
      {/* Decorative top highlight border */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-violet-500 via-fuchsia-500 to-emerald-500" />

      <div className="text-center mb-8">
        <h1 className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
          Digireach SAGE AI
        </h1>
        <p className="text-slate-400 text-sm mt-2">
          Enterprise Command & AI Operations Core
        </p>
      </div>

      {/* Dev Credentials Banner */}
      <div className="bg-violet-950/40 border border-violet-800/30 rounded-lg p-3.5 mb-6 text-xs text-violet-300">
        <span className="font-semibold text-violet-200 block mb-1">💡 Development Access:</span>
        <div className="flex justify-between mt-1">
          <span>Email: <code className="bg-violet-900/40 px-1 py-0.5 rounded font-mono text-white">admin@digireach.ai</code></span>
          <span>Password: <code className="bg-violet-900/40 px-1 py-0.5 rounded font-mono text-white">pass1234</code></span>
        </div>
      </div>

      {error && (
        <div className="bg-red-950/40 border border-red-800/30 text-red-300 rounded-lg p-3 mb-6 text-xs animate-shake">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
            Email Address
          </label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isLoading}
            placeholder="name@company.com"
            className="w-full bg-slate-950/60 border border-slate-800 focus:border-violet-500 text-white rounded-lg px-4 py-3 text-sm transition-all focus:outline-none focus:ring-1 focus:ring-violet-500 placeholder-slate-600 disabled:opacity-50"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
            Password
          </label>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={isLoading}
            placeholder="••••••••"
            className="w-full bg-slate-950/60 border border-slate-800 focus:border-violet-500 text-white rounded-lg px-4 py-3 text-sm transition-all focus:outline-none focus:ring-1 focus:ring-violet-500 placeholder-slate-600 disabled:opacity-50"
          />
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-semibold rounded-lg py-3 text-sm transition-all transform active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-violet-500/50 shadow-lg shadow-violet-500/20 disabled:opacity-50 disabled:pointer-events-none flex items-center justify-center space-x-2"
        >
          {isLoading ? (
            <>
              <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              <span>Authenticating...</span>
            </>
          ) : (
            <span>Sign In</span>
          )}
        </button>
      </form>
    </div>
  );
}
