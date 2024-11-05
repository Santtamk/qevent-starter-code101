"use client";

import { useSession } from "next-auth/react";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

const CreateEventPage = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/events");
    }
  }, [status, router]);

  if (status === "loading") {
    return <h1>Loading...</h1>;
  }

  return <div>CreateEventPage</div>;
};

export default CreateEventPage;
