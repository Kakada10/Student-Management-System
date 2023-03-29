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
import COURSE from '../table/COURSE.json';
import { useHistory, useLocation } from 'react-router-dom';
import { MdRemoveRedEye } from 'react-icons/md';
import { HiOutlinePencilAlt, HiOutlineTrash } from 'react-icons/hi';

const CssTextField = styled(TextField)({
  marginTop: '10px',
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

  const { onOpen: onDeleteModalOpen } = useDisclosure();
  const [selected, setSelected] = useState('');

  const columns = useMemo(
    () => [
      {
        Header: 'ID',
        accessor: 'id',
      },
      {
        Header: 'Name',
        accessor: 'name',
      },
      {
        Header: 'Year',
        accessor: 'year',
      },

      {
        Header: 'Semester',
        accessor: 'semester',
      },
      {
        Header: 'Action',
        Cell: ({ row: { original } }) => (
          <Center spacing={2} gap="6" justifyContent='left'>
            <IconButton
              onClick={() => history.push(`${parentUrl}/add`)}
              variant="ghost"
              color="#78909c"
              cursor="pointer"
              size="sm"
              bg="none"
              border="none"
              icon={<MdRemoveRedEye size="1.3rem" />}
            />

            <IconButton
              onClick={() => history.push(`${parentUrl}/add`)}
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
    ], //eslint-disable-next-line
    []
  );
  const [, setFilter] = useState({ searchText: '' });

  return (
    <Flex flexDir="column" bg="white" h="full" rounded="md">
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
        >
          <CssTextField
            size="small"
            label="Search"
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
            colorScheme="brand"
            icon={<BiSearchAlt2 fontSize="1.2rem" />}
          />
        </Grid>
        <Grid>
          <HStack h="40px" w="90px">
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
      <Box mt="10px" flex="1" overflow="auto">
        <Pagination columns={columns} data={COURSE} />
      </Box>
    </Flex>
  );
}
