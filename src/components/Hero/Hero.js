import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Bienvenido a <br/>
        Mi portafolio personal
      </SectionTitle>
      <SectionText>
        Programador full-stack, la imaginación es el limite y el limite te lo impones tu mismo.
      </SectionText>
      <Button onClick={() => window.location="https://mail.google.com/mail/u/0/?ogbl#inbox?compose=GTvVlcSDbFPmkQNFgzrSWBJBpzkSfqbpzKnBJPrRPSvDfpmqkctZfTpnJXBwZpGFTwfpNSxdXcdvV"}>Contáctame</Button>
    </LeftSection>
  </Section>
);

export default Hero;