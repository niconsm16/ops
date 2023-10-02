const errorFile = (err) =>
    console.log(err
        ? `Hubo un problema al guardar los datos:\n${err}`
        : 'Los datos se han guardado.')


const errors = { errorFile }

export default errors 