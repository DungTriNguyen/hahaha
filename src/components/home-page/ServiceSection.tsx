import FirstComponent from "../service-component/FirstComponent";
import SecondComponent from "../service-component/SecondComponent";

const ServiceSection = () => {
  return (
    <section className="relative overflow-hidden data-scroll-to" id="services">
      <FirstComponent />
      <SecondComponent />
    </section>
  );
};
export default ServiceSection;
