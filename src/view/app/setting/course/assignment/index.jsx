import List from './List';
import { Switch, Route, useRouteMatch, Redirect } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import AddEdit from './AddEdit';
import Submission from '../../assignment/submission';
import Student from '../student';

export default function Assignment() {
  const { url } = useRouteMatch();
  const parentUrl = `/${url.split('/')[1]}/${url.split('/')[2]}/${
    url.split('/')[3]
  }`;
  // console.log(parentUrl)
  return (
    <Box>
      <Switch>
        <Route path={`${url}/list`} component={List} />
        <Route path={`${url}/add`} component={AddEdit} />
        <Route path={`${url}/submission`} component={Submission} />
        <Route path={`${parentUrl}/list`} component={Student} />
        <Route path={`${url}/edit/:id`} component={AddEdit} />
        <Redirect to={`${url}/list`} />
      </Switch>
    </Box>
  );
}
