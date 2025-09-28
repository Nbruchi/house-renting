"use client";

import { CgSpinner } from "react-icons/cg";

const Loader = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <CgSpinner size={100} color="red" className="animate-spin" />
    </div>
  );
};

export default Loader;
