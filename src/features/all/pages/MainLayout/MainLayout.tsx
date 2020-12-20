import React from 'react';
import { useRequest } from 'estafette';
import { Link } from 'estafette-router';
import { tabs } from 'libs/http/api/fonts_api';
import { Fonts } from 'libs/http/api/fonts_api.types';

import './MainLayout.scss';

export const MainLayout = () => {
  const { request, data, loading } = useRequest<Fonts[]>();

  React.useEffect(() => {
    onFetch();

    return () => {
      tabs.fonts.cancel();
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
            data.map((item) => (
              <div className={`font-selection__fonts-item`} key={item.id}>
                <Link to={item.content_endpoint}>{item.label}</Link>
              </div>
            ))}
        </div>
      </div>

      <div
        className="fonts-content"
        style={{ justifyContent: loading ? 'center' : 'space-around' }}
      >
        {loading && <div className="loading">loading...</div>}
      </div>
    </div>
  );
};
