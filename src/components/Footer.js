import styled from 'styled-components'

const Footer = styled.footer`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  text-align: right;
`

const Note = styled.p`
  margin: 1rem 1rem 1rem 2rem;
  font-size: 1rem;
`

function FooterComponent ({ children }) {
  return (
    <Footer>
      <Note>{children}</Note>
    </Footer>
  )
}

export default FooterComponent
