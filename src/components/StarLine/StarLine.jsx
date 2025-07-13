import { FaStar } from "react-icons/fa6";

export default function StarLine(props) {
  const { title, color } = props;

  return (
    <>
      <h1
        className="uppercase flex justify-center items-center mb-2 text-2xl md:text-3xl lg:text-4xl font-bold"
        style={{ color: color }}
      >
        {title}
      </h1>
      <div className="mb-5 mx-auto relative w-fit" style={{ color: color }}>
        <div
          className="absolute top-3 left-10 w-20 h-1"
          style={{ backgroundColor: color }}
        ></div>
        <FaStar className="text-2xl" />
        <div
          className="absolute top-3 right-10 w-20 h-1"
          style={{ backgroundColor: color }}
        ></div>
      </div>
    </>
  );
}
