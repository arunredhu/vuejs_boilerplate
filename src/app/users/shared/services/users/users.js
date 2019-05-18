import { httpClient } from '@/app/shared/services';

import { apiConstants } from '../../config';

const fetchUsers = () => {
  const url = apiConstants.users;

  return httpClient.get(url).then(res => res.data);
};

export { fetchUsers };
