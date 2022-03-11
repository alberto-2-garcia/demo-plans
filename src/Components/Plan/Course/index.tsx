import { FC } from 'react'
import { CourseProps } from './interface';

const Course: FC<CourseProps> = ({ course }) => {

  const { name, id, units, color } = course;

  return (
    <div className='block course-block' style={{backgroundColor: color ?? '#BF7913'}}>
      <p>{name} - {id}</p>
      <p>Units: {units}</p>
    </div>
  )
}

export default Course;