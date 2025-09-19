import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import { FaBiohazard } from 'react-icons/fa'
import styles from './BioTimeline.module.css'

export default function BioTimeline() {
  return (
    <VerticalTimeline>
      <VerticalTimelineElement
        date="1918"
        dateClassName={styles.date}
        contentStyle={{ background: '#111', color: '#eee' }}
        contentArrowStyle={{ borderRight: '7px solid #111' }}
        iconStyle={{ background: '#32CD32', color: '#fff' }}
        icon={<FaBiohazard />}
      >
        <h3 className="vertical-timeline-element-title">Испанский грипп</h3>
        <p>Пандемия, унесшая миллионы жизней по всему миру.</p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        date="1942"
        dateClassName={styles.date}
        contentStyle={{ background: '#111', color: '#eee' }}
        contentArrowStyle={{ borderRight: '7px solid #111' }}
        iconStyle={{ background: '#32CD32', color: '#fff',   }}
        icon={<FaBiohazard />}
      >
        <h3 className="vertical-timeline-element-title">Unit 731</h3>
        <p>Японская программа биологического оружия во время Второй мировой.</p>
      </VerticalTimelineElement>

      {/* Добавь другие события */}
    </VerticalTimeline>
  )
}
