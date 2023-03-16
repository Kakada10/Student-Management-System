import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import Navbar from '../navbar/Navbar';
import { BiChevronLeft } from 'react-icons/bi';
import { courses } from '../../variable/constrant';
import { NavLink, useParams } from 'react-router-dom';
export default function SingleCourse() {
  const { id } = useParams();
  console.log(id);
  const { image, course_name, creator } = courses[id];

  return (
    <Box component="div">
      <Navbar />
      <Box component="div" mt="20px" display="flex">
        <BiChevronLeft size="2rem" />
        <Box
          component="span"
          fontSize="15px"
          fontWeight="bold"
          mt="5px"
          text-decoration="none"
        >
          <NavLink to="/">
            <span>All courses</span>
          </NavLink>
        </Box>
      </Box>
      <Box
        component="div"
        mt="20px"
        ml="10px"
        width="100%"
        height="400px"
        display="flex"
      >
        <Box component="div" height="50%" width="20%">
          <img height="100%" width="100%" src={image} alt="" />
        </Box>
        <Box component="div" ml="10px">
          <Typography variant="h5">{course_name}</Typography>
          <Typography
            component="span"
            mt="10px"
            fontSize="12.5px"
            fontWeight="500"
            color="rgba(0,0,0,0.6)"
          >
            Lecturer by {creator}
          </Typography>
          <Box component="div" mt="110px" display="flex">
            <Button mt="50px" variant="outlined">
              List student
            </Button>
            <Box component="div" ml="10px">
              <Button variant="contained" color="success">
                List session
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
