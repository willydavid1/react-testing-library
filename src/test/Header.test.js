import React from 'react'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Header from '../Header'

afterEach(cleanup) // Unmounts React trees that were mounted with render.

describe('-> Header tests', () => {
  const propText = 'Hello!'
  it('should toMatchSnapshot', () => {
    const { asFragment } = render(<Header text={propText} />)
    expect(asFragment()).toMatchSnapshot()
  })
  
  it('should inserts text in h1', () => {
    const { getByTestId, getByText } = render(<Header text={propText} />)
    expect(getByTestId('h1tag')).toHaveTextContent(propText)
    expect(getByText(propText)).toHaveClass('fancy-h1')
  })
})
