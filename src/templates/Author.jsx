import React, { Component } from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/seo'
import Card from '../components/Card'
import PagedPosts from '../components/PagedPosts'

import AuthorBox from '../components/AuthorBox';

class AuthorTemplate extends Component {
  render() {
    const currentAuthor = this.props.data.markdownRemark;

    return (
      <Layout>
        <SEO
          title={currentAuthor.frontmatter.name}
          description={currentAuthor.excerpt}
          image={ currentAuthor.frontmatter.avatar ? currentAuthor.frontmatter.avatar.publicURL : null }
        />
        <Card>
         <AuthorBox author={currentAuthor} />
        </Card>
        <PagedPosts posts={this.props.data.allMarkdownRemark.edges} />
      </Layout>
    )
  }
}

export default AuthorTemplate

export const pageQuery = graphql`
  query AuthorBySlug($slug: String!) {
    markdownRemark(frontmatter: {slug: {eq: $slug}}) {
      html
      excerpt
      frontmatter {
        name
        avatar {
          publicURL
          childImageSharp {
            fluid(
              maxWidth: 300,
              maxHeight: 300,
              cropFocus: CENTER
            ) {
              src
              srcSet
              aspectRatio
              sizes
            }
          }
        }
      }
    }
    allMarkdownRemark(filter: {
      fields: {sourceInstanceName: {eq: "post"}},
      frontmatter: { author: { frontmatter:{slug: {eq: $slug}}}}
    }) {
      edges {
        node {
          frontmatter {
            slug
            title
            excerpt
            featured_image {
              publicURL
              childImageSharp {
                wide: fluid(
                  maxWidth: 600,
                  maxHeight: 350,
                  cropFocus: CENTER
                ) {
                  src
                  srcSet
                  aspectRatio
                  sizes
                }
              }
            }
            categories {
              frontmatter {
                name
                slug
              }
            }
            author {
              frontmatter {
                name
                slug
              }
            }
          }
        }
      }
    }
  }
`