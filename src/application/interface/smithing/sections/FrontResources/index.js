/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
/* ------------------------- Internal Dependencies -------------------------- */
import {
  Flex, Box, 
  Heading, Paragraph, Section, HorizontalRule
} from 'atomic'

import UportCredentialsRequest from 'assimilation/fetching/uport/UPortCredentialsRequest'
import UPortAttestCredentialsRequest from 'assimilation/fetching/uport/UPortAttestCredentialsRequest'
import UPortAttestIdentityForm from 'assimilation/fetching/uport/UPortAttestIdentityForm'
import UPortAttestAddressForm from 'assimilation/fetching/uport/UPortAttestAddressForm'
/* ------------------------------- Component -------------------------------- */
export default props =>
<Section color='charcoal'>
<Flex w={1} >
    <Box color='white' gradient='purple' p={20} w={[1,0.333]} >
      <Heading f={[5,6]}>
        uPort
      </Heading>
      <Flex >
        <Paragraph f={[0]}>
          <a href="https://www.uport.me/" rel="noopener noreferrer" target="_blank">Website | </a> 
          <a href="https://twitter.com/uport_me" rel="noopener noreferrer" target="_blank">Twitter | </a>
          <a href="https://developer.uport.me/overview.html" rel="noopener noreferrer" target="_blank">Documentation</a> 
        </Paragraph>
      </Flex>
      <HorizontalRule bi='crimson' />
      <Paragraph f={[1]}>
        uPort is an interoperable identity network for a secure, private, decentralized web.
      </Paragraph>
  
      <Heading level={[3]} f={[4,5]} mt={25} ta='center' >
        Credential Request
      </Heading>
      <HorizontalRule bi='crimson' />
      <Box ta='center' >
        <UportCredentialsRequest/>
      </Box>
  
      <Heading level={[3]} f={[4,5]} mt={150} ta='center' >
        Serverless Request
      </Heading>
      <HorizontalRule bi='crimson' />
      <Box>
        <UPortAttestCredentialsRequest/>
      </Box>
      
      <Heading level={[3]} f={[4,5]} mt={150} ta='center' >
        Identity Attestment Form
      </Heading>
      <HorizontalRule bi='crimson' />
      <Box>
        <UPortAttestIdentityForm/>
      </Box>
  
      <Heading level={[3]} f={[4,5]} mt={150} ta='center' >
        Address Attestment Form
      </Heading>
      <HorizontalRule bi='crimson' />
      <Box>
        <UPortAttestAddressForm/>
      </Box>
    </Box>

  <Box color='white' gradient='red' p={20} w={[1,0.333]} >
    <Heading f={[5,6]}>
      Infura
    </Heading>
    <Flex >
      <Paragraph f={[0]}>
        <a href="https://www.uport.me/" rel="noopener noreferrer" target="_blank">Website | </a> 
        <a href="https://twitter.com/uport_me" rel="noopener noreferrer" target="_blank">Twitter | </a>
        <a href="https://developer.uport.me/overview.html" rel="noopener noreferrer" target="_blank">Documentation</a> 
      </Paragraph>
    </Flex>
    <HorizontalRule bi='crimson' />
  </Box>
  <Box color='white' gradient='blue' p={20} w={[1,0.333]} >
    <Heading f={[5,6]}>
      IPFS
    </Heading>
    <Flex >
      <Paragraph f={[0]}>
        <a href="https://www.uport.me/" rel="noopener noreferrer" target="_blank">Website | </a> 
        <a href="https://twitter.com/uport_me" rel="noopener noreferrer" target="_blank">Twitter | </a>
        <a href="https://developer.uport.me/overview.html" rel="noopener noreferrer" target="_blank">Documentation</a> 
      </Paragraph>
    </Flex>
    <HorizontalRule bi='crimson' />
  </Box>
</Flex>
</Section>
