import { Project } from '@/state/api'
import React from 'react'

type Props = {
    project:Project
}

const ProjectCard = ({project}: Props) => {
  return (
    <div className='mb-3 rounded bg-white p-4 shadow dark:bg-dark-secondary dark:text-white'>
        <h3 className='font-bold'>{project.name}</h3>
        <p>{project.description}</p>
        <p><span className='font-semibold'>Start Date: </span> {project.startDate}</p>
        <p><span className='font-semibold'>End Date: </span> {project.endDate}</p>
        

    </div>
  )
}

export default ProjectCard