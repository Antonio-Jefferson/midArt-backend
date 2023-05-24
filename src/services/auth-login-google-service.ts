import axios from 'axios';
import dotenv from 'dotenv';
import { stringify } from 'querystring';
dotenv.config();

const loginGoogle = async (codeToken: string) => {
  const url = process.env.GOOGLE_URI;
  const params = {
    code: codeToken,
    client_id: process.env.GOOGLE_CLIENT_ID,
    client_secret: process.env.GOOGLE_CLIENT_SECRET,
    redirect_uri: process.env.GOOGLE_REDIRECT_URI,
    grant_type: 'authorization_code'
  };
  console.log(params);
  const query = stringify(params);
  console.log(query);
  const result = await axios.post(`${url}?${query}`);
  console.log(result);

  return result.data;
};

export default {
  loginGoogle
};
