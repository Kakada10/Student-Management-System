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
import YEAR from '../table/YEAR.json';
import { HiOutlinePencilAlt, HiOutlineTrash } from 'react-icons/hi';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import { MdRemoveRedEye } from 'react-icons/md';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalClose,
  Option,
  Select,
  Sheet,
  Typography,
  selectClasses,
} from '@mui/joy';



export default function List() {
  const [, setFilter] = useState({ searchText: '' });

  const { onOpen: onDeleteModalOpen } = useDisclosure();
  const [, /* selected */ setSelected] = useState('');

  const [open, setOpen] = React.useState(false);

  const columns = useMemo(
    () => [
      {
        Header: 'ID',
        accessor: 'id',
      },
      {
        Name: 'Name',
        accessor: 'name',
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
              // onClick={() => history.push(`${parentUrl}/view/${original.id}`)}
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
              // onClick={() => history.push(`${parentUrl}/edit/${original.id}`)}
              onClick={() => setOpen(true)}
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
            <Typography level="h4">Create Year</Typography>
            <Button sx={{ mr: '10px' }} variant="solid">
              Create
            </Button>
          </Flex>
          <Grid templateColumns="repeat(3,1fr)  " gap="2">
            <VStack spacing="3">
              <FormControl sx={{ width: '400px' }}>
                <FormLabel required>Start</FormLabel>
                <Input
                  placeholder="Please enter started year"
                  variant="outlined"
                  color="neutral"
                />
                <FormLabel required>End</FormLabel>
                <Input
                  placeholder="Please enter end year"
                  variant="outlined"
                  color="neutral"
                />
                <FormLabel required>Group</FormLabel>
                <Input
                  placeholder="Please enter group"
                  variant="outlined"
                  color="neutral"
                />
                <FormLabel required>Year</FormLabel>
                <Select
                  placeholder="Select year"
                  indicator={<KeyboardArrowDown />}
                  sx={{
                    width: 400,
                    [`& .${selectClasses.indicator}`]: {
                      transition: '0.2s',
                      [`&.${selectClasses.expanded}`]: {
                        transform: 'rotate(-180deg)',
                      },
                    },
                  }}
                >
                  <Option value="dog">1</Option>
                  <Option value="cat">2</Option>
                  <Option value="fish">3</Option>
                  <Option value="bird">4</Option>
                  <Option value="bird">5</Option>
                </Select>
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
        <Pagination columns={columns} data={YEAR} />
      </Box>
    </Flex>
  );
}
