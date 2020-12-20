import { MyFonts } from 'features/my_fonts/pages/MyFonts/MyFonts';
import { BuyFonts } from 'features/buy_fonts/pages/BuyFonts/BuyFonts';
import { MainLayout } from 'features/all/pages/MainLayout/MainLayout';

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
