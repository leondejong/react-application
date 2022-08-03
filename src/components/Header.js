import styled from 'styled-components'

const Header = styled.header`
  display: flex;
  justify-content: center;
`

const Heading = styled.h1`
  margin: 1rem;
  font-size: 5rem;
`

const HeaderComponent = ({ children }) => (
  <Header>
    <Heading>{children}</Heading>
  </Header>
)

export default HeaderComponent
