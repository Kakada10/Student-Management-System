import {
  Box,
  Center,
  Flex,
  Grid,
  HStack,
  IconButton,
  useDisclosure,
} from '@chakra-ui/react';
import { Button, styled, TextField } from '@mui/material';
import { useMemo, useState } from 'react';
import { BiAddToQueue, BiSearchAlt2 } from 'react-icons/bi';
import { useHistory, useLocation } from 'react-router-dom';
import Pagination from '../table/Pagination';
import SYSTEM_ROLE from '../table/system-role.json';
import { HiOutlinePencilAlt, HiOutlineTrash } from 'react-icons/hi';
import { MdRemoveRedEye } from 'react-icons/md';

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
  const history = useHistory();
  const { pathname } = useLocation();
  const parentUrl = `/${pathname.split('/')[1]}`;
  const [filter, setFilter] = useState({ searchText: '' });

  const { onOpen: onDeleteModalOpen } = useDisclosure();
  const [selected, setSelected] = useState('');

  const columns = useMemo(
    () => [
      {
        Header: 'No',
        accessor: 'no',
      },
      {
        Header: 'System Role',
        accessor: 'system-role',
      },
      {
        Header: 'Created Date',
        accessor: 'created-date',
      },
      {
        Header: 'Action',
        Cell: ({ row: { original } }) => (
          <Center spacing={2} gap="6">
            <IconButton
              onClick={() => history.push(`${parentUrl}/view/${original.id}`)}
              variant="ghost"
              color="#78909c"
              cursor="pointer"
              bg="none"
              size="sm"
              border="none"
              icon={<MdRemoveRedEye size="1.3rem" />}
            />

            <IconButton
              onClick={() => history.push(`${parentUrl}/edit/${original.id}`)}
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
    <Flex flexDir="column" bgColor="white" borderRadius="10px" h="full">
      <Grid
        as="form"
        templateColumns="auto max-content"
        p="8"
        mb="3"
        boxShadow="sm"
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
              cursor="pointer"
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
                variant="outlined"
                onClick={() => history.push(`${parentUrl}/add`)}
                startIcon={<BiAddToQueue />}
              >
                Add
              </Button>
            </HStack>
          </Grid>
        </Box>
      </Grid>
      <Box mt="10px" mb="20px" flex="1" overflow="auto">
        <Pagination columns={columns} data={SYSTEM_ROLE} />
      </Box>
    </Flex>
  );
}
