import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import SEO from '../components/SEO';

const sliceStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 4rem;
  color: blue;
`;

export default function SliceMasters({ data: { yunkman } }) {
  return (
    <>
      <SEO title={yunkman.name} image={yunkman.image?.asset?.src} />
      <sliceStyle>
        <p>{yunkman.name}</p>
        <Img fluid={yunkman.image.asset.fluid} />
        <p>{yunkman.description}</p>
      </sliceStyle>
    </>
  );
}

export const query = graphql`
  query($slug: String!) {
    yunkman: sanityPerson(slug: { current: { eq: $slug } }) {
      name
      id
      description
      slug {
        current
      }
      image {
        asset {
          fluid(maxWidth: 1000, maxHeight: 750) {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
`;
