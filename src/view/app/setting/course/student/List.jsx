import {
  Box,
  Center,
  Flex,
  Grid,
  IconButton,
  useDisclosure,
} from '@chakra-ui/react';
import {
  Button,
  Fade,
  Menu,
  MenuItem,
  styled,
  TextField,
  Typography,
} from '@mui/material';
import React, { useMemo, useState } from 'react';
import { BiAddToQueue, BiSearchAlt2 } from 'react-icons/bi';
import Pagination from '../../table/Pagination';
import MOCK_DATA from '../../table/MOCK_DATA.json';
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

  //Dropdown
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [anchorEl2, setAnchorEl2] = useState(null);
  const open2 = Boolean(anchorEl2);
  const handleClick2 = (event) => {
    setAnchorEl2(event.currentTarget);
  };
  const handleClose2 = () => {
    setAnchorEl2(null);
  };

  const [anchorEl3, setAnchorEl3] = useState(null);
  const open3 = Boolean(anchorEl3);
  const handleClick3 = (event) => {
    setAnchorEl3(event.currentTarget);
  };
  const handleClose3 = () => {
    setAnchorEl3(null);
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
            <CssTextField
              size="small"
              label="Search"
              id="custom-css-outlined-input"
            />
            <IconButton
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
            <Flex ml="20px" height="70%" borderRadius="8px">
              <Button
                id="fade-button"
                aria-controls={open ? 'fade-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
              >
                Student
              </Button>
              <Menu
                id="fade-menu"
                MenuListProps={{
                  'aria-labelledby': 'fade-button',
                }}
                sx={{ typography: 'body2' }}
                fontSize="5px"
                anchorEl={anchorEl}
                typography="body2"
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
              >
                <MenuItem
                  sx={{
                    '&:hover': { backgroundColor: '#f5f8fa', color: '#009ef7' },
                  }}
                  onClick={handleClose}
                >
                  All Student
                </MenuItem>
                <MenuItem
                  sx={{
                    '&:hover': { backgroundColor: '#f5f8fa', color: '#009ef7' },
                  }}
                  onClick={handleClose}
                >
                  Group A
                </MenuItem>
                <MenuItem
                  sx={{
                    '&:hover': { backgroundColor: '#f5f8fa', color: '#009ef7' },
                  }}
                  onClick={handleClose}
                >
                  Group B
                </MenuItem>
              </Menu>
            </Flex>
            <Flex ml="20px" height="70%" borderRadius="8px">
              <Button
                id="fade-button"
                aria-controls={open ? 'fade-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick2}
              >
                Assignment
              </Button>
              <Menu
                id="fade-menu"
                MenuListProps={{
                  'aria-labelledby': 'fade-button',
                }}
                anchorEl={anchorEl2}
                open={open2}
                onClose={handleClose2}
                TransitionComponent={Fade}
              >
                <MenuItem
                  sx={{
                    '&:hover': { backgroundColor: '#f5f8fa', color: '#009ef7' },
                  }}
                  onClick={handleClose}
                >
                  All Assignment
                </MenuItem>
                <MenuItem
                  sx={{
                    '&:hover': { backgroundColor: '#f5f8fa', color: '#009ef7' },
                  }}
                  onClick={handleClose}
                >
                  Group A
                </MenuItem>
                <MenuItem
                  sx={{
                    '&:hover': { backgroundColor: '#f5f8fa', color: '#009ef7' },
                  }}
                  onClick={handleClose}
                >
                  Group B
                </MenuItem>
              </Menu>
            </Flex>
            <Flex ml="20px" height="70%" borderRadius="8px">
              <Button
                id="fade-button"
                aria-controls={open ? 'fade-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick3}
              >
                Session
              </Button>
              <Menu
                id="fade-menu"
                MenuListProps={{
                  'aria-labelledby': 'fade-button',
                }}
                anchorEl={anchorEl3}
                open={open3}
                onClose={handleClose3}
                TransitionComponent={Fade}
              >
                <MenuItem
                  sx={{
                    '&:hover': { backgroundColor: '#f5f8fa', color: '#009ef7' },
                  }}
                  onClick={handleClose}
                >
                  All Session
                </MenuItem>
                <MenuItem
                  sx={{
                    '&:hover': { backgroundColor: '#f5f8fa', color: '#009ef7' },
                  }}
                  onClick={handleClose}
                >
                  Group A
                </MenuItem>
                <MenuItem
                  sx={{
                    '&:hover': { backgroundColor: '#f5f8fa', color: '#009ef7' },
                  }}
                  onClick={handleClose}
                >
                  Group B
                </MenuItem>
              </Menu>
            </Flex>
          </Flex>

          <Grid mt="10px" height='70%' mr='10px'>
            <Button variant="outlined" startIcon={<BiAddToQueue />}>
              Add
            </Button>
          </Grid>
        </Box>
      </Grid>
      <Box>
        <Typography ml="15px" color="#b5b5c3" variant="body2">
          Class : Cloud Computing
        </Typography>
      </Box>
      <Box mt="10px" mb="20px" flex="1" overflow="auto">
        <Pagination columns={columns} data={MOCK_DATA} />
      </Box>
    </Flex>
  );
}
