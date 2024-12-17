// src/components/common/ListingPage/ListingPage.jsx
import React from 'react';
import { Search, MoreVert } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Typography,
  Button,
  Select,
  MenuItem,
  InputBase,
  IconButton,
  Paper
} from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledHeader = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: theme.spacing(3)
}));

const ColorIndicator = styled(Box)(({ color }) => ({
  width: 8,
  height: 8,
  backgroundColor: color,
  borderRadius: '2px',
  marginRight: '8px'
}));

const SearchWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(2),
  marginBottom: theme.spacing(3)
}));

// Main ListingPage component
// TODO: Backend Integration Required:
// 1. API Endpoints needed:
//    - GET /api/listings - fetch list data
//    - GET /api/listings/search - search functionality
//    - GET /api/listings/filters - get filter options
//    - POST /api/listings - create new listing
//
// 2. Implementation Requirements:
//    - Add pagination support
//    - Implement search debouncing
//    - Add sorting functionality
//    - Handle filter state management
//    - Add error handling for API calls
//    - Implement loading states

const ListingPage = ({
  title,
  color,
  createButtonText,
  createPath,
  filterOptions = ['All']
}) => {
  const navigate = useNavigate();
  // TODO: Add state management for:
    // - Search query
    // - Filter selections
    // - Pagination
    // - Loading states
    // - Error states
    // - Data caching


  return (
    // TODO: Implement:
        // - Loading indicators
        // - Error messages
        // - Empty state handling
        // - Search results display
        // - Filter functionality
        // - Pagination controls
    <Box sx={{ p: 3 }}>
      <StyledHeader>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <ColorIndicator color={color} />
          <Typography variant="h6">{title}</Typography>
        </Box>
        <Button
          variant="outlined"
          onClick={() => navigate(createPath)}
          sx={{ textTransform: 'none' }}
        >
          + {createButtonText}
        </Button>
      </StyledHeader>

      <SearchWrapper>
        <Select
          defaultValue="All"
          size="small"
          sx={{ minWidth: 120 }}
        >
          {filterOptions.map(option => (
            <MenuItem key={option} value={option}>{option}</MenuItem>
          ))}
        </Select>

        <Paper
          sx={{
            p: '2px 4px',
            display: 'flex',
            alignItems: 'center',
            width: 300
          }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search..."
          />
          <IconButton sx={{ p: '10px' }}>
            <Search />
          </IconButton>
        </Paper>

        <IconButton>
          <MoreVert />
        </IconButton>
      </SearchWrapper>

      <Paper sx={{ p: 3, textAlign: 'center' }}>
        <Typography color="textSecondary">No Data</Typography>
      </Paper>
    </Box>
  );
};

export default ListingPage;
