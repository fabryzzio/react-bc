import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import '@fontsource/inter';
import '@fontsource/roboto';


export const bcTheme = createTheme({         
    /*Tipografia de la aplicacion */
    typography: {
        fontFamily: 'inter',
        color: '#101010', 
        fontSize: 14,
        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightMedium: 500,
        fontWeightBold: 700,
      },
      
    palette: {
        primary: {
            main: '#1D6CC4'
        },

        secondary: {
            main: '#543884'
        },        

        background:{
            default: '#F9F9f9', 
            paper: '#FFFFFF'
        },     
        grey:{
            main: "#5B5C77" 
        }, 
        error: {
            main: red.A400
        }
    },    

    //  Customizacion de componentes 
    components: {
        //TextField        
        MuiTextField: {
            styleOverrides: {
                root: {
                    '& .MuiFilledInput-root': {
                      backgroundColor: 'white',                 
                    },
                    '& .MuiFilledInput-root:focus': {
                            backgroundColor: '#e8f0f1',                            
                            borderColor: '#1890ff',
                            boxShadow: '0 0 0 2px rgba(24, 144, 255, 0.2)',
                        },
                  },
              
            },
        },

        /* Menues */

        MuiListItemIcon: {
          styleOverrides: {
            root: {
              minWidth: 40, // Para que los iconos no se vean demasiado pegados al texto
              color: '#101010', // Color del icono
              '& .MuiSvgIcon-root': { // Estilo para el icono SVG dentro del ListItemIcon
                fontSize: 20,
              },
              '&:hover': { // Estilos para el estado seleccionado              
                color: '#1D6CC4',
              },
            },
          },
        },
        MuiListItemButton: {
          styleOverrides: {
            root: {
              backgroundColor: 'inherit',
              '&.Mui-selected': { // Estilos para el estado seleccionado
                borderRight: '4px solid #1D6CC4',
                
                color: '#1D6CC4',
                '& .MuiListItemIcon-root': { // Estilo para el icono seleccionado
                  color: '#1D6CC4', // Color del icono cuando está seleccionado
                },
              },
              '&:hover': {
                backgroundColor: 'grey.400',                                
              },
            },
          },
        },

        /*Scrollbars */
        MuiCssBaseline: {
            styleOverrides: {
              '*::-webkit-scrollbar': {
                width: '8px',
              },
              '*::-webkit-scrollbar-thumb': {
                backgroundColor: 'grey',
                borderRadius: '8px',
              },
              '*::-webkit-scrollbar-track': {
                backgroundColor: 'lightgray',
              },
            },
          },


        /*Botones y su customizacion*/
        MuiButton: {
            styleOverrides: {
              root: {
                //Style general buttons general
                padding: '8px',
                fontSize: "16px",
                textTransform: 'none',                
                fontWeight: 'bold',
                lineHeight: 1.75,
                
              },
              contained: {
                // Styles for contained buttons
              },
              outlined: {
                // Styles for outlined buttons
                border:'2px solid',
                '&:hover': {                        
                        border: '2px solid',
                    }
              },
              text: {
                // Styles for text buttons
              },
            },
        },
    },    

    /*Redondeo general de la aplicacion */    
    shape: {
        borderRadius: 8,        
    }, 
    breakpoints: {
        values: {
          xs: 0,
          sm: 600,
          md: 900,
          lg: 1200,
          xl: 1536,
        },
      },  
        
});





