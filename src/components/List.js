import styled from 'styled-components'

import { useStateReducer } from '../state'
import { Item } from './'

const Table = styled.table`
  width: 100%;
  border-spacing: 0.1875rem;
  & input[type='text'] {
    width: calc(100% - 0.5rem);
    margin: 0.25rem;
  }
`

function ListComponent () {
  const [{ list }] = useStateReducer()

  return (
    <Table>
      <thead>
        <tr>
          <th>Id</th>
          <th>active</th>
          <th>Name</th>
          <th>Detail</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {list.map(item => (
          <Item key={item.id} data={item} />
        ))}
      </tbody>
    </Table>
  )
}

export default ListComponent
