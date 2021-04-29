// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import styled from 'styled-components'

const StyledContainer = styled.nav`
  padding: 1rem;
  padding-top: 0;
`

const StyledMenu = styled.ul`
  padding: 0;

  & & {
    padding-left: 1rem;
  }
`

const StyledMenuItem = styled.li`
  list-style: none;
  padding: 0.1rem 0;
`

const TocEntry = ({ section, title }) => (
  <StyledMenuItem>
    <strong>{section}.</strong> {title}
  </StyledMenuItem>
)

const Nav = () => (
  <StyledContainer>
    <StyledMenu>
      <TocEntry section="1" title="Lorem Ipsum" />
      <StyledMenu>
        <TocEntry section="1.1" title="Lorem Ipsum Dolor Sit Amet" />
        <TocEntry section="1.2" title="Consectetur Adipiscing Elit" />
      </StyledMenu>
    </StyledMenu>
  </StyledContainer>
)

export default Nav
