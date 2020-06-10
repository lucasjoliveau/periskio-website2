import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Fade from 'react-reveal/Fade';

import Text from 'common/src/components/Text';
import Input from 'common/src/components/Input';
import Image from 'common/src/components/Image';
import Button from 'common/src/components/Button';
import Heading from 'common/src/components/Heading';
import Container from 'common/src/components/UI/Container';
import Section, {
  ContentWrapper,
  BannerContent,
  Subscribe,
  SponsoredBy,
  ImageGroup,
} from './banner.style';

const Banner = () => {
  const images = useStaticQuery(graphql`
    query {
      paypal: file(relativePath: { eq: "image/agencyDigital/paypal.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      google: file(relativePath: { eq: "image/agencyDigital/google.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      dropbox: file(relativePath: { eq: "image/agencyDigital/dropbox.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <Section id="home">
      <Container width="1440px">
        <ContentWrapper>
          <BannerContent>
            <Fade up delay={100}>
              <Heading
                as="h1"
                content="A Creative way to grow your Exciting Business ideas"
              />
            </Fade>
            <Fade up delay={200}>
              <Text
                className="banner-caption"
                content="Get your blood tests delivered at let home collect sample from the victory of the managements that supplies best design system guidelines ever."
              />
            </Fade>
            <Fade up delay={300}>
              <Subscribe>
                <Input
                  inputType="email"
                  placeholder="Enter Email Address"
                  iconPosition="left"
                  aria-label="email"
                />
                <Button title="Subscribe" type="submit" />
              </Subscribe>
            </Fade>
            <Fade up delay={400}>
              <SponsoredBy>
                <Text className="sponsoredBy" content="Sponsored by:" />
                <ImageGroup>
                  <Image
                    src={images.paypal.childImageSharp.fluid.src}
                    alt="Paypal"
                  />
                  <Image
                    src={images.google.childImageSharp.fluid.src}
                    alt="Google"
                  />
                  <Image
                    src={images.dropbox.childImageSharp.fluid.src}
                    alt="Dropbox"
                  />
                </ImageGroup>
              </SponsoredBy>
            </Fade>
          </BannerContent>
        </ContentWrapper>
      </Container>
    </Section>
  );
};

export default Banner;
