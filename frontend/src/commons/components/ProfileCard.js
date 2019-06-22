import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Icon from '@material-ui/core/Icon'
import PropTypes from 'prop-types'

import './components.css'
import { CardHeader, createStyles } from '@material-ui/core'
import { grey } from '@material-ui/core/colors';

const styles = createStyles({
    card: {
        height: '400px',
        '&:hover': {
            backgroundColor: 'red',
        }
    },
    header: {
        backgroundColor: grey[100],
        height: '60px',
    },
    icon: {
        fontSize: '5em',
        margin: '20px 0',
    },
    description: {
        lineHeight: '1.2em',
    }
})

export class ProfileCard extends React.Component {

    render() {
        return (
            <div className={"profile-card " + (this.props.selected ? "selected" : "")} onClick={this.props.onClick}>
                <Card style={styles.card}>
                    <CardHeader 
                        title={this.props.label}
                        titleTypographyProps={{align: 'center'}}
                        style={styles.header}
                    />
                    <CardContent>
                        <Icon style={styles.icon}>{this.props.icon}</Icon>
                        <Typography 
                            variant="subtitle1" 
                            color="textSecondary" 
                            style={styles.description}
                        >{this.props.description}
                        </Typography>
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
    description: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
}