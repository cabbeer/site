import { Center, extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
  global: props => ({
    body: {
      bg: mode('#f7f7f7', '#070707')(props)
    }
  })
}

const components = {
  Heading: {
    variants: {
      'section-title': {
        textDecoration: 'underline',
        fontSize: 20,
        textUnderlineOffset: 6,
        textDecorationColor: '#525252',
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4,
      }
    }
  },
  Link: {
    baseStyle: props => ({
      color: mode('#C30C0C', '#00c3ff')(props),
      textUnderlineOffset: 3
    })
  }
}

const fonts = {
  heading: "'Atkinson Hyperlegible'",
  body: "'Atkinson Hyperlegible'"
}

// Font note - pair light-gray with #222 & dark-gray with #f0f0f0 colour font

const colors = {
  grassTeal: '#a8b0d3',
  darkAction: `#282828`,
  darkOffset: `#1b1b1b`,

  gray : {
    light: '#333'
  }

}

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true
}

const theme = extendTheme({ config, styles, components, fonts, colors })
export default theme
