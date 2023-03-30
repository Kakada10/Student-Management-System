import { Box, Grid, HStack, Text, VStack } from '@chakra-ui/react';
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Radio,
  RadioGroup,
  TextField,
} from '@mui/material';
import Button from '@mui/material/Button';
import { useState } from 'react';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { BiAddToQueue } from 'react-icons/bi';
import { useHistory, useLocation } from 'react-router-dom';

export default function AddEdit() {
  const [showPassword, setShowPassword] = useState(false);

  const history = useHistory();
  const { pathname } = useLocation();
  const parentUrl = `/${pathname.split('/')[1]}`;
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Box bg="white" h="full" rounded="md">
      <Grid
        as="form"
        templateColumns="auto max-content"
        p="3"
        mb="3"
        boxShadow="sm"
      >
        <Grid templateColumns="max-content" gap="2" alignContent="center">
          <Text ml="2" fontSize="lg" fontWeight="bold">
            Create teacher
          </Text>
        </Grid>
        <Grid>
          <HStack>
            <Button
              startIcon={<BiAddToQueue fontSize="1.5rem" />}
              variant="outlined"
              onClick={() => {
                history.push(`${parentUrl}/list`);
              }}
            >
              Add
            </Button>

            <Button
              startIcon={<BiAddToQueue fontSize="1.5rem" />}
              variant="outlined"
              color="error"
              onClick={() => {
                history.push(`${parentUrl}/list`);
              }}
            >
              Back
            </Button>
          </HStack>
        </Grid>
        <Grid gap="4" p="3">
          <VStack spacing="25" alignItems="start">
            <TextField
              sx={{ width: 350 }}
              required
              label="First name"
              id="outlined-size-small"
              size="small"
            />
            <TextField
              sx={{ width: 350 }}
              required
              label="Last name"
              id="outlined-size-small"
              size="small"
            />
            <TextField
              sx={{ width: 350 }}
              required
              label="ID"
              id="outlined-size-small"
              size="small"
            />

            <FormControl>
              <FormLabel id="demo-row-radio-buttons-group-label">
                Gender
              </FormLabel>
              <RadioGroup
                size="small"
                required
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                <FormControlLabel
                  size="small"
                  value="female"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                />
              </RadioGroup>
            </FormControl>
            <TextField
              sx={{ width: 350 }}
              required
              label="gmail"
              id="outlined-size-small"
              size="small"
            />
            <TextField
              sx={{ width: 350 }}
              label="Phone number"
              required
              id="outlined-size-small"
              size="small"
            />
            <FormControl
              sx={{ m: 1, width: 350 }}
              required
              size="small"
              variant="outlined"
            >
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? 'text' : 'password'}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>
          </VStack>
        </Grid>
      </Grid>
    </Box>
  );
}


// import * as React from 'react';
// import { DataGrid } from '@mui/x-data-grid';

// const columns = [
//   { field: 'id', headerName: 'ID', width: 70 },
//   { field: 'firstName', headerName: 'First name', width: 130 },
//   { field: 'lastName', headerName: 'Last name', width: 130 },
//   {
//     field: 'age',
//     headerName: 'Age',
//     type: 'number',
//     width: 90,
//   },
//   {
//     field: 'fullName',
//     headerName: 'Full name',
//     description: 'This column has a value getter and is not sortable.',
//     sortable: false,
//     width: 160,
//     valueGetter: (params) =>
//       `${params.row.firstName || ''} ${params.row.lastName || ''}`,
//   },
// ];

// const rows = [
//   { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
//   { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
//   { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
//   { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
//   { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
//   { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
//   { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
//   { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
//   { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
// ];

// export default function AddEdit() {
//   return (
//     <div style={{ height: 400, width: '100%' }}>
//       <DataGrid
//         rows={rows}
//         columns={columns}
//         pageSize={5}
//         rowsPerPageOptions={[5]}
//         checkboxSelection
//       />
//     </div>
//   );
// }
