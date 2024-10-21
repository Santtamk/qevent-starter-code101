import ArtistCard from "@/components/ArtistCard";
import React from "react";

const ArtistsPage = async () => {
  let data = await fetch("https://qevent-backend.labs.crio.do/artists");
  let artists = await data.json();
  return (
    <div className="flex flex-wrap pt-10 justify-around">
      {artists.map((artistData) => (
        <ArtistCard artistData={artistData} />
      ))}
    </div>
  );
};
export default ArtistsPage;
