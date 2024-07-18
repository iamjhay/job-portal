import React from "react";

const JobDetailsPage = async ({ params }: { params: { jobId: string } }) => {
  return <div>JobDetails: {params.jobId}</div>;
};

export default JobDetailsPage;
