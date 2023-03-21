import { Box, Flex } from '@chakra-ui/react';
import React, { useMemo } from 'react';
// import InfiniteScrollTable from '../../../../components/Tables/InfiniteScrollTable';

export default function List() {
  const columns = useMemo(() => [
    {
      Header: 'ID',
      accessor: 'n',
    },
    {
      Header: 'First Name',
      accessor: 'first_name',
    },
    {
      Header: 'Last Name',
      accessor: 'last_name',
    },
    {
      Header: 'Year',
      accessor: 'year',
    },
    {
      Header: 'Group',
      accessor: 'group',
    },
  ]);
  return (
    <Flex flexDir="column" bg="white" h="full" rounded="md">
      <Box flex="1" overflow="auto">
        H1********
      </Box>
    </Flex>
  );
}
