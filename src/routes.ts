import { MainLayout } from 'features/all/pages/MainLayout/MainLayout';
import { MyFonts } from 'features/fonts_b/pages/MyFonts/MyFonts';
import { BuyFonts } from 'features/fonts_a/pages/BuyFonts/BuyFonts';

export interface Route {
  name: string;
  path: string;
  component: any;
  exact?: boolean;
  label?: string;
  parent?: string;
}

export const routes: Route[] =
  // prettier-ignore
  [
    {name: 'Main', path: '/', exact: true, component: MainLayout},

    { name: 'MyFonts', path: '/fonts_a', component: MyFonts },

    { name: 'BuyFonts', path: '/fonts_b', component: BuyFonts },
  ];
