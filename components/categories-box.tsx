"use client";

import { IconType } from "react-icons";
import qs from "query-string";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

interface CategoriesBoxProps {
  label: string;
  icon: IconType;
  selected?: boolean;
}

const CategoriesBox = ({ label, icon: Icon, selected }: CategoriesBoxProps) => {
  const router = useRouter();
  const params = useSearchParams();

  const handleClick = useCallback(() => {
    let currentQuery = {};

    if (params) {
      currentQuery = qs.parse(params.toString());
    }

    const updatedQuery: any = {
      ...currentQuery,
      category: label,
    };

    if (params?.get("category") === label) {
      delete updatedQuery.category;
    }

    const url = qs.stringifyUrl(
      {
        url: "/",
        query: updatedQuery,
      },
      { skipNull: true }
    );

    router.push(url);
  }, [label, params, router]);

  return (
    <div
      className={`flex flex-col items-center justify-center cursor-pointer border-b-2 hover:text-neutral-800 transition ${
        selected
          ? "border-b-neutral-800 text-neutral-800"
          : "border-b-transparent text-neutral-500"
      }`}
      onClick={handleClick}
    >
      <Icon size={26} />
      <div className="font-medium text-sm">{label}</div>
    </div>
  );
};

export default CategoriesBox;
