


import EventsList from "./EventsList";

const EventsPage = async () => {
  const res = await fetch("https://qevent-backend.labs.crio.do/events");
  const events = await res.json();

  return <EventsList events={events} />;
};

export default EventsPage;
