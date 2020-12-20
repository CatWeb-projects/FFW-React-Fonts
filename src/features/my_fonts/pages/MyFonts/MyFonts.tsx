import React from 'react';
import { useRequest } from 'estafette';
import { Link } from 'estafette-router';
import { tabs } from 'libs/http/api/fonts_api';
import { BuyFonts, Fonts, FontSelection } from 'libs/http/api/fonts_api.types';

export const MyFonts = () => {
  const { request, data, loading } = useRequest<Fonts[]>();
  const {
    request: requestMyFonts,
    data: myFontsData
  } = useRequest<FontSelection>();
  const {
    request: requestBuyFonts,
    data: buyFontsData
  } = useRequest<BuyFonts>();

  const [saveId, setSaveid] = React.useState<number>();

  React.useEffect(() => {
    onFetch();
    requestMyFonts(tabs.myFonts.action());
    requestBuyFonts(tabs.buyFonts.action());

    return () => {
      tabs.fonts.cancel();
      tabs.myFonts.cancel();
      tabs.buyFonts.cancel();
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

  // const selectedFonts = React.useMemo(() => {
  //   myFontsData.content;
  // }, [myFontsData]);

  const onSelectFonts = React.useCallback(
    (id: number) =>
      myFontsData.content.filter((item) => {
        if (item.id === id) {
          setSaveid(id);
        }
        return null;
      }),
    [myFontsData]
  );

  console.log(data);
  console.log(myFontsData);
  console.log(buyFontsData);
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
        {myFontsData.content &&
          myFontsData.content
            .filter((_, key) => key < 1)
            .map((font) => (
              <div
                className="fonts-content__left selected-common"
                key={font.id}
                onClick={() => onSelectFonts(font.id)}
              >
                <div
                  className={`fonts-content__font-layout-left ${
                    saveId === font.id ? 'active' : ''
                  }`}
                  style={{ backgroundColor: font.color }}
                >
                  <div
                    className="fonts-content__selected-font-left"
                    style={{ color: font['color-blind-label'] }}
                  >
                    {font.abbr}
                  </div>
                </div>
                <div
                  className={`fonts-content__cube-text ${
                    saveId === font.id ? 'active' : ''
                  }`}
                >
                  <span>{font.label}</span>
                </div>
              </div>
            ))}

        <div className="fonts-content__right-wrapper">
          {myFontsData.content &&
            myFontsData.content
              .filter((_, key) => key >= 1)
              .map((font) => (
                <div
                  className="fonts-content__right cube-common selected-common"
                  key={font.id}
                  onClick={() => onSelectFonts(font.id)}
                >
                  <div
                    className={`fonts-content__font-layout-right ${
                      saveId === font.id ? 'active' : ''
                    }`}
                    style={{
                      backgroundColor: font.color
                    }}
                  >
                    <div
                      className="fonts-content__selected-font-right little-cubes"
                      style={{
                        color: font['color-blind-label']
                      }}
                    >
                      {font.abbr}
                    </div>
                  </div>
                  <div
                    className={`fonts-content__cube-text ${
                      saveId === font.id ? 'active' : ''
                    }`}
                  >
                    <span>{font.label}</span>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
};