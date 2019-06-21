import React from 'react'
import Grid from '@material-ui/core/Grid'
import * as C from '../commons/components'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import * as Actions from './UserActions'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'

class ProfileStep extends React.Component {

    componentWillMount() {
        this.props.loadProfiles()
    }

    render() {
        return (
            <Grid container justify="flex-end" direction="row" spacing={16}>
                {this.props.items.map(profile => (
                    <Grid item key={profile.id} xs={4}>
                        <C.ProfileCard
                            key={profile.id}
                            label={profile.dsPerfil}
                            icon={profile.dsIcon}
                            selected={profile.id === this.props.selected}
                            onClick={() => this.props.onProfileClicked(profile.id)}
                        />
                    </Grid>
                ))}
                <Grid item xs={12}>
                    <Grid container spacing={8}>
                        <Grid item xs={6}>
                            <Button
                                variant="outlined"
                                size="large"
                                fullWidth
                                component={Link}
                                to={this.props.match.url.replace('/user/profile', '/login')}
                            >
                                Cancelar</Button>
                        </Grid>
                        <Grid item xs={6}>
                            <Button color="primary"
                                variant="contained"
                                size="large"
                                fullWidth
                                component={Link}
                                onClick={() => this.props.next()}
                                to={this.props.match.url.replace('/profile', '/info')}
                            >
                                Avançar</Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

ProfileStep.defaultProps = {
    items: [],
}

ProfileStep.propTypes = {
    selected: PropTypes.number,
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            icon: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
        })
    )
}

const mapStateToProps = state => ({
    selected: state.user.profileSelected,
    items: state.user.profiles,
})

const mapDispatchToProps = dispatch => ({
    onProfileClicked: (id) => {
        dispatch(Actions.selectProfile(id))
    },
    loadProfiles: () => {
        dispatch(Actions.loadProfiles())
    },
    next: () => {
        dispatch(Actions.next())
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProfileStep)