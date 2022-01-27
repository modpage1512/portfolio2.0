import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 20, text: 'Proyectos profesionales realizados'},
  { number: 700, text: 'Horas de experiencia realizando proyectos profesionales', },
  { number: 10, text: 'Repos en github', },
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Metricas Personales</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.number}+</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
