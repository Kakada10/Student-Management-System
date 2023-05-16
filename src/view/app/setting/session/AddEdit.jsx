import { Grid, Text, VStack } from '@chakra-ui/react';
import { FormControl, FormLabel, Stack, styled } from '@mui/material';
import Button from '@mui/material/Button';
import React from 'react';
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { Box } from '@mui/system';
import { BiAddToQueue } from 'react-icons/bi';
import { useHistory, useLocation } from 'react-router-dom';
import Input from '@mui/base/Input';
import { Popper } from '@mui/base';
import Select, { selectClasses } from '@mui/base/Select';
import Option, { optionClasses } from '@mui/base/Option';

//Input

const blue = {
  100: '#DAECFF',
  200: '#b6daff',
  400: '#3399FF',
  500: '#007FFF',
  600: '#0072E5',
};

const grey = {
  50: '#f6f8fa',
  100: '#eaeef2',
  200: '#d0d7de',
  300: '#afb8c1',
  400: '#8c959f',
  500: '#6e7781',
  600: '#57606a',
  700: '#424a53',
  800: '#32383f',
  900: '#24292f',
};

const StyledInputElement = styled('input')(
  ({ theme }) => `
    width: 320px;
    font-family: IBM Plex Sans, sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5;
    padding: 12px;
    border-radius: 12px;
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
    box-shadow: 0px 4px 30px ${
      theme.palette.mode === 'dark' ? grey[900] : grey[200]
    };
  
    &:hover {
      border-color: ${blue[400]};
    }
  
    &:focus {
      border-color: ${blue[400]};
      box-shadow: 0 0 0 3px ${
        theme.palette.mode === 'dark' ? blue[500] : blue[200]
      };
    }
  
    // firefox
    &:focus-visible {
      outline: 0;
    }
  `
);

const CustomInput = React.forwardRef(function CustomInput(props, ref) {
  return <Input slots={{ input: StyledInputElement }} {...props} ref={ref} />;
});

//Desc

const StyledTextareaElement = styled('textarea', {
  shouldForwardProp: (prop) =>
    !['ownerState', 'minRows', 'maxRows'].includes(prop.toString()),
})(
  ({ theme }) => `
    width: 320px;
    height: 120px;
    font-family: IBM Plex Sans, sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5;
    padding: 12px;
    border-radius: 12px;
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
    box-shadow: 0px 2px 2px ${
      theme.palette.mode === 'dark' ? grey[900] : grey[50]
    };
  
    &:hover {
      border-color: ${blue[400]};
    }
  
    &:focus {
      border-color: ${blue[400]};
      box-shadow: 0 0 0 3px ${
        theme.palette.mode === 'dark' ? blue[500] : blue[200]
      };
    }
  
    // firefox
    &:focus-visible {
      outline: 0;
    }
  `
);

const CustomInputDesc = React.forwardRef(function CustomInput(props, ref) {
  return (
    <Input
      slots={{ input: StyledInputElement, textarea: StyledTextareaElement }}
      {...props}
      ref={ref}
    />
  );
});

// Select drop down

const StyledButton = styled('button')(
  ({ theme }) => `
    font-family: IBM Plex Sans, sans-serif;
    font-size: 0.875rem;
    box-sizing: border-box;
    min-height: calc(1.5em + 22px);
    min-width: 320px;
    padding: 12px;
    border-radius: 12px;
    text-align: left;
    line-height: 1.5;
    background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 120ms;
  
    &:hover {
      background: ${theme.palette.mode === 'dark' ? grey[800] : grey[50]};
      border-color: ${theme.palette.mode === 'dark' ? grey[600] : grey[300]};
    }
  
    &.${selectClasses.focusVisible} {
      border-color: ${blue[400]};
      outline: 3px solid ${
        theme.palette.mode === 'dark' ? blue[500] : blue[200]
      };
    }
  
    &.${selectClasses.expanded} {
      &::after {
        content: '▴';
      }
    }
  
    &::after {
      content: '▾';
      float: right;
    }
    `
);

const StyledListbox = styled('ul')(
  ({ theme }) => `
    font-family: IBM Plex Sans, sans-serif;
    font-size: 0.875rem;
    box-sizing: border-box;
    padding: 6px;
    margin: 12px 0;
    min-width: 320px;
    border-radius: 12px;
    overflow: auto;
    outline: 0px;
    background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    box-shadow: 0px 4px 30px ${
      theme.palette.mode === 'dark' ? grey[900] : grey[200]
    };
    `
);

