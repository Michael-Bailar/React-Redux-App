import React from 'react'
import { connect } from 'react-redux'

import { getMtgData } from '../actions/actions'

const CardForm = props => {

    const handleGetMtgData = e => {
        e.preventDefault();
        props.getMtgData();
    }

    return (
        <>
          {props.isFetchingData ? (
            <div>fetching data...</div>
          ) : (
            <button onClick={handleGetMtgData}>get data</button>
          )}
        </>
      );
}

const mapStateToProps = state => {
    return{
        isFetchingData: state.isFetchingData
    }
}

export default connect(
    mapStateToProps,
    { getMtgData } 
 )(CardForm)