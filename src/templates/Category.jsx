import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/seo'
import Card from '../components/Card'
import PagedPosts from '../components/PagedPosts'
import DangerousHTML from '../components/DangerousHTML'

function CategoryTemplate({ data }) {
  const currentCategory = data.markdownRemark;

  return (
    <Layout>
      <SEO title={currentCategory.frontmatter.name} description={currentCategory.excerpt} />
      <Card>
        <div className="content">
          <h1>{currentCategory.frontmatter.name}</h1>
          <DangerousHTML html={ currentCategory.html } />
        </div>
      </Card>
      <PagedPosts posts={data.allMarkdownRemark.edges} />
    </Layout>
  )
}

export default CategoryTemplate

export const pageQuery = graphql`
  query CategoryBySlug($slug: String!) {
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
        frontmatter: { categories: { elemMatch: { frontmatter:{slug: {eq: $slug}}}}}
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