import * as React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function RestaurantSnackbar(props) {
  const [open, setOpen] = useState(false);

  const handleClick = (e) => {
    setOpen(true);
    props.handleChange(e)
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <>
      <Button type="submit" disabled={props.disabled} onClick={handleClick}>
        Add Restaurant
      </Button>
      <Snackbar open={open} autoHideDuration={1000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Restaurant added!
        </Alert>
      </Snackbar>
      </>
  );
}
