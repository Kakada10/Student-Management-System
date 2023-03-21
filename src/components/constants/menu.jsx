import { BiBook, BiChild, BiMale } from 'react-icons/bi';
export const MenuConstants = [
  {
    name: 'List',
    item: [
      {
        id: 'teachers',
        name: 'Teacher',
        path: 'teacher',
        icon: <BiMale />,
      },
      {
        id: 'students',
        name: 'Student',
        path: 'student',
        icon: <BiChild />,
      },
      {
        id: 'courses',
        name: 'Course',
        path: 'course',
        icon: <BiBook />,
      },
    ],
  },
];
