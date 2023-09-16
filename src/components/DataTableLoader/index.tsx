"use client";
import React from "react";
import ContentLoader from "react-content-loader";

const DataTableLoader = (): React.ReactNode => {
  return (
    <ContentLoader
      width={"100%"}
      height={550}
      className="px-2"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect y="50" rx="4" ry="4" width="100%" height="38" />
      <rect y="100" rx="4" ry="4" width="100%" height="38" />
      <rect y="152" rx="4" ry="4" width="100%" height="38" />
      <rect y="202" rx="4" ry="4" width="100%" height="38" />
      <rect y="252" rx="4" ry="4" width="100%" height="38" />
      <rect y="302" rx="4" ry="4" width="100%" height="38" />
      <rect y="352" rx="4" ry="4" width="100%" height="38" />
      <rect y="402" rx="4" ry="4" width="100%" height="38" />
      <rect y="452" rx="4" ry="4" width="100%" height="38" />
      <rect y="502" rx="4" ry="4" width="100%" height="38" />
      <rect y="552" rx="4" ry="4" width="100%" height="38" />
      <rect y="602" rx="4" ry="4" width="100%" height="38" />
      <rect y="652" rx="4" ry="4" width="100%" height="38" />
      <rect y="702" rx="4" ry="4" width="100%" height="38" />
    </ContentLoader>
  );
};

export default DataTableLoader;
