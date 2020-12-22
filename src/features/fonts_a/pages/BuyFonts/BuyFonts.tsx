import React from 'react';
import { useRequest } from 'estafette';
import { tabs } from 'libs/http/api/fonts_api';
import { BuyFontsProps, Fonts } from 'libs/http/api/fonts_api.types';
import { FontSelectionItem, Loader } from 'ui/atoms';

import './BuyFonts.scss';

export const BuyFonts = () => {
  const { request, data } = useRequest<Fonts[]>();
  const {
    request: requestBuyFonts,
    data: buyFontsData,
    loading
  } = useRequest<BuyFontsProps>();

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
              <FontSelectionItem
                key={item.id}
                item={item}
                routeName="BuyFonts"
                active={key === 1 ? true : false}
              />
            ))}
        </div>
      </div>

      <div className="fonts-content" style={{ justifyContent: 'center' }}>
        {loading && <Loader />}

        <div className="buy-fonts">{buyFontsData.content}</div>
      </div>
    </div>
  );
};
