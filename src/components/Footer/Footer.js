import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkTitle>Email: Pacheco1512@gmail.com</LinkTitle>
        <LinkItem href="https://mail.google.com/mail/u/0/?ogbl#inbox?compose=GTvVlcSDbFPmkQNFgzrSWBJBpzkSfqbpzKnBJPrRPSvDfpmqkctZfTpnJXBwZpGFTwfpNSxdXcdvV">Contactame por email</LinkItem>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
        <Slogan>La imaginacion es tu limite</Slogan>
        </CompanyContainer>
        <SocialIcons href="http://github.com/modpage1512">
        <AiFillGithub size="3rem"/>
      </SocialIcons>
      <SocialIcons href="http://likedin.com/mwlite/in/carlos-castillo-738a67119">
        <AiFillLinkedin size="3rem"/>
      </SocialIcons>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
