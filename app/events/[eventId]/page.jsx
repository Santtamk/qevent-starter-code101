"use client";
import { useParams } from "next/navigation";
import React from "react";
import EventDetails from "./EventDetails";

const EventsPage = () => {
  const { eventId } = useParams();

  return(

    <EventDetails eventId={eventId} />;
  ) 
};

export default EventsPage;
