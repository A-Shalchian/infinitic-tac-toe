"use client";
import React from "react";

type TimeOptionSelectionProps = {
  onSelect: (timed: boolean) => void;
};

export const TimeOptionSelection: React.FC<TimeOptionSelectionProps> = ({
  onSelect,
}) => {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen pt-20">
      <h2 className="text-3xl font-bold my-10 text-center">
        Choose Game Timing
      </h2>
      <div className="flex flex-col gap-4">
        <button
          onClick={() => onSelect(true)}
          className="px-6 py-3 bg-blue-500 btn-texts hover:bg-blue-600"
        >
          Timed
        </button>
        <button
          onClick={() => onSelect(false)}
          className="px-6 py-3 bg-gray-500 btn-texts hover:bg-gray-600"
        >
          No Time
        </button>
      </div>
    </div>
  );
};
