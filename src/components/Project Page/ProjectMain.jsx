import React from 'react'
import ProjectHead from './ProjectHead'
import ProjectBody from './ProjectBody'

function ProjectMain() {
  return (
    <div>
        <div>
            <ProjectHead />
        </div>
        <div className='mx-[10%]'>
            <ProjectBody />
        </div>
    </div>
  )
}

export default ProjectMain