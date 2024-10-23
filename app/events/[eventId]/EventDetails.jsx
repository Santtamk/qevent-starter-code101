import Tag from "@/components/Tag";
import React from "react";

const EventDetails = async ({ eventId }) => {
  const res = await fetch(
    `https://qevent-backend.labs.crio.do/events/${eventId}`
  );
  const eventPageData = await res.json();

  return (
    <div className="py-2 px-4 gap-4 flex flex-col">
      <div className="flex justify-center items-center">
        <img src={eventPageData.image} />
      </div>
      <div className="flex flex-col">
        <div className="bg-gradient-to-r from-orange-400 to-teal-600 inline-block text-transparent bg-clip-text font-bold text-2xl">
          {eventPageData?.name}
        </div>
        <div className="bg-gradient-to-r from-orange-400 to-teal-600 inline-block text-transparent bg-clip-text font-bold">
          {eventPageData?.location}
        </div>
        <div className="bg-gradient-to-r from-orange-400 to-teal-600 inline-block text-transparent bg-clip-text font-bold">
          {eventPageData?.artist}
        </div>
      </div>
      <div className="flex flex-row">
        {eventPageData?.tags?.map((item) => (
          <Tag text={item} />
        ))}
      </div>
      <div>{eventPageData?.description}</div>
      <div className="flex justify-between items-stretch">
        <div className="bg-gradient-to-r from-orange-400 to-teal-600 inline-block text-transparent bg-clip-text font-bold flex justify-center items-center text-xl">
          ${eventPageData?.price}
        </div>
        <button className="text-white bg-red-400 p-2 rounded-sm">
          Buy Tickets
        </button>
      </div>
    </div>
  );
};

export default EventDetails;
