import {
  AspectRatio,
  Box,
  Card,
  CardOverflow,
  Divider,
  Typography,
} from "@mui/joy";
import React from "react";
import Navbar from "./Navbar";
import { courses } from "../data/Courses";
import { useParams } from "react-router";

export default function SingleCourse() {
  const { id } = useParams();
  const { image, course_name, creator } = courses[id];
  return (
    <Box>
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
        </Box>
      </Box>
    </Box>
  );
}
