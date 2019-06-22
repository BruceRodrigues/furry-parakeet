import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Paper from '@material-ui/core/Paper'
import { withRouter } from 'react-router-dom'
import UserView from './../user/UserView'

class Main extends React.Component {

    render() {
        return (
            <div>
                <AppBar position="static">
                    <ToolBar>
                        <IconButton>
                            <MenuIcon />
                        </IconButton>
                    </ToolBar>
                </AppBar>
                <Paper className="content">
                    <UserView />
                </Paper>
            </div>
        )
    }
}

export default withRouter(Main)