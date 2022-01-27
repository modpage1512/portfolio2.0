import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkTitle>Email: Pacheco1512@gmail.com</LinkTitle>
        <LinkItem href="mailto:pacheco1512@gmail.com">Contactame por email</LinkItem>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
        <Slogan>La imaginacion es tu limite</Slogan>
        </CompanyContainer>
          <SocialIcons href="http://github.com">
          <AiFillGithub size="3rem"/>
        </SocialIcons>
        <SocialIcons href="http://likedin.com">
          <AiFillLinkedin size="3rem"/>
        </SocialIcons>
        <SocialIcons href="http://instagram.com">
          <AiFillInstagram size="3rem"/>
        </SocialIcons>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
