/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import styled from 'styled-components'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


import { rhythm } from "../utils/typography"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author
          social {
            twitter
          }
        }
      }
    }
  `)

  const Icon = styled.a`
    color: black;
    box-shadow: none;
    margin: 0.5em;
    font-size: 1.5em;
    :hover {
      color: #ff8800;
    }
  `

  const { author, social } = data.site.siteMetadata
  return (
    <div>
      <div
        style={{
          display: `flex`,
          marginBottom: rhythm(0),
        }}
      >
        <Image
          fixed={data.avatar.childImageSharp.fixed}
          alt={author}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            minWidth: 50,
            borderRadius: `100%`,
          }}
          imgStyle={{
            borderRadius: `50%`,
          }}
        />
        <p>
          ¡Hola! Soy <a href="/about"><strong>{author}</strong></a>, desarrollador junior argentino.
          {` `}
          <a href={`https://twitter.com/${social.twitter}`}>
            ¿Y si me seguís en Twitter?
          </a>
        </p>
      </div>
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(1),
        }}
      >
      <p>
        <Icon
          href='https://github.com/amuroBosetti'>
            <FontAwesomeIcon icon={ faGithub } />
        </Icon>
        <Icon
          href='https://www.linkedin.com/in/mauro-bosetti/'>
            <FontAwesomeIcon icon={ faLinkedin } />
        </Icon>
        <Icon
          href='mailto:amuro.bosetti@gmail.com'>
            <FontAwesomeIcon icon={ faEnvelope } />
        </Icon>

      </p>
      </div>
    </div>
  )
}

export default Bio
