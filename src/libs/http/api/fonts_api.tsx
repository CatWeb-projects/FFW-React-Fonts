import axios, { Canceler } from 'axios';
import { BuyFontsProps, Fonts, FontSelection } from './fonts_api.types';

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
  },

  myFonts: {
    action: (): Promise<{ data: FontSelection }> =>
      axios.get(`${baseUrl}/fonts_a`, {
        cancelToken: new CancelToken((c: Canceler) => (tabs.myFonts.cancel = c))
      }),
    cancel: (() => null) as Canceler
  },

  buyFonts: {
    action: (): Promise<{ data: BuyFontsProps }> =>
      axios.get(`${baseUrl}/fonts_b`, {
        cancelToken: new CancelToken(
          (c: Canceler) => (tabs.buyFonts.cancel = c)
        )
      }),
    cancel: (() => null) as Canceler
  }
};
