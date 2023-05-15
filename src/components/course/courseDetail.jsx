import * as React from "react";
import { Box, Tab, TabList, Tabs, tabClasses } from "@mui/joy";
import { useParams } from "react-router";
import TableHover from "../table/tableHover";
import { Link } from "react-router-dom";
import SingleCourse from "../navbar/SingleCourse";

export default function CourseDetail() {
  const { id } = useParams();

  return (
    <Box>
      <SingleCourse />
      <Box mt="40px" ml="20px">
        <Box width="30%" mt="5px">
          <Tabs aria-label="tabs">
            <TabList
              variant="plain"
              sx={{
                "--List-padding": "0px",
                "--List-radius": "0px",
                "--ListItem-minHeight": "48px",
                [`& .${tabClasses.root}`]: {
                  boxShadow: "none",
                  fontWeight: "md",
                  [`&.${tabClasses.selected}::before`]: {
                    content: '""',
                    display: "block",
                    position: "absolute",
                    left: "var(--ListItem-paddingLeft)", // change to `0` to stretch to the edge.
                    right: "var(--ListItem-paddingRight)", // change to `0` to stretch to the edge.
                    bottom: 0,
                    height: 3,
                    bgcolor: "primary.400",
                  },
                },
              }}
            >
              <Tab>All Student</Tab>

              <Tab>
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to={`/courses/session/${id}`}
                >
                  All Session
                </Link>
              </Tab>

              <Tab>All Assignment</Tab>
            </TabList>
          </Tabs>
        </Box>
        <Box>
          <TableHover />
        </Box>
      </Box>
    </Box>
  );
}
