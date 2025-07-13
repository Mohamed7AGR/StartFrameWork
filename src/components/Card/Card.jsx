import { useEffect } from "react";
import { initModals } from "flowbite";
import { FaPlus } from "react-icons/fa6";

export default function Card(props) {
  const { dataSrc, dataName } = props;

  useEffect(() => {
    initModals();
  }, []);

  return (
    <div className=" container w-11/12 group relative">
      <button
        type="button"
        className="block p-0 mb-5 text-center relative w-full"
        data-modal-target={`modal-${dataName}`}
        data-modal-toggle={`modal-${dataName}`}
      >
        <img
          src={dataSrc}
          alt=""
          width="400"
          height="300"
          className="w-full h-auto object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 transition-all duration-700 bg-green/90 opacity-0 group-hover:opacity-100  flex items-center justify-center">
          <span className="text-white  font-medium text-9xl">
            <FaPlus />
          </span>
        </div>
      </button>

      {/* المودال */}
      <div
        id={`modal-${dataName}`}
        tabIndex="-1"
        aria-hidden="true"
        className="hidden fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
      >
        <div className="relative w-full max-w-2xl max-h-full m-auto">
          <div className="relative bg-white rounded-lg shadow">
            <div className="mt-20">
              <img
                src={dataSrc}
                alt=""
                className="w-full h-auto max-h-[70vh] object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
