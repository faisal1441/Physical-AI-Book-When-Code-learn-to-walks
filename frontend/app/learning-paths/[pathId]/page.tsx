import Link from 'next/link'
import { ChevronLeft, CheckCircle2, Circle, Lock } from 'lucide-react'

interface LearningPathPageProps {
  params: {
    pathId: string
  }
}

interface Step {
  id: string
  title: string
  type: 'chapter' | 'code' | 'exercise'
  status: 'completed' | 'current' | 'locked'
  link?: string
}

const paths: Record<string, { title: string; description: string; steps: Step[] }> = {
  'beginner': {
    title: 'Beginner Path',
    description: 'Start your journey into Physical AI with the fundamentals',
    steps: [
      { id: '1', title: 'Introduction to Robotics', type: 'chapter', status: 'completed', link: '/book/1' },
      { id: '2', title: 'Rigid Body Physics Basics', type: 'chapter', status: 'completed', link: '/book/1' },
      { id: '3', title: 'Basic Robot Class', type: 'code', status: 'current', link: '/code-examples/basic-robot' },
      { id: '4', title: 'Control Theory Intro', type: 'chapter', status: 'locked', link: '/book/2' },
      { id: '5', title: 'First Exercise', type: 'exercise', status: 'locked' },
    ]
  },
  'intermediate': {
    title: 'Intermediate Path',
    description: 'Deepen your understanding with advanced control theory and kinematics',
    steps: [
      { id: '1', title: 'Control Theory Fundamentals', type: 'chapter', status: 'completed', link: '/book/2' },
      { id: '2', title: 'PID Controllers', type: 'code', status: 'completed', link: '/code-examples/pid-controller' },
      { id: '3', title: 'Kinematics Overview', type: 'chapter', status: 'current', link: '/book/3' },
      { id: '4', title: 'Forward Kinematics', type: 'code', status: 'locked', link: '/code-examples/forward-kinematics' },
      { id: '5', title: 'Inverse Kinematics', type: 'chapter', status: 'locked' },
    ]
  },
  'advanced': {
    title: 'Advanced Path',
    description: 'Master complex systems and real-world applications',
    steps: [
      { id: '1', title: 'Advanced Control Techniques', type: 'chapter', status: 'locked' },
      { id: '2', title: 'Trajectory Planning', type: 'chapter', status: 'locked' },
      { id: '3', title: 'Real-world Implementation', type: 'code', status: 'locked' },
      { id: '4', title: 'Optimization Methods', type: 'chapter', status: 'locked' },
      { id: '5', title: 'Capstone Project', type: 'exercise', status: 'locked' },
    ]
  }
}

export default function LearningPathPage({ params }: LearningPathPageProps) {
  const path = paths[params.pathId]

  if (!path) {
    return (
      <div className="text-center py-12">
        <h1 className="text-2xl font-bold mb-4">Path Not Found</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          The learning path you're looking for doesn't exist.
        </p>
        <Link href="/learning-paths" className="text-blue-600 hover:text-blue-700">
          Back to Learning Paths
        </Link>
      </div>
    )
  }

  return (
    <div>
      <Link href="/learning-paths" className="flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-6">
        <ChevronLeft className="w-4 h-4" />
        Back to Paths
      </Link>

      <h1 className="text-4xl font-bold mb-2">{path.title}</h1>
      <p className="text-gray-700 dark:text-gray-300 mb-8">{path.description}</p>

      {/* Progress */}
      <div className="mb-8 bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
        <div className="flex justify-between mb-2">
          <span className="font-semibold">Path Progress</span>
          <span className="text-blue-600 font-bold">40%</span>
        </div>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
          <div className="bg-blue-600 h-3 rounded-full" style={{ width: '40%' }} />
        </div>
      </div>

      {/* Steps */}
      <div className="space-y-4">
        {path.steps.map((step, index) => (
          <div key={step.id}>
            {/* Timeline connector */}
            {index < path.steps.length - 1 && (
              <div className="flex justify-center mb-2">
                <div className="w-0.5 h-4 bg-gray-300 dark:bg-gray-700" />
              </div>
            )}

            {/* Step */}
            {step.status === 'locked' ? (
              <div className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 opacity-60">
                <Lock className="w-6 h-6 text-gray-400 mt-0.5 flex-shrink-0" />
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-600 dark:text-gray-400">{step.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-500">Locked - Complete previous steps</p>
                </div>
                <span className="text-xs px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded">
                  {step.type}
                </span>
              </div>
            ) : step.link ? (
              <Link href={step.link}>
                <div className={`flex items-start gap-4 p-4 rounded-lg border transition-colors cursor-pointer ${
                  step.status === 'completed'
                    ? 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800 hover:border-green-400 dark:hover:border-green-700'
                    : 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800 hover:border-blue-400 dark:hover:border-blue-700'
                }`}>
                  {step.status === 'completed' ? (
                    <CheckCircle2 className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
                  ) : (
                    <Circle className="w-6 h-6 text-blue-600 mt-0.5 flex-shrink-0" />
                  )}
                  <div className="flex-1">
                    <h3 className="font-semibold">{step.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {step.status === 'completed' ? 'Completed' : 'In Progress'}
                    </p>
                  </div>
                  <span className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded">
                    {step.type}
                  </span>
                </div>
              </Link>
            ) : (
              <div className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                {step.status === 'completed' ? (
                  <CheckCircle2 className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
                ) : (
                  <Circle className="w-6 h-6 text-blue-600 mt-0.5 flex-shrink-0" />
                )}
                <div className="flex-1">
                  <h3 className="font-semibold">{step.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {step.status === 'completed' ? 'Completed' : 'In Progress'}
                  </p>
                </div>
                <span className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded">
                  {step.type}
                </span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
