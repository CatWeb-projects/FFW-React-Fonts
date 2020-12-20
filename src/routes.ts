import { BuyFonts } from 'ui/templates/BuyFonts/BuyFonts';
import { MainLayout } from 'ui/templates/MainLayout/MainLayout';

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

    { name: 'MyFonts', path: '/my_fonts', component: MainLayout },

    { name: 'BuyFonts', path: '/buy_fonts', component: BuyFonts },
  ];
