import { FC } from 'react'
import { CourseProps } from './interface';

const Course: FC<CourseProps> = ({ course }) => {

  const { name, id, units } = course;

  return (
    <div>
      <p>{name}</p>
      <p>{id}</p>
      <p>{units}</p>
    </div>
  )
}

export default Course;