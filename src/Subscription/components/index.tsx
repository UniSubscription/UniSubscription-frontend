import { Box, CircularProgress, makeStyles } from "@material-ui/core";
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IAppState } from "../../redux/interface";
import {
  addSubscription,
  getSubscription,
  updateSubscription,
} from "../actions";
import { Navbar } from "../../Navbar";
import { SubscriptionCard } from "./subscriptionCard";
import { NewSubscription } from "./newSubscription";
import { subscriptionService } from "../service";
import { Pagination } from "./pagination/Pagination";

const useStyles = makeStyles({
  root: {
    width: "100%",
    maxWidth: "1100px",
    margin: "0 auto",
    display: "flex",
    flexWrap: "wrap",
    padding: "20px",
  },
});

export const Subscription: React.FC<{
  user: { id: number; fullName: string };
}> = ({ user }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const subscription = useSelector((state: IAppState) => state.subscription);
  const { data } = subscription;

  const [page, setPage] = useState(1);
  const [dataSize] = useState(3);

  useEffect(() => {
    dispatch(getSubscription(page, dataSize));
  }, [dispatch, page, dataSize]);

  const handleAddSubmit = useCallback(
    (evt: React.FormEvent, data) => {
      evt.preventDefault();
      addSubscription(data).then(() => {
        dispatch(getSubscription(page, dataSize));
      });
    },
    [dataSize, page, dispatch]
  );

  const handleUpdateSubmit = useCallback(
    (evt: React.FormEvent, updateData, id: number) => {
      evt.preventDefault();
      updateSubscription(updateData, id).then(() => {
        dispatch(getSubscription(page, dataSize));
      });
    },
    [dataSize, page, dispatch]
  );

  const handleDelete = useCallback(
    (id: number) => {
      subscriptionService.deleteSubscription(id).then(() => {
        dispatch(getSubscription(page, dataSize));
      });
    },
    [page, dataSize, dispatch]
  );

  const handlePay = useCallback(
    (id: number) => {
      subscriptionService.paySubscription(id).then(() => {
        dispatch(getSubscription(page, dataSize));
      });
    },
    [page, dataSize, dispatch]
  );

  const handlePageChange = useCallback((pageCount: number) => {
    setPage(pageCount);
  }, []);

  return (
    <div>
      <Navbar user={user} />
      <Box display="flex" justifyContent="flex-end" margin="20px 30px">
        <NewSubscription handleAddSubmit={handleAddSubmit} />
      </Box>
      {subscription.status === "PENDING" && (
        <Box display="flex" justifyContent="center">
          <CircularProgress color="secondary" />
        </Box>
      )}
      {subscription.status === "SUCCESS" && (
        <>
          <Box className={classes.root}>
            {data?.items.map((item) => {
              return (
                <SubscriptionCard
                  handleUpdateSubmit={handleUpdateSubmit}
                  handleDelete={handleDelete}
                  handlePay={handlePay}
                  key={item.id}
                  data={item}
                />
              );
            })}
          </Box>
          <Box display="flex" justifyContent="center">
            <Pagination
              total={data?.total}
              page={page}
              handlePageChange={handlePageChange}
            />
          </Box>
        </>
      )}
    </div>
  );
};
