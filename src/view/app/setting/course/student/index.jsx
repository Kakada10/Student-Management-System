import List from './List';
import { Switch, Route, useRouteMatch, Redirect } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import AddEdit from './AddEdit';
import Assignment from '../assignment';

export default function Student() {
  const { url } = useRouteMatch();
  return (
    <Box>
      <Switch>
        <Route path={`${url}/list`} component={List} />
        <Route path={`${url}/assignment`} component={Assignment} />
        {/* <Route path={`${url}/list/view/:id`} component={AddEdit} /> */}
        {/* <Route path={`${url}/edit/:id`} component={AddEdit} />
        <Route path={`${url}/assignment`} component={Assignment} /> */}
        <Redirect to={`${url}/list`} />
      </Switch>
    </Box>
  );
}
