/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
/* ------------------------- Internal Dependencies -------------------------- */
/*---*--- Atoms ---*---*/
import {
  Box, 
  Link, List
} from 'atomic'
import contracts from 'contracts'

/* ------------------------------- Component -------------------------------- */
export default props =>
<Box p={20} >
  <List>
  {
    Object.keys(contracts).map(i=>
    <Link
      to={`/dashboard/smart-contract/${contracts[i].contractName}`}
      children={contracts[i].contractName}
    />
  )}
  </List>

</Box>