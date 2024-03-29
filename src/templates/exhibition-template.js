import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Title from '../components/Title'
import SearchEngineOptimiser from '../components/SEO'
import StyledHero from '../components/StyledHero'
import PortfolioList from '../components/Portfolio/PortfolioList'
import FactDetailEntry from '../components/Common/FactDetailEntry'
import RichTextDisplay from '../components/Common/RichTextDisplay'
import { DataHeaderStructure } from '../css'

const ExhibitionTemplate = ({ data }) => {
  const {
    name,
    image,
    startDate,
    endDate,
    desc,
    location,
    onlineOnly,
    url,
    myIncludedArtworks,
    spaceType,
  } = data.exhibition
  const description = JSON.parse(desc.raw)
  const itemNodes = Object.entries(myIncludedArtworks).map(([id, prop]) => ({
    id,
    ...prop,
  }))
  const webUrl = (
    <a href={url} target="__ext">
      {url}
    </a>
  )

  return (
    <Layout>
      <SearchEngineOptimiser title={name} description={name} />
      <StyledHero image={image} className="post-image" alt={name} />
      <Title title={name} />
      <DataHeaderStructure>
        {location && <FactDetailEntry fact="Location" detail={location} />}
        {webUrl && <FactDetailEntry fact="Website" detail={webUrl} />}
        {startDate && <FactDetailEntry fact="Start Date" detail={startDate} />}
        {endDate && <FactDetailEntry fact="End Date" detail={endDate} />}
        {onlineOnly && (
          <FactDetailEntry fact="Online?" detail={onlineOnly ? 'Yes' : 'No'} />
        )}
        {spaceType && <FactDetailEntry fact="Space type" detail={spaceType} />}
      </DataHeaderStructure>
      <RichTextDisplay json={description} />
      <Title subtitle="My art on display" />
      <PortfolioList items={itemNodes} type="artwork" />
    </Layout>
  )
}

export const getExhibition = graphql`
  query getExhibition($id: String!) {
    exhibition: contentfulExhibition(contentful_id: { eq: $id }) {
      name
      image {
        gatsbyImageData(
          width: 2500
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
          cropFocus: CENTER
        )
      }
      startDate(formatString: "dddd, Do MMMM YYYY")
      endDate(formatString: "dddd,Do MMMM YYYY")
      desc: description {
        raw
      }
      location
      onlineOnly
      url
      myIncludedArtworks {
        id: contentful_id
        title
        image {
          gatsbyImageData(
            width: 250
            height: 200
            resizingBehavior: PAD
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
            cropFocus: CENTER
          )
        }
        slug
      }
      spaceType
    }
  }
`

export default ExhibitionTemplate
