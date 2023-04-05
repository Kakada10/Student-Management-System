import {
  Box,
  Button,
  Center,
  Flex,
  Grid,
  HStack,
  IconButton,
  useDisclosure,
} from '@chakra-ui/react';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  styled,
  TextField,
  Typography,
} from '@mui/material';
import { useMemo, useState } from 'react';
import { BiAddToQueue, BiSearchAlt2 } from 'react-icons/bi';
import { useHistory, useLocation } from 'react-router-dom';
// import { InfiniteScroll } from '../../../../components/Tables';
import Pagination from '../table/Pagination';
import TEACHER_DATA from '../table/TEACHER_DATA.json';
import { HiOutlinePencilAlt, HiOutlineTrash } from 'react-icons/hi';
import { MdRemoveRedEye } from 'react-icons/md';



const CssTextField = styled(TextField)({
  marginTop: '10px',
  marginLeft: '10px',
  width: '100px',
  '& label.Mui-focused': {
    color: 'green',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'green',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'gray',
    },
    '&:hover fieldset': {
      borderColor: 'yellow',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'green',
    },
  },
});

export default function List() {
  const history = useHistory();
  const { pathname } = useLocation();
  const parentUrl = `/${pathname.split('/')[1]}`;
  const [, setFilter] = useState({ searchText: '' });

  const { onOpen: onDeleteModalOpen } = useDisclosure();
  const [selected, setSelected] = useState('');

  const [year, setYear] = useState('');

  const handleChange = (event) => {
    setYear(event.target.value);
  };

  const columns = useMemo(
    () => [
      {
        Header: 'ID',
        accessor: 'id',
      },
      {
        Header: 'First Name',
        accessor: 'first_name',
      },
      {
        Header: 'Last Name',
        accessor: 'last_name',
      },
      {
        Header: 'Email',
        accessor: 'email',
      },
      {
        Header: 'Gender',
        accessor: 'gender',
      },
      {
        Header: 'Action',
        Cell: ({ row: { original } }) => (
          <Center spacing={2} gap="6">
            <IconButton
              onClick={() => history.push(`${parentUrl}/view/${original.value}`)}
              variant="ghost"
              color="#78909c"
              cursor="pointer"
              bg="none"
              size="sm"
              border="none"
              icon={<MdRemoveRedEye size="1.3rem" />}
            />

            <IconButton
              onClick={() => history.push(`${parentUrl}/edit/${original.value}`)}
              variant="ghost"
              cursor="pointer"
              bg="none"
              color="#78909c"
              border="none"
              size="sm"
              icon={<HiOutlinePencilAlt size="1.3rem" />}
            />
            <IconButton
              onClick={() => {
                setSelected(original);
                onDeleteModalOpen();
              }}
              size="sm"
              variant="ghost"
              bg="none"
              cursor="pointer"
              border="none"
              color="#78909c"
              icon={<HiOutlineTrash size="1.3rem" />}
            />
          </Center>
        ),
      },
    ],
    //eslint-disable-next-line
    []
  );

  return (
    <Flex flexDir="column" borderRadius='10px' bg="white" h="full" >
      <Grid
        as="form"
        templateColumns="auto max-content"
        p="3"
        mb="3"
        boxShadow="sm"
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.target);
          const formProps = Object.fromEntries(formData);
          setFilter((prev) => ({
            ...prev,
            searchText: formProps.searchText,
          }));
        }}
      >
        <Grid
          ml="10px"
          variant="standard"
          templateColumns="15vw max-content"
          gap="4"
          display="flex"
        >
          <Typography mt="15px">Student Year :</Typography>
          <FormControl sx={{ mt: 1.3, ml: 2, minWidth: 120 }} size="small">
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
          </FormControl>
          <CssTextField
            size="small"
            label="Start"
            id="custom-css-outlined-input"
          />
          <CssTextField
            size="small"
            label="End"
            id="custom-css-outlined-input"
          />
          <IconButton
            mt="10px"
            color="white"
            ml="5px"
            bgColor="teal"
            width="45px"
            border="1px solid transparent"
            borderRadius="8px"
            type="submit"
            cursor="pointer"
            colorScheme="brand"
            icon={<BiSearchAlt2 fontSize="1.2rem" />}
          />
        </Grid>
        <Grid mt='10px'>
          <HStack h="40px" w="90px" mr='10px'>
            <Button
              w="100%"
              h="100%"
              borderRadius="6px"
              cursor="pointer"
              border="1px solid transparent"
              bgColor="teal"
              color="white"
              leftIcon={<BiAddToQueue fontSize="1.5rem" />}
              colorScheme="brand"
              onClick={() => history.push(`${parentUrl}/add`)}
            >
              Add
            </Button>
          </HStack>
        </Grid>
      </Grid>
      <Box mt="10px" mb='20px' flex="1" overflow="auto">
        <Pagination columns={columns} data={TEACHER_DATA} checkboxSelection />
      </Box>
    </Flex>
  );
}
