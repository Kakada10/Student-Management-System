import List from './List';
import { Switch, Route, useRouteMatch, Redirect } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import AddEdit from './AddEdit';
import Student from './student'
import Course from '../../course/index'

export default function Assignment() {
  const { url } = useRouteMatch();
  const parentUrl = `/${url.split('/')[1]}`
  console.log(url)
  return (
    <Box>
      <Switch>
        <Route path={`${url}/list`} component={List} />
        <Route path={`${url}/add`} component={AddEdit} />
        <Route path={`${url}/student-list`} component={Student} />
        <Route path={`${parentUrl}/list`} component={Course} />
        <Route path={`${url}/edit/:id`} component={AddEdit} />
        <Redirect to={`${url}/list`} />
      </Switch>
    </Box>
  );
}
