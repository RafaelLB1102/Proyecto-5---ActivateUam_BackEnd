var errors = []

const validateEventUAM = (req, res) => {
    validateName(req)
    validatePlace(req)
    validateCategory(req)
    validateStatus(req)
    return errors
}

const validateName = (req) => {
    const NAME = req.body.name
    const REGEX = /^[A-Za-z0-9\!\@\#\$\%\^\&\*\)\(+\=\._-]+$/g

    if (NAME.length < 5 || NAME.length > 30) {
        errors.push({ message: "el nombre no tiene la longitud correcta (Min 5 - Max 30)" })
    }

    if (NAME.test(REGEX)) {
        errors.push({ message: "El nombre contiene carácteres especiales" })
    }
}

const validatePlace = (req) => {
    const PLACES = ["sacatín", "fundadores", "Parque de los estudiantes", "Cupula"]
    const PLACE = req.body.place
    if (!PLACES.includes(PLACE)) {
        errors.push({ message: "El lugar es invalido" })
    }
}

const validateCategory = (req) => {
    const CATEGORIES = ["Manualidades","Trabajo Artistico","Arte Dígital"]
    const CATEGORY = req.body.category
    if(!CATEGORIES.includes(CATEGORY)){
        errors.push({ message: "La categoria es invalida" })
    }
}

const validateStatus = (req) => {
    const STATUS = req.body.status
    if(STATUS != "active" | STATUS != "eliminated"){
        errors.push({ message: "Estado del evento es invalido" })
    }
}


module.exports = {
    validateEventUAM
}
