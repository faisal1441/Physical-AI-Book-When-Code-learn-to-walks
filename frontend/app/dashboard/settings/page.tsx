import { Moon, Sun, Volume2, Bell } from 'lucide-react'

export default function SettingsPage() {
  return (
    <div className="p-8 max-w-2xl">
      <h1 className="text-3xl font-bold mb-8">Settings</h1>

      {/* Appearance Settings */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Appearance</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-3">
              <Sun className="w-5 h-5" />
              <div>
                <p className="font-semibold">Theme</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Choose between light and dark mode</p>
              </div>
            </div>
            <select className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700">
              <option>Auto</option>
              <option>Light</option>
              <option>Dark</option>
            </select>
          </div>
        </div>
      </section>

      {/* Notifications */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Notifications</h2>
        <div className="space-y-3">
          <label className="flex items-center gap-3 p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 cursor-pointer hover:border-blue-400 dark:hover:border-blue-600 transition-colors">
            <input type="checkbox" defaultChecked className="w-4 h-4" />
            <div className="flex items-center gap-2 flex-1">
              <Bell className="w-5 h-5" />
              <div>
                <p className="font-semibold">Chapter Updates</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Get notified when new chapters are available</p>
              </div>
            </div>
          </label>

          <label className="flex items-center gap-3 p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 cursor-pointer hover:border-blue-400 dark:hover:border-blue-600 transition-colors">
            <input type="checkbox" defaultChecked className="w-4 h-4" />
            <div className="flex items-center gap-2 flex-1">
              <Volume2 className="w-5 h-5" />
              <div>
                <p className="font-semibold">Learning Reminders</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Periodic reminders to continue your learning path</p>
              </div>
            </div>
          </label>
        </div>
      </section>

      {/* Account */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Account</h2>
        <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Account management features coming soon
          </p>
        </div>
      </section>
    </div>
  )
}
