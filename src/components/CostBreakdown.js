// src/components/CostBreakdown.js
import React, { useState } from 'react';
import costData from '../data/costData';
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
} from '@mui/material';

// Component to display a single domain's cost details with pagination if needed.
const DomainTable = ({ domain }) => {
  const [page, setPage] = useState(0);
  const rowsPerPage = 10;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const slicedComponents = domain.components.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  return (
    <Box display="flex" flexDirection="column" alignItems="center" mb={4}>
      <Typography variant="h5" gutterBottom>
        {domain.name} (Rs. {domain.total})
      </Typography>
      <TableContainer
        component={Paper}
        sx={{ maxWidth: '80%', overflowX: 'auto', mb: 2 }}
      >
        <Table sx={{ minWidth: 650 }} aria-label={`${domain.name} table`}>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontSize: '1.2rem', fontWeight: 'bold' }}>
                Component
              </TableCell>
              <TableCell sx={{ fontSize: '1.2rem', fontWeight: 'bold' }}>
                Cost (Rs.)
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {slicedComponents.map((comp, i) => (
              <TableRow key={i}>
                <TableCell sx={{ fontSize: '1.1rem' }}>{comp.name}</TableCell>
                <TableCell sx={{ fontSize: '1.1rem' }}>{comp.cost}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {domain.components.length > rowsPerPage && (
        <TablePagination
          component="div"
          count={domain.components.length}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          rowsPerPageOptions={[rowsPerPage]}
        />
      )}
    </Box>
  );
};

const CostBreakdown = () => {
  return (
    <Box sx={{ padding: '1rem', textAlign: 'center' }}>
      <Typography variant="h4" gutterBottom>
        Cost Breakdown
      </Typography>
      <Typography variant="h6" gutterBottom>
        Total Cost: Rs. {costData.totals.overall}
      </Typography>
      {costData.domains.map((domain, index) => (
        <DomainTable key={index} domain={domain} />
      ))}
    </Box>
  );
};

export default CostBreakdown;
