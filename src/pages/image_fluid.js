import React from "react"
import Img from "gatsby-image"
import Layout from "../components/layout"
import { graphql } from "gatsby"

export const query = graphql`
  query {
    file(
      relativePath: {
        eq: "knupel_72dpi/Boxon_1_0_2015_11_450x300_72_dpi_Stan_le_Punk.jpg"
      }
    ) {
      childImageSharp {
        fixed(width: 200, height: 200) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

export default function Image({ data }) {
  return (
    <Layout>
      <Img
        className="my_image"
        fixed={data.file.childImageSharp.fixed}
        alt="my_image"
      />
    </Layout>
  )
}
