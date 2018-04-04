/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
/* ------------------------- Internal Dependencies -------------------------- */
import { images, svg } from 'assets'
import { logoUport, logo, logoUportSmall } from 'assets/graphics'
import {
  Absolute, Box, Container, Flex, Fixed,
  Heading, Image, Paragraph, Link, Span, SVG, Shape,
  BackgroundImage, BackgroundGradient
} from 'atomic'


import { FirestoreList, FirestoreDocument, FirestoreTable, FirestoreFeed } from 'containers'

import Mission from 'smithing/sections/FrontMission'
import Resources from 'smithing/sections/FrontResources'

const techList = [
  {
    name: 'uport',
    description: 'The Decentralized Identity Platform atop the Ethereum Blockchain.',
    gradient: 'purple',
  },
  {
    name: 'Ganache(Truffle)',
    description: 'Easily "spin-up" a local Javascript Blockchain with the Ganache Software.',
    gradient: 'yellow',
  },
  {
    name: 'Infura',
    description: 'Connect to the Ethereum Blockchain and IPFS in seconds.',
    gradient: 'red',
  },
  {
    name: 'IPFS',
    description: 'Connect to the Ethereum Blockchain and IPFS in seconds.',
    gradient: 'blue',
  },
  {
    name: 'Ethers',
    description: 'Connect to the Ethereum Blockchain and IPFS in seconds.',
    gradient: 'blueSky',
  },
  {
    name: 'Metamask',
    description: 'Connect to the Ethereum Blockchain and IPFS in seconds.',
    gradient: 'orange',
  },
]

const TechnologyCard = props =><Flex direction='column' boxShadow={1} h={[200]} mb={25} w={props.widthChildren} >
  <Flex h={0.7} p={15} w={1} align='flex-end' color='white' >
    <BackgroundGradient gradient={props.gradient}/>
    <Heading level={[3]} f={[3]}>
      {props.name}
    </Heading>
    
  </Flex>
  <Box p={20} w={1}>
      <Paragraph f={[0]}>
        {props.description}
      </Paragraph>
  </Box>
</Flex>

/* ------------------------------- Component -------------------------------- */
export default props =>
<Box>
  <Box align='center' justify='center' pt={150} >
      <Container w={[620]} ta='center'>
        <Heading level={[3]} f={[6,7]} color='purple' mb={25} ta='center' >
          Launch a Winning<br/>Hackathon Project
        </Heading>
        <Paragraph f={[1]}>
          Do you want to win? Of course you do! Think of all the amazing ether...<br/>That's why uPort has created the perfect hackathon-in-a-box just for you.
        </Paragraph>
        <Paragraph color='gray' mt={50} f={[1]}>
          <em>Inlucded in this Decentralized Application Boilerplate is the following</em>
        </Paragraph>
      </Container>

      <Container w={[1120]} >
        <Flex justify={'space-between'} wrap='wrap' >
          {
            techList.map(item=><TechnologyCard widthChildren={[1,0.3]} {...item}/>)
          }
        </Flex>
      </Container>
  </Box>
  <Mission/>
  <Resources/>
</Box>