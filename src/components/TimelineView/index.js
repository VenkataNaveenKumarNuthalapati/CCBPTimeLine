import {Chrono} from 'react-chrono'
import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'
import './index.css'

const TimeLineView = props => {
  const {timelineItemsList} = props
  const items = timelineItemsList.map(eachObj => ({title: eachObj.title}))

  return (
    <div className="bg-container">
      <h1>MY JOURNEY OF CCBP 4.0</h1>

      <Chrono mode="VERTICAL_ALTERNATING" items={items}>
        {timelineItemsList.map(eachObj =>
          eachObj.categoryId === 'COURSE' ? (
            <CourseTimelineCard eachObj={eachObj} key={eachObj.id} />
          ) : (
            <ProjectTimelineCard eachObj={eachObj} key={eachObj.id} />
          ),
        )}
      </Chrono>
    </div>
  )
}

export default TimeLineView
