import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Divider from '@material-ui/core/Divider'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

class InformationStep extends React.Component {

    render() {
        return (
            <div>
                <form autoComplete="off" onSubmit={this.props.onSaveClicked(this.props)}>
                    <UsuarioInfo props={this.props} />
                    <EnderecoInfo props={this.props}/>
                    <Button variant="contained" color="primary" type="submit">Salvar</Button>
                </form>
            </div>
        )
    }
}

const UsuarioInfo = ({ props }) =>
    (
        <Grid container direction="column" spacing={8} justify="flex-start">
            <Grid item xs={12}>
                <Typography variant="h5" align="left">Usuário</Typography>
            </Grid>
            <Grid item xs={12}>
                <Divider />
            </Grid>
            <Grid item xs={6}>
                <TextField
                    label="Nome completo"
                    variant="outlined"
                    fullWidth
                    value={props.name}
                />
            </Grid>
            <Grid item xs={6}>
                <TextField
                    label="Usuário"
                    variant="outlined"
                    fullWidth
                    value={props.username}
                />
            </Grid>
            <Grid item xs={6}>
                <TextField
                    label="Senha"
                    variant="outlined"
                    type="password"
                    fullWidth
                    value={props.password}
                />
            </Grid>
        </Grid>
    )


const EnderecoInfo = ({ props }) => (
    <Grid container direction="column" justify="flex-start" spacing={8} alignItems="flex-start">
        <Grid item xs={12}>
            <Typography variant="h5" align="left">Endereço</Typography>
        </Grid>
        <Grid item xs={12}>
            <Divider />
        </Grid>
        <Grid item xs={6}>
            <TextField
                label="CEP"
                variant="outlined"
                value={props.cep}
            />
        </Grid>
        <Grid item xs={6}>
            <TextField
                label="Município"
                variant="outlined"
                value={props.municipio}
            />
        </Grid>
        <Grid item xs={6}>
            <TextField
                label="UF"
                variant="outlined"
                value={props.uf}
            />
        </Grid>
        <Grid item xs={6}>
            <TextField
                label="Bairro"
                variant="outlined"
                value={props.bairro}
            />
        </Grid>
        <Grid item xs={6}>
            <TextField
                label="Logradouro"
                variant="outlined"
                value={props.logradouro}
            />
        </Grid>
        <Grid item xs={6}>
            <TextField
                label="Número"
                variant="outlined"
                value={props.numero}
            />
        </Grid>
        <Grid item xs={6}>
            <TextField
                label="Complemento"
                variant="outlined"
                value={props.complemento}
            />
        </Grid>
    </Grid>
)

InformationStep.propTypes = {
    name: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    cep: PropTypes.string.isRequired,
    municipio: PropTypes.string.isRequired,
    uf: PropTypes.string.isRequired,
    logradouro: PropTypes.string.isRequired,
    complemento: PropTypes.string,
    numero: PropTypes.string,
    bairro: PropTypes.string.isRequired,

}

const mapStateToProps = state => ({
    name: state.user.name,
    username: state.user.username,
    password: state.user.password,
    cep: state.user.cep,
    municipio: state.user.municipio,
    uf: state.user.uf,
    logradouro: state.user.logradouro,
    complemento: state.user.complemento,
    numero: state.user.numero,
    bairro: state.user.bairro,
})

const mapDispatchToProps = dispatch => ({
    onSaveClicked: (props) => {
        console.log(props)
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(InformationStep)

