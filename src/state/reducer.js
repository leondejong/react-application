import { state as defaultState } from './'

const key = 'list'

export const reducer = (state, action) => {
  switch (action.type) {
    case 'add':
      return add(state, action)
    case 'update':
      return update(state, action)
    case 'remove':
      return remove(state, action)
    case 'clear':
      return { id: 0, list: [] }
    case 'default':
      return defaultState
    default:
      return state
  }
}

export const persistedState = JSON.parse(window.localStorage.getItem(key))

export const persistedReducer = (state, action) => {
  const modifiedState = reducer(state, action)
  window.localStorage.setItem(key, JSON.stringify(modifiedState))
  return modifiedState
}

function add (state, action) {
  const { id: n, list } = state
  const { item } = action
  const id = n + 1
  return {
    ...state,
    id,
    list: [...list, { ...item, id }]
  }
}

function update (state, action) {
  const { list } = state
  const { item } = action
  return {
    ...state,
    list: list.map(entity =>
      entity.id === item.id ? { ...entity, ...item } : entity
    )
  }
}

function remove (state, action) {
  const { list } = state
  const { item } = action
  return {
    ...state,
    list: list.filter(entity => entity.id !== item.id)
  }
}
