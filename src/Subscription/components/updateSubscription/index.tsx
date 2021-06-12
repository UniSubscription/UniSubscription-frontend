import React, { useCallback, useEffect } from "react";
import "date-fns";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogActions,
  FormControl,
  InputLabel,
  Input,
  makeStyles,
} from "@material-ui/core";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { subscriptionService } from "../../service";
import moment from "moment";

const useStyle = makeStyles({
  dialog: {
    margin: "0 auto",
  },
  formWrap: {
    marginBottom: "20px",
  },
  input: {
    height: "30px",
    fontSize: "12px",
  },
  label: {
    fontSize: "12px",
  },
});

export const UpdateSubscription: React.FC<{
  id: number;
  handleUpdateSubmit: (evt: React.FormEvent, data: any, id: number) => void;
}> = ({ id, handleUpdateSubmit }) => {
  const classes = useStyle();
  const [data, setData] = React.useState({
    name: "",
    subscriptionDate: "",
    subscriptionMail: "",
    nextBillingDate: "",
    cost: "",
  });

  const handleSubscriptionDate = (date: Date | null) => {
    setData((data) => ({
      ...data,
      subscriptionDate: moment(date).format("yyyy-MM-DD"),
    }));
  };

  const handleNextBillingDate = (date: Date | null) => {
    setData((data) => ({
      ...data,
      nextBillingDate: moment(date).format("yyyy-MM-DD"),
    }));
  };

  const handleFormChange = useCallback(
    (evt: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = evt.target;
      setData((data) => ({
        ...data,
        [name]: value,
      }));
    },
    [setData]
  );

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
    subscriptionService.getSubscriptionById(id).then(({ data }) => {
      setData({
        name: data.name,
        subscriptionDate: data.subscriptionDate,
        subscriptionMail: data.subscriptionMail,
        nextBillingDate: data.nextBillingDate,
        cost: data.cost,
      });
    });
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      handleUpdateSubmit(e, data, id);
      handleClose();
    },
    [handleUpdateSubmit, data, id]
  );

  return (
    <>
      <Button
        size="small"
        variant="contained"
        color="primary"
        onClick={handleClickOpen}
      >
        edit
      </Button>
      <Dialog
        className={classes.dialog}
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle style={{ color: "#194949" }} id="alert-dialog-title">
          Add New Subscription
        </DialogTitle>
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "0 15px",
          }}
          onSubmit={handleSubmit}
        >
          <FormControl className={classes.formWrap}>
            <InputLabel className={classes.label} htmlFor="add_company-name">
              Company Name
            </InputLabel>
            <Input
              className={classes.input}
              value={data.name}
              name="name"
              onChange={handleFormChange}
              id="add_company-name"
            />
          </FormControl>
          <FormControl className={classes.formWrap}>
            <InputLabel className={classes.label} htmlFor="add_email">
              Email address
            </InputLabel>
            <Input
              className={classes.input}
              name="subscriptionMail"
              onChange={handleFormChange}
              value={data.subscriptionMail}
              id="add_email"
            />
          </FormControl>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              margin="normal"
              id="sub_date"
              label="Subscription date"
              className={classes.label}
              format="MM-dd-yyyy"
              value={data.subscriptionDate}
              onChange={handleSubscriptionDate}
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
            />
            <KeyboardDatePicker
              margin="normal"
              id="sub_date"
              label="Next Billing date"
              className={classes.label}
              format="MM-dd-yyyy"
              value={data.nextBillingDate}
              onChange={handleNextBillingDate}
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
            />
          </MuiPickersUtilsProvider>
          <FormControl className={classes.formWrap}>
            <InputLabel className={classes.label} htmlFor="add_amount">
              Amount
            </InputLabel>
            <Input
              className={classes.input}
              value={data.cost}
              name="cost"
              onChange={handleFormChange}
              id="add_amount"
            />
          </FormControl>
          <DialogActions>
            <Button type="submit" variant="contained" color="primary">
              Update subscription
            </Button>
            <Button
              variant="contained"
              color="secondary"
              autoFocus
              onClick={handleClose}
            >
              Close
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  );
};
