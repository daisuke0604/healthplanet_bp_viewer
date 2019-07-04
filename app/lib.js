import * as env from './env';
import moment from 'moment/moment';

export const login = async (user, pass) => {
  const res = await fetch(`${env.host}/bp-api/login`, {
    method: 'POST',
    mode: 'cors',
    headers: {
      accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user: user,
      pass: pass,
    }),
  });
  const result = await res.json();
  return result.token;
};

export const fetchBp = async token => {
  const res = await fetch(`${env.host}/bp-api/fetch`, {
    method: 'GET',
    mode: 'cors',
    headers: {
      accept: 'application/json',
      authorization: `Bearer ${token}`,
    },
  });
  const result = await res.json();
  moment.locale('ja');
  const formattedResult = result.map(item => {
    item.測定日時 = moment(item.測定日時).format('MM/DD(ddd) HH:mm');
    return item;
  });
  return formattedResult;
};
