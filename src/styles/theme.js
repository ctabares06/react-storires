import { createTheme, responsiveFontSizes } from '@mui/material';

export default responsiveFontSizes(
  createTheme({
    palette: {
      gray: {
        main: '#ECE5F0',
      },
      dark: {
        main: '#3C3C3B',
      },
      yellow: {
        main: '#F5D547',
      },
      orange: {
        main: '#EE6123',
      },
      purple: {
        main: '#894384',
        light: '#AE5BA9',
      },
    },
    typography: {
      fontFamily: ['Montserrat', 'sans-serif'].join(','),
    },
    components: {
      MuiTypography: {
        variants: [
          {
            props: { color: 'light' },
            style: ({ theme }) => ({
              color: theme.palette.gray.main,
            })
          }
        ]
      },
      MuiAppBar: {
      },
      MuiButtonBase: {
        defaultProps: {
        },
        styleOverrides: {
          root: ({ theme }) => ({
            width: '100%',
            cursor: 'pointer',
            paddingTop: theme.spacing(1.5),
            paddingBottom: theme.spacing(1.5),
            paddingLeft: theme.spacing(1),
            paddingRight: theme.spacing(1),
            fontWeight: 'bold',
            textTransform: 'uppercase',
          }),
        },
        variants: [
          {
            props: { variant: 'contained', color: 'yellow' },
            style: ({ theme }) => ({
              background: theme.palette.yellow.main,
              color: theme.palette.gray.main,
            }),
          },
          {
            props: { variant: 'contained', color: 'purple' },
            style: ({ theme }) => ({
              background: theme.palette.purple.main,
              color: theme.palette.gray.main,
            }),
          },
        ],
      },
    },
  })
);
