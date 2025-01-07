import React, { useState } from 'react';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
export const LoadingButton = () => {
  return (
        <Button 
        variant="contained" 
        onClick={onClick} 
        disabled={loading} 
    >
        {loading ? (
        <CircularProgress size={20} />
        ) : (
        children
        )}
    </Button>
    );  
}
