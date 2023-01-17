import styled from 'styled-components'

const Wrapper = styled.main`
  background-image: radial-gradient(rgba(0, 0, 250, .5), rgba(0, 0, 0, 1));
  text-align: center;
  img {
    display: block;
    margin-bottom: 2rem;
    max-height: 400px;
    height: 400px;
    width: auto;
  }
  display: flex;
  align-items: center;
  justify-content: center;
  h3 {
    margin-bottom: 0.5rem;
  }
  p {
    margin-top: 0;
    margin-bottom: 0.5rem;
    color: white;
  }
  a {
    color: var(--primary-500);
    text-decoration: underline;
    text-transform: capitalize;
  }
`

export default Wrapper