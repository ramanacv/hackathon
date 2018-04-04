/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
/* ------------------------- Internal Dependencies -------------------------- */
import { hacker } from 'assets/images'
import { logoUport, enigmaBoxWhite } from 'assets/graphics'
import { 
  Flex, Box, Absolute,
  BackgroundImage, BackgroundGradient,
  Button, Container, Heading, Image, Link, Paragraph, Section, Span, SVG,
  Blockquote, HorizontalRule, Shape, Responsive 
} from 'atomic'

import UportCredentialsRequest from 'assimilation/fetching/uport/UPortCredentialsRequest'
import UserProfile from 'containers/user/UserProfile'
import MacbookDisplay from 'components/sentient/MacbookDisplay'

import hackathonDemo from './hackathon.gif'
/* ------------------------------- Component -------------------------------- */
export default props => 
<Section {...props} px={[20,40]}color='white' pos='relative' >
  <Container w={[1200]} >
    <Flex direction={['column', 'row']}  mh={['80vh']} align='center' justify={['center']} >
      <Box w={[1,0.5]} color="white" >
        <Heading level={[3]} f={[6]}>
          <strong>Win Hackathons</strong>
        </Heading>
        <Heading fontSize={[4]} fontWeight={[300]} mb={10} textShadow='darkHazy' >
          Launch Decentralized Solutions Today
        </Heading>
        <Paragraph fontSize={[2]} fontWeight={[300]} mb={10} textShadow='darkHazy' >
          Deploy the Enigma Box to easily kickstart a decentralized application hackathon project: uPort, Truffle, Infura, IPFS, ENS, and more on the way...
        </Paragraph>
        <Flex direction={'row'} w={1} >
          <Button mr={15}>Boilerplate Code</Button>
          <Button gradient='red'>Community Channel</Button>
        </Flex>
      </Box>
      <Box w={[1, 0.5]} >
        <Box color="white" ta='right' w={[1, '140%', '170%']}>
          <MacbookDisplay>
            <Image src={hackathonDemo}  />
          </MacbookDisplay>
        </Box>
      </Box>
    </Flex>
  </Container>
</Section>
