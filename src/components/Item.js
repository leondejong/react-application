import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { useStateReducer } from '../state'
import { Button, Input, Checkbox } from '../elements'

const Row = styled.tr`
  text-align: center;
  background: var(--dark-tint);
  & td {
    border-radius: 0.25rem;
  }
`

function ItemComponent ({ data }) {
  const { id, name, active } = data
  const [, dispatch] = useStateReducer()

  function update (name, value) {
    dispatch({
      type: 'update',
      item: { ...data, [name]: value }
    })
  }

  function remove () {
    dispatch({
      type: 'remove',
      item: data
    })
  }

  return (
    <Row>
      <td>{id}</td>
      <td>
        <Checkbox
          checked={active}
          onChange={e => update('active', e.target.checked)}
          color='white'
        />
      </td>
      <td>
        <Input
          type='text'
          placeholder='Name'
          value={name}
          onChange={e => update('name', e.target.value)}
          background='transparent'
          border='white'
          color='white'
        />
      </td>
      <td>
        <Link to={`detail/${id}`}>Detail</Link>
      </td>
      <td>
        <Link to={`edit/${id}`}>
          <Button type='button' background='blue' border='blue'>
            Edit
          </Button>
        </Link>
        <Button type='button' onClick={remove} background='red' border='red'>
          Remove
        </Button>
      </td>
    </Row>
  )
}

export default ItemComponent
