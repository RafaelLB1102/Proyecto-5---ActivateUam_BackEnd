/* {
    "name": "Programación Competitiva #2",
    "status": "active",
    "speakers": [
      {
        "name": "David Asaaf",
        "majors": [
          "Ing. de sistemas",
          "magister"
        ]
      }
    ]
  } */


var errors = []

const validateWebminar = (req, res) => {
    validateName(req)
    validateStatus(req)
    validateSpeaker(req)
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

const validateStatus = (req) => {
    const STATUS = req.body.status
    if (STATUS != "active" | STATUS != "eliminated") {
        errors.push({ message: "Estado del evento es invalido" })
    }
}

module.exports = {
    validateWebminar
}
