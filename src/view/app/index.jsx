import { Box, Flex } from '@chakra-ui/react';
import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';

// const DelayImport = (path) => {
//   return React.lazy(() => {
//     return Promise.all([
//       path,
//       new Promise((resolve) => setTimeout(resolve, 300)),
//     ]).then(([moduleExports]) => moduleExports);
//   });
// };

// const Student = DelayImport(import('./setting/student'));
// const Teacher = DelayImport(import('./setting/teacher'));
// const Course = DelayImport(import('./setting/course'));

import Student from './setting/student';
import Teacher from './setting/teacher';
import Course from './setting/course';

const routeItem = [
  {
    path: '/student',
    element: <Student />,
  },
  {
    path: '/teacher',
    element: <Teacher />,
  },
  {
    path: '/course',
    element: <Course />,
  },
];

const MotionBox = motion(Box);

export default function App() {
  const location = useLocation();
  return (
    <Flex position="relative" h="100vh" overflow="auto">
      <Box display="flex" w="250px">
        <Sidebar />
      </Box>
      <Box w={'calc(100% - 18rem)'} p="10" position="relative" flex="1">
        <AnimatePresence>
          <Switch location={location} key={location.pathname}>
            {routeItem.map(({ path, element }) => (
              <Route key={path} path={path}>
                <MotionBox
                  h="full"
                  overflow="auto"
                  rounded="md"
                  key={location.pathname}
                  initial={{
                    y: -10,
                    opacity: 0,
                    transition: { duration: 0.15 },
                  }}
                  animate={{
                    y: 0,
                    opacity: 1,
                    transition: { duration: 0.2 },
                  }}
                  exit={{
                    y: -20,
                    opacity: 0,
                    transition: { duration: 0.15 },
                  }}
                >
                  {element}
                </MotionBox>
              </Route>
            ))}
          </Switch>
        </AnimatePresence>
      </Box>
    </Flex>
  );
}
