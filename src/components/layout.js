// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import Head from 'next/head'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import Header from './header'
import Nav from './nav'
import NavHeader from './nav-header'

const StyledContainer = styled.div`
  padding: 0;
  margin: 0;
  display: flex;
  background-color: var(--background-color);
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

const Layout = ({ children, title }) => {
  const [collapsed, setCollapsed] = useState(true)
  const [theme, setTheme] = useState('light')

  const saveCollapsed = collapsed => {
    setCollapsed(collapsed)
    localStorage.setItem('collapsed', collapsed.toString())
  }

  const saveTheme = theme => {
    setTheme(theme)
    localStorage.setItem('theme', theme)
    document.documentElement.setAttribute('data-theme', theme)
  }

  const toggleCollapse = () => saveCollapsed(!collapsed)

  const toggleTheme = () => {
    if (theme === 'light') {
      saveTheme('dark')
    } else {
      saveTheme('light')
    }
  }

  useEffect(() => {
    const theme = localStorage.getItem('theme')
    document.documentElement.setAttribute('data-theme', theme)
    setTheme(theme)

    const collapsed = localStorage.getItem('collapsed') === 'true'
    setCollapsed(collapsed)
  }, [])

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
          <Header toggleCollapse={toggleCollapse} toggleTheme={toggleTheme} />
        </StyledContentHeader>
        <StyledContent>
          <StyledMain>{children}</StyledMain>
        </StyledContent>
      </StyledContentContainer>
    </StyledContainer>
  )
  /* eslint-enable max-len */
}

export default Layout
