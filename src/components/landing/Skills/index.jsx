import React, { useContext } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container, Button } from 'components/common';
import dev from 'assets/illustrations/skills.svg';
import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles';

export const Skills = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper id="about">

      <SkillsWrapper as={Container}>
        
        <Thumbnail>
          <img src={dev} alt="I’m Jakub and I’m a Backend engineer!" />
        </Thumbnail>

        <Details theme={theme}>
          <h1>Hello I'm Jakub ...</h1>
          <p>
            ... and I'm an engineer who loves to code. 
            Since I created my first program, I can't stop thinking about new 
            ideas and how to implement them.
          </p>
          <p>
            I graduated from Poznan University of Technology with a Bachelor
            of Science. I spend a lot of time learning new skills and actively help other people learn software development
            through a variety of help groups and through writing own code.
          </p>
          <p>  
            Besides programming I'm passionate about fighting sports, from
            Bruce Lee and old style Greco-Roman to modern MMA. I really like to hike in mountains, sailing
            and motorcycles.
          </p>
          
          <Button as={AnchorLink} href="#contact">
            Contact me
          </Button>
        </Details>
      </SkillsWrapper>

    </Wrapper>
  );
};
