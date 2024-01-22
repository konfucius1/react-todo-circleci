import { Input } from './ui/input'

function TodoInput({ onChange }: { onChange: (value: string) => void }) {
  return (
    <Input
      type="text"
      placeholder="Add your task"
      className="w-72"
      onChange={(event) => {
        console.log(event.target.value)
        onChange(event.target.value)
      }}
    />
  )
}

export default TodoInput
