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
                <form autoComplete="off">
                    <UsuarioInfo props={this.props} />
                    <EnderecoInfo endereco={this.props.endereco}/>
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


const EnderecoInfo = (props) => (
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
                value={props.endereco.nuCep}
            />
        </Grid>
        <Grid item xs={1}>
            <TextField
                label="UF"
                variant="outlined"
                value={props.endereco.sgUf}
            />
        </Grid>
        <Grid item xs={1}>
            <TextField
                label="IBGE"
                variant="outlined"
                value={props.endereco.coMunicipio}
            />
        </Grid>
        <Grid item xs={6}>
            <TextField
                fullWidth
                label="Município"
                variant="outlined"
                value={props.endereco.noMunicipio}
            />
        </Grid>
        <Grid item xs={6}>
            <TextField
                label="Bairro"
                variant="outlined"
                value={props.endereco.dsBairro}
            />
        </Grid>
        <Grid item xs={6}>
            <TextField
                label="Logradouro"
                variant="outlined"
                value={props.endereco.dsLogradouro}
            />
        </Grid>
        <Grid item xs={6}>
            <TextField
                label="Número"
                variant="outlined"
                value={props.endereco.dsNumero}
            />
        </Grid>
        <Grid item xs={6}>
            <TextField
                label="Complemento"
                variant="outlined"
                value={props.endereco.dsComplemento}
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
        console.log(props)
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(InformationStep)

