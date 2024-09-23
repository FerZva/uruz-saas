// components/TeamSection.tsx
import Image from "next/image";
import FernandoPhoto from "../assets/FernandoPhoto.jpg";
import JohanPhoto from "../assets/JohanPhoto.jpg";

const TeamSection = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Our Team
          </h2>
          <p className="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
            Explore the whole collection of open-source web components and
            elements built with the utility classes from Tailwind
          </p>
        </div>

        <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
          <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <Image
                className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg"
                src={FernandoPhoto}
                alt="Fernando Zavala Avatar"
                width={500}
                height={500}
              />
            </a>
            <div className="p-5">
              <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                <a href="#">Fernando Zavala</a>
              </h3>
              <span className="text-gray-500 dark:text-gray-400">
                CEO & Software Engineer
              </span>
              <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                Fernando drives the technical strategy of the flowbite platform
                and brand.
              </p>
              <ul className="flex space-x-4 sm:mt-0">
                <li>
                  <a
                    href="#"
                    className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                  >
                    {/* Insert social media icon here */}
                  </a>
                </li>
                {/* Other social media links */}
              </ul>
            </div>
          </div>

          <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <Image
                className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg"
                src={JohanPhoto}
                alt="Johan Zavala Avatar"
                width={500}
                height={500}
              />
            </a>
            <div className="p-5">
              <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                <a href="#">Johan Zavala</a>
              </h3>
              <span className="text-gray-500 dark:text-gray-400">CTO</span>
              <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                Johan drives the technical strategy of the flowbite platform and
                brand.
              </p>
              <ul className="flex space-x-4 sm:mt-0">
                <li>
                  <a
                    href="#"
                    className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                  >
                    {/* Insert social media icon here */}
                  </a>
                </li>
                {/* Other social media links */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
