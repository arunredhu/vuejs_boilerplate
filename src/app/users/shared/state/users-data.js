import { reflectKeys } from '@/app/shared/services';

import { fetchUsers } from '../services';

const initialState = {
  loading: false,
  data: null,
  error: null
};

const namespacedPrefix = '[USERS]';

const mutationTypes = reflectKeys(
  [
    'USERS_DATA_SUCCESS',
    'USERS_DATA_REQUEST',
    'USERS_DATA_ERROR',
    'USERS_DATA_RESET'
  ],
  namespacedPrefix
);

const {
  USERS_DATA_ERROR,
  USERS_DATA_REQUEST,
  USERS_DATA_RESET,
  USERS_DATA_SUCCESS
} = mutationTypes;

/**
 * Users data mutations
 */
const mutations = {
  /** user data request */
  [USERS_DATA_REQUEST](state) {
    Object.assign(state, { loading: true, error: null });
  },

  /** user data success */
  [USERS_DATA_SUCCESS](state, payload) {
    Object.assign(state, { loading: false, data: payload });
  },

  /** user data error */
  [USERS_DATA_ERROR](state, payload) {
    Object.assign(state, {
      loading: false,
      data: null,
      error: payload || true
    });
  },

  /** reset user data */
  [USERS_DATA_RESET](state) {
    Object.assign(state, ...initialState);
  }
};

/** Actions types constants */
export const actionsTypes = reflectKeys(['FETCH_USER_DATA'], namespacedPrefix);

/**
 * Users data actions
 */
const actions = {
  /** fetch user data */
  async [actionsTypes.FETCH_USER_DATA](context, authCred) {
    context.commit(USERS_DATA_REQUEST);

    const result = await fetchUsers(authCred).catch(e => {
      context.commit(USERS_DATA_ERROR, e);
    });

    if (result) {
      context.commit(USERS_DATA_SUCCESS, result);
    }

    return result;
  }
};

export default {
  mutations,
  actions,
  state: initialState
};
