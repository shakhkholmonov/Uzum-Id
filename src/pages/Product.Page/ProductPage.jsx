import { ArrowBack, ArrowForward } from "@mui/icons-material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Breadcrumbs, Grid, IconButton, Link, Stack, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Footer from "../../component/Layout/Footer";
import SearchAppBar from "../../component/Layout/Header";
import GetGoods from "../../hooks/getGoods";

const ProductPage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const handlePrevClick = () => {
    if (leftImages && leftImages.length > 0) {
      setCurrentImageIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : leftImages.length - 1));
    }
  };
  const handleNextClick = () => {
    if (leftImages && leftImages.length > 0) {
      setCurrentImageIndex((prevIndex) => (prevIndex < leftImages.length - 1 ? prevIndex + 1 : 0));
    }
  };

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const id = JSON.parse(searchParams.get("id"));
  const { Goods } = GetGoods();
  const myProd = Goods && Goods.find((good) => +good.id === id);

  const leftImages = myProd && myProd.media.slice(0, 3);
  const rightImage = myProd && myProd.media[1];
  const [value, setValue] = React.useState(2);
  const imageUrl1 = "https://images.uzum.uz/cnin7s84idugcqeg4ce0/original.jpg";
  const imageUrl2 = "https://ae04.alicdn.com/kf/S8100932f11ce46cd8f9e6fc48ac16bd7j.jpg";
  const imageWidth = "800px";

  return (
    <>
      <SearchAppBar />
      <Grid container spacing={2} pl={3} pt={3}>
        <Grid item xs={12}>
          <Stack spacing={2}>
            <Breadcrumbs>
              <Link underline="hover" color="inherit" href="/">
                Bosh sahifa
              </Link>
              {myProd && (
                <Link underline="hover" color="inherit" href="/material-ui/getting-started/installation/">
                  {myProd.type}
                </Link>
              )}
              {myProd && <Typography>{myProd.title}</Typography>}
            </Breadcrumbs>
          </Stack>
        </Grid>
        {/* Main Content */}
        <Grid item xs={12}>
          <Stack direction="row" spacing={2}>
            {/* Left Side Images */}
            <Stack spacing={2}>
              {leftImages &&
                leftImages.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={myProd && myProd.title}
                    style={{ width: "100px", height: "auto" }}
                  />
                ))}
            </Stack>

            {/* Big Image Container */}
            {leftImages && leftImages.length > 0 && (
              <div style={{ position: "relative", width: "600px", height: "700px" }}>
                {/* Big Image */}
                <img
                  src={leftImages[currentImageIndex]}
                  alt={myProd && myProd.title}
                  style={{ width: "600px", height: "700px" }}
                />

                {/* Navigation Buttons */}
                <IconButton
                  onClick={handlePrevClick}
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "10px",
                    transform: "translateY(-50%)",
                  }}
                >
                  <ArrowBack />
                </IconButton>
                <IconButton
                  onClick={handleNextClick}
                  style={{
                    position: "absolute",
                    top: "50%",
                    right: "10px",
                    transform: "translateY(-50%)",
                  }}
                >
                  <ArrowForward />
                </IconButton>
              </div>
            )}
            {myProd && (
              <Stack spacing={3} style={{ position: "sticky" }}>
                <Box
                  sx={{
                    "& > legend": { mt: 2 },
                  }}
                >
                  <Stack direction="row" alignItems="center" style={{ marginLeft: "40px" }}>
                    <Rating name="product-rating" value={myProd.rating} precision={0.5} readOnly size="small" />
                    <Typography variant="body2" color="textSecondary">
                      {myProd.rating.toFixed(1)} (3 оценок) Более 23 заказов
                    </Typography>
                    <Box sx={{ display: "flex" }}>
                      <FavoriteBorderIcon sx={{ marginLeft: "50px" }} />
                      <Typography>В желания</Typography>
                    </Box>
                  </Stack>
                </Box>
                <div>
                  <Typography variant="h4" gutterBottom style={{ marginLeft: "40px", fontSize: "22px" }}>
                    {myProd.title}
                  </Typography>
                  <Typography style={{ marginLeft: "40px" }}>Продавец:</Typography>
                  <div style={{ display: "flex" }}>
                    <Typography style={{ marginLeft: "40px", marginTop: "15px" }}>Доставка:</Typography>
                    <Typography style={{ marginLeft: "40px", marginTop: "15px" }}>1 день, бесплатно</Typography>
                  </div>
                </div>
                <hr
                  style={{
                    marginLeft: "40px",
                    marginTop: "40px",
                    marginBottom: "2px",
                    borderColor: "rgba(54, 54, 64, .2)",
                  }}
                />
                <Typography style={{ marginLeft: "40px" }}>Количество:</Typography>
                <Box>
                  <div style={{ position: "relative", width: "150px" }}>
                    <button
                      style={{
                        position: "absolute",
                        left: 0,
                        top: 0,
                        bottom: 0,
                        border: "none",
                        background: "none",
                        cursor: "pointer",
                        padding: "0 10px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: value <= 1 ? "#CCC" : "#000",
                      }}
                      disabled={value <= 1}
                      onClick={() => setValue((prevValue) => Math.max(1, prevValue - 1))}
                    >
                      <i className="material-icons" style={{ fontSize: "20px" }}>
                        remove
                      </i>
                    </button>
                    <input
                      id="input-undefined16404"
                      type="number"
                      min="1"
                      value={value}
                      readOnly
                      style={{
                        width: "100%",
                        textAlign: "center",
                        border: "1px solid rgba(54, 54, 64, .2)",
                        borderRadius: "4px",
                        padding: "13px 30px",
                        boxSizing: "border-box",
                      }}
                    />
                    <button
                      style={{
                        position: "absolute",
                        right: 0,
                        top: 0,
                        bottom: 0,
                        border: "none",
                        background: "none",
                        cursor: "pointer",
                        padding: "0 10px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: value >= 10 ? "#CCC" : "#000",
                      }}
                      disabled={value >= 10}
                      onClick={() => setValue((prevValue) => Math.min(10, prevValue + 1))}
                    >
                      <i className="material-icons" style={{ fontSize: "20px" }}>
                        add
                      </i>
                    </button>
                  </div>
                </Box>
                <Box>
                  <Typography style={{ marginLeft: "40px", marginTop: "3px" }}>Цена:</Typography>
                  <div style={{ display: "flex" }}>
                    <Typography style={{ marginLeft: "40px", marginTop: "8px", fontSize: "25px" }}>
                      {myProd.price} сум
                    </Typography>
                    <Typography
                      class="sale"
                      style={{ marginLeft: "20px", marginTop: "15px", fontSize: "15px", color: "grey" }}
                    >
                      26 000 сум
                    </Typography>
                    <Typography
                      style={{
                        marginLeft: "20px",
                        marginTop: "19px",
                        fontSize: "15px",
                        backgroundColor: "#7000ff",
                        height: "21px",
                        width: "155px",
                        paddingLeft: "17px",
                        borderRadius: "4px",
                        color: "white",
                      }}
                    >
                      Рассрочка дешевле
                    </Typography>
                  </div>
                </Box>

                <Box style={{ marginLeft: "40px" }}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      backgroundColor: "#f2f4f7",
                      height: "8vh",
                      borderRadius: "10px",
                      "&:hover": {
                        backgroundColor: "lightgray",
                        cursor: "pointer",
                      },
                    }}
                  >
                    <Typography
                      sx={{
                        marginLeft: "20px",
                        backgroundColor: "yellow",
                        width: "180px",
                        height: "30px",
                        paddingTop: "10px",
                        paddingLeft: "20px",
                        borderRadius: "10px",
                      }}
                    >
                      От 1 462 сум/мес
                    </Typography>
                    <Typography sx={{ marginLeft: "10px" }}>в рассрочку</Typography>
                    <div style={{ marginLeft: "160px" }}>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        sx={{
                          ml: "auto",
                          width: "24px",
                          height: "24px",
                          fill: "#76797F",
                          fillOpacity: "0.6",
                        }}
                      >
                        <path
                          d="M18 14C18 14.3672 17.8013 14.4996 17.5508 14.7305L11.5 20.3242C11.3032 20.5195 11.1211 20.75 10.7266 20.75C10.4492 20.75 10 20.5352 10 19.9492C10 19.5859 10.2942 19.4151 10.5 19.2109L16.1172 14L10.4922 8.78125C10.2954 8.57705 9.99609 8.42578 9.99609 8C9.99609 7.66406 10.2578 7.25 10.793 7.25C11.0882 7.25 11.3579 7.52734 11.5547 7.72266L17.5508 13.25C17.8013 13.4897 18 13.6328 18 14Z"
                          fill="#76797F"
                          fill-opacity="0.6"
                        ></path>
                      </svg>
                    </div>
                  </Box>
                </Box>
                <Box style={{ marginLeft: "40px" }} sx={{}}>
                  <Box sx={{ display: "flex", gap: "15px" }}>
                    <button
                      style={{
                        backgroundColor: "#7000ff",
                        color: "#fff",
                        width: "44%",
                        height: "6vh",
                        borderRadius: "14px",
                        fontSize: "18px",
                        borderColor: "#7000ff",
                      }}
                    >
                      Добавить в корзину{" "}
                    </button>
                    <button
                      style={{
                        borderColor: "#7000ff",
                        backgroundColor: "#ffffff",
                        color: "#7000ff",
                        width: "44%",
                        height: "6vh",
                        borderRadius: "14px",
                        fontSize: "18px",
                      }}
                    >
                      Купить в 1 клик{" "}
                    </button>
                  </Box>
                </Box>
                <Box
                  style={{
                    border: "0.5px solid lightgrey",
                    borderRadius: "17px",
                    width: "85%",
                    marginLeft: "40px",
                    padding: "auto",
                  }}
                >
                  <div style={{ padding: "10px" }}>
                    <Typography>Быстрая доставка от 1 дня</Typography>
                    <Typography color={"gray"}>В пункты выдачи Uzum или курьером</Typography>
                    <hr />
                    <Typography>Безопасная оплата удобным способом</Typography>
                    <Typography color={"gray"}>Оплачивайте картой, наличными или в рассрочку</Typography>
                    <Box>Logos</Box>
                    <hr />
                    <Typography>Простой и быстрый возврат</Typography>
                    <Typography color={"gray"}>Примем товары в течение 10 дней и сразу вернём деньги</Typography>
                  </div>
                </Box>
                <Box
                  style={{
                    marginLeft: "47px",
                    backgroundColor: "#F5E9D5",
                    width: "85%",
                    height: "5.5vh",
                    borderRadius: "7px",
                  }}
                >
                  <div style={{ marginLeft: "34px" }}>
                    <svg
                      style={{ marginTop: "10px" }}
                      width="28"
                      height="28"
                      viewBox="0 0 28 28"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M14 4.5C12.2402 4.5 11 5.88779 11 7.5H17C17 5.88779 15.7598 4.5 14 4.5ZM9.5 11.5V9H7.5V14.25C7.5 14.6642 7.16421 15 6.75 15C6.33578 15 6 14.6642 6 14.25V8.25V7.5H6.75H9.5C9.5 5.11221 11.3598 3 14 3C16.6402 3 18.5 5.11221 18.5 7.5H21.25H22V8.25V21.75C22 22.9926 20.9926 24 19.75 24H15.25C14.8358 24 14.5 23.6642 14.5 23.25C14.5 22.8358 14.8358 22.5 15.25 22.5H19.75C20.1642 22.5 20.5 22.1642 20.5 21.75V9H18.5V11.5H17V9H11V11.5H9.5ZM14.2738 18.0323C14.5667 17.7395 14.5667 17.2646 14.2738 16.9717C13.9809 16.6788 13.506 16.6788 13.2131 16.9717L7.99548 22.1893L5.78034 19.9742C5.48744 19.6813 5.01257 19.6813 4.71967 19.9741C4.42678 20.267 4.42677 20.7419 4.71966 21.0348L7.46513 23.7803C7.60579 23.921 7.79655 24 7.99547 24C8.19438 24 8.38515 23.921 8.5258 23.7803L14.2738 18.0323Z"
                        fill="#141415"
                      ></path>
                    </svg>
                    <div style={{ marginTop: "-30px", marginLeft: "40px" }}>173 человека купили на этой неделе</div>
                  </div>
                </Box>
              </Stack>
            )}
          </Stack>
        </Grid>
      </Grid>
      <Footer />
    </>
  );
};

export default ProductPage;
