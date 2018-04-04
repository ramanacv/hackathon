/* ------------------------- External Dependencies -------------------------- */
import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose'
/* ------------------------- Internal Dependencies -------------------------- */
import { fromUport } from 'assimilation/symbiosis/selectors'
import { uPortGetAttestCredentialsRequest } from 'assimilation/symbiosis/actions'
import Component from './Component'
/* ---------------------------- Module Package ------------------------------ */
/*-* Recompose *-*/
const QueryLifecycle = lifecycle(
{
  componentDidMount()
  {

  },
  componentDidUpdate(prevProps)
  {

  }
})

/*-* Redux *-*/
const mapStateToProps = (state, props) => ({
    data: fromUport.getDeltaData(state, `credentials`),
    status: fromUport.getDeltaStatus(state, `credentials`)
  }
)

const mapDispatchToProps = (dispatch, props) => ({
  uPortGetAttestCredentialsRequest: (address)=>  {dispatch(uPortGetAttestCredentialsRequest({
    payload: {
      sub: 'Ox' + address,
      claim: {'account': 'active'}
    },
    metadata: {
      delta: 'attestCredentials'
    }
  }))
  }
})

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  QueryLifecycle,
)(Component);