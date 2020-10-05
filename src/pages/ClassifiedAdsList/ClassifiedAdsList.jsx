import React from "react";
import { JobCard, OrderByFilter } from "../../components";

const ClassifiedAdsList = () => {
  return (
    <>
      <OrderByFilter />
      <JobCard />
    </>
  );
};

export default ClassifiedAdsList;
