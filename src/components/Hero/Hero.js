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
      <Button onClick={() => window.location="https://google.com"}>Saber más</Button>
    </LeftSection>
  </Section>
);

export default Hero;