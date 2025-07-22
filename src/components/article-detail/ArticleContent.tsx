import Image from "next/image";

const ArticleContent = () => {
  return (
    <section className="bg-[#0C0B10] flex flex-col justify-center items-center text-white">
      <div className="max-w-[840px] w-full h-auto ">
        <div className="">
          <Image
            src="/articles/article_detail.png"
            width={840}
            height={336}
            alt=""
          />
        </div>

        <div>
          <p>Everyone wants to build an MVP - but few get it right.</p>
          <p>
            Too often, MVPs are launched without clear direction, built too
            quickly, or fail to solve a real problem. The result? Wasted time,
            misaligned teams, and products that never get traction.
          </p>
          <p>
            At Hubcom, we’ve worked with dozens of startups and enterprises to
            design MVPs that actually work — fast, focused, and user-driven.
          </p>
        </div>
        <title>The 3 Most Common MVP Traps:</title>
        <div>
          <p>1. Building Too Much, Too Soon</p>
          <p>
            An MVP isn’t about launching a mini version of your product — it’s
            about testing one core assumption. Anything more is noise.
          </p>
        </div>
        <div>
          <p>1. Building Too Much, Too Soon</p>
          <p>
            An MVP isn’t about launching a mini version of your product — it’s
            about testing one core assumption. Anything more is noise.
          </p>
        </div>
        <div>
          <p>1. Building Too Much, Too Soon</p>
          <p>
            An MVP isn’t about launching a mini version of your product — it’s
            about testing one core assumption. Anything more is noise.
          </p>
        </div>
        <title>How Hubcom Approaches MVPs</title>
        <div>
          <p>At Hubcom, we follow a lean yet intentional process:</p>
          <ul>
            <li>Align on the core user need.</li>
            <li>Map key journeys with UX-first thinking.</li>
            <li>Build only what's essential for learning.</li>
            <li>Ship fast — then iterate based on real usage.</li>
          </ul>
          <p>
            In one case, we helped a client go from concept to MVP launch in 6
            weeks, and they closed their first 1,000 users within 30 days — all
            because we focused on the right problem, not just a feature
            checklist.
          </p>
        </div>
        <title>How Hubcom Approaches MVPs</title>
        <ul>
          <li>Solves a single, urgent problem</li>
          <li>Launched with clear success metrics</li>
          <li>Easy to test, easy to evolve</li>
          <li>Built with scale in mind</li>
        </ul>
      </div>
    </section>
  );
};
export default ArticleContent;
