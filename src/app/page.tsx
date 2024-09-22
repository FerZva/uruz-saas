"use client";
import {
  MdHeadsetMic,
  MdOutlineWebAsset,
  MdOutlineShoppingBag,
  MdOutlineAod,
  MdDevices,
  MdOutlineAnalytics,
} from "react-icons/md";

export default function Home() {
  interface Stat {
    id: number;
    name: string;
    value: number;
  }

  interface Services {
    id: number;
    icon: JSX.Element;
    title: string;
    description: string;
  }

  const stats: Stat[] = [
    { id: 1, name: "Clientes Satisfied", value: 150 },
    { id: 2, name: "Projects Done", value: 200 },
    { id: 3, name: "Clients Subscribed", value: 400 },
  ];

  const services: Services[] = [
    {
      id: 1,
      icon: <MdOutlineWebAsset />,
      title: "Web Development",
      description:
        "We provide custom web development solutions, creating dynamic, responsive, and SEO-optimized websites tailored to the specific needs of your business.",
    },
    {
      id: 2,
      icon: <MdOutlineAod />,
      title: "Mobile Develpment",
      description:
        "We develop native and cross-platform mobile applications that offer smooth and fast experiences, optimized for both Android and iOS.",
    },
    {
      id: 3,
      icon: <MdOutlineShoppingBag />,
      title: "Software Marketplace",
      description:
        "We create and manage software platforms where users can buy, sell, and exchange digital products with ease and security.",
    },
    {
      id: 4,
      icon: <MdHeadsetMic />,
      title: "24/7 Assistance",
      description:
        "We offer technical support and customer service available 24/7, ensuring fast and efficient responses to any issues or inquiries.",
    },
    {
      id: 5,
      icon: <MdDevices />,
      title: "Digital Transformation",
      description:
        "We help businesses modernize their processes by integrating digital technologies, improving efficiency, and adapting to market trends.",
    },
    {
      id: 6,
      icon: <MdOutlineAnalytics />,
      title: "Branding",
      description:
        "We offer branding services to create and strengthen your brand's visual identity, helping you stand out in the market with unique designs and effective communication strategies.",
    },
  ];

  return (
    <div className="bg-slate-900">
      <div className="relative isolate px-6 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
        <div className="mx-auto max-w-2xl py-24 md:py-32 sm:py-48 lg:py-56">
          <main className="text-center">
            <h1 className="text-[150px] md:text[200px] lg:text-[200px] font-extralight tracking-tight text-white p-0 m-0">
              URUZ
            </h1>
            <h2 className="text-[40px] font-extralight  tracking-tight text-white">
              Software Solutions
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              We specialize in creating innovative and scalable web and mobile
              applications tailored to meet the unique needs of businesses. Our
              team delivers high-quality software solutions, ensuring seamless
              user experiences and cutting-edge technology integration
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Marketplace
              </a>
              <a
                href="#"
                className="text-sm font-semibold leading-6 text-white"
              >
                Contact Us<span aria-hidden="true">&nbsp;→</span>
              </a>
            </div>
          </main>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
      </div>
      {/* Stats */}
      <section className="text-center flex flex-col">
        <div className="w-full">
          <h3 className="text-[40px] text-white md:text-[40px]">
            Trusted by companies worldwide
          </h3>
        </div>
        <div className="flex justify-center py-12 z-50 px-4 md:px-0">
          <div className="w-auto bg-slate-800 flex rounded-md justify-center flex-wrap">
            {stats.map(({ name, value }, index) => (
              <div key={index} className="w-72 py-8 text-white rounded-md">
                <h3 className="text-[30px]">{name}</h3>
                <h4 className="text-[25px] text-white font-bold">+{value}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* End Stats */}
      {/* Our Services */}
      <section className="px-5 flex pb-10 flex-col text-white text-center justify-center lg:px-60 md:px-20">
        <div className="flex justify-center flex-col py-10 lg:px-60 md:px-20 sm:px-10">
          <h3 className="text-[40px]">Our Services</h3>
          <p>
            We offer a comprehensive suite of services, including web and mobile
            development, software marketplace solutions, and 24/7 assistance.
            Our expertise in digital transformation helps businesses modernize
            and improve efficiency, while our branding services ensure a strong
            visual identity to stand out in competitive markets.
          </p>
        </div>
        <div className="grid grid-rows-6 m-auto grid-flow-col gap-6 sm:m-auto md:grid-rows-3 lg:grid-rows-2">
          {services.map(({ title, description, icon }, index) => (
            <div
              key={index}
              className="bg-slate-800 p-5 rounded-md max-w-[472.2px] hover:shadow-[rgba(0,_123,_255,_0.16)_0px_10px_36px_0px,_rgba(0,_123,_255,_0.06)_0px_0px_0px_1px]"
            >
              <div className="flex max-h-[44px] items-center pb-5">
                <span className="mr-4 text-[40px]">{icon}</span>
                <h4 className="font-bold text-left">{title}</h4>
              </div>
              <div>
                <p className="text-left text-slate-300">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* End Our Services */}
      {/* Testomonials */}
      <section className="py-32 lg:px-60 md:px-28 sm:px-10"></section>
      {/* End Testimonials */}
      {/* Contact Us */}
      <section className="py-32 lg:px-60 md:px-28s sm:px-10"></section>
      {/* End Contact Us */}
      {/* Contact Us */}
      <section className="px-2 lg:py-32 lg:px-60 flex flex-col text-center text-white md:px-28 sm:px-2">
        <div className="">
          <h3 className="text-[30px] lg:text-[40px]">
            Let&apos;s Have a Chat 🖐️
          </h3>
          <p className="text-slate-300 py-5 px-4 lg">
            Questions about our products/services, orders, or just want to say
            hello? We&apos;re here to help.
          </p>
        </div>
        <div className="max-w-[700px] m-auto w-full">
          <form action="">
            <div className="flex text-left justify-center flex-wrap">
              <div className="w-full flex flex-col p-4 lg:w-[50%] md:w-full">
                <label htmlFor="" className="mb-2">
                  First name
                </label>
                <input
                  type="text"
                  className="bg-slate-800 rounded-md border-none md:w-full"
                  placeholder="Your first name"
                />
              </div>
              <div className="flex flex-col w-full p-4 lg:w-[50%] md:w-full">
                <label htmlFor="" className="mb-2">
                  Last name
                </label>
                <input
                  type="text"
                  className="bg-slate-800 rounded-md border-none md:w-full"
                  placeholder="Your last name"
                />
              </div>
            </div>
            <div className="flex text-left justify-between flex-wrap">
              <div className="flex flex-col w-full p-4 lg:w-[50%] md:w-full">
                <label htmlFor="" className="mb-2">
                  Email
                </label>
                <input
                  type="text"
                  className="bg-slate-800 rounded-md border-none"
                  placeholder="Your email"
                />
              </div>
              <div className="flex flex-col w-full p-4 lg:w-[50%] md:w-full">
                <label htmlFor="" className="mb-2">
                  Phone number
                </label>
                <input
                  type="text"
                  className="bg-slate-800 rounded-md border-none md:w-full"
                  placeholder="Your phone number"
                />
              </div>
            </div>
            <div className="w-full p-4">
              <textarea
                name=""
                id=""
                className="w-full h-60 bg-slate-800 rounded-md border-none resize-none"
                placeholder="Your message here..."
              ></textarea>
            </div>
            <div className="w-full px-4 pb-4">
              <button className="w-full rounded-md bg-indigo-600 m-auto p-2 hover:bg-indigo-500">
                Send message
              </button>
            </div>
          </form>
        </div>
      </section>
      {/* End Contact Us */}
    </div>
  );
}