const StyledOption = styled(Option)(
  ({ theme }) => `
    list-style: none;
    padding: 8px;
    border-radius: 8px;
    cursor: default;
  
    &:last-of-type {
      border-bottom: none;
    }
  
    &.${optionClasses.selected} {
      background-color: ${
        theme.palette.mode === 'dark' ? blue[900] : blue[100]
      };
      color: ${theme.palette.mode === 'dark' ? blue[100] : blue[900]};
    }
  
    &.${optionClasses.highlighted} {
      background-color: ${
        theme.palette.mode === 'dark' ? grey[800] : grey[100]
      };
      color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    }
  
    &.${optionClasses.highlighted}.${optionClasses.selected} {
      background-color: ${
        theme.palette.mode === 'dark' ? blue[900] : blue[100]
      };
      color: ${theme.palette.mode === 'dark' ? blue[100] : blue[900]};
    }
  
    &.${optionClasses.disabled} {
      color: ${theme.palette.mode === 'dark' ? grey[700] : grey[400]};
    }
  
    &:hover:not(.${optionClasses.disabled}) {
      background-color: ${
        theme.palette.mode === 'dark' ? grey[800] : grey[100]
      };
      color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    }
    `
);

const StyledPopper = styled(Popper)`
  z-index: 1;
`;

const CustomSelect = React.forwardRef(function CustomSelect(props, ref) {
  const slots = {
    root: StyledButton,
    listbox: StyledListbox,
    popper: StyledPopper,
    ...props.slots,
  };

  return <Select {...props} ref={ref} slots={slots} />;
});

export default function AddEdit() {
  const [value, setValue] = React.useState(dayjs('2022-04-17T15:30'));
  const history = useHistory();
  const { pathname } = useLocation();
  const parentUrl = `/${pathname.split('/')[1]}`;

  return (
    <Box
      sx={{
        background: 'white',
        borderRadius: '10px',
        marginBottom: '50px',
        minHeight: '100%',
      }}
    >
      <Grid
        as="form"
        m="10px"
        templateColumns="auto max-content"
        p="3"
        boxShadow="sm"
      >
        <Grid templateColumns="max-content" gap="2" alignContent="center">
          <Text ml="2" fontSize="lg" color="#0b2e59" fontWeight="bold">
            Create Session
          </Text>
        </Grid>
        <Grid>
          <Stack mt="10px" direction="row" spacing="8">
            <Button
              sx={{ height: '42px', mr: '6px' }}
              startIcon={<BiAddToQueue fontSize="1.5rem" />}
              variant="contained"
              onClick={() => {
                history.push(`${parentUrl}/list`);
              }}
            >
              Add
            </Button>
            <Button
              sx={{ height: '42px' }}
              startIcon={<BiAddToQueue fontSize="1.5rem" />}
              variant="contained"
              color="error"
              onClick={() => {
                history.push(`${parentUrl}/list`);
              }}
            >
              Back
            </Button>
          </Stack>
        </Grid>
        <Grid gap="4" p="3">
          <VStack spacing="25" mb="10px" alignItems="start">
            <FormControl required>
              <FormLabel
                sx={{
                  fontSize: '12px',
                  ml: '2px',
                  mb: '4px',
                  color: '#54787d',
                }}
              >
                Title
              </FormLabel>
              <CustomInput
                aria-label="Demo input"
                placeholder="Please enter title"
              />
            </FormControl>
            <FormControl>
              <FormLabel
                sx={{
                  fontSize: '12px',
                  ml: '2px',
                  mb: '4px',
                  color: '#54787d',
                }}
              >
                Description
              </FormLabel>
              <CustomInputDesc
                aria-label="Demo input"
                multiline
                placeholder="Type something…"
              />
            </FormControl>
            <FormControl required>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer
                  sx={{ width: '350px' }}
                  components={['DateTimePicker', 'DateTimePicker']}
                >
                  <DateTimePicker
                    label="Start"
                    defaultValue={dayjs('2022-04-17T15:30')}
                  />
                  <DateTimePicker
                    label="End"
                    value={value}
                    onChange={(newValue) => setValue(newValue)}
                  />
                </DemoContainer>
              </LocalizationProvider>
            </FormControl>
            <FormControl required>
              <FormLabel
                sx={{
                  fontSize: '12px',
                  ml: '2px',
                  mb: '4px',
                  color: '#54787d',
                  width: '350px',
                }}
              >
                Select Year
              </FormLabel>
              <CustomSelect defaultValue={1} id="unnamed-select">
                <StyledOption value={1}>1</StyledOption>
                <StyledOption value={2}>2</StyledOption>
                <StyledOption value={3}>3</StyledOption>
                <StyledOption value={4}>4</StyledOption>
                <StyledOption value={5}>5</StyledOption>
              </CustomSelect>
            </FormControl>
            <FormControl required>
              <FormLabel
                sx={{
                  fontSize: '12px',
                  ml: '2px',
                  mb: '4px',
                  color: '#54787d',
                  width: '350px',
                }}
              >
                Select Course
              </FormLabel>
              <CustomSelect defaultValue={1} id="unnamed-select">
                <StyledOption value={1}>Cloud Computing</StyledOption>
                <StyledOption value={2}>NLP</StyledOption>
                <StyledOption value={3}>Blockchain</StyledOption>
                <StyledOption value={4}>Networking</StyledOption>
                <StyledOption value={5}>Database</StyledOption>
              </CustomSelect>
            </FormControl>
          </VStack>
        </Grid>
      </Grid>
    </Box>
  );
}
