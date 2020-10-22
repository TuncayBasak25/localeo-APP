import fetchApi from '../fetchApi';

export default function getUser(userId)
{
  return fetchApi(`user/read?userId=${userId}`);
}
