import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Icon from '@material-ui/core/Icon'
import PropTypes from 'prop-types'

import './components.css';

export class ProfileCard extends React.Component {

    render() {
        return (
            <div className={"profile-card " + (this.props.selected ? "selected" : "")} onClick={this.props.onClick}>
                <Card>
                    <CardContent>
                        <Icon>{this.props.icon}</Icon>
                        <Typography>{this.props.label}</Typography>
                    </CardContent>
                </Card>
            </div>
        )
    }
}

ProfileCard.propTypes = {
    selected: PropTypes.bool,
    icon: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
}