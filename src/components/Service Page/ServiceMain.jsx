import ServiceWeb from "./ServiceWeb";
import ServiceSoft from "./ServiceSoft";
import ServiceMobile from "./ServiceMobile";

function ServiceMain() {
  return (
    <section>
      {/* Service Body Goes Here */}
      <div className="mx-[10%]">
        <div className="flex flex-col gap-y-20 mlg:gap-y-0 py-10">
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
