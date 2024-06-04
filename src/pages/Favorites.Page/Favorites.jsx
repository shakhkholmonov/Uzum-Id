import { Box, Button, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import SearchAppBar from '../../component/Layout/Header';
import ProductCard from '../../component/productCard';
import Footer from '../../component/Layout/Footer';

const Favorites = () => {
  const [likedGoods, setLikedGoods] = useState([]);

  useEffect(() => {
    const storedLikedGoods = JSON.parse(localStorage.getItem('likedGoods')) || [];
    setLikedGoods(storedLikedGoods);
  }, []);

  return (
    <section style={{ padding: '20px' }}>
      <SearchAppBar />
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '100px' }}>
        {likedGoods.length === 0 ? (
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            margin="80px 0 70px"
            width="100%"
          >
            <img
              src="https://uzum.uz/static/img/hearts.cf414be.png"
              alt="No favorites"
              style={{ height: '128px', width: '128px', marginBottom: '20px' }}
            />
            <Typography
              variant="h5"
              component="div"
              style={{ marginBottom: '10px' }}
            >
              Sizga yoqqanini qoʻshing
            </Typography>
            <Typography
              variant="body1"
              component="div"
              style={{ textAlign: 'center', marginBottom: '20px' }}
            >
              Mahsulotdagi ♡ belgisini bosing. Akkauntga kiring va barcha saralanganlar saqlanib qoladi
            </Typography>
            <Button
              variant="contained"
              style={{ backgroundColor: '#7733FF', color: '#fff' }}
            >
              Akkauntga kirish
            </Button>
          </Box>
        ) : (
          <Box
            display="flex"
            flexWrap="wrap"
            gap={2}
            justifyContent="center"
            sx={{
              '& > div': {
                flex: '1 1 300px',
                maxWidth: '300px',
                minWidth: '200px',
              },
            }}
          >
            {likedGoods.map((good) => (
              <ProductCard key={good.id} good={good} />
            ))}
          </Box>
        )}
      </Box>
      <Footer />
    </section>
  );
};

export default Favorites;
