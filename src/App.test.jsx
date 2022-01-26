import { render, screen } from '@testing-library/react'

import Task6 from './tasks/tasks/task6/task6'

describe('Task6', () => {
  it('Task 6 renders', () => {
    render(<Task6 />)
    expect(screen.queryByRole('combobox')).toBeNull()
  })
})
