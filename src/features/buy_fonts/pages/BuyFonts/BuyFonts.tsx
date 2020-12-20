import React from 'react';
import { useRequest } from 'estafette';
import { Link, useRouterHelpers } from 'estafette-router';
import { tabs } from 'libs/http/api/fonts_api';
import { BuyFontsProps, Fonts } from 'libs/http/api/fonts_api.types';

import './BuyFonts.scss';

export const BuyFonts = () => {
  const { request, data } = useRequest<Fonts[]>();
  const {
    request: requestBuyFonts,
    data: buyFontsData,
    loading
  } = useRequest<BuyFontsProps>();

  const { isRouteActive } = useRouterHelpers();

  React.useEffect(() => {
    onFetch();
    requestBuyFonts(tabs.buyFonts.action());

    return () => {
      tabs.buyFonts.cancel();
    };
    // eslint-disable-next-line
  }, []);

  const onFetch = () => request(tabs.fonts.action());

  return (
    <div className="main-layout">
      <div className="font-selection">
        <div className="font-selection__title">Please select one font</div>

        <div className="font-selection__fonts">
          {data &&
            data.map((item, key) => (
              <div
                className={`font-selection__fonts-item ${
                  isRouteActive(['BuyFonts']) && key === 1 ? 'active' : ''
                }`}
                key={item.id}
              >
                <Link to={item.content_endpoint}>{item.label}</Link>
              </div>
            ))}
        </div>
      </div>

      <div className="fonts-content" style={{ justifyContent: 'center' }}>
        {loading && <div className="loading">loading...</div>}

        <div className="buy-fonts">{buyFontsData.content}</div>
      </div>
    </div>
  );
};
