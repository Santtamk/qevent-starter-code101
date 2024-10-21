"use client"

import EventCard from '@/components/EventCard';
import { useSearchParams } from 'next/navigation';

const EventsList = ({events}) => {
  // const [eventData, setEventData] = useState([events])
  const searchParams = useSearchParams();
  const keyword = searchParams.get("artists")
  console.log('keyword', keyword)

  const filterEvent = events.filter(event => event.artist === keyword)
  console.log('events', events)
  return (
    <div className="flex flex-wrap pt-10 pl-3">
      {keyword === null ? 
        events.map((eventData) => (
          <EventCard eventData={eventData} key={eventData.id}/>
      )) : (
      filterEvent.map((eventData) => (
        <EventCard eventData={eventData} key={eventData.id}/>
      )
      ))
    }
    </div>
  )
}

export default EventsList