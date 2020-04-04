import styled, { createGlobalStyle } from 'styled-components'
import PerfectScrollbar from 'react-perfect-scrollbar'

export const StyledRoot = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  max-height: 100vh;
`

export const StyledBodyScroll = styled(PerfectScrollbar)`
  display: flex;
  flex-direction: column;
  flex: 1;
`

export const StyledMain = styled.main`
  flex: 1 0 auto;
  /* background-color: red; */
`

export const StyledSpace = styled.div`
  width: 100%;
  height: 50px;
`

export default createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    height: 100vh;
  }

  @media screen and (prefers-reduced-motion: reduce) {
    html {
      scroll-behavior: auto;
    }
  }

  html {
    font-size: 12px;

    @media screen and (min-width: 768px) {
      font-size: 16px;
    }
  }

  body {
    background: #f7f9fb;
    font-family: 'Press Start 2P', cursive;
    margin: 0;
    padding: 0;
    display: flex;
    height: 100vh;
    color: #454545;
  }

  #__next {
    display: flex;
    flex: 1;
    flex-direction: column;
  }

  .container {
    margin: 0 auto;
    padding: 0 10px;
    width: 100%;

    @media screen and (min-width: 320px) {
      padding: 0 10px;
    }

    @media screen and (min-width: 320px) {
      padding: 0 20px;
    }

    @media screen and (min-width: 768px) {
      padding: 0 50px;
    }

    @media screen and (min-width: 979px) {
      padding: 0;
      width: 900px;
    }

    @media screen and (min-width: 980px) {
      width: 900px;
    }

    @media screen and (min-width: 1200px) {
      width: 1200px;
    }
  }

  .container-fluid {
    width: 100%;
    background: #FFF;
    box-shadow: 2.5px 2.5px 8px #CCC;
  }

  .nav-toggle-show {
    &&{
      height: 145px;
    }
  }

  a {
    transition: color .2s;
    :link, :visited {
      text-decoration: none;
      color: inherit;
    }

    :hover, :active {
      color: #a7a9ac;
    }
  }
`
