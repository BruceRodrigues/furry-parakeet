import React from 'react'
import { Grid, Paper, Avatar, Typography, TextField, Button, Link } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import { withRouter, Link as RouterLink } from 'react-router-dom'

import './login.css'

class LoginView extends React.Component {

    render() {
        return (
            <Grid container className="login" style={{ height: '100vh' }}>
                <Grid item xs={false} sm={4} md={7} className="image" />
                <Grid container item alignContent="center"
                    xs={12}
                    sm={8}
                    md={5}
                    component={Paper}
                    elevation={6}
                    square
                    justify="center"
                    spacing={16}
                    className="form">
                    <Grid item>
                        <Avatar>
                            <LockOutlinedIcon color="secondary" />
                        </Avatar>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h2">Login</Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12}>
                        <TextField
                            variant="outlined"
                            id="email"
                            label="E-mail"
                            autoComplete="email"
                            fullWidth
                            autoFocus
                            required
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            id="senha"
                            label="Senha"
                            type="password"
                            fullWidth
                            required
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            fullWidth
                            size="large"
                            variant="contained"
                            color="primary">
                            Entrar
                            </Button>
                    </Grid>
                    <Grid container justify="space-between">
                        <Grid item>
                            <Link variant="body2" component="button">Esqueceu sua senha?</Link>
                        </Grid>
                        <Grid item>
                            <Link variant="body2" component={RouterLink}
                                to={this.props.match.url.replace('/login', '/user/profile')}>
                            Cadastre-se</Link>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        )
    }

}

export default withRouter(LoginView)