import { Box, CircularProgress, makeStyles } from "@material-ui/core";
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
  const [loading, setLoading] = useState(false);
  const subscription = useSelector((state: IAppState) => state.subscription);
  const { data } = subscription;

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
      {subscription.status === "PENDING" && (
        <Box display="flex" justifyContent="center">
          <CircularProgress color="secondary" />
        </Box>
      )}
      {subscription.status === "SUCCESS" && (
        <Box className={classes.root}>
          {data?.items.map((item) => {
            return <SubscriptionCard key={item.id} data={item} />;
          })}
        </Box>
      )}
    </div>
  );
};
