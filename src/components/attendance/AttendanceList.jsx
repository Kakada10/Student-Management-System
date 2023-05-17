import { Box, Button } from "@mui/joy";
import React from "react";
import SingleCourse from "../navbar/SingleCourse";
import TableSortAndSelection from "./tableHover";
import { KeyboardArrowLeft } from "@material-ui/icons";
import { Link, useParams } from "react-router-dom";

export default function AttendanceList() {
  const { id } = useParams();

  return (
    <Box>
      <SingleCourse />
      <Box mt="20px" ml="20px">
        <Box>
          <Link
            style={{ textDecoration: "none", color: "white" }}
            to={`/courses/session/${id}`}
          >
            <Button
              size="lg"
              variant="solid"
              startDecorator={<KeyboardArrowLeft />}
              color="info"
            >
              Back
            </Button>
          </Link>
        </Box>
        <Box>
          <TableSortAndSelection />
        </Box>
      </Box>
    </Box>
  );
}
