import {
  BiBook,
  BiCalendar,
  BiChild,
  BiFoodMenu,
  BiGroup,
  BiMale,
  BiMedal,
  BiReceipt,
} from 'react-icons/bi';
import { HiOutlineAdjustments } from 'react-icons/hi';
export const MenuConstants = [
  {
    name: 'LIST',
    item: [
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
      {
        id: 'academic',
        name: 'Academic',
        path: '/academic',
        icon: <BiMedal />,
      },
      {
        id: 'assignment',
        name: 'Assignment',
        path: '/assignment',
        icon: <BiReceipt />,
      },
      {
        id: 'session',
        name: 'Session',
        path: '/session',
        icon: <BiFoodMenu />,
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
      {
        id: 'system-roles',
        name: 'System Roles',
        path: '/system-role',
        icon: <HiOutlineAdjustments />,
      },
      {
        id: 'users',
        name: 'Users',
        path: '/user',
        icon: <BiGroup />,
      },
    ],
  },
];
