/* ------------------------- External Dependencies -------------------------- */
import { connect } from 'react-redux';
import { compose, lifecycle, withProps } from 'recompose'
/* ------------------------- Internal Dependencies -------------------------- */
import WalletGeneratedDisplay from 'assimilation/display/ethers/EthersWalletGeneratedDisplay'
import { fromEthers } from 'assimilation/symbiosis/selectors'

import ethers from 'assimilation/symbiosis/ethers/actions'
/* ---------------------------- Module Package ------------------------------ */
const defaultProps = withProps(props=>({
  providerName: 'Infura'
}))
const queryLifecycle = lifecycle(
{
  componentDidMount()
  {
    this.props.ethersWalletCreateRandomRequest({
      metadata: {
        delta: `wallet|random`
      }
    })
  }
})
const mapStateToProps = (state, props) => ({
    data: fromEthers.getDeltaData(state,  `wallet|random`)
  }
)

const mapDispatchToProps = (dispatch, props) => ({
  ethersWalletCreateRandomRequest: ()=>dispatch(ethers.walletGenerateRandom('REQUEST')(
    null,
    {
      delta: `wallet|random`
    },
    
    )),
})

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  queryLifecycle,
  defaultProps
)(WalletGeneratedDisplay);