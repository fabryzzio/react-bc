import { Card, Box, Grid, CardMedia, CardContent, CardActionArea, Typography, Link } from '@mui/material';
import { StarOutline } from '@mui/icons-material';
import LogoTracking from '../../assets/LogoTracking.svg'; 
import LogoCore from '../../assets/LogoCore.svg'; 
import LogoOrigination from '../../assets/LogoOrigination.svg'; 
import { useNavigate } from 'react-router-dom'; // Import useNavigate

export const ProductsListView = () => {

  const products = [
    {
        img: LogoTracking,
        title: 'Clever Tracking',
        description: 'Software BeClever',
    },
    {
        img: LogoCore,
        title: 'Clever Core',
        description: 'Software BeClever',
    },
    {
        img: LogoOrigination,
        title: 'Clever Origination',
        description: 'Software BeClever',
    },
    {
        img: LogoTracking,
        title: 'Clever Tracking',
        description: 'Software BeClever',
    },
    {
        img: LogoCore,
        title: 'Clever Core',
        description: 'Software BeClever',
    },
    {
        img: LogoOrigination,
        title: 'Clever Origination',
        description: 'Software BeClever',        
    }      
    
  ];

  const navigate = useNavigate(); // Initialize navigate hook

  const handleProductClick = (product) => {
    //Navegacion default para todos los usuarios
    navigate("/dashboard");    
  };

  return (
    
   <>
      {
        products.map((item, index) => (        
            <Grid xs={12}  md={4}  padding={1}>
                <Card item key={index} onClick={() => handleProductClick(item)}>
                    <CardActionArea> 
                        <CardContent>
                            <CardMedia
                                component="img" 
                                height="147"
                                width="264"   
                                title={item.title}                            
                                image={item.img}
                                alt={item.title}
                                sx={{
                                    objectFit: 'revert', 
                                    objectPosition: 'center', 
                                    padding:'32px'
                                }}
                            />                
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
        ))
      }
    
    </>
  );
};