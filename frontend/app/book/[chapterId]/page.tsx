import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface ChapterPageProps {
  params: {
    chapterId: string
  }
}

const chapters: Record<string, { title: string; content: string; next?: string; prev?: string }> = {
  '1': {
    title: 'Chapter 1: Rigid Body Physics',
    prev: undefined,
    next: '2',
    content: `
      <h2 class="text-2xl font-bold mt-8 mb-4">Introduction to Rigid Body Physics</h2>
      <p class="mb-4">
        Rigid body physics forms the foundation of understanding how physical systems behave and respond to forces.
        In this chapter, we explore the fundamental principles that govern the motion of rigid bodies.
      </p>
      <h3 class="text-xl font-semibold mt-6 mb-3">Key Concepts</h3>
      <ul class="list-disc list-inside space-y-2 mb-4">
        <li>Newton's Laws of Motion</li>
        <li>Force and Acceleration</li>
        <li>Torque and Angular Motion</li>
        <li>Energy and Momentum Conservation</li>
      </ul>
      <p class="mb-4">
        These concepts are essential for understanding how robots interact with their environment.
      </p>
    `
  },
  '2': {
    title: 'Chapter 2: Control Theory',
    prev: '1',
    next: '3',
    content: `
      <h2 class="text-2xl font-bold mt-8 mb-4">Control Theory Fundamentals</h2>
      <p class="mb-4">
        Control theory enables us to design systems that respond predictably to their environment.
        Learn how feedback loops create stable, controllable behavior.
      </p>
      <h3 class="text-xl font-semibold mt-6 mb-3">Topics Covered</h3>
      <ul class="list-disc list-inside space-y-2 mb-4">
        <li>Open-loop vs Closed-loop Control</li>
        <li>PID Controllers</li>
        <li>Stability Analysis</li>
        <li>State Space Representation</li>
      </ul>
    `
  },
  '3': {
    title: 'Chapter 3: Kinematics',
    prev: '2',
    next: '4',
    content: `
      <h2 class="text-2xl font-bold mt-8 mb-4">Kinematics: Motion Without Forces</h2>
      <p class="mb-4">
        Kinematics describes motion without considering the forces that cause it.
        This is crucial for planning and controlling robotic movements.
      </p>
      <h3 class="text-xl font-semibold mt-6 mb-3">Learning Objectives</h3>
      <ul class="list-disc list-inside space-y-2 mb-4">
        <li>Forward and Inverse Kinematics</li>
        <li>Joint Spaces and Cartesian Spaces</li>
        <li>Trajectory Planning</li>
        <li>Singularities</li>
      </ul>
    `
  }
}

export default function ChapterPage({ params }: ChapterPageProps) {
  const chapter = chapters[params.chapterId]

  if (!chapter) {
    return (
      <div className="text-center py-12">
        <h1 className="text-2xl font-bold mb-4">Chapter Not Found</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          The chapter you're looking for doesn't exist yet.
        </p>
        <Link href="/book" className="text-blue-600 hover:text-blue-700">
          Back to Chapters
        </Link>
      </div>
    )
  }

  return (
    <article className="prose dark:prose-invert max-w-none">
      <h1 className="text-4xl font-bold mb-8">{chapter.title}</h1>

      <div
        className="prose dark:prose-invert max-w-none mb-12"
        dangerouslySetInnerHTML={{ __html: chapter.content }}
      />

      {/* Navigation */}
      <div className="border-t border-gray-200 dark:border-gray-800 pt-8 mt-12 flex justify-between items-center">
        {chapter.prev ? (
          <Link href={`/book/${chapter.prev}`}>
            <button className="flex items-center gap-2 px-4 py-2 text-blue-600 hover:text-blue-700 transition-colors">
              <ChevronLeft className="w-4 h-4" />
              Previous Chapter
            </button>
          </Link>
        ) : (
          <div />
        )}

        {chapter.next ? (
          <Link href={`/book/${chapter.next}`}>
            <button className="flex items-center gap-2 px-4 py-2 text-blue-600 hover:text-blue-700 transition-colors">
              Next Chapter
              <ChevronRight className="w-4 h-4" />
            </button>
          </Link>
        ) : (
          <div />
        )}
      </div>
    </article>
  )
}
