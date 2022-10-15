import { muiTheme } from 'storybook-addon-material-ui5'
import theme from '../src/styles/theme'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  decoratorators: [
    muiTheme([theme]),
  ]
}