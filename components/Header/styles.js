import styled from 'styled-components'

export const StyledHeader = styled.header`
  display: grid;
  grid-template-columns: 2fr 3fr;
  height: 75px;
  overflow: hidden;
  && {
    margin-top: 30px;
    margin-bottom: 30px;
  }

  @media screen and (min-width: 320px) {
    grid-template-columns: 1fr 2fr;
  }

  @media screen and (min-width: 425px) {
    height: 100px;
    grid-template-columns: 120px 1fr;
  }

  @media screen and (min-width: 768px) {
    grid-template-columns: 150px 1fr;
  }

  .title {
    margin-top: 20px;
    @media screen and (min-width: 960px) {
      padding-left: 5px;
    }

    h1 {
      font-size: 1.4rem;
      width: 0;
      transform: rotateZ(-10deg);
      margin: 0;
      margin-bottom: -5px;
    }

    h2 {
      font-size: .8rem;
      text-align: right;
      width: 70px;
      transform: rotateZ(-10deg);
      margin: 0;

      @media screen and (min-width: 425px) {
        width: 90px;
      }
    }
  }

  nav {
    display: grid;
    grid-template-columns: 1fr 1fr;
    font-family: alternate-gothic;
    font-size: 1.4rem;

    @media screen and (min-width: 320px) {
      grid-template-columns: 60px 70px 40px;
    }

    @media screen and (min-width: 425px) {
      font-size: 1.2rem;
      grid-template-columns: 80px 100px 1fr;
    }

    @media screen and (min-width: 768px) {
      font-size: 1.5rem;
      grid-template-columns: 150px 150px 1fr;
    }

    ul {
      margin: 0;
      padding: 0;
      list-style: none;
      padding-top: 10px;
      overflow: hidden;

      li + li {
        margin-top: 3px;
      }
    }

    .nav-hidden {
      @media screen and (min-width: 320px) {
        display: none;
      }
    }

    .nav-show {
      display: none;
    }
  }
`
