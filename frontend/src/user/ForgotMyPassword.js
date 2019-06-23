import React from 'react'
import { withRouter } from 'react-router-dom'
import {Grid, Paper, createStyles} from '@material-ui/core'
import { grey } from '@material-ui/core/colors';

const styles = createStyles({
    root: {
        backgroundColor: grey[100],
    },
    page: {
        minHeight: '100vh',
        padding: '0 20px',
    },
})

class View extends React.Component {

    render() {
        return (
            <div style={styles.root}>
                <Grid container justify="center">
                    <Grid item xs={6} style={styles.page} component={Paper} square elevation={2}>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default withRouter(View)