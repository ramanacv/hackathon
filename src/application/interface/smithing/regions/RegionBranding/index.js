/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
/* ------------------------- Internal Dependencies -------------------------- */
import Flex from 'atoms/Flex'
import Absolute from 'atoms/Absolute'
import Box from 'atoms/Box'
import Heading from 'atoms/Heading'
import Link from 'atoms/Link'

import DrawerOpen from 'containers/drawer/DrawerOpen'

/* ------------------------------- Component -------------------------------- */
export default props =>
<Flex>
  <Absolute
    bottom
    top
    left
    height={1}
    w={[1,0.1]}
  >
  
  </Absolute>
  <Box w={[1]}>
    <Flex
    direction={['column', 'row']} align={"stretch"} justify="center"
    bs={[3]} 
    height={'60px'}
    color={['charcoal']}
    pos='relative'
    >
      <Flex align="center" justify="left" w={[1, 1, 0.2]} pl={[15]} py={[7]} direction={['row']} >
        <Link to="/">
          <Heading color={'white'} level={4} margin={'0'} fontSize={[3,4]} fontWeight={'100'}>enigma</Heading>
        </Link>
      </Flex>
      
      <Flex align="center" w={[1, 1, 0.40]} justify="flex-start" display={['none', 'none', 'Flex']} py={[15]} >

      </Flex>

      <Flex align="center"  pr={[null, null, 15]} py={[5, 5, 'inherit']} w={[1, 1, 0.35]}>

      </Flex>
      <Flex align="center" justify='center' py={[10]} color='white' w={[1, 1, 0.1]} textAlign="center">
        <DrawerOpen>
          <Heading f={[2]} level={[4]} fw={300} ><a>menu</a></Heading>
        </DrawerOpen>
      </Flex>
    
  </Flex>
  </Box>


</Flex>