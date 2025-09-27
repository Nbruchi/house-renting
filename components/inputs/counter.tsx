"use client";

import { useCallback } from "react";
import { BiMinus, BiPlus } from "react-icons/bi";

interface CounterProps {
  title: string;
  subtitle: string;
  value: number;
  onChange: (value: number) => void;
}

const Counter = ({ title, subtitle, value, onChange }: CounterProps) => {
  const onAdd = useCallback(() => {
    onChange(value + 1);
  }, [value, onChange]);

  const onRemove = useCallback(() => {
    if (value <= 1) {
      return;
    }

    onChange(value - 1);
  }, [value, onChange]);

  return (
    <div className="flex flex-row items-center gap-4 justify-between">
      <div className="flex flex-col">
        <p className="font-medium">{title}</p>
        <p className="font-light text-gray-600">{subtitle}</p>
      </div>
      <div className="flex flex-row items-center gap-4">
        <div
          onClick={onRemove}
          className="w-10 h-10 rounded-full border-[1px] border-neutral-400 text-neutral-600 flex items-center justify-center cursor-pointer transition hover:opacity-80"
        >
          <BiMinus size={18} />
        </div>
        <div className="text-xl font-light text-neutral-600">{value}</div>
        <div
          onClick={onAdd}
          className="w-10 h-10 rounded-full border-[1px] border-neutral-400 text-neutral-600 flex items-center justify-center cursor-pointer transition hover:opacity-80"
        >
          <BiPlus size={18} />
        </div>
      </div>
    </div>
  );
};

export default Counter;
