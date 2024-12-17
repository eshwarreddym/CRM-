// src/components/Opportunities/CreateOpportunity.jsx
import React from 'react';
import { 
  Box, 
  Typography, 
  TextField, 
  Select, 
  MenuItem, 
  Button, 
  Grid,
  IconButton,
  FormControl,
  InputLabel
} from '@mui/material';
import { ArrowBack, MoreVert } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

// TODO: Backend Integration Required:
// 1. API Endpoints needed:
//    - POST /api/opportunities - create new opportunity
//    - GET /api/accounts - fetch account options
//    - GET /api/users - fetch assignable users
//    - GET /api/teams - fetch team options
//    - GET /api/contacts - fetch contact options
// 2. Form validation and submission handling
// 3. Error handling for API responses
// 4. Success/failure notifications

const CreateOpportunity = () => {
  const navigate = useNavigate();
      // TODO: Add state management for:
    // - Form data
    // - Validation errors
    // - Loading states
    // - API response handling
    // - Dropdown options

    // Handler for canceling opportunity creation

  const handleCancel = () => {
    navigate('dashboard/opportunities');
  };

  return (
     // TODO: Implement:
        // - Form validation
        // - Loading indicators
        // - Error messages
        // - Success notifications
        // - Data submission
    <Box sx={{ p: 3 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
        <IconButton onClick={() => navigate('/opportunities')}>
          <ArrowBack />
        </IconButton>
        <Typography variant="h6" sx={{ ml: 2 }}>Opportunities › create</Typography>
      </Box>

      <Box sx={{ mb: 3 }}>
        <Button variant="contained" sx={{ mr: 1 }}>Save</Button>
        <Button variant="outlined" sx={{ mr: 1 }} onClick={handleCancel}>Cancel</Button>
        <IconButton>
          <MoreVert />
        </IconButton>
      </Box>

      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Typography variant="caption" sx={{ mb: 1, display: 'block' }}>
            Name *
          </Typography>
          <TextField fullWidth size="small" required />
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography variant="caption" sx={{ mb: 1, display: 'block' }}>
            Account
          </Typography>
          <FormControl fullWidth size="small">
            <Select displayEmpty value="" renderValue={() => "Select"}>
              <MenuItem value="">Select Account</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography variant="caption" sx={{ mb: 1, display: 'block' }}>
            Assigned User
          </Typography>
          <FormControl fullWidth size="small">
            <Select displayEmpty value="" renderValue={() => "Select"}>
              <MenuItem value="">Select Assigned User</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography variant="caption" sx={{ mb: 1, display: 'block' }}>
            Stage
          </Typography>
          <FormControl fullWidth size="small">
            <Select value="Prospecting">
              <MenuItem value="Prospecting">Prospecting</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography variant="caption" sx={{ mb: 1, display: 'block' }}>
            Amount *
          </Typography>
          <TextField 
            fullWidth 
            size="small"
            required 
            InputProps={{ 
              endAdornment: 'USD'
            }} 
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography variant="caption" sx={{ mb: 1, display: 'block' }}>
            Teams
          </Typography>
          <FormControl fullWidth size="small">
            <Select displayEmpty value="" renderValue={() => "Select"}>
              <MenuItem value="">Select Teams</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography variant="caption" sx={{ mb: 1, display: 'block' }}>
            Probability, %
          </Typography>
          <TextField 
            fullWidth 
            size="small"
            type="number" 
            defaultValue={10} 
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography variant="caption" sx={{ mb: 1, display: 'block' }}>
            Close Date *
          </Typography>
          <TextField 
            fullWidth 
            size="small"
            type="date" 
            required 
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography variant="caption" sx={{ mb: 1, display: 'block' }}>
            Contacts
          </Typography>
          <FormControl fullWidth size="small">
            <Select displayEmpty value="" renderValue={() => "Select"}>
              <MenuItem value="">Select Contacts</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography variant="caption" sx={{ mb: 1, display: 'block' }}>
            Lead Source
          </Typography>
          <FormControl fullWidth size="small">
            <Select displayEmpty value="" renderValue={() => "Select Lead Source"}>
              <MenuItem value="">Select Lead Source</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="caption" sx={{ mb: 1, display: 'block' }}>
            Description
          </Typography>
          <TextField 
            fullWidth 
            multiline 
            rows={4} 
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default CreateOpportunity;
