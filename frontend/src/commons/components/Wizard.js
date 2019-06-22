import React from 'react'
import PropTypes from 'prop-types'
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'
import Grid from '@material-ui/core/Grid'
import { Route } from 'react-router-dom'
import { Paper, createStyles } from '@material-ui/core'

const styles = createStyles({
    wizard: {
        minHeight: '100vh',
    },
    stepper: {
        height: '15%',
    },
    content: {
    }
})

export default class Wizard extends React.Component {

    render() {
        return (
            <Grid container spacing={16} component={Paper} square elevation={2} style={styles.wizard}>
                <Grid item xs={12} sm={12} md={12} style={styles.stepper}>
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
                <Grid item xs={12} style={styles.content}>
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