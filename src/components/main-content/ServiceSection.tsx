import FirstComponent from "../ServiceComponent/FirstComponent";
import SecondComponent from "../ServiceComponent/SecondComponent";

const ServiceSection = () => {
  return (
    <section className="relative" id="services">
      <FirstComponent />
      <SecondComponent />
    </section>
  );
};
export default ServiceSection;
