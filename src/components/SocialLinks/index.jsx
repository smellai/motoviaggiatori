import React from 'react'
import PropTypes from 'prop-types'
import { css } from '@emotion/core'
import styled from '@emotion/styled'

import Facebook from './facebook.svg'
import Instagram from './instagram.svg'
import Email from './gmail.svg'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-cotnent: center;
`;

const Link = styled.a`
  display: block;
  border-radius: 7%;
  box-sizing: border-box;

  path {
    fill: white;
  }
`;

const instagramStyle = css`
  background: #E4405F;

  svg {
    margin: 10%;
  }
`

const facebookStyle = css`
  background: #3B5998;

  svg {
    margin: 1px;
  }
`

const mailStyle = css`
  background: #D14836;

  svg {
    margin: 15%;
  }
`

const SocialLinks = ({size, hideMail}) => {
  const iconStyle = {
    height: size,
    width: size,
    margin: size / 8
  };

  return (
    <Wrapper className="social-links">
      <Link
        href="https://instagram.com/motoviaggiatori"
        title="Instagram"
        style={iconStyle}
        css={instagramStyle}
        className="instagram"
      >
        <Instagram />
      </Link>
      <Link
        href="https://facebook.com/motoviaggiatori"
        title="Facebook"
        style={iconStyle}
        css={facebookStyle}
        className="facebook"
      >
        <Facebook />
      </Link>
      { hideMail ? null :
        <Link
          href="mailto:info@motoviaggiatori.it"
          title="Email"
          style={iconStyle}
          css={mailStyle}
          className="email"
        >
          <Email />
        </Link>
      }
    </Wrapper>
  )
}

SocialLinks.propTypes = {
  size: PropTypes.number.isRequired,
  hideMail: PropTypes.bool,
}


SocialLinks.defaultProps = {
  hideMail: false
}

export {
  Facebook,
  Instagram,
  Email
}

export default SocialLinks;