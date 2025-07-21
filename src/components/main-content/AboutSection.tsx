import SlideComponent from "../SlideComponent"

const AboutSection = () => {
    return (
        <section className="container mx-auto bg-black items-center justify-center text-white">
      <div className="flex w-full flex-col items-center justify-center">
        <title>PROJECTS</title>
        <h3>WE BUILD BEYOND BRIEFS</h3>
        <p>We craft scalable systems where clarity meets creativity Human-focused. Tech-backed. Future-ready</p>
        <div className="items-center justify-center ">
          <SlideComponent />
        </div>
      </div>
    </section>
    )
}
export default AboutSection