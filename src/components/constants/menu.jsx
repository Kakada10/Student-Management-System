import { BiBook, BiCalendar, BiChild,  BiMale, BiMedal } from 'react-icons/bi';
export const MenuConstants = [
  {
    name: 'List',
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
    ],
  },
];
