import { Box, Button, Grid } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router';
import { courses } from '../../variable/constrant';
export default function Course() {
  const navigate = useNavigate();
  function navigateHandler(index) {
    navigate(`/courses/${index}`);
  }
  return (
    <Box display="flex" gap="10px">
      {courses.map((course, index) => (
        <Box component="div" key={course.id}>
          <Grid
            spacing={3}
            component="div"
            border="2px solid rgba(0, 0, 0, 0.1)"
            height="400px"
            margin="14px 0"
            padding="1px"
          >
            <img width="100%" height="50%" src={course.image} alt="" />
            <Box
              component="span"
              fontSize="15px"
              lineHeight="1.4"
              fontWeight="800"
            >
              {course.course_name}
            </Box>
            <Box component="div">
              <Box
                component="span"
                fontSize="12.5px"
                fontWeight="500"
                color="rgba(0,0,0,0.6)"
              >
                {' '}
                {course.creator}
              </Box>
            </Box>
            <Box
              component="div"
              mt="20px"
              justifyContent="center"
              display="flex"
            >
              <Button
                onClick={() => navigateHandler(index)}
                variant="contained"
                color="warning"
              >
                See detail
              </Button>
            </Box>
          </Grid>
        </Box>
      ))}
    </Box>
  );
}
