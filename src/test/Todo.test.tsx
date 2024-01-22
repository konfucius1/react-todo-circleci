import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'

import Todo from '@/pages/Todo'

describe('Todo Component', () => {
  test('renders initial tasks', () => {
    render(<Todo />)
    const tasks = screen.getAllByRole('listitem')
    expect(tasks).toHaveLength(3)
  })

  test('can add a new task', () => {
    render(<Todo />)

    const input = screen.getByPlaceholderText('Add your task')
    const submitButton = screen.getByText('Submit')

    fireEvent.change(input, { target: { value: 'New task' } })
    fireEvent.click(submitButton)

    expect(screen.getByText('New task')).toBeInTheDocument()
  })

  test('can remove a task', () => {
    render(<Todo />)

    const firstTaskLabel = screen.getAllByRole('listitem')[0].textContent
    const removeButtons = screen.getAllByRole('button', { name: 'Remove Task' })
    fireEvent.click(removeButtons[0])

    // Re-query the DOM to check if the task is removed
    const tasksAfterRemoval = screen.queryAllByText(firstTaskLabel || '')
    expect(tasksAfterRemoval.length).toBe(0)
  })

  test('can clear all tasks', () => {
    render(<Todo />)

    const clearButton = screen.getByText('Clear All')
    fireEvent.click(clearButton)

    const tasks = screen.queryAllByRole('listitem')
    expect(tasks.length).toBe(0)
  })
})
