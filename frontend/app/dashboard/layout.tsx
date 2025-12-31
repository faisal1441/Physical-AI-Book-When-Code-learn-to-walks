import Link from 'next/link'
import { BarChart3, Settings } from 'lucide-react'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 border-r border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900">
        <div className="p-6">
          <Link href="/" className="text-xl font-bold hover:text-blue-600 transition-colors">
            ← Home
          </Link>
        </div>
        <nav className="space-y-2 px-4">
          <Link href="/dashboard/progress">
            <div className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors">
              <BarChart3 className="w-5 h-5" />
              <span>Progress</span>
            </div>
          </Link>
          <Link href="/dashboard/settings">
            <div className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors">
              <Settings className="w-5 h-5" />
              <span>Settings</span>
            </div>
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>
    </div>
  )
}
