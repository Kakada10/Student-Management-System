import {
  Center,
  Flex,
  Grid,
  IconButton,
  VStack,
  useDisclosure,
} from '@chakra-ui/react';
import React, { useMemo, useState } from 'react';
import { BiSearchAlt2 } from 'react-icons/bi';
import Pagination from '../table/Pagination';
import COURSE from '../table/COURSE.json';

import { useHistory, useLocation } from 'react-router-dom';
import { HiOutlinePencilAlt, HiOutlineTrash } from 'react-icons/hi';
import { MdRemoveRedEye } from 'react-icons/md';

import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalClose,
  Sheet,
  Typography,
} from '@mui/joy';
// import InfiniteScrollTable from '../../../../components/Tables/InfiniteScrollTable';

export default function List() {
  const [, /* selected */ setSelected] = useState('');
  const history = useHistory();
  const { pathname } = useLocation();
  const { onOpen: onDeleteModalOpen } = useDisclosure();

  const parentUrl = `/${pathname.split('/')[1]}`;

  const [open, setOpen] = React.useState(false);

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
        Header: 'Taught By',
        accessor: 'taught_by',
      },

      {
        Header: 'Year',
        accessor: 'year',
      },
      {
        Header: 'Start',
        accessor: 'start',
      },
      {
        Header: 'End',
        accessor: 'end',
      },
      {
        Header: 'Action',
        Cell: ({ row: { original } }) => (
          <Center spacing={2} gap="6">
            <IconButton
              onClick={() => setOpen(true)}
              variant="ghost"
              color="#78909c"
              cursor="pointer"
              bg="none"
              size="sm"
              border="none"
              icon={<MdRemoveRedEye size="1.3rem" />}
            />
            <IconButton
              onClick={() => setOpen(true)}
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
      {/* Popup */}
      <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        open={open}
        onClose={() => setOpen(false)}
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <Sheet
          variant="outlined"
          sx={{
            width: 500,
            height: 400,
            borderRadius: 'md',
            p: 3,
            boxShadow: 'lg',
          }}
        >
          <ModalClose
            variant="outlined"
            sx={{
              top: 'calc(-1/4 * var(--IconButton-size))',
              right: 'calc(-1/4 * var(--IconButton-size))',
              boxShadow: '0 2px 12px 0 rgba(0 0 0 / 0.2)',
              borderRadius: '50%',
              bgcolor: 'background.body',
            }}
          />
          <Flex mb="10px" justifyContent="space-between" alignItems="center">
            <Typography level="h4">Create Course</Typography>
            <Button sx={{ mr: '10px' }} variant="solid">
              Create
            </Button>
          </Flex>
          <Grid templateColumns="repeat(3,1fr)  " gap="2">
            <VStack spacing="3">
              <FormControl sx={{ width: '400px' }}>
                <FormLabel required>ID</FormLabel>
                <Input
                  placeholder="Please enter course id"
                  variant="outlined"
                  color="neutral"
                />
                <FormLabel required>Name</FormLabel>
                <Input
                  placeholder="Please enter course name"
                  variant="outlined"
                  color="neutral"
                />
                <FormLabel required>Teacher ID</FormLabel>
                <Input
                  placeholder="Please enter teacher id"
                  variant="outlined"
                  color="neutral"
                />
                <FormLabel required>Year ID</FormLabel>
                <Input
                  placeholder="Please enter year id"
                  variant="outlined"
                  color="neutral"
                />
              </FormControl>
            </VStack>
          </Grid>
        </Sheet>
      </Modal>

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
          mt="10px"
          h="60px"
          display="flex"
          flexDir="row"
          justifyContent="space-between"
        >
          <Flex
            width="100%"
            ml="10px"
            variant="standard"
            templateColumns="15vw max-content"
            gap="4"
          >
            <Input
              placeholder="Search for…"
              variant="outlined"
              color="neutral"
            />
            <Input
              sx={{ width: '80px', ml: '5px' }}
              placeholder="Start"
              variant="outlined"
              color="neutral"
            />
            <Input
              sx={{ width: '80px', ml: '5px' }}
              placeholder="End"
              variant="outlined"
              color="neutral"
            />
            <Button
              variant="solid"
              // onClick={() => history.push(`${parentUrl}/add`)}
            >
              <BiSearchAlt2 style={{ width: '90%', height: '90%' }} />
            </Button>
          </Flex>
          <Grid h="42px" mr="10px">
            <Button
              sx={{ width: '75px' }}
              variant="solid"
              onClick={() => setOpen(true)}
            >
              Add
            </Button>
          </Grid>
        </Box>
      </Grid>
      <Box mt="10px" mb="20px" flex="1" overflow="auto">
        <Pagination columns={columns} data={COURSE} />
      </Box>
    </Flex>
  );
}
