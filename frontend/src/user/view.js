import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'
import Grid from '@material-ui/core/Grid'
import InformationStep from './informations'

const steps = ['Perfil', 'Informações gerais']

class View extends React.Component {

    render() {
        return (
            <div>
                <Grid container>
                    <Grid item xs={12} md={12} sm={12} lg={12}>
                        <Stepper activeStep={this.props.current}>
                            {steps.map((label, index) => {
                                return (
                                    <Step key={index}>
                                        <StepLabel>{label}</StepLabel>
                                    </Step>
                                )
                            })}
                        </Stepper>
                    </Grid>
                    <Grid item xs={12}>
                        <InformationStep/>
                    </Grid>
                </Grid>
            </div>
        )
    }

}

View.propTypes = {
    current: PropTypes.number.isRequired
}

const mapStateToProps = state => ({
    current: state.user.step
})

const mapDispatchToProps = dispatch => ({
    toggleTodo: id => {
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(View)