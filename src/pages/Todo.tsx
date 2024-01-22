import { useState } from 'react'
import TodoInput from '@/components/TodoInput'
import { ModeToggle } from '@/components/providers/mode-toggle'
import { Button } from '@/components/ui/button'
import { IconX } from '@tabler/icons-react'

let id = 0
const INITIAL_TASKS = [
  { id: id++, label: 'Learn CircleCI' },
  { id: id++, label: 'Learn TypeScript' },
  { id: id++, label: 'Learn Jest' },
]

function Todo() {
  const [tasks, setTasks] = useState(INITIAL_TASKS)
  const [newTask, setNewTask] = useState('')

  function handleSubmit() {
    setTasks([...tasks, { id: id++, label: newTask }])
  }

  return (
    <div className="flex flex-col gap-4 p-8">
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 self-center">
        Todo List
      </h2>
      <section className="flex justify-between">
        <TodoInput onChange={setNewTask} />
        <ModeToggle />
      </section>
      <Button className="w-36" onClick={() => handleSubmit()}>
        Submit
      </Button>

      <ul className="flex flex-col gap-2">
        {tasks.map(({ id, label }) => (
          <li key={id} className="flex items-center gap-4">
            <Button
              variant="outline"
              onClick={() => {
                setTasks(tasks.filter((task) => task.id !== id))
              }}
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
