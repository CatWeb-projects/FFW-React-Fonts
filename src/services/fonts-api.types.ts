export interface Fonts {
  content_endpoint?: string;
  id: number;
  label?: string;
}
[];

export interface FontSelection {
  content: {
    abbr?: string;
    color?: string;
    id: number;
    label?: string;
    color_blind_label: string;
  }[];
}

export interface BuyFonts {
  content?: string;
}
