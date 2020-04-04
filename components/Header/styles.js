import styled from 'styled-components'

export const StyledHeader = styled.header`
  display: grid;
  grid-template-columns: 63px 1fr;
  height: 70px;
  overflow: hidden;
  && {
    margin-top: 10px;
    margin-bottom: 10px;
  }

  @media screen and (min-width: 320px) {
    grid-template-columns: 90px 1fr;
    height: 75px;
  }

  @media screen and (min-width: 425px) {
    height: 90px;
    grid-template-columns: 140px 1fr;
  }

  @media screen and (min-width: 768px) {
    height: 120px;
    grid-template-columns: 200px 1fr;
  }

  .title {
    margin-top: 25px;
    @media screen and (min-width: 960px) {
      padding-left: 5px;
    }

    h1 {
      font-size: .8rem;
      width: 0;
      transform: rotateZ(-10deg);
      margin: 0;
      margin-bottom: -6px;

      @media screen and (min-width: 320px) {
        font-size: 1rem;
        margin-bottom: -6px;
      }

      @media screen and (min-width: 425px) {
        font-size: 1.4rem;
        margin-bottom: -15px;
      }
    }

    h2 {
      font-size: .35rem;
      text-align: right;
      width: 59px;
      transform: rotateZ(-10deg);
      margin: 0;

      @media screen and (min-width: 320px) {
        font-size: .5rem;
        width: 80px;
      }

      @media screen and (min-width: 425px) {
        font-size: .8rem;
        width: 125px;
      }

      @media screen and (min-width: 768px) {
        width: 165px;
      }
    }
  }

  nav {
    display: grid;
    grid-template-columns: 70px 1fr;
    /* font-family: alternate-gothic; */
    font-size: .6rem;
    margin-top: 10px;

    @media screen and (min-width: 320px) {
      font-size: .7rem;
      grid-template-columns: 80px 1fr;
    }

    @media screen and (min-width: 425px) {
      font-size: .8rem;
      grid-template-columns: 100px 1fr;
    }

    @media screen and (min-width: 768px) {
      font-size: .8rem;
      grid-template-columns: 160px 200px 1fr;
    }

    @media screen and (min-width: 1024px) {
      font-size: 1rem;
      grid-template-columns: 200px 250px 1fr;
    }

    ul {
      margin: 0;
      padding: 0;
      list-style: none;
      padding-top: 10px;
      padding-bottom: 5px;
      overflow: hidden;

      li + li {
        margin-top: 5px;
      }
    }

    .nav-hidden {
      @media screen and (min-width: 768px) {
        display: none;
      }
    }

    .nav-show {
      display: none;
    }
  }
`
