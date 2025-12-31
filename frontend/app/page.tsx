import Link from 'next/link'
import { ArrowRight, BookOpen, Brain, Code, Zap } from 'lucide-react'

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Header/Navigation */}
      <header className="border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-3xl font-bold">When Code Learns to Walk</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">Interactive guide to Physical AI</p>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Welcome to Your Learning Journey</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Explore the fascinating intersection of code and robotics. Learn how machines perceive, decide, and act in the physical world.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <Link href="/dashboard" className="group">
            <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-gray-400 dark:hover:border-gray-600 transition-colors">
              <Zap className="w-8 h-8 mb-4 text-blue-600" />
              <h3 className="font-semibold mb-2 group-hover:text-blue-600 transition-colors">Dashboard</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Track your progress</p>
            </div>
          </Link>

          <Link href="/book" className="group">
            <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-gray-400 dark:hover:border-gray-600 transition-colors">
              <BookOpen className="w-8 h-8 mb-4 text-green-600" />
              <h3 className="font-semibold mb-2 group-hover:text-green-600 transition-colors">Chapters</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Read the book content</p>
            </div>
          </Link>

          <Link href="/code-examples" className="group">
            <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-gray-400 dark:hover:border-gray-600 transition-colors">
              <Code className="w-8 h-8 mb-4 text-purple-600" />
              <h3 className="font-semibold mb-2 group-hover:text-purple-600 transition-colors">Code Examples</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Explore code samples</p>
            </div>
          </Link>

          <Link href="/learning-paths" className="group">
            <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-gray-400 dark:hover:border-gray-600 transition-colors">
              <Brain className="w-8 h-8 mb-4 text-orange-600" />
              <h3 className="font-semibold mb-2 group-hover:text-orange-600 transition-colors">Learning Paths</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Follow structured paths</p>
            </div>
          </Link>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link href="/dashboard">
            <button className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Get Started
              <ArrowRight className="w-4 h-4" />
            </button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
            When Code Learns to Walk © 2024. Interactive learning platform for Physical AI.
          </p>
        </div>
      </footer>
    </main>
  )
}
