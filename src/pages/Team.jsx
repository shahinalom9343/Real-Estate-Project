import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Team = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      className="my-6 border-2 border-violet-600 rounded-xl font-alegreya"
      data-aos="fade-up"
      data-aos-duration="2000"
    >
      <section className="py-6 dark:bg-gray-100 dark:text-gray-800">
        <div className="container flex flex-col items-center justify-center p-4 mx-auto space-y-8 sm:p-10">
          <h1 className="text-4xl font-bold leading-none text-center sm:text-5xl">
            Our team
          </h1>
          <p
            className="max-w-2xl text-center dark:text-gray-600"
            data-aos="fade-down"
            data-aos-duration="2000"
          >
            We are always on the lookout for the next great fit for our team!
            Here are ten great reasons why you should consider a career with Mad
            City Dream commercial aspects. Here we are always for you.
          </p>
          <div className="flex flex-row flex-wrap-reverse justify-center">
            <div className="flex flex-col justify-center m-8 text-center">
              <img
                alt=""
                className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500"
                src="https://source.unsplash.com/100x100/?portrait?0"
              />
              <p className="text-xl font-semibold leading-tight">
                Abdur Rahman
              </p>
              <p className="dark:text-gray-600">Arch. Engineer</p>
            </div>
            <div className="flex flex-col justify-center m-8 text-center">
              <img
                alt=""
                className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500"
                src="https://source.unsplash.com/100x100/?portrait?1"
              />
              <p className="text-xl font-semibold leading-tight">Shahin Alom</p>
              <p className="dark:text-gray-600">Visual Designer</p>
            </div>
            <div className="flex flex-col justify-center m-8 text-center">
              <img
                alt=""
                className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500"
                src="https://source.unsplash.com/100x100/?portrait?2"
              />
              <p className="text-xl font-semibold leading-tight">
                Tanvir Akhter
              </p>
              <p className="dark:text-gray-600">Graphics Designer</p>
            </div>
            <div className="flex flex-col justify-center m-8 text-center">
              <img
                alt=""
                className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500"
                src="https://source.unsplash.com/100x100/?portrait?3"
              />
              <p className="text-xl font-semibold leading-tight">
                shafayat Hasan
              </p>
              <p className="dark:text-gray-600">Project Engineer</p>
            </div>
            <div className="flex flex-col justify-center m-8 text-center">
              <img
                alt=""
                className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500"
                src="https://source.unsplash.com/100x100/?portrait?4"
              />
              <p className="text-xl font-semibold leading-tight">Abdul Aziz</p>
              <p className="dark:text-gray-600">Project Co-ordinator</p>
            </div>
            <div className="flex flex-col justify-center m-8 text-center">
              <img
                alt=""
                className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500"
                src="https://source.unsplash.com/100x100/?portrait?5"
              />
              <p className="text-xl font-semibold leading-tight">John kims</p>
              <p className="dark:text-gray-600">Managing Director</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
