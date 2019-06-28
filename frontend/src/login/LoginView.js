import './login.css'

import * as Actions from './../login/login.actions'

import {
  Avatar,
  Button,
  Grid,
  Link,
  Paper,
  TextField,
  Typography,
} from '@material-ui/core'
import { Link as RouterLink, withRouter } from 'react-router-dom'

import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import PropTypes from 'prop-types'
import React from 'react'
import { blue } from '@material-ui/core/colors'
import { connect } from 'react-redux'
import { createStyles } from '@material-ui/core/styles'

const styles = createStyles({
  big: {
    height: 80,
    width: 80,
    backgroundColor: blue[100],
    color: '#fff',
  },
})

class LoginView extends React.Component {
  render() {
    return (
      <form>
        <Grid container className='login' style={{ height: '100vh' }}>
          <Grid item xs={false} sm={4} md={7} className='image' />
          <Grid
            container
            item
            alignContent='center'
            xs={12}
            sm={8}
            md={5}
            component={Paper}
            elevation={6}
            square
            justify='center'
            spacing={16}
            className='form'
          >
            <Grid item>
              <Avatar style={styles.big}>
                <LockOutlinedIcon style={{ fontSize: '60px' }} />
              </Avatar>
            </Grid>
            <Grid item xs={12}>
              <Typography variant='h2'>Login</Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
              <TextField
                variant='outlined'
                id='email'
                name='username'
                label='E-mail'
                autoComplete='email'
                fullWidth
                autoFocus
                required
                value={this.props.username}
                onChange={e =>
                  this.props.onFormChanged('username', e.target.value)
                }
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant='outlined'
                id='senha'
                name='password'
                label='Senha'
                type='password'
                fullWidth
                required
                value={this.props.password}
                onChange={e =>
                  this.props.onFormChanged('password', e.target.value)
                }
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                fullWidth
                size='large'
                variant='contained'
                color='primary'
              >
                Entrar
              </Button>
            </Grid>
            <Grid container justify='space-between'>
              <Grid item>
                <Link
                  variant='body2'
                  component={RouterLink}
                  to={this.props.match.url.replace('/login', 'remember')}
                >
                  Esqueceu sua senha?
                </Link>
              </Grid>
              <Grid item>
                <Link
                  variant='body2'
                  component={RouterLink}
                  to={this.props.match.url.replace('/login', '/user/profile')}
                >
                  Cadastre-se
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </form>
    )
  }
}

LoginView.propTypes = {
  username: PropTypes.string,
  password: PropTypes.string,
}

const mapStateToProps = state => ({
  username: state.login.username,
  password: state.login.password,
})

const mapDispatchToProps = dispatch => ({
  onSignInClicked: user => {
    dispatch(Actions.signIn(user))
  },
  onFormChanged: (key, value) => {
    dispatch(Actions.onFormChanged(key, value))
  },
})

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(LoginView)
)
