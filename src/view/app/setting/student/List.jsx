import { Box, Button, Flex, Grid, HStack, IconButton } from '@chakra-ui/react';
import { styled, TextField } from '@mui/material';
import React, { useMemo, useState } from 'react';
import { BiAddToQueue, BiSearchAlt2 } from 'react-icons/bi';
import Pagination from '../table/Pagination';
import MOCK_DATA from '../table/MOCK_DATA.json';
import { useHistory, useLocation } from 'react-router-dom';
// import InfiniteScrollTable from '../../../../components/Tables/InfiniteScrollTable';

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
    ],
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
        <Pagination columns={columns} data={MOCK_DATA} />
      </Box>
    </Flex>
  );
}
