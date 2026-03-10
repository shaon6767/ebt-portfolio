import { useState } from "react";

const HoverBorder = ({ children }) => {
  const [pos, setPos] = useState(null);

  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    setPos({ x, y });
  };

  return (
    <div
      onMouseMove={handleMove}
      onMouseLeave={() => setPos(null)}
      className="relative rounded-2xl p-[2px] overflow-hidden transition-all duration-500"
      style={{
        background: pos
          ? `radial-gradient(circle at ${pos.x}% ${pos.y}%, #f70c0c, transparent 60%)`
          : "transparent",
      }}
    >
      <div className="relative rounded-2xl">
        {children}
      </div>
    </div>
  );
};

export default HoverBorder;