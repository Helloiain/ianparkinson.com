import moment from 'react-moment';
import config from '../../data/SiteConfig'

const formatDate = date => moment.utc(date).format(config.dateFormat)

export {formatDate}