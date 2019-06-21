import React from 'react'
import PropTypes from 'prop-types'
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'
import Grid from '@material-ui/core/Grid'
import { Route } from 'react-router-dom'

export default class Wizard extends React.Component {

    render() {
        return (
            <Grid container direction="column" spacing={16}>
                <Grid item xs={12}>
                    <Stepper activeStep={this.props.current}>
                        {this.props.steps.map((step, index) => {
                            return (
                                <Step key={index}>
                                    <StepLabel>{step.label}</StepLabel>
                                </Step>
                            )
                        })}
                    </Stepper>
                </Grid>
                <Grid item xs={12}>
                    {this.props.steps.map((step) => {
                        return (
                            <Route key={step.path} path={`${this.props.url}${step.path}`} component={step.component} />
                        )
                    })}
                </Grid>
            </Grid>
        )
    }
}

Wizard.defaultProps = {
    steps: [],
    current: 0,
}

Wizard.propTypes = {
    current: PropTypes.number.isRequired,
    url: PropTypes.string.isRequired,
    steps: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            path: PropTypes.string.isRequired,
            component: PropTypes.object.isRequired,
        })
    ).isRequired,
}