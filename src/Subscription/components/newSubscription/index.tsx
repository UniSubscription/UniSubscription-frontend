import React, { useCallback } from "react";
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
import moment from "moment";
import swal from "sweetalert";

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

export const NewSubscription: React.FC<{
  handleAddSubmit: (evt: React.FormEvent, data: any) => void;
}> = ({ handleAddSubmit }) => {
  const classes = useStyle();
  const [formState, setFormState] = React.useState({});
  const [open, setOpen] = React.useState(false);

  const [selectedDate] = React.useState<Date | null>(new Date());

  const handleDateChange = (date: Date | null) => {
    setFormState((data) => ({
      ...data,
      subscriptionDate: moment(date).format("yyyy-MM-DD"),
    }));
  };

  const handleClickOpen = useCallback(() => {
    setOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  const handleFormChange = useCallback(
    (evt: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = evt.target;
      setFormState((data) => ({
        ...data,
        [name]: value,
      }));
    },
    [setFormState]
  );

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      handleAddSubmit(e, formState);
      // swal({
      //   title: "Congratulations!",
      //   text: "You have successfully added new subscription!",
      //   icon: "success",
      // });
      handleClose();
    },
    [handleClose, handleAddSubmit, formState]
  );

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
              id="add_email"
              name="subscriptionMail"
              onChange={handleFormChange}
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
              name="cost"
              type="number"
              inputProps={{
                min: 0,
              }}
              onChange={handleFormChange}
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
