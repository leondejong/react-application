import styled from 'styled-components'

import { variable as v } from './'

const Option = styled.option`
  display: block;
  padding: 0.25rem;
  color: ${props => v(props.color, 'medium')};

  &:hover,
  &:focus,
  &:active {
    background: ${props => v(props.background, 'medium', '', '-tint')};
    color: ${props => v(props.colorActive, 'white')};
    border-radius: 0.25rem;
  }

  &:checked {
    background: ${props => v(props.background, 'medium')}
      linear-gradient(
        0deg,
        ${props => v(props.background, 'medium')} 0%,
        ${props => v(props.background, 'medium')} 100%
      );
    color: ${props => v(props.colorActive, 'white')};
    border-radius: 0.25rem;
  }
`

export default Option
