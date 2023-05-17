export type Theme = {
  text: string;
  textDim: string;
  background: string;
  backgroundAlt: string;
  cardBackground: string;
  primary: string;
  onPrimary: string;
  separator: string;

  fontFamily: string;
  fontFamilyAlt: string;

  fsSmall: string;
  fsMedium: string;
  fsLarge: string;
  fsExtraLarge: string;
  fsHuge: string;

  fwRegular: number;
  fwBold: number;

  spacingMicro: string;
  spacingExtraSmall: string;
  spacingSmall: string;
  spacingMedium: string;
  spacingLarge: string;
  spacingHuge: string;

  borderRadiusSmall: string;
  borderRadiusMedium: string;
  borderRadiusLarge: string;

  borderWidth: string;
};

export const lightTheme: Theme = {
  text: "#000",
  textDim: "#A6A9AF",
  background: "#F9FAFE",
  backgroundAlt: "#F6FAFD",
  cardBackground: "#FFF",
  primary: "#0B3178",
  onPrimary: "#FFF",
  separator: "#E3E4E8",

  fontFamily: "Inter, sans-serif",
  fontFamilyAlt: "Merriweather, serif",

  fsSmall: "0.875rem",
  fsMedium: "1rem",
  fsLarge: "1.25rem",
  fsExtraLarge: "2rem",
  fsHuge: "2.5rem",

  fwRegular: 400,
  fwBold: 700,

  spacingMicro: "0.25rem",
  spacingExtraSmall: "0.75rem",
  spacingSmall: "1rem",
  spacingMedium: "1.5rem",
  spacingLarge: "2rem",
  spacingHuge: "4rem",

  borderRadiusSmall: "4px",
  borderRadiusMedium: "8px",
  borderRadiusLarge: "16px",

  borderWidth: "0.125rem",
} as const;
