"use client";

import EventCard from "@/components/EventCard";
import { useSearchParams } from "next/navigation";

const EventsList = ({ events }) => {
  console.log(events);
  const searchParams = useSearchParams();
  // this is for artists
  const keyword = searchParams.get("artists");
  console.log("keyword", keyword);
  const filterEvent = events.filter((event) => event.artist === keyword);

  //this is for tags
  const tagName = searchParams.get("tag");
  console.log("tag", tagName);
  const tagFilter = events.filter((event) => event.tags?.includes(tagName));
  console.log("tagFilter", tagFilter);

  return (
    <div className="flex flex-wrap pt-10 pl-3">
      {keyword === null && tagName === null
        ? events.map((eventData) => (
            <EventCard eventData={eventData} key={eventData.id} />
          ))
        : keyword != null && tagName === null
        ? filterEvent.map((eventData) => (
            <EventCard eventData={eventData} key={eventData.id} />
          ))
        : tagFilter.map((eventData) => (
            <EventCard eventData={eventData} key={eventData.id} />
          ))}
    </div>
  );
};

export default EventsList;
