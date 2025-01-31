import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/seo'
import Card from '../components/Card'
import PagedPosts from '../components/PagedPosts'
import DangerousHTML from '../components/DangerousHTML'

function TagTemplate({ data }) {
  const currentTag = data.markdownRemark;

  return (
    <Layout>
      <SEO title={currentTag.frontmatter.name} description={currentTag.excerpt} />
      <Card>
        <div className="content">
          <h1>{currentTag.frontmatter.name}</h1>
          <DangerousHTML html={ currentTag.html } />
        </div>
      </Card>
      <PagedPosts posts={data.allMarkdownRemark.edges} />
    </Layout>
  )
}

export default TagTemplate

export const pageQuery = graphql`
  query TagBySlug($slug: String!) {
    markdownRemark(frontmatter: {slug: {eq: $slug}}) {
      html
      excerpt
      frontmatter {
        name
      }
    }
    allMarkdownRemark(
      filter: {
        fields: {sourceInstanceName: {eq: "post"}},
        frontmatter: { tags: { elemMatch: { frontmatter:{slug: {eq: $slug}}}}}
      }
      sort: {
        fields: frontmatter___date
        order: DESC
      }
    ) {
      edges {
        node {
          ...PostPreviewData
        }
      }
    }
  }
`