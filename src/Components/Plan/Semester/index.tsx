import { FC } from 'react'
import Course from '../Course';
import { SemesterProps } from './interface';

const Semester: FC<SemesterProps> = ({ semester }) => {
  const { courses, number } = semester;

  return (
    <div>
      <h4> Semester {number} </h4>
      {courses.map(course => (
        <Course key={course.id} course={course} />
      ))}
    </div>
  )
}

export default Semester;
