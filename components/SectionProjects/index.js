import { StyledSection } from './styles'

import ProjectCard from './ProjectCard'

const SectionProjects = props => {
  return (
    <StyledSection>
      <h2>{props.title}</h2>
      <div className='section-container'>
        {
          props.data.map(e => (
            <ProjectCard
              key={e.id}
              data={e}
            />
          ))
        }
      </div>
    </StyledSection>
  )
}

export default SectionProjects
