import { FormEvent, useState } from 'react'
import TodoInput from '@/components/TodoInput'
import { ModeToggle } from '@/components/providers/mode-toggle'
import { Button } from '@/components/ui/button'
import { IconX } from '@tabler/icons-react'

// Utility function to generate unique IDs
let nextId = 0
function generateId() {
  return nextId++
}

const INITIAL_TASKS = [
  { id: generateId(), label: 'Learn CircleCI' },
  { id: generateId(), label: 'Learn TypeScript' },
  { id: generateId(), label: 'Learn Jest' },
]

function Todo() {
  const [tasks, setTasks] = useState(INITIAL_TASKS)
  const [newTaskLabel, setNewTaskLabel] = useState('')

  // Function to add a new task
  function addTask() {
    if (!newTaskLabel) return
    setTasks([...tasks, { id: generateId(), label: newTaskLabel }])
    setNewTaskLabel('')
  }

  // Function to remove a task by ID
  function removeTask(id: number) {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Function to clear all tasks
  function clearTasks() {
    setTasks([])
  }

  // Function to handle submission
  function handleSubmit(event: FormEvent) {
    event.preventDefault()
    addTask()
  }

  return (
    <div className="flex flex-col gap-4 p-8">
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 self-center">
        Todo List
      </h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="flex justify-between">
          <TodoInput onChange={setNewTaskLabel} value={newTaskLabel} />
          <ModeToggle />
        </div>

        <section className="flex w-72 gap-4">
          <Button className="w-full" type="submit">
            Submit
          </Button>
          <Button variant="outline" className="w-full" onClick={clearTasks}>
            Clear All
          </Button>
        </section>
      </form>

      <ul className="flex flex-col gap-2">
        {tasks.map(({ id, label }) => (
          <li key={id} className="flex items-center gap-4">
            <Button
              variant="outline"
              onClick={() => removeTask(id)}
              aria-label="Remove Task"
            >
              <IconX size="24" />
            </Button>
            <span>{label}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Todo
