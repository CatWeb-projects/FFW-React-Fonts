export interface Fonts {
  content_endpoint?: string;
  id: number;
  label?: string;
}
[];

export interface FontSelectionProps {
  content: {
    abbr?: string;
    color?: string;
    id: number;
    label?: string;
    'color-blind-label': string;
  }[];
}

export interface BuyFontsProps {
  content?: string;
}
