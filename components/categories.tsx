"use client";

import { Container } from "./container";
import { categories } from "../constants";
import CategoriesBox from "./categories-box";
import { usePathname, useSearchParams } from "next/navigation";

const Categories = () => {
  const pathname = usePathname();
  const params = useSearchParams();
  const category = params?.get("category");

  const isMainPage = pathname === "/";

  if (!isMainPage) return null;

  return (
    <Container>
      <div className="pt-4 flex flex-row items-center justify-between overflow-x-auto">
        {categories.map((item) => (
          <CategoriesBox
            key={item.label}
            label={item.label}
            icon={item.icon}
            selected={category === item.label}
          />
        ))}
      </div>
    </Container>
  );
};

export default Categories;
