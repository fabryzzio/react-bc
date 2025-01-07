import { Card, Box, Grid, CardMedia, CardContent, CardActionArea, Typography, Link } from '@mui/material';
import Azul from '../../assets/icons/Azul.svg'; 
import Verde from '../../assets/icons/Verde.svg'; 
import Amarillo from '../../assets/icons/Amarillo.svg'; 
import Salmon from '../../assets/icons/Salmon.svg'; 
import Violeta from '../../assets/icons/Violeta.svg'; 
import Rojo from '../../assets/icons/Rojo.svg'; 
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { bcTheme } from '../../theme';

export const ProductsListHeader = () => {
  const products = [    
    {
        img: Azul,
        title: 'Origination',
        description: 'Software BeClever',
    },
    {
      img: Amarillo,
      title: 'Monitor',
      description: 'Software BeClever',
    },
    {
      img: Salmon,
      title: 'Report',
      description: 'Software BeClever',
    },
    {
      img: Verde,
      title: 'Core',
      description: 'Software BeClever',
    },
    {
      img: Violeta,
      title: 'Decision',
      description: 'Software BeClever',
    },
    {
      img: Rojo,
      title: 'Tracking',
      description: 'Software BeClever',
    },
    {
      img: Azul,
      title: 'Origination',
      description: 'Software BeClever',
  },
  {
    img: Amarillo,
    title: 'Monitor',
    description: 'Software BeClever',
  },
  {
    img: Salmon,
    title: 'Report',
    description: 'Software BeClever',
  },
  ];

  const navigate = useNavigate(); // Initialize navigate hook

  const handleProductClick = (product) => {
    //Navegacion mocked
    navigate("/");
    
  };


  return (
    <Grid container  spacing={1} paddingTop={5} paddingBottom={5} >      
    
      {products.map((item, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card 
                sx={{
                      textAlign: 'center',                        
                      boxShadow: 'none',
                      borderBottom: 'none',
                    }}>
            
              {/* <Link href={image.link} underline="none"> */}

              
              <CardMedia
                component="img" 
                height="50"
                width="50"                               
                image={item.img}                                
                alt={item.title}
                sx={{
                    objectFit: 'none', 
                    objectPosition: 'center',
                }}
              />              
              <Typography sx={{
                    fontSize: 12,
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',                    
                    textOverflow: 'ellipsis',
                    // Responsive truncation
                      [bcTheme.breakpoints.down('sm')]: {
                        fontSize:'10px',                        
                      },
                      [bcTheme.breakpoints.up('md')]: {
                        maxWidth: '300px',
                      },  
                    }}>
                  {item.title}
              </Typography>
          </Card>
        </Grid>
      ))}
    </Grid>
  )
};