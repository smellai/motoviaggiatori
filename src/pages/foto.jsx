import React from 'react'
import styled from '@emotion/styled'
import {css} from '@emotion/core'
import Layout from '../components/Layout'
import Card from '../components/Card'
import SEO from '../components/seo'
import InstagramFeed from '../components/InstagramFeed'
import CTA from '../components/CTA'
import {Instagram} from '../components/SocialLinks'

const CTAWrapper = styled.p`
  padding: 2rem 0 1rem;
  text-align: center;
`;

const FotoPage = () => (
  <Layout>
    <SEO title="Foto" description="Le ultime foto dal nostro feed Instagram" />
    <Card>
      <div className="content">
        <h1>Foto</h1>
        <p>
          Le ultime foto dal nostro feed <a
            href="https://instagram.com/motoviaggiatori"
            target="blank"
            rel="noopener noreferrer"
          >Instagram</a>
        </p>
        <InstagramFeed />
        <CTAWrapper>
          <CTA
            href="https://instagram.com/motoviaggiatori"
            target="blank"
            rel="noopener noreferrer"
          >
            <Instagram css={css`
              height: 1.5rem;
              height: 1.5rem;
              margin-bottom: -0.3rem!important;
              margin-right: .5rem;
            `} />
            Seguici su Instagram
          </CTA>
        </CTAWrapper>
      </div>
    </Card>
  </Layout>
)

export default FotoPage;