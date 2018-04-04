/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
/* ------------------------- Internal Dependencies -------------------------- */

/*---*--- Atoms ---*---*/
import {
  Box, 
  Container
} from 'atomic'

/*---*--- Containers ---*---*/
import EthersWalletCreateRandom from 'assimilation/fetching/ethers/EthersWalletCreateRandom'
import EthersWalletGenerateMnemonicCard from 'assimilation/fetching/ethers/EthersWalletGenerateMnemonicCard'

/* ------------------------------- Component -------------------------------- */
export default props =>
<Box>
  <Container w={[0.95]} >
    <EthersWalletCreateRandom/>
    <EthersWalletGenerateMnemonicCard/>
  </Container>
</Box>