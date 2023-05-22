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
import { useHistory, useLocation } from 'react-router-dom';
import Pagination from '../table/Pagination';
import TEACHER_DATA from '../table/TEACHER_DATA.json';
import { HiOutlinePencilAlt, HiOutlineTrash } from 'react-icons/hi';
import KeyRoundedIcon from '@mui/icons-material/KeyRounded';
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded';

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

export default function List() {
  const history = useHistory();
  const { pathname } = useLocation();
  const parentUrl = `/${pathname.split('/')[1]}`;
  const [, /* filter */ setFilter] = useState({ searchText: '' });

  const [open, setOpen] = React.useState(false);

  const { onOpen: onDeleteModalOpen } = useDisclosure();
  const [, /* selected */ setSelected] = useState('');

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
    <>
      <Flex flexDir="column" bg="white" borderRadius="10px" h="full">
        {/* Popup */}
        <Box>
          <Modal
            aria-labelledby="modal-title"
            aria-describedby="modal-desc"
            open={open}
            onClose={() => setOpen(false)}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Sheet
              variant="outlined"
              sx={{
                width: 700,
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
              <Flex
                mb="10px"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography level="h4">Create Teacher</Typography>
                <Button sx={{ mr: '10px' }} variant="solid">
                  Create
                </Button>
              </Flex>
              <Grid templateColumns="repeat(4,1fr)  " gap="2">
                <VStack spacing="3">
                  <FormControl sx={{ width: '300px' }}>
                    <FormLabel required>Name</FormLabel>
                    <Input
                      placeholder="Please enter name"
                      variant="outlined"
                      color="neutral"
                    />
                    <FormLabel required>ID</FormLabel>
                    <Input
                      placeholder="Please enter id"
                      variant="outlined"
                      color="neutral"
                    />
                    <FormLabel required>Email</FormLabel>
                    <Input
                      placeholder="Please enter email"
                      variant="outlined"
                      color="neutral"
                    />
                  </FormControl>
                </VStack>
                <VStack spacing="3" ml="40px">
                  <FormControl sx={{ width: '300px' }}>
                    <FormLabel required>Address</FormLabel>
                    <Input
                      placeholder="Please enter address"
                      variant="outlined"
                      color="neutral"
                    />
                    <FormLabel required>Phone Number</FormLabel>
                    <Input
                      placeholder="Please enter phone number"
                      variant="outlined"
                      color="neutral"
                    />
                    <FormLabel required>Password</FormLabel>
                    <Input
                      startDecorator={<KeyRoundedIcon />}
                      placeholder="Password"
                      type="password"
                      endDecorator={
                        <IconButton color="neutral">
                          <VisibilityRoundedIcon />
                        </IconButton>
                      }
                    />
                  </FormControl>
                </VStack>
              </Grid>
            </Sheet>
          </Modal>
        </Box>
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
                placeholder="end"
                variant="outlined"
                color="neutral"
              />
              <Button
                variant="solid"
                onClick={() => history.push(`${parentUrl}/add`)}
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
          <Pagination columns={columns} data={TEACHER_DATA} />
        </Box>
      </Flex>
    </>
  );
}
