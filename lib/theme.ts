const color = {
  black: "#000000",
  white: "#ffffff",
  lightGrey: "#ececec",
  grey: "#8b8b8b",
} as const;

type ColorKeys = keyof typeof color;
type Color = (typeof color)[ColorKeys];

export const theme = {
  fontSize: {
    s: "0.9rem",
    m: "1rem",
    l: "2rem",
    xl: "4rem",
  },
  space: {
    xs: "5px",
    s: "10px",
    m: "20px",
  },
  boxShadow: (color: Color) => `5px 5px 100px ${color}`,
  fontWeight: {
    normal: 400,
    bold: 500,
    bolder: 700,
  },
  color,
} as const;

export type Theme = typeof theme;
