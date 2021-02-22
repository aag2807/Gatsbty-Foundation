import React from 'react'

const Project = ({ project }) => {
  return (
    <div className="card">
      <img className="card__img" src={project.image} alt='' />
      <div style={{marginTop: '1rem'}} >
        <h5 class="card-title">{project.title}</h5>
        <a class="card-link" href={project.link}>Link</a>
      </div>
    </div>
  )
}

export default Project;
