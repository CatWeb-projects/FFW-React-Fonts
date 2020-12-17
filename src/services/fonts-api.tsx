import axios, { Canceler } from 'axios';
import { Fonts } from './fonts-api.types';

const { CancelToken } = axios;

const baseUrl = 'http://json.ffwagency.md';

//1st way
// export const tabs = {
//   cancel: () => {},
//   request: () =>
//     axios
//       .get(`${baseUrl}tabs`, {
//         cancelToken: new CancelToken((c) => (tabs.cancel = c))
//       })
//       .then((res) => res)
// };

// 2nd way which i use
export const tabs = {
  fonts: {
    action: (): Promise<{ data: Fonts[] }> =>
      axios.get(`${baseUrl}/tabs`, {
        cancelToken: new CancelToken((c: Canceler) => (tabs.fonts.cancel = c))
      }),
    cancel: (() => null) as Canceler
  }
};
