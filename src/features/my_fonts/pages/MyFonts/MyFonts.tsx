import React from 'react';
import { useRequest } from 'estafette';
import { tabs } from 'libs/http/api/fonts_api';
import { Fonts, FontSelectionProps } from 'libs/http/api/fonts_api.types';
import { FontContext } from 'contexts/FontContext';
import { FontSelectionItem } from 'ui/atoms';

export const MyFonts = () => {
  const { saveId, setSaveId } = React.useContext(FontContext);

  const { request, data, loading } = useRequest<Fonts[]>();
  const {
    request: requestMyFonts,
    data: myFontsData
  } = useRequest<FontSelectionProps>();

  React.useEffect(() => {
    onFetch();
    onFetchFonts();

    return () => {
      tabs.fonts.cancel();
      tabs.myFonts.cancel();
    };
    // eslint-disable-next-line
  }, []);

  const onFetch = () => request(tabs.fonts.action());
  const onFetchFonts = () => requestMyFonts(tabs.myFonts.action());

  // const selectedFonts = React.useMemo(() => {
  //   myFontsData.content;
  // }, [myFontsData]);

  const onSelectFonts = React.useCallback(
    (id: number) =>
      myFontsData.content.filter((item) => {
        if (item.id === id) {
          setSaveId(item.id);
        }
        return null;
      }),
    [myFontsData, setSaveId]
  );

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
                routeName="MyFonts"
                active={key === 0 ? true : false}
              />
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
