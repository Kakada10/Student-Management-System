import { Box, Flex, Grid, IconButton } from '@chakra-ui/react';
import { useMemo, useState } from 'react';
import { FcContacts } from 'react-icons/fc';
import { useHistory, useLocation } from 'react-router-dom';

// import InputUnstyled from '@mui/base/InputUnstyled';

// import { InfiniteScroll } from '../../../../components/Tables';

import { Card, Chip, Link, Typography } from '@mui/joy';
import image from '../../../../components/asssets/boy.png';

export default function List() {
  const history = useHistory();
  const { pathname } = useLocation();
  const parentUrl = `/${pathname.split('/')[1]}`;
  const [, setFilter] = useState({ searchText: '' });

  const course = [
    {
      year: '3',
      start: '2018',
      end: '2019',
      group: 'A',
    },
    {
      year: '4',
      start: '2019',
      end: '2020',
      group: 'C',
    },
    {
      year: '5',
      start: '2018',
      end: '2019',
      group: 'A',
    },
  ];

  return (
    <Flex flexDir="column" borderRadius="10px" bg="white" h="full">
      <Grid
        as="form"
        templateColumns="auto max-content"
        p="3"
        mb="3"
        boxShadow="sm"
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.target);
          const formProps = Object.fromEntries(formData);
          setFilter((prev) => ({
            ...prev,
            searchText: formProps.searchText,
          }));
        }}
      ></Grid>
      <Box mt="10px" display="flex" mb="20px" flex="1" overflow="auto">
        <Card
          variant="outlined"
          orientation="horizontal"
          sx={{
            ml: 2,
            mr: 5,
            width: 350,
            gap: 2,
            '&:hover': {
              boxShadow: 'md',
              borderColor: 'neutral.outlinedHoverBorder',
            },
          }}
        >
          <img src={image} srcSet={image} loading="lazy" alt="" />
          <div>
            <Typography level="h2" fontSize="lg" id="card-description" mb={0.5}>
              Welcome to School Management System
            </Typography>
            <Typography
              fontSize="sm"
              aria-describedby="card-description"
              mb={1}
            >
              <Link
                overlay
                underline="none"
                href="#interactive-card"
                sx={{ color: 'text.tertiary' }}
              >
                Explore the system
              </Link>
            </Typography>
            <Chip
              variant="outlined"
              color="primary"
              size="sm"
              sx={{ pointerEvents: 'none' }}
            >
              View
            </Chip>
          </div>
        </Card>

        {/* Course */}
        {course.map((course, i) => (
          <Card
          onClick={() => history.push(`${parentUrl}/edit`)}
            variant="outlined"
            sx={(theme) => ({
              width: 200,
              height: 200,
              ml: 2,
              gridColumn: 'span 2',
              flexDirection: 'row',
              flexWrap: 'wrap',
              resize: 'horizontal',
              overflow: 'hidden',
              gap: 'clamp(0px, (100% - 360px + 32px) * 999, 16px)',
              transition: 'transform 0.3s, border 0.3s',
              '&:hover': {
                borderColor: theme.vars.palette.primary.outlinedHoverBorder,
                transform: 'translateY(-2px)',
              },
              '& > *': { minWidth: 'clamp(0px, (360px - 100%) * 999,100%)' },
            })}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                maxWidth: 200,
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  textAlign: 'center',
                }}
              >
                <div>
                  <IconButton sx={{ fontSize: '2rem' }}>
                    <FcContacts />
                  </IconButton>
                  <Typography level="h2" sx={{ fontSize: 'md' }} mb={0.5}>
                    <Link
                      href="#container-responsive"
                      overlay
                      underline="none"
                      sx={{
                        mt: '10px',
                        mb: '10px',
                        color: '#7367f0',
                        '&.Mui-focusVisible:after': { outlineOffset: '-4px' },
                      }}
                    >
                      Year : {course.year}
                    </Link>
                  </Typography>
                  <Typography level="body2">
                    {' '}
                    from {course.start} to {course.end}
                  </Typography>
                </div>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  textAlign: 'center',
                  mt: '10px',
                }}
              >
                <div>
                  <Typography fontWeight="lg" level="body2">
                    Group : {course.group}
                  </Typography>
                </div>
              </Box>
            </Box>
          </Card>
        ))}
      </Box>
    </Flex>
  );
}
