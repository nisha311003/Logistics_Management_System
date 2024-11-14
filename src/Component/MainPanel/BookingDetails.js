import React from 'react';
import HeaderPanel from '../Header/HeaderPanel';
import { TextField, Typography, Button, Box, Divider, Select, MenuItem } from '@mui/material';
import './BookingDetails.css';

function BookingDetails() {
  return (
    <>
    <HeaderPanel/>
    <Box className="booking-container">
      <Box p={3}>
        <Typography variant="h6" className="form-header">Booking</Typography>
        
        <Box display="flex" gap={3} mt={3}>
          {/* Left Column - Booking and Sender Details */}
          <Box flex={1} className="column-section">
            <Box className="section">
              <Typography variant="subtitle1" className="section-header">Select Customer Type</Typography>
              <Box className="field-row">
                <Typography className="field-label">Customer Type</Typography>
                <Select className="field-input" fullWidth size="small" defaultValue="Accounted Customer">
                  <MenuItem value="Accounted Customer">Accounted Customer</MenuItem>
                  <MenuItem value="Non-Accounted Customer">Non-Accounted Customer</MenuItem>
                </Select>
              </Box>
              <Box className="field-row">
                <Typography className="field-label">Accounted Customers</Typography>
                <Select className="field-input" fullWidth size="small" defaultValue="Dell Smith">
                  <MenuItem value="Dell Smith">Dell Smith</MenuItem>
                  <MenuItem value="Other Customer">Other Customer</MenuItem>
                </Select>
              </Box>
            </Box>

            <Divider sx={{ my: 2 }} />

            <Box className="section">
              <Typography variant="subtitle1" className="section-header">Sender Details</Typography>
              <Box className="field-row">
                <Typography className="field-label">Email</Typography>
                <TextField className="field-input" fullWidth size="small" />
              </Box>
              <Box className="field-row">
                <Typography className="field-label">Phone Number</Typography>
                <TextField className="field-input" fullWidth size="small" />
              </Box>
              <Box className="field-row">
                <Typography className="field-label">Origin</Typography>
                <TextField className="field-input" fullWidth size="small" />
              </Box>
              <Box className="field-row">
                <Typography className="field-label">Origin Service Location</Typography>
                <TextField className="field-input" fullWidth size="small" />
              </Box>
            </Box>

            <Divider sx={{ my: 2 }} />

            <Box className="section">
              <Typography variant="subtitle1" className="section-header">Receiver Details</Typography>
              <Box className="field-row">
                <Typography className="field-label">Receiver Name</Typography>
                <TextField className="field-input" fullWidth size="small" />
              </Box>
              <Box className="field-row">
                <Typography className="field-label">Receiver Email</Typography>
                <TextField className="field-input" fullWidth size="small" />
              </Box>
              <Box className="field-row">
                <Typography className="field-label">Receiver Phone Number</Typography>
                <TextField className="field-input" fullWidth size="small" />
              </Box>
            </Box>
          </Box>

          {/* Right Column - Shipment Details */}
          <Box flex={1} className="column-section">
            <Box className="section">
              <Typography variant="subtitle1" className="section-header">Shipment Details</Typography>
              <Box className="field-row">
                <Typography className="field-label">Commodity</Typography>
                <TextField className="field-input" fullWidth size="small" />
              </Box>
              <Box className="field-row">
                <Typography className="field-label">Weight in KGs</Typography>
                <TextField className="field-input" fullWidth size="small" />
              </Box>
              <Box className="field-row">
                <Typography className="field-label">Total Weight</Typography>
                <TextField className="field-input" fullWidth size="small" />
              </Box>
              <Box className="field-row">
                <Typography className="field-label">Rate per KG</Typography>
                <TextField className="field-input" fullWidth size="small" />
              </Box>
              <Box className="field-row">
                <Typography className="field-label">Shipment Date</Typography>
                <TextField className="field-input" fullWidth size="small" />
              </Box>
              <Box className="field-row">
                <Typography className="field-label">Expected Delivery Date</Typography>
                <TextField className="field-input" fullWidth size="small" />
              </Box>
              <Box className="field-row">
                <Typography className="field-label">Service Tax</Typography>
                <TextField className="field-input" fullWidth size="small" />
              </Box>
              <Box className="field-row">
                <Typography className="field-label">Freight</Typography>
                <TextField className="field-input" fullWidth size="small" />
              </Box>
            </Box>

            <Button variant="contained" color="primary" fullWidth sx={{ mt: 3 }}>
              Submit
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
    </>
  );
}

export default BookingDetails;
