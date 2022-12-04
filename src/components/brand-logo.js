import * as React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"
import {
  Box,
  Container,
  Flex,
} from "./ui"

export default function GatsbyContentfulLogo() {
  return (
    <Box width="half">
            {props.image && (
              <GatsbyImage
                alt={props.image.alt}
                image={getImage(props.image.gatsbyImageData)}
              />
            )}
     </Box>
  )
}
export const query = graphql`
  fragment HomepageHeroContent on DataCruiseLogo {
    image {
      id
      gatsbyImageData
      alt
    }
  }
`
