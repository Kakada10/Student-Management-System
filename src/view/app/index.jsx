import { Box, Flex } from '@chakra-ui/react';
import { AnimatePresence, motion } from 'framer-motion';
import React, { Suspense } from 'react';
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
import SplashScreen from '../../components/loader/SplashScreen';

// import Student from './setting/student';
// import Teacher from './setting/teacher';
// import Course from './setting/course';

const DelayImport = (path) => {
  return React.lazy(() => {
    return Promise.all([
      path,
      new Promise((resolve) => setTimeout(resolve, 300)),
    ]).then(([moduleExports]) => moduleExports);
  });
};

//List
const Student = DelayImport(import('./setting/student'));
const Teacher = DelayImport(import('./setting/teacher'));
const Year = DelayImport(import('./setting/year'));
const Course = DelayImport(import('./setting/course'));
const Academic = DelayImport(import('./setting/academic'));
const Assignment = DelayImport(import('./setting/assignment'));

//Setting
const SystemRole = DelayImport(import('./setting/system-role'));
const User = DelayImport(import('./setting/user'));

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
    path: '/year',
    element: <Year />,
  },
  {
    path: '/course',
    element: <Course />,
  },
  {
    path: '/academic',
    element: <Academic />,
  },
  {
    path: '/system-role',
    element: <SystemRole />,
  },
  {
    path: '/user',
    element: <User />,
  },
  {
    path: '/assignment',
    element: <Assignment />,
  },
];

const MotionBox = motion(Box);

export default function App() {
  const location = useLocation();

  return (
    <Suspense fallback={<SplashScreen />}>
      <Flex position="relative" h="100vh" overflow="auto">
        <Box display="flex">
          <Sidebar />
        </Box>
        <Box w={'calc(100% - 18rem)'} p="10" bgColor='#f0f5f8' position="relative" flex="1">
          <AnimatePresence mode="wait">
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
    </Suspense>
  );
}
