import { Avatar, Box } from '@mui/material';
import { borderRadius } from '@mui/system';
import React from 'react';

export default function Navbar() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        bgcolor: '#013914',
        color: 'white',
        position: 'sticky',
        top: '0',
        zIndex: '999',
      }}
    >
      <Box
        sx={{
          width: '1400px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '20px',
        }}
      >
        <Box sx={{ fontSize: '34px', fontWeight: 'bold' }}>
          <>
            <span>
              Tube
              <span style={{ color: '#1dbf73' }}>.</span>
            </span>
          </>
        </Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '24px',
            fontWeight: '500',
          }}
        >
          <span>Home</span>
          <span>My Learning</span>
          <Avatar alt="Profile" src="../assets/profile.jpg" />
        </Box>
      </Box>
    </Box>
  );
}
