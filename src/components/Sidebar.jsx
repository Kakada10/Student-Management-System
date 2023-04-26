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
  Spacer,
  Stack,
  Text,
} from '@chakra-ui/react';
import image from './asssets';
import { Box } from '@mui/material';
import React, { createContext, useEffect, useState } from 'react';
import { MenuConstants } from './constants/menu';
import { useHistory, useLocation } from 'react-router';
import { checkIsActive } from './utils/functions';
import { getCurrentUrl } from './utils/functions';

import { HiOutlineMenuAlt1 } from 'react-icons/hi';

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
              color="teal"
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
                  color="gray.500"
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
                          icon={icon}
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
      </Flex>
    </SidebarContext.Provider>
  );
}

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
        bg: 'teal',
        color: 'white',
      }}
      _activeLink={{
        bg: 'teal',
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
