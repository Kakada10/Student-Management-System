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
import { styled, TextField } from '@mui/material';
import React, { useMemo, useState } from 'react';
import { BiAddToQueue, BiSearchAlt2 } from 'react-icons/bi';
import Pagination from '../table/Pagination';
import MOCK_DATA from '../table/MOCK_DATA.json';
import { useHistory, useLocation, useParams } from 'react-router-dom';
import { HiOutlinePencilAlt, HiOutlineTrash } from 'react-icons/hi';
import { MdRemoveRedEye } from 'react-icons/md';
// import InfiniteScrollTable from '../../../../components/Tables/InfiniteScrollTable';

const CssTextField = styled(TextField)({
  // marginTop: '10px',
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
  const [selected, setSelected] = useState('');
  const { id } = useParams();
  const history = useHistory();
  const { pathname } = useLocation();
  const { onOpen: onDeleteModalOpen } = useDisclosure();

  const parentUrl = `/${pathname.split('/')[1]}`;

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
        Header: 'Year',
        accessor: 'year',
      },
      {
        Header: 'Group',
        accessor: 'group',
      },
      {
        Header: 'Action',
        Cell: ({ row: { original } }) => (
          <Center spacing={2} gap="6">
            {console.log(id)}
            <IconButton
              onClick={() => history.push(`${parentUrl}/view/${id}`)}
              variant="ghost"
              color="#78909c"
              cursor="pointer"
              bg="none"
              size="sm"
              border="none"
              icon={<MdRemoveRedEye size="1.3rem" />}
            />

            <IconButton
              onClick={() =>
                history.push(`${parentUrl}/edit/${original.value}`)
              }
              variant="ghost"
              cursor="pointer"
              color="#78909c"
              border="none"
              bg="none"
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
              cursor="pointer"
              border="none"
              bg="none"
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

  const [, setFilter] = useState({ searchText: '' });

  return (
    <Flex flexDir="column" bg="white" borderRadius="10px" h="full">
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
        <Box
          borderRadius="8px"
          h="60px"
          display="flex"
          flexDir="row"
          justifyContent="space-between"
        >
          <Grid
            ml="10px"
            mt="10px"
            variant="standard"
            templateColumns="15vw max-content"
            gap="4"
          >
            <CssTextField
              size="small"
              label="Search"
              id="custom-css-outlined-input"
            />
            <IconButton
              // mt="10px"
              color="white"
              ml="5px"
              bgColor="teal"
              h="40px"
              width="45px"
              border="1px solid transparent"
              borderRadius="8px"
              type="submit"
              colorScheme="brand"
              icon={<BiSearchAlt2 fontSize="1.2rem" />}
            />
          </Grid>
          <Grid mt="10px">
            <HStack h="40px" w="90px" mr="10px">
              <Button
                // mt="20px"
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
        </Box>
      </Grid>
      <Box mt="10px" mb="20px" flex="1" overflow="auto">
        <Pagination columns={columns} data={MOCK_DATA} />
      </Box>
    </Flex>
  );
}
