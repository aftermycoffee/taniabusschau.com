import React from 'react'
import Layout from '../components/Layout'
import SearchEngineOptimiser from '../components/SEO'
import StyledHero from '../components/StyledHero'
import Title from '../components/Title'
import RichTextDisplay from '../components/Common/RichTextDisplay'
import socialIcons from '../constants/social-icons.js'
import { graphql } from 'gatsby'

const BioLayout = ({ data }) => {
  const { artist } = data
  const bio = JSON.parse(artist.artistBio.raw)
  const fbLink = `${socialIcons.facebook.url}${artist.facebook}`
  const igLink = `${socialIcons.instagram.url}${artist.instagram}`
  const twLink = `${socialIcons.twitter.url}${artist.twitter}`
  return (
    <Layout>
      <SearchEngineOptimiser title="About" />
      <StyledHero home image={artist.image} alt={artist.name} />
      <section>
        <Title title="My" subtitle="bio" />
        <div>
          <h2>Hi, I'm {artist.name}</h2>
          <RichTextDisplay json={bio} />
        </div>
      </section>
      <section>
        <div>
          <a href={fbLink}>
            <span>{socialIcons.facebook.icon}</span>
          </a>
        </div>
        <div>
          <a href={igLink}>
            <span>{socialIcons.instagram.icon}</span>
          </a>
        </div>
        <div>
          <a href={twLink}>
            <span>{socialIcons.twitter.icon}</span>
          </a>
        </div>
      </section>
    </Layout>
  )
}

export default BioLayout

export const getBio = graphql`
  query getArtistBio($id: String! = "15jwOBqpxqSAOy2eOO4S0m") {
    artist: contentfulPerson(contentful_id: { eq: $id }) {
      id: contentful_id
      name
      artistBio {
        raw
      }
      facebook
      instagram
      twitter
      image {
        gatsbyImageData
      }
    }
  }
`
