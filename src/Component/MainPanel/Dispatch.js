import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Box, TextField, Button, Divider, MenuItem } from '@mui/material';
import HeaderPanel from '../Header/HeaderPanel';

function Dispatch() {
  // State for selected city
  const [selectedCity, setSelectedCity] = useState('');

  // List of cities for the dropdown
  const cityOptions = ["Patna", "Musuffurpur", "Ranchi", "Rajgir", "Motihari"];

  return (
    <>
      <HeaderPanel />
      <Box display="flex" flexDirection="column" alignItems="left" p={1}>
        <AppBar position="static" color="inherit" elevation={0} style={{ boxShadow: 'none', backgroundColor: 'transparent' }}>
          <Toolbar>
            <Typography variant="h5" component="div">
              In-Bound Dispatch
            </Typography>
          </Toolbar>
        </AppBar>

        {/* Form Container */}
        <Box mt={1} width="100%" maxWidth="600px">
          {/* Form Fields */}
          <Box display="flex" flexDirection="column" gap={1} px={2}>
            {[
              { label: "Dispatch Type", value: "Full Truck Load" },
              { label: "Vehicle No.", value: "425638" },
              { label: "Region", value: "Illinois" },
              { label: "Route/Cities", type: "select", placeholder: "Select City" }, // Updated for city selection
              { label: "Dispatch Date", type: "date", placeholder: "Select Date" },
              { label: "Dispatch Time", type: "time", placeholder: "Select Time" },
              { label: "Route Service Locations", placeholder: "Tap to select choices" },
              { label: "Origin Service Location", value: "Detroit" },
              { label: "Shipment Details", value: "1 record added" },
            ].map((field, index) => (
              <Box key={index} display="flex" alignItems="center">
                {/* Label */}
                <Box width="40%">
                  <Typography variant="subtitle1">{field.label}</Typography>
                </Box>
                {/* Input */}
                <Box width="60%">
                  {field.label === "Route/Cities" ? (
                    // Render dropdown (select) for Route/Cities
                    <TextField
                      select
                      fullWidth
                      value={selectedCity}
                      onChange={(e) => setSelectedCity(e.target.value)}
                      placeholder={field.placeholder}
                      variant="outlined"
                      size="small"
                      margin="dense"
                      defaultChecked="Patna"
                    >
                      {cityOptions.map((city, idx) => (
                        <MenuItem key={idx} value={city}>
                          {city}
                        </MenuItem>
                      ))}
                    </TextField>
                  ) : (
                    // Render default text field for other fields
                    <TextField
                      fullWidth
                      type={field.type || ""}
                      placeholder={field.placeholder || ""}
                      defaultValue={field.value || ""}
                      InputProps={{ readOnly: Boolean(field.value) }}
                      variant="outlined"
                      size="small" // Reduced size for compact fields
                      margin="dense"
                    />
                  )}
                </Box>
              </Box>
            ))}
          </Box>

          {/* Divider and Submit Button */}
          <Divider sx={{ my: 1 }} />
          <Button variant="contained" color="primary" fullWidth>
            Submit
          </Button>
        </Box>
      </Box>
    </>
  );
}

export default Dispatch;
