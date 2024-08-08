import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import Login from '../../pages/Login'
import userEvent from '@testing-library/user-event'

const onSubmit = jest.fn()

beforeEach(() => {
  render(<Login
      title="Login"
      btnname="Login"
      onSubmitForTest={onSubmit}
      renderPropFunction={(value) => <span className="translate-x-2 text-center py-2">Welcome, {value}</span>}
    />)
})
test('Login Test Using Jest', async () => {
  const username = screen.getByTestId('text-input-element')
  const password = screen.getByTestId('password-input-element')
  userEvent.type(username, 'fillWithTestUsername')
  userEvent.type(password, 'fillWithTestPassword')

  userEvent.click(screen.getByTestId('login-button-element'))

  await waitFor(() => {
    expect(onSubmit).toBeCalledTimes(1)
  })
})
