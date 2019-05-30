const defaultState = {
    step: 1,
    name: 'Bruce',
    username: '',
    password: '',
    cep: '',
    municipio: '',
    uf: '',
    logradouro: '',
    bairro: '',
}

const user = (state = defaultState, action) => {
    switch (action.type) {
        default:
            return {...state}
    }
}

export default user