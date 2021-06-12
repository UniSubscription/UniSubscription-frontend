import { Box, makeStyles } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IAppState } from "../../redux/interface";
import { getSubscription } from "../actions";
import { Navbar } from "../../Navbar";
import { SubscriptionCard } from "./subscriptionCard";
import { NewSubscription } from "./newSubscription";

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
  const user = useSelector((state: IAppState) => state.user);

  const [page, setPage] = useState(1);
  const [dataSize, setDataSize] = useState(10);

  useEffect(() => {
    dispatch(getSubscription(page, dataSize));
  }, [dispatch, page, dataSize]);

  return (
    <div>
      <Navbar />
      <Box display="flex" justifyContent="flex-end" margin="20px 30px">
        <NewSubscription />
      </Box>
      <Box className={classes.root}>
        <SubscriptionCard />
      </Box>
    </div>
  );
};
