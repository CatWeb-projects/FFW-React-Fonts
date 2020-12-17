import React from 'react';
import { useRequest } from 'estafette';
// import { Link } from 'estafette-router';
import { tabs } from 'services/fonts-api';
import { Fonts } from 'services/fonts-api.types';

import './MainLayout.scss';

export const MainLayout = () => {
  const { request, data } = useRequest<Fonts[]>();
  const { request: requestMyFonts, data: myFonts } = useRequest<any>();

  const [saveId, setSaveid] = React.useState<any>();

  React.useEffect(() => {
    onFetch();

    requestMyFonts(tabs.fontsA.action());
    return () => {
      tabs.fonts.cancel();
    };
    // eslint-disable-next-line
  }, []);

  const onFetch = () => request(tabs.fonts.action());

  const onToggle = React.useCallback(
    (id: number) =>
      data.filter((item) => {
        if (item.id === id) {
          setSaveid(id);
        }
        return null;
      }),
    // eslint-disable-next-line
    [data]
  );

  console.log(data);
  console.log(myFonts);

  return (
    <div className="main-layout">
      <div className="font-selection">
        <div className="font-selection__title">Please select one font</div>

        <div className="font-selection__fonts">
          {data &&
            data.map((item) => (
              <div
                className={`font-selection__fonts-item ${
                  saveId === item.id ? 'active' : ''
                }`}
                key={item.id}
                onClick={() => onToggle(item.id)}
              >
                {item.label}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
