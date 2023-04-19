import { Box, Grid, HStack, Text, VStack } from '@chakra-ui/react';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  styled,
  TextField,
} from '@mui/material';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { BiAddToQueue } from 'react-icons/bi';
import { useHistory, useLocation } from 'react-router-dom';

const CssTextField = styled(TextField)({
  '& label': {
    color: '#bdbdbd',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#b0bec5',
    },
    '&:hover fieldset': {
      borderColor: '#40c4ff',
    },
  },
});

const CssFormControl = styled(FormControl)({
  '& label': {
    color: '#bdbdbd',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#b0bec5',
    },
    '&:hover fieldset': {
      borderColor: '#40c4ff',
    },
  },
});

export default function AddEdit() {
  const history = useHistory();
  const { pathname } = useLocation();
  const parentUrl = `/${pathname.split('/')[1]}`;
  const [year, setYear] = useState('');
  const [teacher, setTeacher] = useState('');

  const handleChange = (event) => {
    setYear(event.target.value);
  };

  return (
    <Box bg="white" h="full" borderRadius="10px">
      <Grid
        as="form"
        m="10px"
        templateColumns="auto max-content"
        p="3"
        mb="3"
        boxShadow="sm"
      >
        <Grid templateColumns="max-content" gap="2" alignContent="center">
          <Text ml="2" fontSize="lg" fontWeight="bold">
            Create course
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
          <VStack spacing="25" mb="10px" alignItems="start">
            <CssTextField
              sx={{ width: 350 }}
              label="Name"
              id="custom-css-outlined-input"
              size="small"
            />
            <CssTextField
              sx={{ width: 350, borderColor: 'red' }}
              label="ID"
              id="outlined-size-small"
              size="small"
            />
            <CssFormControl sx={{ mt: 1.3, ml: 2, minWidth: 350 }} size="small">
              <InputLabel id="demo-select-small">Select teacher</InputLabel>

              <Select
                labelId="demo-select-small"
                id="demo-select-small"
                value={teacher}
                label="Select teacher"
                onChange={handleChange}
              >
                <MenuItem value={1}>Dr. Bob</MenuItem>
                <MenuItem value={2}>Ms. Alice</MenuItem>
                <MenuItem value={3}>Mr. Kevin</MenuItem>
                <MenuItem value={4}>Mr. Goyong</MenuItem>
                <MenuItem value={5}>Ms. Sarah</MenuItem>
              </Select>
            </CssFormControl>

            <VStack spacing="25" mb="10px" alignItems="start">
              <CssTextField
                sx={{ width: 350 }}
                label="From"
                id="outlined-size-small"
                size="small"
              />
              <CssTextField
                sx={{ width: 350 }}
                label="End"
                id="outlined-size-small"
                size="small"
              />
              <CssFormControl
                sx={{ mt: 1.3, ml: 2, minWidth: 120 }}
                size="small"
              >
                <InputLabel id="demo-select-small">Year</InputLabel>
                <Select
                  labelId="demo-select-small"
                  id="demo-select-small"
                  value={year}
                  label="Year"
                  onChange={handleChange}
                >
                  <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                  <MenuItem value={4}>4</MenuItem>
                  <MenuItem value={5}>5</MenuItem>
                </Select>
              </CssFormControl>
            </VStack>
          </VStack>
        </Grid>
      </Grid>
    </Box>
  );
}
