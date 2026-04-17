function Blog() {
  return (
    <main className="section">
      <div className="container blog-container">
        <div className="blog-header">
          <p className="section-eyebrow">Spring Break Blog</p>
          <h1>Spring Break 2026</h1>
          <p className="blog-intro">
            This page is where I document my spring break experience with
            photos, memories, and reflections.
          </p>
        </div>

        <article className="blog-post">
          <img
            src={`${import.meta.env.BASE_URL}pngtree-gray-network-placeholder-png-image_3416659`}
            alt="Spring break destination view"
            className="blog-image"
          />

          <p>
            During spring break, I had the chance to step away from school and
            spend time exploring new places, trying great food, and relaxing
            with friends and family. One of my favorite parts of the trip was
            simply slowing down and enjoying the atmosphere wherever we went.
            Whether we were walking around local shops, visiting scenic spots,
            or just enjoying the weather, the whole experience felt refreshing
            after a busy academic quarter.
          </p>

          <p>
            Another highlight was getting to try different restaurants and local
            specialties. Food ended up being one of the best ways to remember
            the trip because each place had its own personality and style. I
            also took lots of photos so I could look back on the small details,
            like the views, the architecture, and the moments that made the
            experience feel special.
          </p>

          <p>
            Looking back, spring break reminded me how important it is to take
            breaks and make time for experiences outside the classroom. It gave
            me a chance to recharge, reflect, and come back feeling more
            motivated. If I could relive one moment from the trip, it would
            probably be watching the sunset and realizing how nice it felt to be
            fully present and not thinking about deadlines for a little while.
          </p>
        </article>

        <section className="blog-gallery">
          <img
            src={`${import.meta.env.BASE_URL}pngtree-gray-network-placeholder-png-image_3416659`}
            alt="Spring break memory 2"
            className="blog-gallery-image"
          />
          <img
            src={`${import.meta.env.BASE_URL}pngtree-gray-network-placeholder-png-image_3416659`}
            alt="Spring break memory 3"
            className="blog-gallery-image"
          />
        </section>
      </div>
    </main>
  );
}

export default Blog;