import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'

const steps = ['Perfil', 'Informações gerais']

class View extends React.Component {

    render() {
        return (
            <div>
                <Stepper activeStep={this.props.current}>
                    {steps.map((label, index) => {
                        return (
                            <Step key={index}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        )
                    })}
                </Stepper>
            </div>
        )
    }

}

View.propTypes = {
    current: PropTypes.number.isRequired
}

const mapStateToProps = state => ({
    current: state.step
})

const mapDispatchToProps = dispatch => ({
    toggleTodo: id => {}
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(View)