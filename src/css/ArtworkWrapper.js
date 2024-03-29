import styled from 'styled-components'

const ArtworkWrapper = styled.section`
  padding: 4rem 0;
  word-break: normal;

  h2 {
    text-transform: capitalize;
    letter-spacing: ${(props) => props.theme.mainSpacing};
    margin-bottom: 1rem;
  }

  h4 {
    text-transform: capitalize;
  }

  h2 {
    margin: 2rem 0;
  }

  .center {
    width: 80vw;
    margin: 0 auto;
  }

  .images {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
    margin-bottom: 2rem;
  }
  .image {
    box-shadow: ${(props) => props.theme.lightShadow};
  }

  .info {
    display: flex;
    flex-wrap: wrap;
  }
  .info p {
    display: flex;
    align-items: center;
    margin-right: 2rem;
    text-transform: capitalize;
  }
  .icon {
    color: ${(props) => props.theme.primaryColor};
    font-size: 1.4rem;
    margin-right: 0.5rem;
  }
  .desc {
    line-height: 2;
    margin: 0 auto;
  }

  .journey {
    margin: 3rem 0;
  }

  @media screen and (min-width: 992px) {
    .journey,
    .desc {
      width: 70vw;
    }
  }

  @media screen and (min-width: 1200px) {
    .center {
      width: 95vw;
      max-width: 1170vw;
    }
    .images {
      grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
      grid-column-gap: 50px;
    }
  }
`

export default ArtworkWrapper
