import React from "react";
import "date-fns";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
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

export const NewSubscription = () => {
  const classes = useStyle();

  const [selectedDate, setSelectedDate] = React.useState<Date | null>(
    new Date("2014-08-18T21:11:54")
  );

  const [formState, setFormState] = React.useState({});

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
    console.log(selectedDate);
  };

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button variant="contained" onClick={handleClickOpen}>
        Add subscription
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
          style={{ display: "flex", flexDirection: "column", padding: "0 15px" }}
        >
          <FormControl className={classes.formWrap}>
            <InputLabel className={classes.label} htmlFor="add_company-name">
              Company Name
            </InputLabel>
            <Input
              className={classes.input}
              id="add_company-name"
            />
          </FormControl>
          <FormControl className={classes.formWrap}>
            <InputLabel className={classes.label} htmlFor="add_email">
              Email address
            </InputLabel>
            <Input 
            id="add_email" 
            className={classes.input}
            />
          </FormControl>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              margin="normal"
              id="sub_date"
              label="Subscription date"
              className={classes.label}
              format="MM/dd/yyyy"
              value={selectedDate}
              onChange={handleDateChange}
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
            id="add_amount" 
            className={classes.input}
            />
          </FormControl>
          <DialogActions>
            <Button type="submit" variant="contained" color="primary">
              Add subscription
            </Button>
            <Button
              onClick={handleClose}
              variant="contained"
              color="secondary"
              autoFocus
            >
              Close
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  );
};
