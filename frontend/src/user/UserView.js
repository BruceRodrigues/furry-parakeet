import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'
import Grid from '@material-ui/core/Grid'
import InformationStep from './InformationStep'
import { Route, withRouter } from 'react-router-dom'

const steps = ['Perfil', 'Informações gerais']

class View extends React.Component {

    render() {
        return (
            <div>
                <Grid container justify="center">
                    <Grid item xs={6} md={6} sm={6} lg={6}>
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
                        <Route path={`${this.props.match.url}/info`} component={InformationStep}/>
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
    onSaveClicked: id => {
    }
})

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(View))