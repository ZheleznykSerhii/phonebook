import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'
import Task6 from '../task6'

describe('Task6', () => {
  it('should return 2 items by default', () => {
    render(<Task6 />)

    const contactsAmount = screen.getAllByRole('listitem')
    expect(contactsAmount).toHaveLength(2)
  })
  it('should return 1 item', () => {
    render(<Task6 />)
    const searchElement = screen.getByRole('textbox', { name: 'Search' })
    fireEvent.change(searchElement, { target: { value: 'S' } })
    const newContactsAmount = screen.getAllByRole('listitem')
    expect(newContactsAmount).toHaveLength(1)
  })
  it('should find all items', () => {
    render(<Task6 />)
    const searchElement = screen.getByRole('textbox', { name: 'Search' })
    fireEvent.change(searchElement, { target: { value: 'Zh' } })

    const newContactsAmount = screen.getAllByRole('listitem')
    expect(newContactsAmount).toHaveLength(2)
  })
  it('should not find any items', () => {
    render(<Task6 />)

    const searchElement = screen.getByRole('textbox', { name: 'Search' })
    fireEvent.change(searchElement, { target: { value: '222222' } })

    const newContactsAmount = screen.queryByRole('listitem')
    expect(newContactsAmount).not.toBeInTheDocument()
  })
})
