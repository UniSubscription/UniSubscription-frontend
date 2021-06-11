import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  makeStyles,
  Box,
  List,
  ListItem,
} from "@material-ui/core";
import React, { useState } from "react";
import { UpdateSubscription } from "../updateSubscription";
import "./index.scss";

const useStyles = makeStyles({
  root: {
    width: "calc(100% / 3 - 20px)",
    margin: "0 10px 20px",
  },
  icon: {
    objectFit: "contain",
    width: "550px",
    height: "55px",
  },
  iconHolder: {
    borderRadius: "100%",
    position: "absolute",
    left: "50%",
    top: "-16px",
    transform: "translate(-50%, -50%)",
    width: "80px",
    height: "80px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "0px 7.56431px 22.6929px rgba(0, 0, 0, 0.25)",
    background: "#fff",
  },
  container: {
    width: "100%",
    background: "red",
    position: "relative",
    marginBottom: "30px",
  },
  title: {
    textAlign: "center",
    fontWeight: "bold",
  },
  listWrap: {
    display: "flex",
    justifyContent: "space-between",
  },
  listItem: {
    padding: "0",
    width: "calc(100% / 3 - 5px)",
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  listText: {
    textAlign: "center",
    fontSize: "14px",
    fontWeight: "bold",
  },
  label: {
    textAlign: "center",
    fontSize: "11px",
    fontWeight: "bolder",
    color: "rgb(131, 129, 129)",
    textTransform: "uppercase",
    marginBottom: "5px",
  },
  buttonGreen: {
    background: "green",
    color: "#fff",
    "&:hover": {
      background: "rgb(1, 61, 1)",
      opacity: 1,
    },
  },
  price: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: "40px",
  },
  cardButton: {
    "&:hover": {
      background: "#fff",
      opacity: 1,
      cursor: "default",
    },
  },
  buttonWrap: {
    marginBottom: "10px",
    justifyContent: "center",
  },
});

export const SubscriptionCard: React.FC = () => {
  const classes = useStyles();

  const [showAlert, setShowAlert] = useState(false);

  const handleAlert = () => {
    setShowAlert(!showAlert);
  };

  return (
    <Card className={`${classes.root} subsCard`}>
      <CardActionArea className={classes.cardButton}>
        <CardMedia
          component="img"
          alt="Backgroung pattern"
          height="140"
          image={`${process.env.PUBLIC_URL}/bg.jpg`}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Box className={classes.container}>
            <Box className={classes.iconHolder}>
              <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="50"
                width="50"
                image={`${process.env.PUBLIC_URL}/brand.png`}
                title="Subscriped company"
                className={classes.icon}
              />
            </Box>
          </Box>
          <Typography
            className={classes.title}
            gutterBottom
            variant="h5"
            component="h2"
          >
            Youtube
          </Typography>
          <List className={classes.listWrap}>
            <ListItem className={classes.listItem}>
              <Typography variant="inherit" className={classes.label}>
                Subscirbed on:
              </Typography>
              <Typography className={classes.listText} variant="h6">
                01/04/2019
              </Typography>
            </ListItem>
            <ListItem className={classes.listItem}>
              <Typography variant="inherit" className={classes.label}>
                Next billing:
              </Typography>
              <Typography className={classes.listText} variant="h6">
                01/04/2019
              </Typography>
            </ListItem>
            <ListItem className={classes.listItem}>
              <Typography variant="inherit" className={classes.label}>
                Days left:
              </Typography>
              <Typography className={classes.listText} variant="h6">
                3 days
              </Typography>
            </ListItem>
          </List>
          <Box style={{ marginTop: "10px" }}>
            <Typography className={classes.price} variant="h4">
              5.99$
            </Typography>
            <Typography
              className={classes.label}
              style={{
                textAlign: "center",
                display: "block",
                color: "#f50057",
              }}
              variant="inherit"
            >
              Monthly payment
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.buttonWrap}>
        <UpdateSubscription />
        <div>
          <Button
            size="small"
            variant="contained"
            color="secondary"
            onClick={handleAlert}
          >
            delete
          </Button>
        </div>
        <Button className={classes.buttonGreen} size="small" color="primary">
          pay
        </Button>
      </CardActions>
    </Card>
  );
};
