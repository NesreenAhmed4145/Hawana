import React from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Typography,
  Button,
  Card,
  CardMedia,
  CardContent,
  Grid,
  Container
} from '@mui/material';

const HomePage = () => {
  // Categories data
  const categories = [
    {
      name: 'All',
      description: 'Explore our complete collection',
      image: '/assets/slide2.jpg'
    },
    {
      name: 'Olive',
      description: 'Premium quality olives',
      image: '/assets/olives.jpg'
    },
    {
      name: 'Labneh',
      description: 'Creamy traditional labneh',
      image: '/assets/labneh.jpg'
    },
    {
      name: 'Cheese',
      description: 'World-class cheeses',
      image: '/assets/cheese.jpeg'
    },
    
    {
      name: 'Our Passion',
      description: 'Discover our story',
      image: '/assets/passion.png'
    }
  ];

  // Product data
  const products = [
    {
      id: 1,
      name: 'Extra Virgin Oil',
      price: '$29.99',
      image: '/assets/oil.jpg',
      isNew: true
    },
    {
      id: 2,
      name: 'Herb Labneh',
      price: '$8.99',
      image: '/assets/green labneh.jpg',
      isBestSeller: true
    },
    {
      id: 3,
      name: 'Gouda Cheese',
      price: '$15.99',
      image: '/assets/gouda.jpeg',
      isBestSeller: true
    },
    {
      id: 4,
      name: 'Olive Mix',
      price: '$14.99',
      image: '/assets/cheese.jpeg',
      isBestSeller: true
    },
    {
      id: 5,
      name: 'Spiced Labneh',
      price: '$9.99',
      image: '/assets/passion.png',
      isNew: true
    }
    , {
      id: 5,
      name: 'Spiced Labneh',
      price: '$9.99',
      image: '/assets/passion.png',
      isNew: true
    }, {
      id: 5,
      name: 'Spiced Labneh',
      price: '$9.99',
      image: '/assets/passion.png',
      isNew: true
    }, {
      id: 5,
      name: 'Spiced Labneh',
      price: '$9.99',
      image: '/assets/passion.png',
      isNew: true
    }
  ];

  return (
    <Box sx={{ minHeight: '100vh' }}>
    {/* Hero Banner with background image and blur overlay */}
    <Box
  sx={{
    position: 'relative',
    height: { xs: 400, md: 550 },
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    textAlign: 'center',
    mb: 6,
    overflow: 'hidden',
  
  }}
>
 {/* Render the image directly */}
 <Box
component="img"
src="/assets/slide1.jpg"
alt="Hero Banner"
sx={{
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '160%',
  objectFit: 'cover', 
  objectPosition: 'center', 
  backgroundColor: '#111417', 
  zIndex: 0,
}}
/>



  {/* Dark Overlay */}
  <Box
    sx={{
      position: 'absolute',
      inset: 0,
      bgcolor: 'rgba(0, 0, 0, 0.4)',
      backdropFilter: 'blur(2px)',
      zIndex: 1,
    }}
  />
      {/* Hero Content */}
      <Container maxWidth="md" sx={{ zIndex: 2 }}>
        <Typography variant="h3" component="h1" sx={{ fontWeight: 'bold', mb: 2 }}>
          Welcome to Our Store
        </Typography>
        <Typography variant="h5" sx={{ mb: 4 }}>
          Discover amazing products at unbeatable prices
        </Typography>
        <Link to="/shop">
  <Button
    variant="contained"
    size="large"
    sx={{
      px: 4,
      py: 1.5,
      fontSize: '1.1rem',
      backgroundColor: 'rgb(229, 38, 150)',
      '&:hover': {
        backgroundColor: '#cc1c78',
      },
    }}
  >
    Shop Now
  </Button>
</Link>
      </Container>
    </Box>


      {/* Categories Section */}
      <Container maxWidth="xl" sx={{ py: 8 }}>
        <SectionTitle>Shop Categories</SectionTitle>
        <Grid container spacing={5} sx={{ mb: 10 }}>
          {categories.map((item) => (
            <Grid item xs={6} md={2.4} key={item.name}>
              <UniformCard item={item} />
            </Grid>
          ))}
        </Grid>

        {/* Best Sellers Section */}
        <SectionTitle>Best Sellers</SectionTitle>
        <Grid container spacing={3} sx={{ mb: 10 ,justifyContent:"center" }}>
          {products.filter(p => p.isBestSeller).map((product) => (
            <Grid item xs={6} md={2.4} key={product.id}>
              <UniformCard item={product} showPrice />
            </Grid>
          ))}
        </Grid>

        {/* New Arrivals Section */}
        <SectionTitle>New Arrivals</SectionTitle>
        <Grid container spacing={3}sx={{justifyContent:"center" }}>
          {products.filter(p => p.isNew).map((product) => (
            <Grid item xs={6} md={2.4} key={product.id}>
              <UniformCard item={product} showPrice />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

// Reusable Components
const SectionTitle = ({ children }) => (
  <Typography variant="h3" sx={{
    mb: 6,
    fontWeight: 800,
    textAlign: 'center',
    position: 'relative',
    fontSize: { xs: '2rem', md: '2.25rem' },
    '&:after': {
      content: '""',
      position: 'absolute',
      width: '80px',
      height: '4px',
      bottom: '-20px',
      left: '50%',
      transform: 'translateX(-50%)',
      backgroundColor: 'primary.main',
      borderRadius: '2px'
    }
  }}>
    {children}
  </Typography>
);

const UniformCard = ({ item, showPrice }) => (
  <Card sx={{
    height: '100%',
    borderRadius: '12px',
    textAlign:'center',
    overflow: 'hidden',
    boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
    transition: 'transform 0.3s ease',
    '&:hover': {
      transform: 'translateY(-5px)'
    }
  }}>
    <Box sx={{
      position: 'relative',
      paddingTop: '100%',
      overflow: 'hidden'
    }}>
      <CardMedia
        image={item.image}
        alt={item.name}
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover'
        }}
      />
    </Box>
    <CardContent sx={{
      px: 2,
      py: 3,
      textAlign: 'center',
      height: 120,
      width:250,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    }}>
      <div>
        <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
          {item.name}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary', minHeight: 40 }}>
          {item.description}
        </Typography>
      </div>
      {showPrice && (
        <Typography variant="subtitle1" sx={{ fontWeight: 700, color: 'primary.main' }}>
          {item.price}
        </Typography>
      )}
    </CardContent>
  </Card>
);

export default HomePage;