const moment = require('moment');

const getArrSixMonth = () => {
  const arrayMonth = [];
  for (let i = 0; i <= 5; i += 1) {
    const [month, year] = moment().subtract(i, 'months').format('MM YYYY').split(' ');
    arrayMonth.push({ month, year });
  }
  return arrayMonth;
};

module.exports = getArrSixMonth;
