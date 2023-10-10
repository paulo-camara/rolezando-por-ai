import React from "react";

const GradeCounter = ({ counter }) => {
  const getComponents = () => {
    const items = [];

    for (let i = 1; i <= counter; i++) {
      items.push(<div style={{ fontSize: "23px" }}>🌟</div>);
    }

    return items;
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      {getComponents()}
    </div>
  );
};

export default GradeCounter;
