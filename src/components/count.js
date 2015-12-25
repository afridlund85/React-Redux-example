import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import actions from '../actions'

const Count = (props) => {
    const { currentValue, increase, decrease } = props

    return (
        <div>
            <h2>Count</h2>
            <p>Current count: { currentValue }</p>
            <p>
                <button onClick={ increase }>+</button>
                <button onClick={ decrease }>-</button>
            </p>
        </div>
    )
}

Count.propTypes = {
        increase : PropTypes.func.isRequired,
        decrease : PropTypes.func.isRequired
}

const mapStateToProps = (state) => state.count

const mapDispatchToProps = (dispatch) => {
    return {
        increase() {
            dispatch(actions.countIncrease())
        },
        decrease() {
            dispatch(actions.countDecrease())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Count)
