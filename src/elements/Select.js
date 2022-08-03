import styled from 'styled-components'

import { variable as v } from './'

const Select = styled.select`
  margin: 0;
  padding: 0.4375rem 0.9375rem;
  border: 0.0625rem solid ${props => v(props.border, 'medium')};
  border-radius: 0.25rem;
  background: ${props => v(props.background, 'white')};
  color: ${props => v(props.color, 'medium')};
  box-shadow: inset 0 0 1px 1px rgba(0, 0, 0, 0.25);
  outline: none;
  cursor: pointer;
  overflow: auto;
  -webkit-appearance: none;
  -moz-appearance: none;

  &:hover,
  &:focus,
  &:active {
    border-color: ${props => v(props.border, 'medium', '', '-tint')};
  }

  &:disabled,
  &[disabled] {
    pointer-events: none;
    opacity: 0.5;
  }
`

export default Select
