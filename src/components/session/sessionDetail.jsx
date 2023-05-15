import * as React from "react";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import ModalDialog from "@mui/joy/ModalDialog";
import Divider from "@mui/joy/Divider";
import Typography from "@mui/joy/Typography";
import SingleCourse from "../navbar/SingleCourse";
import { Link, useParams } from "react-router-dom";
import {
  CardOverflow,
  FormControl,
  FormLabel,
  Grid,
  Input,
  Modal,
  Stack,
  Tab,
  TabList,
  Tabs,
  tabClasses,
} from "@mui/joy";
import { BiAddToQueue } from "react-icons/bi";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { MobileTimePicker } from "@mui/x-date-pickers/MobileTimePicker";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const sessions = [
  {
    title: "Basic HTML & CSS",
    time: "1pm - 3pm",
    date: "Monday, March 8, 2023",
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ",
  },
  {
    title: "TD1",
    time: "1pm - 3pm",
    date: "Monday, March 8, 2023",
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ",
  },
  {
    title: "React js",
    time: "1pm - 3pm",
    date: "Monday, March 8, 2023",
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ",
  },
];

export default function SessionDetail() {
  const { id } = useParams();
  const [open, setOpen] = React.useState(false);
  return (
    <Box>
      <SingleCourse />
      <Box display="flex" justifyContent="flex-end" mr="10px">
        <Button
          startDecorator={<BiAddToQueue />}
          onClick={() => setOpen(true)}
          size="lg"
          variant="solid"
        >
          Add
        </Button>
      </Box>
      <Box width="30%" ml="20px">
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
            <Tab>
              <Link
                style={{ textDecoration: "none", color: "black" }}
                to={`/courses/${id}`}
              >
                All Student{" "}
              </Link>
            </Tab>
            <Tab>All Session</Tab>
            <Tab>All Assignment</Tab>
          </TabList>
        </Tabs>
      </Box>
      {sessions.map((session, i) => (
        <ModalDialog
          aria-labelledby="divider-modal-title"
          aria-describedby="divider-modal-desc"
          sx={{
            // this custom styles is for demonstration purpose, you might not need them in your app
            marginTop: "20px",
            marginLeft: "20px",
            position: "static",
            transform: "none",
            maxWidth: 500,
          }}
        >
          <Typography fontSize="lg" fontWeight="lg" id="divider-modal-title">
            {session.title}
          </Typography>
          <CardOverflow
            variant="soft"
            sx={{
              display: "flex",
              gap: 1.5,
              py: 1.5,
              px: "var(--Card-padding)",
              bgcolor: "white",
            }}
          >
            <Typography
              level="body3"
              sx={{ fontWeight: "md", color: "text.secondary" }}
            >
              {session.time}
            </Typography>
            <Divider orientation="vertical" />
            <Typography
              level="body3"
              sx={{ fontWeight: "md", color: "text.secondary" }}
            >
              {session.date}
            </Typography>
          </CardOverflow>
          <Divider inset="none" />
          <Typography level="body2" id="divider-modal-desc" fontSize="sm">
            {session.desc}
          </Typography>
          <Divider />
          <Box
            sx={{
              bgcolor: "background.level1",
              px: 2,
              py: 1.5,
              m: "calc(-1 * var(--ModalDialog-padding))",
              mt: 0,
              borderBottomLeftRadius: "var(--ModalDialog-radius)",
              borderBottomRightRadius: "var(--ModalDialog-radius)",
              textAlign: "right",
            }}
          >
            <Button size="sm">
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to={`/courses/attendance-list/${id}`}
              >
                View
              </Link>
            </Button>
          </Box>
        </ModalDialog>
      ))}
      <>
        {/* //Add new session */}
        <Modal open={open} onClose={() => setOpen(false)}>
          <ModalDialog
            aria-labelledby="basic-modal-dialog-title"
            aria-describedby="basic-modal-dialog-description"
            sx={{ maxWidth: 500 }}
          >
            <Typography id="basic-modal-dialog-title" component="h2">
              Create new session
            </Typography>
            <Typography
              id="basic-modal-dialog-description"
              textColor="text.tertiary"
            >
              Fill in the information of the session.
            </Typography>
            <form
              onSubmit={(event) => {
                event.preventDefault();
                setOpen(false);
              }}
            >
              <Stack spacing={2}>
                <FormControl>
                  <FormLabel>Title</FormLabel>
                  <Input autoFocus required />
                </FormControl>
                <FormControl>
                  <FormLabel>Description</FormLabel>
                  <Input required />
                </FormControl>

                {/* Start and End */}
                <Grid item xs={12}>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={["MobileTimePicker"]}>
                      <DemoItem label="Start">
                        <MobileTimePicker
                          defaultValue={dayjs("2022-04-17T15:30")}
                        />
                      </DemoItem>
                      <DemoItem label="End">
                        <MobileTimePicker
                          defaultValue={dayjs("2022-04-17T15:30")}
                        />
                      </DemoItem>
                    </DemoContainer>
                  </LocalizationProvider>
                </Grid>

                {/* Date */}
                <Grid item xs={12}>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={["MobileTimePicker"]}>
                      <DemoItem label="Date">
                        <DatePicker />
                      </DemoItem>
                    </DemoContainer>
                  </LocalizationProvider>
                </Grid>
                <FormControl>
                  <FormLabel>Group</FormLabel>
                  <Input autoFocus required />
                </FormControl>
                <FormControl>
                  <FormLabel>Course ID</FormLabel>
                  <Input autoFocus required />
                </FormControl>
                <Button type="submit">Submit</Button>
              </Stack>
            </form>
          </ModalDialog>
        </Modal>
      </>
    </Box>
  );
}
