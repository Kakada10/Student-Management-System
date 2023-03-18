import { Button } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { BiChevronLeft, BiSearch } from 'react-icons/bi';
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';
import CourseDetail from '../courses/CourseDetail';
import Navbar from '../navbar/Navbar';
import Pagination from '../tables/Pagination';
import BasicSelect from '../tables/Search';
import CustomizedInputs from '../tables/Top';

export default function StudentList() {
  const { id } = useParams();
  console.log(id);
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
            course
          </NavLink>
        </Box>
      </Box>
      <CourseDetail />
      <Box component="div" alignItems="center" display="flex" m="20px 10px">
        <BasicSelect />
        <CustomizedInputs />
        <Button size='large' variant="contained" endIcon={<BiSearch />} />
      </Box>
      <Pagination />
    </Box>
  );
}
