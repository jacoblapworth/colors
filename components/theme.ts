import {
  extendTheme,
  withDefaultColorScheme,
  theme as baseTheme,
} from '@chakra-ui/react'

const theme = extendTheme(
  {
    colors: {
      brand: baseTheme.colors.purple,
    },
  },
  withDefaultColorScheme({ colorScheme: 'brand' })
)

export default theme
