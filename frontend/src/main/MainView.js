import AppBar from '@material-ui/core/AppBar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Paper from '@material-ui/core/Paper'
import React from 'react'
import ToolBar from '@material-ui/core/Toolbar'
import UserView from '../user/UserView'
import { withRouter } from 'react-router-dom'

class MainView extends React.Component {

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

export default withRouter(MainView)