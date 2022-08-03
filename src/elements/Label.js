import styled from 'styled-components'

import { variable as v } from './'

const Label = styled.label`
  vertical-align: middle;
  color: ${props => v(props.color, 'medium')};
  cursor: pointer;

  &:hover,
  &:focus,
  &:active {
    color: ${props => v(props.color, 'medium', '', '-tint')};
  }
`

export default Label
