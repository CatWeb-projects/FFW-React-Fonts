import React from 'react';
import { FontContext } from 'contexts/FontContext';
import { FontText } from 'ui/atoms';

interface Props {
  font: {
    abbr?: string;
    color?: string;
    id: number;
    label?: string;
    'color-blind-label': string;
  };
  onClick?: (id: number) => void;
}

export const SmallFontItem: React.FC<Props> = ({ font, onClick }) => {
  const { saveId } = React.useContext(FontContext);

  return (
    <div
      className="fonts-content__right cube-common selected-common"
      key={font.id}
      onClick={onClick && (() => onClick(font.id))}
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
        {font.label && <FontText text={font.label} />}
      </div>
    </div>
  );
};
