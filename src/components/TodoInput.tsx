import { Input } from './ui/input'

function TodoInput({
  value,
  onChange,
}: {
  value: string
  onChange: (value: string) => void
}) {
  return (
    <Input
      type="text"
      placeholder="Add your task"
      className="w-72"
      onChange={(event) => {
        onChange(event.target.value)
      }}
      value={value}
    />
  )
}

export default TodoInput
