import { NextRequest, NextResponse } from 'next/server'

const chapters = {
  '1': {
    id: '1',
    title: 'Rigid Body Physics',
    content: 'Rigid body physics forms the foundation of understanding how physical systems behave...',
    author: 'Physical AI Course',
    publishedDate: '2024-01-15',
  },
  '2': {
    id: '2',
    title: 'Control Theory',
    content: 'Control theory enables us to design systems that respond predictably to their environment...',
    author: 'Physical AI Course',
    publishedDate: '2024-01-20',
  },
  '3': {
    id: '3',
    title: 'Kinematics',
    content: 'Kinematics describes motion without considering the forces that cause it...',
    author: 'Physical AI Course',
    publishedDate: '2024-01-25',
  },
}

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params

  const chapter = chapters[id as keyof typeof chapters]

  if (!chapter) {
    return NextResponse.json(
      { error: 'Chapter not found' },
      { status: 404 }
    )
  }

  return NextResponse.json(chapter)
}
