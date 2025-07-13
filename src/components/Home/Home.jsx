import avatar from "../../assets/avataaars.svg";
import StarLine from "../StarLine/StarLine";

export default function Home() {
  return (
    <>
      <section>
        <div className="bg-green min-h-screen flex items-center justify-center flex-col text-white">
          <div className="flex flex-col items-center text-center space-y-6">
            <img
              src={avatar}
              className="w-1/2 md:w-1/2  mx-auto"
              alt="Avatar"
            />

            <StarLine  title="Start Framework" color="white"/>
            <p className="text-lg md:text-xl">
              Graphic Artist - Web Designer - Illustrator
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
