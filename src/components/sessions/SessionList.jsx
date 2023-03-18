import { Box } from '@mui/system';
import React from 'react';
import { BiCalendarCheck, BiChevronLeft } from 'react-icons/bi';
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';
import CourseDetail from '../courses/CourseDetail';
import Navbar from '../navbar/Navbar';
import BasicSelect from '../tables/Search';
import { sessions } from '../../variable/session';
import { Avatar, Typography } from '@mui/material';

export default function SessionList() {
  const { id } = useParams();
  // const { lecturer, image, date, description, starting_date, end_date } =
  //   sessions[id];
  // console.log(id);
  return (
    <Box component="div">
      <Navbar />
      <Box component="div" mt="20px" display="flex">
        <BiChevronLeft size="2rem" />
        <Box component="span" fontSize="15px" fontWeight="bold" mt="5px">
          <NavLink style={{ textDecoration: 'none' }} to="/">
            <span>All courses / </span>
          </NavLink>
          <NavLink style={{ textDecoration: 'none' }} to={`/courses/${id}`}>
            <span>course / </span>
          </NavLink>
          <NavLink style={{ textDecoration: 'none' }}>
            <span>list session</span>
          </NavLink>
        </Box>
      </Box>
      <CourseDetail />
      <Box component="div" m="20px 10px">
        <BasicSelect />
      </Box>
      {sessions.map((session) => {
        return (
          <Box
            component="div"
            ml="10px"
            mt='10px'
            display="flex"
            width="600px"
            height="120px"
            bgcolor="#7e57c2"
          >
            <Box
              component="div"
              justifyContent="center"
              alignItems="center"
              display="flex"
              flexDirection="column"
              height="100%"
              width="10%"
              key={session.id}
            >
              <Avatar src={session.image} alt="profile" />
            </Box>
            <Box component="div" ml="20px" width="90%">
              <Typography component="span" color="#ffc107">
                Lectured by {session.lecturer}
              </Typography>
              <Box component="div">
                <BiCalendarCheck />
                <Typography component="span">
                  Title : {session.description}
                </Typography>
                <br />
                <Box color="#bdbdbd" ml="16px">
                  <Typography component="span">
                    Date : {session.date}
                  </Typography>
                  <br />
                  <Typography component="span">
                    Time : {session.starting_date}pm to {session.end_date}pm
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        );
      })}
    </Box>
  );
}
