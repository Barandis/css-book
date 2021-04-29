// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { Brightness4, Menu } from '@material-ui/icons'
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
  display: flex;
`

const StyledMenuButton = styled.button`
  border: none;
  background-color: transparent;
  margin: 0 1em 0 0;
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

const Header = ({ toggleCollapse, toggleTheme }) => (
  <StyledHeader>
    <StyledButtons>
      <StyledMenuButton onClick={toggleCollapse}>
        <Menu style={{ color: 'var(--text-color-secondary)' }} />
      </StyledMenuButton>
      <StyledMenuButton onClick={toggleTheme}>
        <Brightness4 style={{ color: 'var(--text-color-secondary)' }} />
      </StyledMenuButton>
    </StyledButtons>
    <StyledTitle>Header</StyledTitle>
  </StyledHeader>
)

export default Header
