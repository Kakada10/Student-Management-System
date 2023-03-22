import List from './List';
import { Switch, Route, useRouteMatch, Redirect } from 'react-router-dom';
import { Box } from '@chakra-ui/react';

export default function Student() {
  const { url } = useRouteMatch();

  console.log('Hello');
  return (
    <Box>
      {/* <Switch>
        <Route path={`${url}/list`} component={List} />
        <Redirect to={`${url}/list`} /> :
      </Switch> */}
      <List/>
    </Box>
  );
}
