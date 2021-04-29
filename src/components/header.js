import { Menu } from '@material-ui/icons'
import styled from 'styled-components'

const StyledHeader = styled.header`
  display: flex;
  height: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
`

const StyledButtons = styled.div`
  flex: 0;
  color: var(--text-color-secondary);
`

const StyledMenuButton = styled.button`
  border: none;
  background-color: transparent;
  margin: 0;
  padding: 0;
  cursor: pointer;

  &:hover {
    transform: translateY(1px);
  }
`

const StyledTitle = styled.div`
  flex: 1;
  text-align: center;
  color: var(--text-color-secondary);
`

const Header = ({ toggleCollapse }) => (
  <StyledHeader>
    <StyledButtons>
      <StyledMenuButton onClick={toggleCollapse}>
        <Menu />
      </StyledMenuButton>
    </StyledButtons>
    <StyledTitle>Header</StyledTitle>
  </StyledHeader>
)

export default Header
