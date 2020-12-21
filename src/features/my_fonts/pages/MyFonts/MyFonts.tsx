import React from 'react';
import { useRequest } from 'estafette';
import { tabs } from 'libs/http/api/fonts_api';
import { Fonts, FontSelectionProps } from 'libs/http/api/fonts_api.types';
import { FontContext } from 'contexts/FontContext';
import { BigFontItem, SmallFontItem } from 'ui/molecules';
import { FontSelectionItem, Loader } from 'ui/atoms';

export const MyFonts = () => {
  const { setSaveId } = React.useContext(FontContext);

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

  const selectedFonts = React.useMemo(() => myFontsData.content, [
    myFontsData.content
  ]);

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
        {loading && <Loader />}

        {selectedFonts &&
          selectedFonts
            .filter((_, key) => key < 1)
            .map((font) => (
              <BigFontItem key={font.id} font={font} onClick={onSelectFonts} />
            ))}

        <div className="fonts-content__right-wrapper">
          {selectedFonts &&
            selectedFonts
              .filter((_, key) => key >= 1)
              .map((font) => (
                <SmallFontItem
                  key={font.id}
                  font={font}
                  onClick={onSelectFonts}
                />
              ))}
        </div>
      </div>
    </div>
  );
};
