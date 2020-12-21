import React from 'react';
import { Link, useRouterHelpers } from 'estafette-router';
import { Fonts } from 'libs/http/api/fonts_api.types';

interface Props {
  item: Fonts;
  routeName?: string;
  active?: boolean;
}

export const FontSelectionItem: React.FC<Props> = ({
  item,
  routeName,
  active
}) => {
  const { isRouteActive } = useRouterHelpers();

  return (
    <div
      className={`font-selection__fonts-item ${
        isRouteActive([`${routeName}`]) && active ? 'active' : ''
      }`}
    >
      <Link to={item.content_endpoint}>{item.label}</Link>
    </div>
  );
};
