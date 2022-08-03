import styled, { css } from 'styled-components'

import { variable as v } from './'

export const input = css`
  min-width: 16rem;
  padding: 0.4375rem 0.9375rem;
  border: 0.0625rem solid ${props => v(props.border, 'medium')};
  outline: none;
  border-radius: 0.25rem;
  text-decoration: none;
  background: ${props => v(props.background, 'white')};
  color: ${props => v(props.color, 'dark')};
  box-shadow: inset 0 0 1px 1px rgba(0, 0, 0, 0.25);

  &:hover,
  &:focus,
  &:active {
    background: ${props => v(props.background, 'white', '', '-tint')};
    border-color: ${props => v(props.border, 'medium', '', '-tint')};
  }

  &:disabled,
  &[disabled] {
    pointer-events: none;
    opacity: 0.5;
  }

  &::placeholder {
    color: ${props => v(props.label, 'medium', '', '-tint')};
  }
`

const Input = styled.input`
  ${input}
`

export default Input
