function Blog() {
  return (
    <main className="section">
      <div className="container blog-container">
        <div className="blog-header">
          <p className="section-eyebrow">Spring Break Blog</p>
          <h1>Spring Break 2026</h1>
          <p className="blog-intro">
            This page is where I document my spring break experience with
            photos, memories, and reflections. This spring break was uneventfull and boring.
          </p>
        </div>

        <article className="blog-post">
          <img
            src={`${import.meta.env.BASE_URL}neighborhood.jpg`}
            alt="Spring break destination view"
            className="blog-image"
          />

          <p>
            My spring break this year was not exactly the kind that gets turned
            into a movie montage. There were no beach sunsets, no dramatic road
            trips, and no last-minute flights to anywhere exciting. Instead, I
            spent most of my time at home, where the days sort of blended
            together in a peaceful but slightly unimpressive way. If anything,
            my biggest accomplishment was becoming deeply familiar with the
            layout of my kitchen and the exact amount of time it takes to wonder
            what I’m doing with my life while staring into the refrigerator.
          </p>

          <p>
            That said, I did make an honest effort to keep things interesting by
            experimenting with new food recipes. Some turned out surprisingly
            well, and others were more like edible life lessons. I also spent a
            lot of time playing video games with my friends, especially Counter
            Strike 2, which was equal parts teamwork, chaos, and hearing someone
            say “one more game” about six times in a row. It may not sound like
            the most glamorous use of spring break, but there is something
            special about laughing through a terrible match with friends while
            fully ignoring the passage of time.
          </p>

          <p>
            Probably the most meaningful part of my break was getting to spend
            time with my grandma. Compared to everything else, that was the part
            that actually felt grounding. Between the quiet routine of staying
            home, trying new recipes, gaming with friends, and hanging out with
            family, my spring break ended up being less about adventure and more
            about comfort. It was not exciting in the traditional sense, but it
            was real, restful, and a little funny in retrospect. Sometimes
            spring break is about making unforgettable memories, and sometimes
            it’s about surviving on homemade food, competitive matches, and the
            realization that doing “nothing” can still end up meaning something.
          </p>
        </article>

        <section className="blog-gallery">
          <img
            src={`${import.meta.env.BASE_URL}ralphs.jpg`}
            alt="Spring break memory 2"
            className="blog-gallery-image"
          />
          <p>
            Here you can see that I went to the supermarket to get supplies for my attempt, at making a homemade "starbucks style drink". All I needed was to get
            some white chocolate mocha sauce, some esspresso, and some milk to froth and steam with my coffee frother. I also picked up some regular groceries
            so that I don't starve.
          </p>
          <img
            src={`${import.meta.env.BASE_URL}CS2.jpg`}
            alt="Spring break memory 3"
            className="blog-gallery-image"
          />
          <p>
            I got back into Counter Strike 2, I bought some skins that I will definetly regret later and played with some of my friend trying to grind out of low elo.
          </p>
        </section>
      </div>
    </main>
  );
}

export default Blog;