import { Helmet } from "react-helmet-async";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="md:px-6 px-4 my-4">
      <Helmet>
        <title>Axis Commercial | About</title>
      </Helmet>
      <div className="flex flex-col md:flex-row md:gap-48 md:mb-20 md:mt-10">
        <div className="text-3xl text-cyan-400 font-extrabold">
          <p>About Us </p>
        </div>
        <div>
          <p
            className="text-justify"
            data-aos="fade-down-left"
            data-aos-duration="2000"
          >
            <span className="text-xl font-semibold">At Axis Commercial</span>,
            we are dedicated to revolutionizing the way you experience
            [product/service]. With a steadfast commitment to excellence,
            innovation, and customer satisfaction, we strive to exceed your
            expectations at every turn. Our team of experts works tirelessly to
            deliver top-tier quality, ensuring that every interaction with our
            brand is nothing short of exceptional. <br /> <br /> Driven by a
            passion for excellence, we continuously push the boundaries of
            possibility, embracing cutting-edge technology and forward-thinking
            strategies to stay ahead of the curve. Our unwavering dedication to
            our customers fuels our mission to provide you with solutions that
            not only meet your needs but also anticipate them. <br /> <br /> we
            understand that your success is our success. That's why we place
            great importance on building strong, lasting relationships with our
            valued customers. We pride ourselves on our transparent
            communication, reliability, and integrity, earning your trust every
            step of the way. <br /> <br /> Whether you're a small business
            looking to grow or a seasoned industry leader seeking to optimize
            your operations, [Axis Commercial] is here to support you on your
            journey. Experience the difference with [Axis Commercial], where
            excellence is not just a goal – it's our standard.
          </p>
        </div>
      </div>
      <hr />
      <div className="flex flex-col md:gap-48 md:mb-20 md:mt-10 md:flex-row-reverse">
        <div className="text-3xl text-cyan-400 font-extrabold">
          <p>Our History </p>
        </div>
        <div>
          <p
            className="text-justify"
            data-aos="fade-down-right"
            data-aos-duration="2000"
          >
            Over the years, we have navigated through various milestones and
            challenges, each one shaping us into the dynamic organization we are
            today. Through strategic partnerships, investments in cutting-edge
            technology, and a relentless pursuit of excellence, we have
            established ourselves as a trusted leader in the [industry/sector].{" "}
            <br /> <br />
            As we reflect on our past achievements, we are energized by the
            opportunities that lie ahead. With a rich history of innovation and
            a passion for pushing boundaries, Axis Commercial is poised to
            continue making a meaningful impact in the [industry/sector]
            landscape for years to come.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
