import React from "react";

type StringHeadingProps = {
  children: any;
};

export default function SectionHeading({ children }: StringHeadingProps) {
  return (
    <h2 className="text-3xl font-medium capitalize mb-8 text-center">
      {children}
    </h2>
  );
}
