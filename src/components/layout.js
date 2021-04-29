// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import Head from 'next/head'
import { useState } from 'react'
import styled from 'styled-components'
import Header from './header'
import Nav from './nav'
import NavHeader from './nav-header'

const StyledContainer = styled.div`
  padding: 0;
  margin: 0;
  display: flex;
`

const StyledNavContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  flex: 0 0 var(--nav-width);
  border-right: 1px solid var(--text-color-secondary);
  overflow: auto;
  transition: margin-left 0.5s ease-in-out;
  margin-left: ${({ collapsed }) => (collapsed ? 'calc(0px - var(--nav-width))' : 'initial')};
`

const StyledNavHeader = styled.div`
  flex: 0 0 var(--header-height);
`

const StyledNav = styled.div`
  flex: 1 0 calc(100vh - var(--header-height));
`

const StyledContentContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  flex: 1;
`

const StyledContentHeader = styled.div`
  flex: 0 0 var(--header-height);
  border-bottom: 1px solid var(--text-color-secondary);
`

const StyledContent = styled.div`
  flex: 1 0 calc(100vh - var(--header-height));
  display: flex;
  flex-direction: column;
  overflow: auto;
`

const StyledMain = styled.main`
  flex: 1;
  margin: 0 auto;
  max-width: var(--content-width);
  height: 100%;
`

export default function Layout({ children, title }) {
  const [collapsed, setCollapsed] = useState(true)

  const toggleCollapse = () => setCollapsed(!collapsed)

  /* eslint-disable max-len */
  return (
    <StyledContainer>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,700;1,700&family=Roboto:ital,wght@0,400;0,700;1,400;1,700&display=swap"
        />
      </Head>
      <StyledNavContainer collapsed={collapsed}>
        <StyledNavHeader>
          <NavHeader />
        </StyledNavHeader>
        <StyledNav>
          <Nav />
        </StyledNav>
      </StyledNavContainer>
      <StyledContentContainer>
        <StyledContentHeader>
          <Header toggleCollapse={toggleCollapse} />
        </StyledContentHeader>
        <StyledContent>
          <StyledMain>{children}</StyledMain>
        </StyledContent>
      </StyledContentContainer>
    </StyledContainer>
  )
  /* eslint-enable max-len */
}
