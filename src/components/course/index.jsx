import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Avatar from "@mui/joy/Avatar";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import Link from "@mui/joy/Link";
import { Button, Grid, Typography } from "@mui/joy";
import { courses } from "../data/Courses";
import { useNavigate } from "react-router";

export default function Course() {
  const navigate = useNavigate();
  function navigateHandler(index) {
    navigate(`/courses/${index}`);
  }
  return (
    <Box sx={{ backgroundColor: "white", py: 10 }}>
      <Box sx={{ ml: 30 }}>
        <Typography
          sx={{ color: "#000339", fontSize: "35px", fontWeight: "bold" }}
        >
          Featured Properties
        </Typography>
        <Typography sx={{ color: "#5A6473", fontSize: "16px", mt: 1 }}>
          Everything you need to know when looking for a new home!
        </Typography>
        <Grid container gap={2}>
          {courses.map((course, index) => (
            <Box sx={{ minHeight: 350, mt: 5 }}>
              <Card
                variant="outlined"
                sx={(theme) => ({
                  width: 300,
                  gridColumn: "span 2",
                  flexDirection: "row",
                  flexWrap: "wrap",
                  resize: "horizontal",
                  overflow: "hidden",
                  gap: "clamp(0px, (100% - 360px + 32px) * 999, 16px)",
                  transition: "transform 0.3s, border 0.3s",
                  "&:hover": {
                    borderColor: theme.vars.palette.primary.outlinedHoverBorder,
                    transform: "translateY(-2px)",
                  },
                  "& > *": {
                    minWidth: "clamp(0px, (360px - 100%) * 999,100%)",
                  },
                })}
              >
                <AspectRatio
                  variant="soft"
                  sx={{
                    flexGrow: 1,
                    display: "contents",
                    "--AspectRatio-paddingBottom":
                      "clamp(0px, (100% - 360px) * 999, min(calc(100% / (16 / 9)), 300px))",
                  }}
                >
                  <img src={course.image} loading="lazy" alt="" />
                </AspectRatio>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                    maxWidth: 200,
                  }}
                >
                  <Box sx={{ display: "flex" }}>
                    <div>
                      <Typography level="h2" sx={{ fontSize: "md" }} mb={0.5}>
                        <Link
                          href="#container-responsive"
                          overlay
                          underline="none"
                          sx={{
                            color: "text.primary",
                            "&.Mui-focusVisible:after": {
                              outlineOffset: "-4px",
                            },
                          }}
                        >
                          {course.course_name}
                        </Link>
                      </Typography>
                      {/* <Typography level="body2">California, USA</Typography> */}
                    </div>
                  </Box>
                  <AspectRatio
                    variant="soft"
                    sx={{
                      "--AspectRatio-paddingBottom":
                        "clamp(0px, (100% - 200px) * 999, 200px)",
                      pointerEvents: "none",
                    }}
                  >
                    <img alt="" src={course.image} />
                  </AspectRatio>
                  <Box sx={{ display: "flex", gap: 1.5, mt: "auto" }}>
                    <Avatar src="https://images.unsplash.com/photo-1680022683888-052e4f20ebea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" />
                    <div>
                      <Typography level="body2">Lectured by</Typography>
                      <Typography fontWeight="lg" level="body2">
                        {course.creator}
                      </Typography>
                    </div>
                  </Box>
                    <Button onClick={() => navigateHandler(index)} variant="outlined">View</Button>
                </Box>
              </Card>
            </Box>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
