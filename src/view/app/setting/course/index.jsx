import { Box } from '@chakra-ui/react';
import React from 'react'
import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';
import AddEdit from './AddEdit';
import List from './List'

export default function Course() {
  const { url } = useRouteMatch();
  return (
    <Box>
      <Switch>
        <Route path={`${url}/list`} component={List} />
        <Route path={`${url}/add`} component={AddEdit} />
        <Redirect to={`${url}/list`} />
      </Switch>
    </Box>
  )
}
