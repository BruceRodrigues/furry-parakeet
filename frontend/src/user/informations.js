import React from 'react'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

class InformationStep extends React.Component {

    render() {
        return (
            <div>
                <Grid container>
                    <Grid item xs={12}>
                        <Paper>
                            <form autoComplete="off">
                                <TextField 
                                    label="Nome"
                                    variant="outlined"
                                />
                            </form>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

InformationStep.propTypes = {
    name: PropTypes.string.isRequired
}

const mapStateToProps = state => ({
    name: state.user.name    
})

const mapDispatchToProps = dispatch => ({
    toggleTodo: id => {
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(InformationStep)

