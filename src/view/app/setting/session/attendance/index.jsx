import List from './List';
import { Switch, Route, useRouteMatch, Redirect } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import AddEdit from './AddEdit';

export default function Assignment() {
  const { url } = useRouteMatch();
 
  return (
    <Box>
      <Switch>
        <Route path={`${url}/attendance`} component={List} />
        <Route path={`${url}/add`} component={AddEdit} />
        <Route path={`${url}/list/view`} component={AddEdit} />
        <Route path={`${url}/list/edit`} component={AddEdit} />
        <Redirect to={`${url}/attendance`} />
      </Switch>
    </Box>
  );
}
