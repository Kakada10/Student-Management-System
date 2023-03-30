import { Box } from '@chakra-ui/react';
import React from 'react';
import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';
import ListCourse from './List';
import CourseDetail from './CourseDetail';

export default function Year() {
  const { url } = useRouteMatch();
  return (
    <Box>
      <Switch>
        <Route path={`${url}`} component={ListCourse} />
        <Route path={`${url}/detail`} component={CourseDetail} />
        <Redirect to={`${url}`} />
      </Switch>
    </Box>
  );
}
