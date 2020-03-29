import { StyledCard } from './styles'

const ProjectCard = ({ data }) => {
  return (
    <StyledCard
      img={data.img}
      title={data.title}
      href={data.url}
      target='_blank'
      rel='noopener'
    >
      <div className='flipper'>
        <div className='front'>
          <h3>{data.title}</h3>
        </div>
        <div className='back'>
          <ul>
            <h4>Tecnologias usadas:</h4>
            {
              data.tecnologias.map((e, index) => (
                <li key={index}>{e}</li>
              ))
            }
          </ul>
        </div>
      </div>
    </StyledCard>
  )
}

export default ProjectCard