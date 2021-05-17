const dateFns = require('date-fns')
const { ptBR } = require('date-fns/locale')

const formatDefault = 'dd/MM/yyyy HH:mm:ss'

const dateFormat = (date, format) => {
  const dateToFormat = date instanceof Date ? date : new Date(date)

  if (format) {
    return dateFns.format(dateToFormat, format, { locale: ptBR })
  }

  return dateFns.format(dateToFormat, formatDefault, { locale: ptBR })
}

const now = (format) => {
  const date = new Date()

  if (format) {
    return dateFormat(date, format)
  }

  return dateFormat(date, formatDefault)
}

const getMonthName = date => {
  return dateFormat(date, 'LLLL')
}

module.exports = {
  dateFormat,
  now,
  getMonthName
}
