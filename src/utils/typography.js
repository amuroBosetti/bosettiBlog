import Typography from "typography"
import FairyGates from "typography-theme-fairy-gates"

const themeColor = "#ff8800";

FairyGates.overrideThemeStyles = () => {
  return {
    "a.gatsby-resp-image-link": {
      boxShadow: `none`,
    },
    "a": {
      color: themeColor,
      backgroundImage: 'none',
    },
    "a:hover": {
      textDecoration: 'underline',
    },
  }
}

delete FairyGates.googleFonts

const typography = new Typography(FairyGates)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
