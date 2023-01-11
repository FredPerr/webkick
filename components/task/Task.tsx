import React from 'react'

interface TaskInterface {
  task: { id?: string; title?: string; state: string }
  onArchiveTask: (id?: string) => void
  onPinTask: (id?: string) => void
}

export default function Task({
  task: { id, title, state },
  onArchiveTask,
  onPinTask,
}: TaskInterface) {
  return (
    <div className="list-item">
      <label htmlFor="title" aria-label={title}>
        <input type="text" value={title} readOnly={true} name="title" />
      </label>
    </div>
  )
}
