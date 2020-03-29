import styled from 'styled-components'

export const StyledCard = styled.a`
  width: 200px;
  height: 300px;
  box-shadow: 2.5px 2.5px 8px #CCC;
  border-radius: 5px;

  .flipper {
    width: 100%;
    height: 100%;
    position: relative;
    transform-style: preserve-3d;
    transition: transform .8s;

    .front {
      /* padding: 10px; */
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      background: url(${props => props.img});

      h3 {
        color: #FFF;
        text-shadow: 2.5px 2.5px 8px #000;
        padding: 10px;
        background: #00000040;
      }
    }

    .back {
      padding: 10px;
      display: flex;
      flex-direction: column;
      background: #FFF;
      justify-content: center;
      transform: rotate3d(0, 1, 0, 180deg);

      ul {
        margin: 0;
        padding: 0;
        list-style: none;
        font-size: .9rem;

        h4 {
          margin: 0;
          margin-bottom: 10px;
        }

        li + li {
          margin-top: 3px;
        }
      }
    }

    .back, .front {
      position: absolute;
      width: 100%;
      height: 100%;
      backface-visibility: hidden;
    }
  }

  :hover .flipper {
    transform: rotate3d(0, 1, 0, 180deg);
  }

  h3 {
    margin: 0;
  }
`
