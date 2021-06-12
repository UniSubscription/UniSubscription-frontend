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
import React, { useCallback } from "react";
import { ISubscription } from "../../interface";
import { UpdateSubscription } from "../updateSubscription";
import "./index.scss";
import moment from "moment";
import swal from "sweetalert";

const useStyles = makeStyles({
  root: {
    width: "calc(100% / 3 - 20px)",
    margin: "0 10px 20px",
    overflow: "unset",
    display: "flex",
    flexDirection:"column",
    justifyContent:"space-between"
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
    marginBottom: "50px",
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
    justifyContent: "space-between",
  },
  listText: {
    textAlign: "center",
    fontSize: "13px",
    fontWeight: "bold",
  },
  label: {
    textAlign: "center",
    fontSize: "10px",
    fontWeight: "bolder",
    color: "rgb(131, 129, 129)",
    textTransform: "uppercase",
    marginBottom: "5px",
  },
  email: {
    display: "flex",
    justifyContent: "center",
    fontWeight: "bold",
    color: "#424242",
    margin: "8px 0",
    fontSize: "20px",
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

export const SubscriptionCard: React.FC<{
  data: ISubscription;
  handleUpdateSubmit: (evt: React.FormEvent, data: any, id: number) => void;
  handleDelete: (id: number) => void;
}> = ({ data, handleUpdateSubmit, handleDelete }) => {
  const classes = useStyles();

  const getNextBillingDate = useCallback(() => {
    if (moment(data.nextBillingDate).diff(moment(), "day") >= 1) {
      return `${moment(data.nextBillingDate).diff(moment(), "day")} day`;
    } else if (moment(data.nextBillingDate).diff(moment(), "day") < 0) {
      return "0 day";
    } else {
      return `${moment(data.nextBillingDate).diff(moment(), "hours")} hours`;
    }
  }, [data.nextBillingDate]);

  const handleAlert = () => {
    swal({
      title: "Are you sure to delete?",
      text: "Once deleted, you will not be able to recover this subscription!",
      icon: "warning",
      buttons: ["Cancel", "Delete"],
      dangerMode: true,
    }).then((willDelete) => {
      handleDelete(data.id);
      if (willDelete) {
        swal({
          icon: "success",
          title: "Thank you!",
          text: "Your subscription has been deleted!",
        });
      }
    });
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
          style={{ borderRadius: "4px 4px 0 0" }}
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
            {data.name}
          </Typography>
          <List className={classes.listWrap}>
            <ListItem className={classes.listItem}>
              <Typography variant="inherit" className={classes.label}>
                Subscirbed on:
              </Typography>
              <Typography className={classes.listText} variant="h6">
                {data.subscriptionDate}
              </Typography>
            </ListItem>
            <ListItem className={classes.listItem}>
              <Typography variant="inherit" className={classes.label}>
                Next billing:
              </Typography>
              <Typography className={classes.listText} variant="h6">
                {data.nextBillingDate}
              </Typography>
            </ListItem>
            <ListItem className={classes.listItem}>
              <Typography variant="inherit" className={classes.label}>
                Days left:
              </Typography>
              <Typography className={classes.listText} variant="h6">
                {getNextBillingDate()}
              </Typography>
            </ListItem>
          </List>
          <Typography variant="inherit" className={classes.email}>
            {data.subscriptionMail}
          </Typography>
          <Box style={{ marginTop: "10px" }}>
            <Typography className={classes.price} variant="h4">
              {data.cost} $
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
          {getNextBillingDate() === "0 day" && (
            <div className="warning-badge">Payment is due</div>
          )}
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.buttonWrap}>
        <UpdateSubscription
          handleUpdateSubmit={handleUpdateSubmit}
          id={data.id}
        />
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
