import React from "react";
import { summary } from "../../constants";

function AboutSummary() {
  return (
    <div>
      <div>
        <h1 className="text-3xl  font-bold text-center py-5">Summary</h1>
      </div>
      <div className="bg-formBG flex flex-wrap gap-10 mx-10 justify-around items-stretch py-6 px-4 rounded-xl">
        {summary.map((detail) => (
          <div
            id={detail.id}
            className="text-xl font-semibold text-center min-w-[200px] border-2 navRes:border-none p-2 rounded-md"
          >
            <h1>{detail.count}</h1>
            <h1>{detail.topic}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AboutSummary;
