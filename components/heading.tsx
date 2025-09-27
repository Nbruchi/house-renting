"use client";

interface HeadingProps {
  title: string;
  subtitle?: string;
  center?: boolean;
}

const Heading = ({ title, subtitle, center }: HeadingProps) => {
  return (
    <div className={`${center ? "text-center" : "text-start"}`}>
      <h4 className="text-2xl font-bold">{title}</h4>
      <p className="font-light text-neutral-500 mt-2">{subtitle}</p>
    </div>
  );
};

export default Heading;
