import moment from 'moment'

export const getDateParsed = ( date ) => {
    return moment.utc(date).format('YYYY-MM-DD');
}