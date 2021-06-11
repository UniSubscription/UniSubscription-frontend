import { Box, makeStyles } from "@material-ui/core";
import React from "react";
import {Navbar} from "../../Navbar";
import { SubscriptionCard } from "./subscriptionCard";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexWrap: "wrap",
    padding: "20px",
  },
});

export const Subscription: React.FC = () => {
  const classes = useStyles();

  return (
    <div>
      <Navbar />
      <Box className={classes.root}>
        <SubscriptionCard />
      </Box>
    </div>
  );
};
