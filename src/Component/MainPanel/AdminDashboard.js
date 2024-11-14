import React from 'react';
import {
  Box,
  Typography,
  TextField,
  MenuItem,
  Button,
  Paper
} from '@mui/material';
import HeaderPanel from '../Header/HeaderPanel';

const AdminDashboard = () => {
  return (
    <>
    <HeaderPanel/>
      <Box sx={{ padding: 4 }}>
        {/* Track Shipment Section */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" sx={{mb:4, fontWeight: "bold"}} gutterBottom>
            Track Shipment
          </Typography>
          {/* Container Box for aligning labels and input fields in separate columns */}
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, maxWidth: 300 }}>
            <Box sx={{ display: 'flex', gap: 5, alignItems: 'center' }}>
              {/* Labels Column */}
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Typography variant="body1" sx={{ whiteSpace: 'nowrap', fontWeight: "bold" }}>
                  Select Tracking
                </Typography>
                <Typography variant="body1" sx={{ whiteSpace: 'nowrap', fontWeight: "bold" }}>
                  Order No.
                </Typography>
              </Box>

              {/* Input Fields Column */}
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, flex: 1 }}>
                <TextField
                  select
                  label="Select Tracking"
                  fullWidth
                  variant="outlined"
                  size="small"
                >
                  <MenuItem value="track by product">Track by Product</MenuItem>
                  <MenuItem value="track by order">Track by Order</MenuItem>
                </TextField>
                <TextField
                  label="Order/Order No."
                  fullWidth
                  variant="outlined"
                  size="small"
                />
              </Box>
            </Box>
            <Button variant="contained" color="primary" sx={{ width: '150px', alignSelf: 'flex-start' }} fullWidth size="large">
              Track
            </Button>
          </Box>
        </Box>

        {/* Orders Summary */}
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3, justifyContent: 'center' }}>
          {[
            { title: 'Total Orders', value: 10 },
            { title: 'Total Earning', value: '$2700.0' },
            { title: 'Pending Orders', value: 6 },
            { title: 'In-Transit Orders', value: 2 },
            { title: 'Returned Orders', value: 2 },
            { title: 'Delivered Orders', value: 4 }
          ].map((item, index) => (
            <Paper
              key={index}
              elevation={3}
              sx={{
                padding: 2,
                textAlign: 'center',
                minWidth: 150,
                width: 'calc(33% - 20px)', // Width for three items per row with space around
                marginBottom: '16px', // Space between the two rows
              }}
            >
              <Typography 
                variant="subtitle1" 
                sx={{ 
                  backgroundColor: 'black', 
                  color: 'white', 
                  padding: 0.5, 
                  borderRadius: 1 
                }}
              >
                {item.title}
              </Typography>
              <Typography variant="h5">{item.value}</Typography>
            </Paper>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default AdminDashboard;
