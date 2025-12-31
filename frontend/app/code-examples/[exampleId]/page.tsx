import Link from 'next/link'
import { Copy, ChevronLeft } from 'lucide-react'

interface CodeExamplePageProps {
  params: {
    exampleId: string
  }
}

const examples: Record<string, { title: string; language: string; description: string; code: string }> = {
  'basic-robot': {
    title: 'Basic Robot Class',
    language: 'Python',
    description: 'A foundational robot class that demonstrates basic structure and methods.',
    code: `class Robot:
    def __init__(self, name, position=(0, 0, 0)):
        self.name = name
        self.position = position
        self.velocity = (0, 0, 0)
        self.is_moving = False

    def move(self, direction, distance):
        """Move the robot in a specified direction."""
        self.is_moving = True
        # Update position based on direction
        print(f"{self.name} moving {distance} units {direction}")
        self.is_moving = False

    def stop(self):
        """Stop the robot's movement."""
        self.velocity = (0, 0, 0)
        self.is_moving = False

# Usage
robot = Robot("RoboA", (0, 0, 0))
robot.move("forward", 10)
robot.stop()`
  },
  'pid-controller': {
    title: 'PID Controller Implementation',
    language: 'Python',
    description: 'Implementation of a PID controller for feedback control.',
    code: `class PIDController:
    def __init__(self, kp, ki, kd):
        self.kp = kp  # Proportional gain
        self.ki = ki  # Integral gain
        self.kd = kd  # Derivative gain
        self.prev_error = 0
        self.integral = 0

    def update(self, error, dt):
        """Update controller with current error."""
        # Proportional term
        p_term = self.kp * error

        # Integral term
        self.integral += error * dt
        i_term = self.ki * self.integral

        # Derivative term
        d_term = self.kd * (error - self.prev_error) / dt
        self.prev_error = error

        return p_term + i_term + d_term

# Usage
pid = PIDController(kp=1.0, ki=0.1, kd=0.5)
output = pid.update(error=5.0, dt=0.01)`
  },
  'forward-kinematics': {
    title: 'Forward Kinematics',
    language: 'Python',
    description: 'Calculate end-effector position from joint angles.',
    code: `import numpy as np

def forward_kinematics(theta1, theta2, L1=1.0, L2=1.0):
    """
    Calculate end-effector position for 2-link arm.

    Args:
        theta1: Joint 1 angle (radians)
        theta2: Joint 2 angle (radians)
        L1: Length of first link
        L2: Length of second link

    Returns:
        (x, y) position of end-effector
    """
    # Position after first link
    x1 = L1 * np.cos(theta1)
    y1 = L1 * np.sin(theta1)

    # Position after second link
    x = x1 + L2 * np.cos(theta1 + theta2)
    y = y1 + L2 * np.sin(theta1 + theta2)

    return x, y

# Usage
x, y = forward_kinematics(np.pi/4, np.pi/6)
print(f"End-effector position: ({x:.2f}, {y:.2f})")`
  }
}

export default function CodeExamplePage({ params }: CodeExamplePageProps) {
  const example = examples[params.exampleId]

  if (!example) {
    return (
      <div className="text-center py-12">
        <h1 className="text-2xl font-bold mb-4">Example Not Found</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          The code example you're looking for doesn't exist.
        </p>
        <Link href="/code-examples" className="text-blue-600 hover:text-blue-700">
          Back to Code Examples
        </Link>
      </div>
    )
  }

  return (
    <div>
      <Link href="/code-examples" className="flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-6">
        <ChevronLeft className="w-4 h-4" />
        Back to Examples
      </Link>

      <h1 className="text-4xl font-bold mb-2">{example.title}</h1>
      <p className="text-blue-600 font-semibold mb-4">{example.language}</p>
      <p className="text-gray-700 dark:text-gray-300 mb-8">{example.description}</p>

      {/* Code Block */}
      <div className="relative">
        <button className="absolute top-4 right-4 p-2 bg-gray-700 hover:bg-gray-600 text-white rounded transition-colors" title="Copy code">
          <Copy className="w-4 h-4" />
        </button>
        <pre className="bg-gray-900 text-gray-100 p-6 rounded-lg overflow-x-auto">
          <code>{example.code}</code>
        </pre>
      </div>
    </div>
  )
}
