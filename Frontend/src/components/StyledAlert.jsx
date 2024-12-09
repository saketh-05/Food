import React, { useState, useEffect } from 'react';
import { Alert, Snackbar } from '@mui/material';

const StyledAlert = ({text}) => {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Snackbar
      open={open}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
    >
      <Alert severity="success" sx={{ width: '100%' }}>
        {text}
      </Alert>
    </Snackbar>
  );
};

export default StyledAlert;
