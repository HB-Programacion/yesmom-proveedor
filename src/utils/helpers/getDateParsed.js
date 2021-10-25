import moment from 'moment'

export const getDateParsed = ( date ) => {
    return moment(date).format('DD-MM-YYYY');
}