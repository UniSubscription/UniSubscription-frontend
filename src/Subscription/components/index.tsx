import { Box, makeStyles } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IAppState } from "../../redux/interface";
import { getSubscription } from "../actions";
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
  const dispatch = useDispatch();
  const subscription = useSelector((state: IAppState) => state.subscription);
  const [page, setPage] = useState(1);
  const [dataSize, setDataSize] = useState(10);
  console.log(subscription);

  useEffect(() => {
    dispatch(getSubscription(page, dataSize));
  }, [dispatch, page, dataSize]);

  return (
    <div>
      <Box className={classes.root}>
        <SubscriptionCard />
      </Box>
    </div>
  );
};
