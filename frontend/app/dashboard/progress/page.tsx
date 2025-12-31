import { CheckCircle2, Circle } from 'lucide-react'

export default function ProgressPage() {
  const chapters = [
    { id: 1, title: 'Rigid Body Physics', completed: true },
    { id: 2, title: 'Control Theory', completed: true },
    { id: 3, title: 'Kinematics', completed: false },
    { id: 4, title: 'Sensing', completed: false },
    { id: 5, title: 'Actuation', completed: false },
  ]

  const completedCount = chapters.filter(c => c.completed).length
  const progress = Math.round((completedCount / chapters.length) * 100)

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8">Your Progress</h1>

      {/* Progress Summary */}
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 mb-8 border border-gray-200 dark:border-gray-700">
        <div className="mb-4">
          <div className="flex justify-between mb-2">
            <span className="font-semibold">Overall Progress</span>
            <span className="text-blue-600 font-bold">{progress}%</span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
            <div
              className="bg-blue-600 h-3 rounded-full transition-all"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
        <p className="text-gray-600 dark:text-gray-400">
          {completedCount} of {chapters.length} chapters completed
        </p>
      </div>

      {/* Chapters List */}
      <div className="space-y-3">
        <h2 className="text-xl font-semibold mb-4">Chapters</h2>
        {chapters.map((chapter) => (
          <div
            key={chapter.id}
            className="flex items-center gap-4 p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-600 transition-colors"
          >
            {chapter.completed ? (
              <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0" />
            ) : (
              <Circle className="w-6 h-6 text-gray-400 flex-shrink-0" />
            )}
            <div className="flex-1">
              <h3 className="font-semibold">{chapter.title}</h3>
            </div>
            {chapter.completed && (
              <span className="text-sm px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100 rounded">
                Completed
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
