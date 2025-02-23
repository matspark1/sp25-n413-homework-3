const desktopNav = document.querySelector(".desktop-nav");
const mobileNav = document.querySelector(".mobile-nav");
const toggleButton = document.querySelector(".mobile-menu-toggle");

mobileNav.innerHTML = desktopNav.innerHTML;

toggleButton.addEventListener("click", () => {
  mobileNav.classList.toggle("open");
});

const insContainer = document.querySelector(".ins-container");
const box1 = document.querySelector(".instructor-page-box");
const box2 = document.querySelector(".instructor-page-box2");
const box3 = document.querySelector(".instructor-page-box3");

box1.addEventListener("click", () => {
  insContainer.innerHTML = `<!-- wp:group {"className":"ins-wrapper"} -->
<div class="ins-wrapper">
  <!-- wp:heading {"level": 2} -->
  <h2>Anne Johnson</h2>
  <!-- /wp:heading -->

  <!-- wp:paragraph -->
  <p>
    Anne Johnson is a professional drummer and percussion instructor with over 15 years of experience. She has toured with various rock, jazz, and orchestral groups and holds a degree in Percussion Performance.
  </p>
  <!-- /wp:paragraph -->

  <!-- wp:paragraph -->
  <p>
    Her teaching method focuses on rhythm development, technique, coordination, and musicality. She works with drummers of all skill levels, from beginners learning basic grooves to advanced students preparing for performances and studio work.
  </p>
  <!-- /wp:paragraph -->

  <!-- wp:paragraph -->
  <p><strong>Instruments Taught:</strong> Drum Set, Snare Drum, Cajón, Hand Percussion</p>
  <!-- /wp:paragraph -->

  <!-- wp:paragraph -->
  <p>
    <strong>Teaching Philosophy:</strong> Anne believes in building a strong rhythmic foundation while encouraging creativity. Her lessons are tailored to each student's musical interests, ensuring they develop both technical skills and a unique playing style.
  </p>
  <!-- /wp:paragraph -->

  <hr />

  <!-- wp:group {"className":"ins-contact-wrapper"} -->
  <div class="ins-contact-wrapper">
    <!-- wp:heading {"level": 3} -->
    <h3>Contact Anne</h3>
    <!-- /wp:heading -->

    <!-- wp:paragraph -->
    <p>Interested in drum lessons or have questions? Send a message below.</p>
    <!-- /wp:paragraph -->

    <form class="ins-contact">
      <input type="text" name="name" placeholder="Your Name.." required />
      <input type="email" name="email" placeholder="Your Email.." required />
      <textarea name="message" placeholder="Your Message.." required></textarea>
      <input type="submit" value="Contact Me Today" class="submitbtn" />
    </form>
  </div>
  <!-- /wp:group -->
</div>
<!-- /wp:group -->`;
});

box2.addEventListener("click", () => {
  insContainer.innerHTML = `<!-- wp:group {"className":"ins-wrapper"} -->
<div class="ins-wrapper">
  <!-- wp:heading {"level": 2} -->
  <h2>Mark Andrews</h2>
  <!-- /wp:heading -->

  <!-- wp:paragraph -->
  <p>
    I have been teaching music for over 15 years, specializing in jazz and  guitar. I have performed internationally and holds a degree in
    Music Education.
  </p>
  <!-- /wp:paragraph -->

  <!-- wp:paragraph -->
  <p>
    With a strong foundation in both performance and theory, Mark uses practical
    and technical training to make sure students build confidence in their
    playing.
  </p>
  <!-- /wp:paragraph -->

  <!-- wp:paragraph -->
  <p><strong>Instruments Taught:</strong> Guitar, Piano, Bass</p>
  <!-- /wp:paragraph -->

  <!-- wp:paragraph -->
  <p>
    <strong>Teaching Philosophy:</strong> Mark believes in a student-centered
    approach, adapting lessons to individual learning styles and musical
    interests.
  </p>
  <!-- /wp:paragraph -->
  <hr />
  <!-- wp:group {"className":"ins-contact-wrapper"} -->
  <div class="ins-contact-wrapper">
    <!-- wp:heading {"level": 3} -->
    <h3>Contact Mark</h3>
    <!-- /wp:heading -->

    <!-- wp:paragraph -->
    <p>Have questions or want to schedule a lesson? Send a message below.</p>
    <!-- /wp:paragraph -->

    <form class="ins-contact">
      <input type="text" name="name" placeholder="Your Name.." required />
      <input type="email" name="email" placeholder="Your Email.." required />
      <textarea name="message" placeholder="Your Message.." required></textarea>
      <input type="submit" value="Contact Me Today" class="submitbtn" />
    </form>
  </div>
  <!-- /wp:group -->
</div>
<!-- /wp:group -->`;
});

box3.addEventListener("click", () => {
  insContainer.innerHTML = `<!-- wp:group {"className":"ins-wrapper"} -->
<div class="ins-wrapper">
  <!-- wp:heading {"level": 2} -->
  <h2>Sarah Collins</h2>
  <!-- /wp:heading -->

  <!-- wp:paragraph -->
  <p>
    Sarah Collins is a highly experienced music instructor with over 20 years of teaching in vocal training and classical piano. She holds a Master's degree in Music Pedagogy and has worked with students of all levels, from beginners to advanced performers.
  </p>
  <!-- /wp:paragraph -->

  <!-- wp:paragraph -->
  <p>
    As a former concert pianist and choir director, Anne brings a structured yet adaptable approach to lessons. Her focus is on technique, expression, and musical interpretation, ensuring students develop strong foundational skills while nurturing their artistic voice.
  </p>
  <!-- /wp:paragraph -->

  <!-- wp:paragraph -->
  <p><strong>Instruments Taught:</strong> Piano, Voice, Music Theory</p>
  <!-- /wp:paragraph -->

  <!-- wp:paragraph -->
  <p>
    <strong>Teaching Philosophy:</strong> Anne believes in fostering a love for music through an individualized approach. She adapts her lessons to match each student's learning style, emphasizing confidence-building and creative exploration.
  </p>
  <!-- /wp:paragraph -->

  <hr />

  <!-- wp:group {"className":"ins-contact-wrapper"} -->
  <div class="ins-contact-wrapper">
    <!-- wp:heading {"level": 3} -->
    <h3>Contact Sarah</h3>
    <!-- /wp:heading -->

    <!-- wp:paragraph -->
    <p>Interested in lessons or have questions? Send a message below.</p>
    <!-- /wp:paragraph -->

    <form class="ins-contact">
      <input type="text" name="name" placeholder="Your Name.." required />
      <input type="email" name="email" placeholder="Your Email.." required />
      <textarea name="message" placeholder="Your Message.." required></textarea>
      <input type="submit" value="Contact Me Today" class="submitbtn" />
    </form>
  </div>
  <!-- /wp:group -->
</div>
<!-- /wp:group -->`;
});
