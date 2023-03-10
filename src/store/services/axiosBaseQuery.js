import axios from 'axios';

export const axiosBaseQuery =
  ({ baseUrl = '', headers = {} }) =>
  async ({ url, method, data, params }) => {
    try {
      const result = await axios({
        url: baseUrl + url,
        method,
        data,
        params,
        headers,
      });
      return { data: result.data };
    } catch (axiosError) {
      let err = axiosError;
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };
