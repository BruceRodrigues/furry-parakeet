import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Divider from '@material-ui/core/Divider'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

import * as Actions from './UserActions'

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

class InformationStep extends React.Component {

    render() {
        return (
            <div>
                <form autoComplete="off" onSubmit={() => this.props.onSaveClicked(this.props)}>
                    <UsuarioInfo props={this.props} />
                    <EnderecoInfo endereco={this.props.endereco} onChange={(key, value) => this.props.onFormChanged(key, value)}/>
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
                    onChange={e => props.onFormChanged('name', e.target.value)}
                />
            </Grid>
            <Grid item xs={6}>
                <TextField
                    label="Usuário"
                    variant="outlined"
                    fullWidth
                    value={props.username}
                    onChange={e => props.onFormChanged('username', e.target.value)}
                />
            </Grid>
            <Grid item xs={6}>
                <TextField
                    label="Senha"
                    variant="outlined"
                    type="password"
                    fullWidth
                    value={props.password}
                    onChange={e => props.onFormChanged('password', e.target.value)}
                />
            </Grid>
        </Grid>
    )


const EnderecoInfo = ({endereco, onChange}) => (
    <Grid container justify="flex-start" spacing={8} alignItems="flex-start">
        <Grid item xs={12}>
            <Typography variant="h5" align="left">Endereço</Typography>
        </Grid>
        <Grid item xs={12}>
            <Divider />
        </Grid>
        <Grid item>
            <TextField
                label="CEP"
                variant="outlined"
                value={endereco.nuCep}
                onChange={e => onChange('cep', e.target.value)}
            />
        </Grid>
        <Grid item xs={1}>
            <TextField
                label="UF"
                variant="outlined"
                value={endereco.sgUf}
                onChange={e => onChange('uf', e.target.value)}
            />
        </Grid>
        <Grid item xs={1}>
            <TextField
                label="IBGE"
                variant="outlined"
                value={endereco.coMunicipio}
                onChange={e => onChange('ibge', e.target.value)}
            />
        </Grid>
        <Grid item xs={6}>
            <TextField
                fullWidth
                label="Município"
                variant="outlined"
                value={endereco.noMunicipio}
                onChange={e => onChange('municipio', e.target.value)}
            />
        </Grid>
        <Grid item xs={6}>
            <TextField
                label="Bairro"
                variant="outlined"
                value={endereco.dsBairro}
                onChange={e => onChange('bairro', e.target.value)}
            />
        </Grid>
        <Grid item xs={6}>
            <TextField
                label="Logradouro"
                variant="outlined"
                value={endereco.dsLogradouro}
                onChange={e => onChange('logradouro', e.target.value)}
            />
        </Grid>
        <Grid item xs={6}>
            <TextField
                label="Número"
                variant="outlined"
                value={endereco.dsNumero}
                onChange={e => onChange('numero', e.target.value)}
            />
        </Grid>
        <Grid item xs={6}>
            <TextField
                label="Complemento"
                variant="outlined"
                value={endereco.dsComplemento}
                onChange={e => onChange('complemento', e.target.value)}
            />
        </Grid>
    </Grid>
)

InformationStep.propTypes = {
    name: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    endereco: PropTypes.shape({
        nuCep: PropTypes.string.isRequired,
        coMunicipio: PropTypes.string.isRequired,
        noMunicipio: PropTypes.string.isRequired,
        sgUf: PropTypes.string.isRequired,
        dsLogradouro: PropTypes.string.isRequired,
        dsComplemento: PropTypes.string,
        dsNumero: PropTypes.string,
        dsBairro: PropTypes.string.isRequired,
    }).isRequired,
}


const mapStateToProps = state => ({
    name: state.user.name,
    username: state.user.username,
    password: state.user.password,
    endereco: {
        nuCep: state.user.cep,
        coMunicipio: state.user.ibge,
        noMunicipio: state.user.municipio,
        sgUf: state.user.uf,
        dsLogradouro: state.user.logradouro,
        dsBairro: state.user.bairro,
        dsNumero: state.user.numero,
        dsComplemento: state.user.complemento,
    },
})

const mapDispatchToProps = dispatch => ({
    onSaveClicked: (props) => {
        dispatch(Actions.saveUser(props))
    },
    onFormChanged: (key, value) => {
        dispatch(Actions.formChanged(key, value))
    }
})

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(InformationStep))

