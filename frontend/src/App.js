import React from 'react';
import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Paper from '@material-ui/core/Paper'
import './App.css';
import UserView from './user/UserView'

function App() {
  return (
    <div className="App">
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
  );
}

export default App;
