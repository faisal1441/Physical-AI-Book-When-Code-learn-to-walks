'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Search, BookOpen, Code, Zap } from 'lucide-react'

interface SearchResult {
  id: string
  title: string
  type: 'chapter' | 'code' | 'path'
  description: string
  link: string
}

const allResults: SearchResult[] = [
  { id: '1', title: 'Rigid Body Physics', type: 'chapter', description: 'Foundation of physical systems', link: '/book/1' },
  { id: '2', title: 'Control Theory', type: 'chapter', description: 'Feedback and control systems', link: '/book/2' },
  { id: '3', title: 'Kinematics', type: 'chapter', description: 'Motion without forces', link: '/book/3' },
  { id: '4', title: 'Basic Robot Class', type: 'code', description: 'Python implementation', link: '/code-examples/basic-robot' },
  { id: '5', title: 'PID Controller', type: 'code', description: 'Feedback control implementation', link: '/code-examples/pid-controller' },
  { id: '6', title: 'Forward Kinematics', type: 'code', description: 'End-effector position calculation', link: '/code-examples/forward-kinematics' },
  { id: '7', title: 'Beginner Path', type: 'path', description: 'Start your learning journey', link: '/learning-paths/beginner' },
  { id: '8', title: 'Intermediate Path', type: 'path', description: 'Deepen your understanding', link: '/learning-paths/intermediate' },
]

export default function SearchPage() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<SearchResult[]>([])
  const [hasSearched, setHasSearched] = useState(false)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    setHasSearched(true)

    if (!query.trim()) {
      setResults([])
      return
    }

    const filtered = allResults.filter(item =>
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.description.toLowerCase().includes(query.toLowerCase())
    )

    setResults(filtered)
  }

  const getIcon = (type: string) => {
    switch (type) {
      case 'chapter':
        return <BookOpen className="w-5 h-5 text-blue-600" />
      case 'code':
        return <Code className="w-5 h-5 text-purple-600" />
      case 'path':
        return <Zap className="w-5 h-5 text-orange-600" />
      default:
        return null
    }
  }

  return (
    <main className="min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-center mb-8">Search</h1>

        {/* Search Form */}
        <form onSubmit={handleSearch} className="mb-12">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search chapters, code examples, learning paths..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </form>

        {/* Results */}
        {hasSearched && (
          <div>
            {results.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-600 dark:text-gray-400 text-lg">
                  {query.trim() ? 'No results found' : 'Enter a search term'}
                </p>
              </div>
            ) : (
              <div className="space-y-3">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  Found {results.length} result{results.length !== 1 ? 's' : ''}
                </p>
                {results.map((result) => (
                  <Link key={result.id} href={result.link}>
                    <div className="flex items-start gap-4 p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-600 transition-colors cursor-pointer">
                      <div className="mt-1 flex-shrink-0">
                        {getIcon(result.type)}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold mb-1">{result.title}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {result.description}
                        </p>
                      </div>
                      <span className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded capitalize text-gray-700 dark:text-gray-300 flex-shrink-0">
                        {result.type}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </main>
  )
}
