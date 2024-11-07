"use client";

import { v4 as uuidv4 } from "uuid";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const CreateEventPage = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/events");
    }
  }, [status, router]);

  if (status === "loading") {
    return <h1>Loading...</h1>;
  }

  const handleEventCreate = async (event) => {
    event.preventDefault(); // Prevent the default form submission

    const randomNumber = Math.floor(Math.random() * 99) + 1;

    // Create the event payload
    const eventDetails = {
      title,
      description,
      date,
      id: uuidv4(),
      image: `https://randomuser.me/api/portraits/men/${randomNumber}.jpg`,
    };

    try {
      const response = await fetch(
        "https://qevent-backend.labs.crio.do/events",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(eventDetails),
        }
      );

      if (response.status === 201) {
        console.log("Event created successfully");
        router.push("/events"); // Navigate to events page on success
      } else {
        console.error("Failed to create event", response.statusText);
        alert("Event creation failed");
      }
    } catch (error) {
      console.error("Error creating event:", error);
    }
  };

  return (
    <form
      onSubmit={handleEventCreate}
      className="flex flex-col justify-center items-center gap-6"
    >
      <label>
        Title:
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </label>
      <label>
        Description:
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </label>
      <label>
        Date:
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </label>
      <button type="submit">Create Event</button>
    </form>
  );
};

export default CreateEventPage;
