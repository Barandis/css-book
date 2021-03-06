// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import styled from 'styled-components'

const StyledHeader = styled.header`
  display: flex;
  height: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
`

const StyledTitle = styled.div`
  flex: 1;
  text-align: center;
  color: var(--text-color-secondary);
`

const NavHeader = () => (
  <StyledHeader>
    <StyledTitle>Lorem Ipsum</StyledTitle>
  </StyledHeader>
)

export default NavHeader
