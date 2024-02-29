import ServiceHead from "./ServiceHead";
import ServiceWeb from "./ServiceWeb";
import ServiceSoft from "./ServiceSoft";
import ServiceMobile from "./ServiceMobile";

function ServiceMain() {
  return (
    <section>
      <ServiceHead />
      {/* Service Body Goes Here */}
      <div className="mx-[10%]">
        <div className="flex flex-col gap-y-10 mlg:gap-y-0 pb-10">
          <ServiceWeb />
          <ServiceSoft />
          <ServiceMobile />
        </div>
      </div>
      {/* ServiceBody Goes Here */}
    </section>
  );
}

export default ServiceMain;
