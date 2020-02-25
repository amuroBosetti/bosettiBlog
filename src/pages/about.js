import React from "react"
import { graphql } from "gatsby"

import Image from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from 'styled-components'

import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { rhythm } from "../utils/typography"

//DUPLICATED CODE
const Icon = styled.a`
  color: black;
  box-shadow: none;
  margin: 0.5em;
  font-size: 1.5em;
  :hover {
    color: #ff8800;
  }
`

const AboutPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Sobre el autor" />
      <h3 style={{color:'#ff8800',}}> desarrollador. viajero. escribidor amateur. nerd a tiempo completo. </h3>


      <p>Hola! Gracias por pasarte por mi blog. Me llamo Mauro. Me dedico a desarrollar y reflexionar al respecto.
      Tambien me gusta jugar juegos de rol - y pintar piezas para estos-, leer y viajar. Muchos de estos intereses van a aparecer en este blog sin planificarlo, simplemente
      porque me gusta y disfruto compartirlo. Intentare mantener las cosas lo mas on topic que pueda, lo prometo...</p>
      <Image
        title='Yo, disfrutando de unos deliciosos tacos en La Terraza'
        fixed={data.avatar.childImageSharp.fixed}
        alt="Yo, disfrutando de unos deliciosos tacos en La Terraza"
        style={{
          float: "left",
          marginRight:rhythm(0.5)
        }}
      />
      <p> ¿Que cosas hice? Estoy estudiando Licenciatura en Informatica, mientras sigo desarrollando por mi parte y buscando un buen trabajo en el area. Previo a este blog,
      hice un Bootcamp de desarrollo web, ademas de algunos pogramitas de juguete para ir aprendiendo.</p>
      <p>Te invito a mandarme dudas, ideas, puteos y todo lo que quieras por Twitter, y ver que hago en mis varias redes / plataformas / sitios web donde uno se hace una cuenta.</p>
      <p>
        <Icon
          href="https://twitter.com/itsamuro">
            <FontAwesomeIcon icon={ faTwitter }/>
        </Icon>
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
    </Layout>
  )
}

export default AboutPage

export const pageQuery = graphql`
  query {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 300, height: 300) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`
