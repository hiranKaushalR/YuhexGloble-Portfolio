import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { webdev, softdev, appdev } from "../../assets";

function ServiceBody() {
  const { ref, inView } = useInView();
  return (
    <div>
      <div className="flex justify-evenly items-center font-poppins">
        <div className="w-2/4">
          <h1 className="text-2xl font-semibold text-formBG py-4">
            Web Application Development
          </h1>
          <p>
            Yuhex Global Software delivers cutting-edge web development
            solutions with a focus on captivating UI/UX designs. From simple
            portfolios to complex enterprise systems, our expertise spans a wide
            range of industries. Using diverse technologies, we ensure that our
            websites are secure, scalable, and efficient. Let us transform your
            online presence and bring your vision to life with our innovative,
            reliable, and top-quality web development services.
          </p>
        </div>
        <img src={webdev} alt="" className="w-[35%]" />
      </div>
      <div className="flex justify-evenly items-center font-poppins">
        <img src={softdev} alt="" className="w-[35%]" />
        <div className="w-2/4">
          <h1 className="text-2xl font-semibold text-formBG py-4">
            Software Development
          </h1>
          <p>
            Yuhex Global Software excels in desktop application development,
            crafting tailored solutions to streamline your operations and boost
            productivity. Our team harnesses the latest technologies to create
            robust and user-friendly applications that meet your specific
            requirements. From concept to execution, we prioritize efficiency,
            security, and seamless integration, ensuring a smooth user
            experience across platforms. Whether you need a standalone
            application or an enterprise-level system, trust us to deliver
            solutions that exceed your expectations. Elevate your business with
            Yuhex Global's desktop application development services and
            experience innovation like never before.
          </p>
        </div>
      </div>
      <div  className="flex justify-evenly items-center font-poppins">
        <div className="w-2/4">
          <h1  className="text-2xl font-semibold text-formBG py-4">App Development</h1>
          <p>
            Yuhex Global Software offers top-notch mobile application
            development services tailored to your unique needs. With a focus on
            innovation and design, we create intuitive and engaging mobile apps
            that deliver results. Whether you need a consumer app or a business
            solution, our team of experts uses the latest technologies to ensure
            your app is not only visually appealing but also powerful and
            secure. Partner with us to bring your mobile app vision to life and
            unlock new possibilities in the mobile world.
          </p>
        </div>
        <img src={appdev} alt="" className="w-[35%]" />
      </div>
    </div>
  );
}

export default ServiceBody;
