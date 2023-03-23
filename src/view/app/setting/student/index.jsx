import List from './List';
import { Switch, Route, useRouteMatch, Redirect } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import AddEdit from './AddEdit';

export default function Student() {
  const { url } = useRouteMatch();
  return (
    <Box>
      <Switch>
        <Route path={`${url}/list`} component={List} />
        <Route path={`${url}/add`} component={AddEdit} />
        <Redirect to={`${url}/list`} />
      </Switch>
    </Box>
  );
}
