import { Box, makeStyles } from "@material-ui/core";
import React from "react";
import { HeaderMenu } from "./menu";
import { SubscriptionCard } from "./subscriptionCard";

const useStyles = makeStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      padding: '20px',
    },
  });

export const Subscription: React.FC = () => {
  const classes = useStyles();

  return (
    <div>
      <HeaderMenu />
      <Box className={classes.root}>
        <SubscriptionCard />
        <SubscriptionCard />
        <SubscriptionCard />
        <SubscriptionCard />
        <SubscriptionCard />
        <SubscriptionCard />
      </Box>
    </div>
  );
};
