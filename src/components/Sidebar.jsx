import {
  Center,
  Divider,
  Fade,
  Flex,
  Heading,
  HStack,
  IconButton,
  Image,
  Link,
  Menu,
  MenuItem,
  MenuList,
  Skeleton,
  useColorModeValue as mode,
  SkeletonCircle,
  Spacer,
  Stack,
  Text,
  useMenuButton,
  ChakraProvider,
} from '@chakra-ui/react';
import image from './asssets';
import { Box } from '@mui/material';
import React, { createContext, useEffect, useState } from 'react';
import { MenuConstants } from './constants/menu';
import { useHistory, useLocation } from 'react-router';
import { checkIsActive } from './utils/functions';
import { getCurrentUrl } from './utils/functions';

import { HiOutlineMenuAlt1, HiSelector } from 'react-icons/hi';
import { useContext } from 'react';
import { BiUserCircle } from 'react-icons/bi';

const SidebarContext = createContext('SidebarContext');

export default function Sidebar() {
  const [toggle, setToggle] = useState(false);
  const [collapse, setCollapse] = useState(false);
  const location = useLocation();
  // const navigate = useNavigate();
  const history = useHistory();

  const getMenuItemActive = (url) => {
    if (location.key && location.pathname !== '/') {
      return checkIsActive(location, url);
    }
  };

  useEffect(() => {
    setTimeout(
      () => {
        setCollapse(toggle);
      },
      toggle ? 0 : 80
    );
  }, [toggle]);

  return (
    <SidebarContext.Provider>
      <Flex
        zIndex="overlay"
        w="full"
        h="full"
        direction="column"
        style={{ borderRight: '1px solid #e0e0e0' }}
        transition="width 0.1s"
        width={`${toggle ? '45px' : '250px'}`}
      >
        <Flex
          overflow="hidden"
          w="full"
          h="full"
          direction="column"
          flex="1"
          pt="5"
          pb="4"
          overflowY="auto"
          px="4"
        >
          <Box h="3rem" pos="relative" w="full" mb="4">
            <Fade in={!collapse}>
              <Center h="3rem">
                <Image w="50px" src={image.logo} />
              </Center>
            </Fade>
            <IconButton
              _focus={{ outline: 'none' }}
              variant="ghost"
              colorScheme="brand"
              pos="absolute"
              top="0"
              left="0"
              bgColor="white"
              color="#7367f0"
              cursor="pointer"
              border="1px solid transparent"
              onClick={() => setToggle(!toggle)}
              icon={<HiOutlineMenuAlt1 size="1.5rem" />}
            />
            <Box>
              <Fade in={!collapse}>
                <Heading
                  textAlign="center"
                  letterSpacing="wide"
                  whiteSpace="nowrap"
                  fontWeight="semibold"
                  color="#666666"
                  fontSize="1.05rem"
                  capitalize="uppercase"
                >
                  School Management
                </Heading>
              </Fade>
              <Stack spacing="2" as="nav" aria-label="Sidebar Navigation">
                {MenuConstants.map(({ name, item }, i) => (
                  <React.Fragment key={name}>
                    <Text
                      whiteSpace="nowrap"
                      fontSize="xs"
                      fontWeight="semibold"
                      textTransform="uppercase"
                      letterSpacing="widest"
                      color="#9e9e9e"
                      padding="10px"
                    >
                      <Fade in={!collapse}>{name}</Fade>
                    </Text>
                    <Stack>
                      {item.map(({ id, name, icon, path }) => (
                        <NavLink
                          color="#757575"
                          key={id}
                          collapse={collapse}
                          isActive={getMenuItemActive(path)}
                          onClick={() => {
                            path !== getCurrentUrl(location) &&
                              history.push(path);
                          }}
                          icon={<Box sx={{ ml: '5px' }}>{icon}</Box>}
                          label={
                            <Box ml="5px" mb="1px" fontWeight="normal">
                              {name}
                            </Box>
                          }
                        />
                      ))}
                    </Stack>
                  </React.Fragment>
                ))}

                <Divider bg="gray.100" rounded="md" />
              </Stack>
              <Spacer />
            </Box>
          </Box>
        </Flex>
        <UserProfile />
      </Flex>
    </SidebarContext.Provider>
  );
}

const UserProfile = () => {
  const history = useHistory();
  // const { collapse, logout } = useContext(SidebarContext);
  return (
    <ChakraProvider>
      <HStack
        spacing="4"
        px="2"
        flexShrink={0}
        borderTopWidth="1px"
        p="4"
      >
        <Menu>
          <AccountSwitcherButton /* collapse={collapse} */ />
          <MenuList
            shadow="lg"
            py="2"
            color={mode('gray.600', 'gray.300')}
            px="2"
          >
            <MenuItem
              rounded="md"
              onClick={() => {
                history.push('/change-password');
              }}
            >
              Change Password
            </MenuItem>
            <MenuItem
              rounded="md"
              onClick={() => {
                /* logout(); */
              }}
            >
              Logout
            </MenuItem>
          </MenuList>
        </Menu>
      </HStack>
    </ChakraProvider>
  );
};

const AccountSwitcherButton = () => {
  // const { collapse, user } = useContext(SidebarContext);
  const buttonProps = useMenuButton();

  return (
    <Flex
      as="button"
      {...buttonProps}
      w="full"
      display="flex"
      justifyContent="center"
      alignItems="center"
      rounded="lg"
      bg={mode('gray.200', 'gray.600')}
      borderRadius="6px"
      p="2"
      fontSize="md"
      userSelect="none"
      cursor="pointer"
      outline="0"
      transition="all 0.2s"
      _active={{ bg: mode('gray.200', 'gray.600') }}
      _focus={{ shadow: 'outline' }}
    >
      <HStack flex="1" spacing="3">
        <>
          {
            /* user.username ?  */ <>
              <Image
                h="8"
                w="8"
                borderRadius="md"
                objectFit="cover"
                /*  src={user.photo} */ fallback={
                  <BiUserCircle size="1.8rem" />
                }
                alt=""
              />

              {
                /* !collapse &&  */ <Box textAlign="start">
                  <Box isTruncated fontWeight="semibold">
                    {/* {user.username} */}Admin
                  </Box>
                </Box>
              }
            </> /*  : (
						<>
							<SkeletonCircle size="7" />
							{!collapse && <Skeleton w="5rem" h="1rem"></Skeleton>}
						</>
					) */
          }
        </>
      </HStack>
      {
        /* !collapse && */ <Box
          fontSize="lg"
          color={mode('gray.800', 'gray.400')}
        >
          <HiSelector />
        </Box>
      }
    </Flex>
  );
};

const NavLink = (props) => {
  const { icon, isActive, label, collapse, ...rest } = props;
  return (
    <Link
      display="block"
      py="2"
      px="3"
      height="30px"
      width="full"
      minW="max-content"
      borderRadius="6px"
      transition="all 0.1s"
      fontWeight="medium"
      userSelect="none"
      cursor="pointer"
      aria-current={isActive ? 'page' : undefined}
      color="gray.600"
      _hover={{
        bg: '#7367f0',
        color: 'white',
      }}
      _activeLink={{
        bg: '#7367f0',
        color: 'white',
      }}
      {...rest}
    >
      <HStack mt="5px" h="20px" spacing="5">
        <Box fontSize="lg">{icon}</Box>
        {!collapse && (
          <Text as="span" fontWeight={'bold'}>
            <Fade in={!collapse}>{label}</Fade>
          </Text>
        )}
      </HStack>
    </Link>
  );
};
