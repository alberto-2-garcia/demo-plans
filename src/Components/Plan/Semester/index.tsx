import { FC } from 'react'
import './styles.scss';
import Course from '../Course';
import { SemesterProps } from './interface';

const Semester: FC<SemesterProps> = ({ semester }) => {
  const { courses, number, color } = semester;

  return (
    <div className='semester'>
      <h4 className='block semester-block'style={{backgroundColor: color ?? '#BF7913'}}> Semester {number} </h4>
      {courses.map(course => (
        <Course key={course.id} course={course} />
      ))}
    </div>
  )
}

export default Semester;
