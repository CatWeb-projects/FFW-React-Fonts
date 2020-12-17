import React from 'react';
import { useRequest } from 'estafette';
import { tabs } from 'services/fonts-api';
import { Fonts } from 'services/fonts-api.types';

export const MainLayout = () => {
  const { request, data } = useRequest<Fonts[]>();

  React.useEffect(() => {
    onFetch();

    return () => {
      tabs.fonts.cancel();
    };
    // eslint-disable-next-line
  }, []);

  const onFetch = (): Promise<Fonts[]> => request(tabs.fonts.action());

  console.log(data);

  return (
    <div className="main-layout">
      <div className="font-selection">
        <div className="font-selection__title">Please select one font</div>

        {data &&
          data.map((item: any) => (
            <div className="font-selection__fonts" key={item.id}>
              {item.label}
            </div>
          ))}
      </div>
    </div>
  );
};
