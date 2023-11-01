import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimelineCard = props => {
  const {eachObj} = props
  const {projectTitle, imageUrl, description, duration, projectUrl} = eachObj

  return (
    <div className="card-container">
      <img className="p-image" src={imageUrl} alt="project" />
      <div className="header">
        <h1>{projectTitle}</h1>
        <div className="time">
          <AiFillCalendar />
          <p>{duration}</p>
        </div>
      </div>
      <p>{description}</p>
      <a href={projectUrl} className="a">
        Visit
      </a>
    </div>
  )
}

export default ProjectTimelineCard

// let obj = {
//   categoryId: 'PROJECT',
//   description:
//     'A tourism website enables the user to browse through the images of popular destinations.',
//   duration: '1 hr',
//   id: 'a19d93d6-bdac-479e-b554-974ef9e6e66c',
//   imageUrl: 'https://assets.ccbp.in/frontend/react-js/projects-s4-img.png',
//   projectTitle: 'Tourism Website',
//   projectUrl: 'https://tourismapp.ccbp.tech/',
//   title: 'Naveen',
// }
