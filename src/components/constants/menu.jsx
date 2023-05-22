import { BiBook, BiCalendar, BiChild, BiMale, BiMedal } from 'react-icons/bi';
export const MenuConstants = [
  {
    // name: 'LIST',
    item: [
      {
        id: 'academic',
        name: 'Academic',
        path: '/academic',
        icon: <BiMedal />,
      },
      {
        id: 'years',
        name: 'Year',
        path: '/year',
        icon: <BiCalendar />,
      },
      {
        id: 'courses',
        name: 'Course',
        path: '/course',
        icon: <BiBook />,
      },
    ],
  },
  {
    name: 'SETTING',
    item: [
      {
        id: 'teachers',
        name: 'Teacher',
        path: '/teacher',
        icon: <BiMale />,
      },
      {
        id: 'students',
        name: 'Student',
        path: '/student',
        icon: <BiChild />,
      },
      // {
      //   id: 'system-roles',
      //   name: 'System Roles',
      //   path: '/system-role',
      //   icon: <HiOutlineAdjustments />,
      // },
      // {
      //   id: 'users',
      //   name: 'Users',
      //   path: '/user',
      //   icon: <BiGroup />,
      // },
    ],
  },
];
