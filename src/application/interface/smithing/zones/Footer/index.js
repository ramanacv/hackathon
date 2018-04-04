/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
/* ------------------------- Internal Dependencies -------------------------- */
import { graphics } from 'assets'
import { latptop } from 'assets/images'
import {
  Flex, Box, 
  Heading, Image, Paragraph, Link, Span, Container, Section,
  BackgroundImage, BackgroundGradient
} from 'atomic'
/* ------------------------------- Component -------------------------------- */
export default props =>
<Section
  color='white'
  gradient='purple'
  py={[30,60,120]}
>
<BackgroundImage src={latptop} o={0.25} />
  <Flex align='center' justify='center' direction='column' w={[1]} h={'70vh'}  >
    <Paragraph f={[4]}>Open Source The World</Paragraph>
    <Flex align='center' justify='center' direction='column' >
      <a href="https://twitter.com/kamescg" rel="noopener noreferrer" target="_blank"> @uport_me</a>
    </Flex>
  </Flex>
</Section>
