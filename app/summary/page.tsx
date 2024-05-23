/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

export default function Summary() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 sm:p-6 max-w-6xl mx-auto">
      <ul className="grid grid-cols-1 gap-4">
        <li className="rounded-lg overflow-hidden bg-white shadow-sm dark:bg-gray-950 flex items-center">
          <img
            alt="May 1, 2023 - 10:30 AM"
            className="w-16 h-16 object-cover"
            height={64}
            src="/stock/chair_01.jpg"
            style={{
              aspectRatio: "64/64",
              objectFit: "cover",
            }}
            width={64}
          />
          <div className="p-4 space-y-1 flex-1">
            <h3 className="font-semibold text-base">May 1, 2023 - 10:30 AM</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Bounding box: x=50, y=50, width=100, height=100
            </p>
            <Link
              className="inline-flex items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
              href="#"
            >
              View More
            </Link>
          </div>
        </li>
        <li className="rounded-lg overflow-hidden bg-white shadow-sm dark:bg-gray-950 flex items-center">
          <img
            alt="May 15, 2023 - 2:45 PM"
            className="w-16 h-16 object-cover"
            height={64}
            src="/stock/chair_02.jpg"
            style={{
              aspectRatio: "64/64",
              objectFit: "cover",
            }}
            width={64}
          />
          <div className="p-4 space-y-1 flex-1">
            <h3 className="font-semibold text-base">May 15, 2023 - 2:45 PM</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Bounding box: x=75, y=75, width=150, height=150
            </p>
            <Link
              className="inline-flex items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
              href="#"
            >
              View More
            </Link>
          </div>
        </li>
        <li className="rounded-lg overflow-hidden bg-white shadow-sm dark:bg-gray-950 flex items-center">
          <img
            alt="June 1, 2023 - 9:00 AM"
            className="w-16 h-16 object-cover"
            height={64}
            src="/stock/chair_03.jpg"
            style={{
              aspectRatio: "64/64",
              objectFit: "cover",
            }}
            width={64}
          />
          <div className="p-4 space-y-1 flex-1">
            <h3 className="font-semibold text-base">June 1, 2023 - 9:00 AM</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Bounding box: x=100, y=100, width=200, height=200
            </p>
            <Link
              className="inline-flex items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
              href="#"
            >
              View More
            </Link>
          </div>
        </li>
        <li className="rounded-lg overflow-hidden bg-white shadow-sm dark:bg-gray-950 flex items-center">
          <img
            alt="June 15, 2023 - 4:30 PM"
            className="w-16 h-16 object-cover"
            height={64}
            src="/stock/chair_04.jpg"
            style={{
              aspectRatio: "64/64",
              objectFit: "cover",
            }}
            width={64}
          />
          <div className="p-4 space-y-1 flex-1">
            <h3 className="font-semibold text-base">June 15, 2023 - 4:30 PM</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Bounding box: x=125, y=125, width=250, height=250
            </p>
            <Link
              className="inline-flex items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
              href="#"
            >
              View More
            </Link>
          </div>
        </li>
        <li className="rounded-lg overflow-hidden bg-white shadow-sm dark:bg-gray-950 flex items-center">
          <img
            alt="July 1, 2023 - 11:15 AM"
            className="w-16 h-16 object-cover"
            height={64}
            src="/stock/chair_05.jpg"
            style={{
              aspectRatio: "64/64",
              objectFit: "cover",
            }}
            width={64}
          />
          <div className="p-4 space-y-1 flex-1">
            <h3 className="font-semibold text-base">July 1, 2023 - 11:15 AM</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Bounding box: x=150, y=150, width=300, height=300
            </p>
            <Link
              className="inline-flex items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
              href="#"
            >
              View More
            </Link>
          </div>
        </li>
      </ul>
    </div>
  );
}
