import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import CardOverflow from "@mui/joy/CardOverflow";
import Divider from "@mui/joy/Divider";
import Typography from "@mui/joy/Typography";
import { Box, Tab, TabList, Tabs, tabClasses } from "@mui/joy";
import Navbar from "../navbar/Navbar";
import { courses } from "../data/Courses";
import { useParams } from "react-router";
import TableHover from "../table/tableHover";

export default function CourseDetail() {
  const { id } = useParams();
  const { image, course_name, creator } = courses[id];

  return (
    <Box>
      <Navbar />
      <Box mt="40px" ml="20px">
        <Card variant="outlined" sx={{ width: 320 }}>
          <CardOverflow>
            <AspectRatio ratio="2">
              <img src={image} loading="lazy" alt="" />
            </AspectRatio>
          </CardOverflow>
          <Typography level="h2" sx={{ fontSize: "md", mt: 2, mb: 2 }}>
            {course_name}
          </Typography>

          <Divider />
          <CardOverflow
            variant="soft"
            sx={{
              display: "flex",
              gap: 1.5,
              py: 1.5,
              px: "var(--Card-padding)",
              bgcolor: "background.level1",
            }}
          >
            <Typography
              level="body3"
              sx={{ fontWeight: "md", color: "text.secondary" }}
            >
              Lectured by
            </Typography>
            <Divider orientation="vertical" />
            <Typography
              level="body3"
              sx={{ fontWeight: "md", color: "text.secondary" }}
            >
              {creator}
            </Typography>
          </CardOverflow>
        </Card>
        <Box width="30%" mt="5px">
          <Tabs aria-label="tabs" defaultValue={0}>
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
              <Tab>All Session</Tab>
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
