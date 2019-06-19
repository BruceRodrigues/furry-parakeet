import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import InformationStep from './InformationStep'
import ProfileStep from './ProfileStep'
import { withRouter } from 'react-router-dom'
import Wizard from './../commons/components/Wizard'
import { Grid } from '@material-ui/core';

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

class View extends React.Component {

    render() {
        return (
            <div>
                <Grid container justify="center">
                    <Grid item xs={6}>
                        <Wizard
                            steps={steps}
                            url={this.props.match.url}
                            current={this.props.current}
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