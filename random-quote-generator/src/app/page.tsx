"use client";

import QuoteGenerator from "@/components/QuoteGenerator";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 p-6">
      <QuoteGenerator />
    </main>
  );
}
