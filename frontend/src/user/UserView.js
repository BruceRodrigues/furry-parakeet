import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import InformationStep from './InformationStep'
import ProfileStep from './ProfileStep'
import { withRouter } from 'react-router-dom'
import Wizard from './../commons/components/Wizard'

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
                <Wizard
                    steps={steps} 
                    url={this.props.match.url}
                    current={this.props.current}
                />
            </div>
        )
    }

}

View.propTypes = {
    current: PropTypes.number.isRequired,
    backButtonVisible: PropTypes.bool.isRequired,
    nextButtonVisible: PropTypes.bool.isRequired,
    finishButtonVisible: PropTypes.bool.isRequired,
}

const mapStateToProps = state => ({
    current: state.user.step,
    backButtonVisible: state.user.backButton,
    nextButtonVisible: state.user.nextButton,
    finishButtonVisible: state.user.finishButton,
})

const mapDispatchToProps = dispatch => ({
    onSaveClicked: id => {
    }
})

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(View))