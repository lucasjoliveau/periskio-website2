import React from 'react';
import PropTypes from 'prop-types';
import Box from 'common/src/components/Box';
import Text from 'common/src/components/Text';
import Heading from 'common/src/components/Heading';
import Button from 'common/src/components/Button';
import Image from 'common/src/components/Image';
import Container from 'common/src/components/UI/Container';

import PartnerSectionWrapper from './partner.style';
import Partner from 'common/src/assets/image/saasClassic/partner.png';

const PartnerSection = ({
  row,
  col,
  title,
  description,
  button,
  textArea,
  imageArea,
}) => {
  return (
    <PartnerSectionWrapper>
      <Container>
        <Box {...row}>
          <Box {...col} {...imageArea}>
            <Image src={Partner} alt="Domain Image" />
          </Box>
          <Box {...col} {...textArea}>
            <Heading
              {...title}
              content="Meet our business partner who work behind the scene"
            />
            <Text
              {...description}
              content="You can trust us for any kind of services and some of the world class companies have also trusted us.So have faith and keep in touch with us ."
            />
            <Box>
              <a href="#1">
                <Button {...button} title="LEARN MORE" />
              </a>
            </Box>
          </Box>
        </Box>
      </Container>
    </PartnerSectionWrapper>
  );
};

PartnerSection.propTypes = {
  row: PropTypes.object,
  col: PropTypes.object,
  title: PropTypes.object,
  description: PropTypes.object,
  button: PropTypes.object,
  textArea: PropTypes.object,
  imageArea: PropTypes.object,
};

PartnerSection.defaultProps = {
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-15px',
    mr: '-15px',
    alignItems: 'center',
  },
  imageAreaRow: {
    flexDirection: 'row-reverse',
  },
  col: {
    pr: '15px',
    pl: '15px',
  },
  textArea: {
    width: ['100%', '100%', '55%', '50%', '42%'],
  },
  imageArea: {
    width: ['100%', '100%', '45%', '50%', '58%'],
    mb: ['40px', '40px', '0', '0', '0'],
  },
  title: {
    fontSize: ['26px', '30px', '30px', '48px', '48px'],
    fontWeight: '400',
    color: '#fff',
    letterSpacing: '-0.025em',
    mb: '15px',
    lineHeight: '1.25',
  },
  description: {
    fontSize: '16px',
    color: '#ffe2e2',
    lineHeight: '1.75',
    mb: '33px',
  },
  button: {
    type: 'button',
    fontSize: '14px',
    fontWeight: '600',
    borderRadius: '4px',
    pl: '22px',
    pr: '22px',
    colors: 'secondaryWithBg',
    minWidth: '150px',
  },
};

export default PartnerSection;
