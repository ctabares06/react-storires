import { createTheme, responsiveFontSizes } from '@mui/material';

export default responsiveFontSizes(
  createTheme({
    palette: {
      gray: {
        main: '#ECE5F0',
        light: '##F6F7FA',
      },
      dark: {
        main: '#12130f',
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
            props: { color: 'gray' },
            style: ({ theme }) => ({
              color: theme.palette.gray.main,
            })
          },
          {
            props: { color: 'lightgray' },
            style: ({ theme }) => ({
              color: theme.palette.gray.main,
            })
          },
          {
            props: { color: 'orange' },
            style: ({ theme }) => ({
              color: theme.palette.orange.main,
            })
          },
        ]
      },
      MuiAppBar: {
        styleOverrides: {
          root: ({ theme }) => ({
            paddingLeft: theme.spacing(1),
            paddingRight: theme.spacing(1),
            paddingBottom: theme.spacing(1),
            paddingTop: theme.spacing(1),
          })
        }
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
