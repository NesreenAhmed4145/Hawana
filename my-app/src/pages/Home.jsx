import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {
  Box,
  Typography,
  Button,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Grid,
  Container
} from '@mui/material';

// Sample product data
const products = [
  {
    id: 1,
    name: 'Wireless Headphones',
    price: '$99.99',
    image: '/assets/slide 1.jpg',
    isNew: true
  },
  {
    id: 2,
    name: 'Smart Watch',
    price: '$199.99',
    image: 'https://via.placeholder.com/300x300?text=Smart+Watch',
    isNew: true
  },
  {
    id: 3,
    name: 'Bluetooth Speaker',
    price: '$79.99',
    image: 'https://via.placeholder.com/300x300?text=Bluetooth+Speaker',
    isBestSeller: true
  },
  {
    id: 4,
    name: 'Laptop Backpack',
    price: '$49.99',
    image: 'https://via.placeholder.com/300x300?text=Laptop+Backpack',
    isBestSeller: true
  },
  {
    id: 5,
    name: 'Wireless Earbuds',
    price: '$129.99',
    image: 'https://via.placeholder.com/300x300?text=Wireless+Earbuds',
    isNew: true
  },
  {
    id: 6,
    name: 'Fitness Tracker',
    price: '$89.99',
    image: 'https://via.placeholder.com/300x300?text=Fitness+Tracker',
    isBestSeller: true
  }
];

// Sample category data
const categories = [
  {
    name: 'Electronics',
    image: 'https://via.placeholder.com/400x300?text=Electronics'
  },
  {
    name: 'Clothing',
    image: 'https://via.placeholder.com/400x300?text=Clothing'
  },
  {
    name: 'Accessories',
    image: 'https://via.placeholder.com/400x300?text=Accessories'
  }
];

const HomePage = () => {
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
          <Button
            variant="contained"
            size="large"
            sx={{ px: 4, py: 1.5, fontSize: '1.1rem' , backgroundColor:"rgb(229, 38, 150)",
            '&:hover': {
              backgroundColor: "#cc1c78",

            }}}
          >
            Shop Now
          </Button>
        </Container>
      </Box>

      <Container maxWidth="lg">
        {/* Categories Section */}
        <Box sx={{ mb: 8 }}>
          <Typography
            variant="h4"
            component="h2"
            sx={{
              mb: 6,
              fontWeight: 'bold',
              textAlign: 'center',
              color: 'text.primary'
            }}
          >
            Shop by Category
          </Typography>
          <Grid container spacing={4}>
            {categories.map((category, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card
                  sx={{
                    height: '100%',
                    position: 'relative',
                    borderRadius: 2,
                    overflow: 'hidden',
                    boxShadow: 3,
                    '&:hover': {
                      transform: 'scale(1.02)',
                      transition: 'transform 0.3s ease'
                    }
                  }}
                >
                  <CardMedia
                    component="img"
                    image={category.image}
                    alt={category.name}
                    sx={{ height: 250, objectFit: 'cover' }}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      bgcolor: 'rgba(0,0,0,0.6)',
                      color: 'white',
                      p: 3,
                      textAlign: 'center'
                    }}
                  >
                    <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                      {category.name}
                    </Typography>
                    <Button
                      variant="outlined"
                      color="inherit"
                      size="small"
                      sx={{ mt: 2 }}
                    >
                      View Products
                    </Button>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Best Sellers Section */}
        <Box sx={{ mb: 8 }}>
          <Typography
            variant="h4"
            component="h2"
            sx={{
              mb: 4,
              fontWeight: 'bold',
              textAlign: 'center',
              color: 'text.primary',
              justifyContent:'center'
            }}
          >
            Best Sellers
          </Typography>
          <Grid container spacing={4}>
            {products
              .filter((product) => product.isBestSeller)
              .map((product) => (
                <Grid item xs={12} sm={6} md={4} key={product.id}>
                  <ProductCard product={product} />
                </Grid>
              ))}
          </Grid>
        </Box>

        {/* New Arrivals Section */}
        <Box sx={{ mb: 8 }}>
          <Typography
            variant="h4"
            component="h2"
            sx={{
              mb: 4,
              fontWeight: 'bold',
              textAlign: 'center',
              color: 'text.primary'
            }}
          >
            New Arrivals
          </Typography>
          <Grid container spacing={4}>
            {products
              .filter((product) => product.isNew)
              .map((product) => (
                <Grid item xs={12} sm={6} md={4} key={product.id}>
                  <ProductCard product={product} />
                </Grid>
              ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

// Product Card Component
const ProductCard = ({ product }) => {
  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        transition: 'transform 0.3s',
        borderRadius: 2,
        overflow: 'hidden',
        boxShadow: 3,
        '&:hover': {
          transform: 'translateY(-5px)',
          boxShadow: 6
        }
      }}
    >
      <CardMedia
        component="img"
        image={product.image}
        alt={product.name}
        sx={{
          height: 0,
          paddingTop: '100%',
          objectFit: 'cover'
        }}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h6" component="h3" sx={{ fontWeight: 'bold' }}>
          {product.name}
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ fontWeight: 'medium' }}>
          {product.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="medium"
          color="primary"
          variant="contained"
          fullWidth
          sx={{ py: 1.5 }}
        >
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
};

export default HomePage;
