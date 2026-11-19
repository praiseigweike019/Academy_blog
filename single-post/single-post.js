const post = {
    id: 1,
    title: "Getting Started with Web Development",
    body: `
  <p>Learn the foundations of modern web development and discover how HTML, CSS and JavaScript work together to help you build beautiful and responsive websites.</p>

  <p>Every website you visit is built from these three technologies. HTML gives a page its structure: the headings, paragraphs, images, links and forms. CSS controls how everything looks, from colours and fonts to spacing and layout. JavaScript adds behaviour, such as menus that open, forms that check your input, and content that updates without reloading the page.</p>

  <h2>Start with HTML</h2>
  <p>HTML is the best place to begin because it is the skeleton of every page. Learn the common elements first: headings, paragraphs, lists, links, images and buttons. Once you understand how to organise content with meaningful tags, the rest becomes much easier to build on.</p>

  <h2>Make it look good with CSS</h2>
  <p>CSS turns a plain page into something people enjoy using. Start with colours, fonts and spacing, then move on to layout tools like Flexbox and Grid. Media queries are the key to responsive design, because they let your page adapt to phones, tablets and desktop screens.</p>

  <h2>Bring it to life with JavaScript</h2>
  <p>JavaScript is what makes a website interactive. Begin with variables, functions and conditions, then practise responding to events like clicks and typing. Even a small feature, such as a button that shows or hides content, teaches you how the browser and your code talk to each other.</p>

  <h2>Practise by building</h2>
  <p>The fastest way to improve is to build small projects. Make a personal page, then add styling, then add one interactive feature. Do not worry about getting everything right at the start. Mistakes are part of the process, and every bug you fix teaches you something new.</p>

  <p>Stay consistent, keep experimenting, and over time these foundations will grow into the skills you need to build real websites.</p>
`,
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1000&q=85",
    date: "Nov 10, 2026",
};



const grid = document.getElementById("postsGrid");

grid.addEventListener("click", function (event) {
  // Back button
  if (event.target.closest(".back-btn")) {
    renderBlog(true);
    return;
  }

  // Read article link
  const readLink = event.target.closest(".read-link");
  if (!readLink) return;

  event.preventDefault();

  grid.innerHTML = `
    <article class="single-post">
      <img class="single-post-image" src="${post.image}" alt="${post.title}" />
      <h1 class="single-post-title">${post.title}</h1>
      <p class="single-post-date">${post.date}</p>
      <div class="single-post-body">${post.body}</div>
      <button type="button" class="back-btn">← Back to posts</button>
    </article>
  `;
});