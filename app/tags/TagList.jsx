"use client";
import Tag from "@/components/Tag";
import { useSearchParams } from "next/navigation";
import React from "react";

const TagList = ({ data }) => {
  const searchParams = useSearchParams();
  const tagName = searchParams.get("tag");
  console.log("tag", tagName);
  return (
    
  );
};

export default TagList;
