import * as env from './env';

export const login = async (user, pass) => {
  const res = await fetch(`${env.host}:${env.port}/login`, {
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
