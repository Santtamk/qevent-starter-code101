import React from "react";

import Tag from "@/components/Tag";

const TagPage = async () => {
  const res = await fetch("https://qevent-backend.labs.crio.do/tags");
  const data = await res.json();

  return (
    <div className="flex items-center flex-wrap justify-center container gap-3 p-14">
      {data.map((tag) => (
        <Tag text={tag.name} key={tag.id} />
      ))}
    </div>
  );
};

export default TagPage;
