import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider/><br/>
    <SectionTitle>Tecnologias</SectionTitle>
    <SectionText>
    Me especializo en un extenso rango de tecnologías, con el objetivo de dar el mejor servicio posible, desde el front-end hasta el back-end. 
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" />
          <ListContainer>
            <ListTitle>Front-end</ListTitle>
            <ListParagraph>
              Experiencia con <br/>
              React.js<br/>Next.js<br/>Vue.js<br/>y librerias de diseño de todo tipo<br/> 
            </ListParagraph>
          </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Back-end</ListTitle>
          <ListParagraph>
            Experiencia con <br/>
            Node.js<br/>APIS Y arquitectura Rest<br/>Solidity<br/>y Bases de datos<br/> 
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiZend size="3rem" />
        <ListContainer>
          <ListTitle>Diseño</ListTitle>
          <ListParagraph>
            Experiencia con <br/>
            Figma<br/> Y Canvas 
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
