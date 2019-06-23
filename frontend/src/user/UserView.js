import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import InformationStep from './InformationStep'
import ProfileStep from './ProfileStep'
import { withRouter } from 'react-router-dom'
import Wizard from './../commons/components/Wizard'
import { Grid, Paper, createStyles } from '@material-ui/core'
import { grey } from '@material-ui/core/colors'

const steps = [
    {
        label: 'Perfil',
        path: '/profile',
        component: ProfileStep,
    },  
    {
        label: 'Informações gerais',
        path: '/info',
        component: InformationStep,
    },
]

const styles = createStyles({
    root: {
        backgroundColor: grey[100],
    },
    page: {
        minHeight: '100vh',
        padding: '0 20px',
    },
    wizard: {
        height: '100%',
    }
})

class View extends React.Component {

    render() {
        return (
            <div style={styles.root}>
                <Grid container justify="center">
                    <Grid item xs={6}  style={styles.page} component={Paper} square elevation={2}>
                        <Wizard
                            steps={steps}
                            url={this.props.match.url}
                            current={this.props.current}
                            style={styles.wizard}
                        />
                    </Grid>
                </Grid>
            </div>
        )
    }

}

View.propTypes = {
    current: PropTypes.number.isRequired,
}

const mapStateToProps = state => ({
    current: state.user.step,
})


export default withRouter(connect(
    mapStateToProps
)(View))