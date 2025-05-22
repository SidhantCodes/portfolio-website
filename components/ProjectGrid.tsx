import React from 'react'
import Heading from './Heading'
import { ProjectCard } from './ProjectCard'
import { projects } from '@/constants'

const ProjectGrid = () => {
  return (
    <div id="projects" className="max-w-5xl mx-auto px-8 flex-col">
      <Heading head={`Projects`}/>
      <div className="grid sm:grid-cols-2 sm:gap-x-16">
        {projects.map(project => (
          <ProjectCard 
            title={project.title}
            desc={project.desc}
            image={project.image}
            livelink={project.livelink}
            repolink={project.repolink}
          />
        ))}
      </div>
    </div>
  )
}

export default ProjectGrid