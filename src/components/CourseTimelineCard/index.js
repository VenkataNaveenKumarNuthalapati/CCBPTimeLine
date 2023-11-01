import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimelineCard = props => {
  const {eachObj} = props
  const {courseTitle, duration, description, tagsList} = eachObj

  return (
    <div className="card-container">
      <div className="header">
        <h1>{courseTitle}</h1>
        <div className="clock">
          <AiFillClockCircle />
          <p>{duration}</p>
        </div>
      </div>
      <p>{description}</p>
      <ul className="ul-container">
        {tagsList.map(eachitem => (
          <p className="liel">{eachitem.name}</p>
        ))}
      </ul>
    </div>
  )
}

export default CourseTimelineCard

// {
//   categoryId: 'COURSE'
//   courseTitle: 'Static Website'
//   description: 'Build your own personal portfolio website and a website to host conferences and events.  Publish your website and share it with your friends, family and beyond.'
//   duration: '10 days'
//   id: 'c6aad2fb-7673-45cf-9606-a335acc0cf4b'
//   tagsList: []
//   title: '10 DECEMBER 2020'
// }
