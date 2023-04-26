import {
  Box,
  Center,
  Flex,
  Grid,
  HStack,
  IconButton,
  useDisclosure,
} from '@chakra-ui/react';
import {
  Button,
  Fade,
  ListItemIcon,
  Menu,
  MenuItem,
  styled,
  TextField,
  Typography,
} from '@mui/material';
import React, { forwardRef, useMemo, useState } from 'react';
import { BiAddToQueue, BiSearchAlt2 } from 'react-icons/bi';
import Pagination from '../../table/Pagination';
import ASSIGNMENT from '../../table/assignment.json';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { HiOutlinePencilAlt, HiOutlineTrash } from 'react-icons/hi';
import {
  FcDribbble,
  FcElectricalSensor,
  FcInspection,
  FcLineChart,
  FcLink,
  FcRadarPlot,
  FcSurvey,
  FcTreeStructure,
  FcWorkflow,
} from 'react-icons/fc';
import { MdRemoveRedEye } from 'react-icons/md';
import { Input } from '@mui/base';
// import InfiniteScrollTable from '../../../../components/Tables/InfiniteScrollTable';
// import InputUnstyled from '@mui/base/InputUnstyled';

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
  width: 250px;
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
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

const CustomInput = forwardRef(function CustomInput(props, ref) {
  return (
    <Input slots={{ input: StyledInputElement }} {...props} ref={ref} />
  );
});

export default function List() {
  const [, setSelected] = useState('');
  const history = useHistory();
  const { pathname } = useLocation();
  const { onOpen: onDeleteModalOpen } = useDisclosure();
  const parentUrl = `/${pathname.split('/')[1]}`;
  const routeUrl = `/${pathname.split('/')[1]}/${pathname.split('/')[2]}/${
    pathname.split('/')[3]
  }/${pathname.split('/')[4]}`;
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
        Header: 'Title',
        accessor: 'title',
      },
      {
        Header: 'Assigned By',
        accessor: 'assigned_by',
      },
      {
        Header: 'Deadline',
        accessor: 'deadline',
      },
      {
        Header: 'Score',
        accessor: 'score',
      },
      {
        Header: 'Action',
        Cell: ({ row: { original } }) => (
          <Center spacing={2} gap="6">
            <IconButton
              onClick={() => history.push(`${routeUrl}/submission`)}
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
            <CustomInput aria-label="Demo input" placeholder="Search" />
            <Button
              sx={{ width: '10px', height: '42px', borderRadius: '8px' }}
              variant="contained"
              onClick={() => history.push(`${parentUrl}/add`)}
            >
              <BiSearchAlt2 style={{ width: '100%', height: '100%' }} />
            </Button>
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
                  <ListItemIcon>
                    <FcSurvey
                      style={{
                        marginRight: '10px',
                        width: '25px',
                        height: '100%',
                      }}
                    />
                    <Typography variant="body2" mt="5px">
                      All Student
                    </Typography>
                  </ListItemIcon>
                </MenuItem>
                <MenuItem
                  sx={{
                    '&:hover': { backgroundColor: '#f5f8fa', color: '#009ef7' },
                  }}
                  onClick={handleClose}
                >
                  <ListItemIcon>
                    <FcTreeStructure
                      style={{
                        marginRight: '10px',
                        width: '25px',
                        height: '100%',
                      }}
                    />
                    <Typography variant="body2" mt="5px">
                      Group A
                    </Typography>
                  </ListItemIcon>
                </MenuItem>
                <MenuItem
                  sx={{
                    '&:hover': { backgroundColor: '#f5f8fa', color: '#009ef7' },
                  }}
                  onClick={handleClose}
                >
                  <ListItemIcon>
                    <FcWorkflow
                      style={{
                        marginRight: '10px',
                        width: '25px',
                        height: '100%',
                      }}
                    />
                    <Typography variant="body2" mt="5px">
                      Group B
                    </Typography>
                  </ListItemIcon>
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
                <MenuItem onClick={handleClose2}>
                  <ListItemIcon>
                    <FcInspection
                      style={{
                        marginRight: '10px',
                        width: '25px',
                        height: '100%',
                      }}
                    />
                    <Typography variant="body2" mt="5px">
                      <Link
                        style={{ textDecoration: 'none', color: 'gray' }}
                        to={`${routeUrl}/assignment`}
                      >
                        All Assignment
                      </Link>
                    </Typography>
                  </ListItemIcon>
                </MenuItem>
                <MenuItem
                  sx={{
                    '&:hover': { backgroundColor: '#f5f8fa', color: '#009ef7' },
                  }}
                  onClick={handleClose2}
                >
                  <ListItemIcon>
                    <FcLineChart
                      style={{
                        marginRight: '10px',
                        width: '25px',
                        height: '100%',
                      }}
                    />
                    <Typography variant="body2" mt="5px">
                      Group A
                    </Typography>
                  </ListItemIcon>
                </MenuItem>
                <MenuItem
                  sx={{
                    '&:hover': { backgroundColor: '#f5f8fa', color: '#009ef7' },
                  }}
                  onClick={handleClose2}
                >
                  <ListItemIcon>
                    <FcLink
                      style={{
                        marginRight: '10px',
                        width: '25px',
                        height: '100%',
                      }}
                    />
                    <Typography variant="body2" mt="5px">
                      Group B
                    </Typography>
                  </ListItemIcon>
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
                <MenuItem onClick={handleClose2}>
                  <ListItemIcon>
                    <FcDribbble
                      style={{
                        marginRight: '10px',
                        width: '25px',
                        height: '100%',
                      }}
                    />
                    <Typography variant="body2" mt="5px">
                      All Session
                    </Typography>
                  </ListItemIcon>
                </MenuItem>
                <MenuItem
                  sx={{
                    '&:hover': { backgroundColor: '#f5f8fa', color: '#009ef7' },
                  }}
                  onClick={handleClose2}
                >
                  <ListItemIcon>
                    <FcElectricalSensor
                      style={{
                        marginRight: '10px',
                        width: '25px',
                        height: '100%',
                      }}
                    />
                    <Typography variant="body2" mt="5px">
                      Group A
                    </Typography>
                  </ListItemIcon>
                </MenuItem>
                <MenuItem
                  sx={{
                    '&:hover': { backgroundColor: '#f5f8fa', color: '#009ef7' },
                  }}
                  onClick={handleClose2}
                >
                  <ListItemIcon>
                    <FcRadarPlot
                      style={{
                        marginRight: '10px',
                        width: '25px',
                        height: '100%',
                      }}
                    />
                    <Typography variant="body2" mt="5px">
                      Group B
                    </Typography>
                  </ListItemIcon>
                </MenuItem>
              </Menu>
            </Flex>
          </Flex>
          <Grid h="42px">
            <HStack h="100%" w="90px" mr="10px">
              <Button
                sx={{ height: '100%' }}
                variant="contained"
                onClick={() => history.push(`${parentUrl}/list`)}
                startIcon={<BiAddToQueue />}
              >
                Back
              </Button>
            </HStack>
          </Grid>
        </Box>
      </Grid>
      <Box>
        <Typography ml="15px" color="#b5b5c3" variant="body2">
          Class : Cloud Computing
        </Typography>
      </Box>
      <Box mt="10px" mb="20px" flex="1" overflow="auto">
        <Pagination columns={columns} data={ASSIGNMENT} />
      </Box>
    </Flex>
  );
}
