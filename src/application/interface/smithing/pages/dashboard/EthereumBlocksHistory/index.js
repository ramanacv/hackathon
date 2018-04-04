/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
/* ------------------------- Internal Dependencies -------------------------- */

/*---*--- Atoms ---*---*/
import {
  Flex, Box
} from 'atomic'

/*---*--- Containers ---*---*/

import EthersBlockchainBlock from 'assimilation/fetching/ethers/EthersBlockchainBlock'

/* ------------------------------- Component -------------------------------- */
export default props =>
<Box>
  <Flex>
    <EthersBlockchainBlock blockNumber={1} foundry='block' styled={{w:0.5}} />
    <EthersBlockchainBlock blockNumber={2} foundry='block' styled={{w:0.5}} />
  </Flex>
  <EthersBlockchainBlock blockNumber={3} foundry='tx' />
</Box>