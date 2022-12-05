import { createTheme, responsiveFontSizes } from '@mui/material';

export default responsiveFontSizes(
  createTheme({
    palette: {
      background: {
        default: '#000000'
      },
      primary: {
        main: '#14213D',
      }, 
      secondary: {
        main: '#FCA311',
      }
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
