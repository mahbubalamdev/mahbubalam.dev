module.exports = {
  title: 'Mahbub Alam',
  description: 'Cloud Engineer',
  theme: 'modern-blog',
  summaryLength: 700,
  themeConfig: {
    translations: {
      read_more: 'Keep reading!',
      read_this_post: 'Read this post now!',
    },

    // cookies: {
    //   theme: 'dark-lime',
    //   buttonText: 'Got it!',
    //   message: 'We use cookies!',
    // },

    summary: true,

    // Example of advanced summary usage
    /*
    summary: {
      // Use the first two paragraphs
      paragraphs: 2,
      // Let's assume that a paragraph is anything that ends with "..." and a new line
      paragraphsSeparator: "...\n",
      // And let's assume that we want to join back the extracted paragraphs with an empty space.
      paragraphsJoiner: "",
      // If we didn't want to use the "paragraphs" functionality, and instead we
      // want to extract a summary up until the first occurrence of a text, we'd
      // use the "stopSymbol" functionality. Let's assume that we want to get
      // all the text up until the first ";" followed by a new line appears in
      // our text.
      stopSymbol: ";\n",
      // How about we add an emoji at the beginning of our summary?
      prepend: "🔈",
      // ... what about at the end?
      append: "📖",
    },
    */
    nav: [
      {
        text: 'Home',
        link: '/',
        icon: 'el-icon-house',
      },
      {
        text: 'Projects',
        link: '/projects/',
        icon: 'el-icon-folder',
      },
    ],
    // Let's say that we want to add a small message at the beginning or at the
    // end of each post. This is the place!
    posts: {
      prepend: "Hi, I hope you'll <i>enjoy</i> this post!",
      append: "Hi, I hope you've <b>enjoyed</b> this post!",
    },
    disqus: 'mahbubalamdev', // if you want to incorporate Disqus for comments replace this value else just get rid of it
    about: {
      fullName: 'Mahbub Alam',
      bio: 'I am a passionate Cloud Engineer, I enjoy building solution that is scalable, observable and fault tolerant.',
      image: 'https://www.mahbubalam.dev/images/mahbubalam.png',
    },
    footer: {
      contact: [
        {
          type: 'github',
          link: 'https://github.com/mahbubalamio',
        },
        {
          type: 'linkedin',
          link: 'https://www.linkedin.com/in/alam-mahbub/',
        },
      ],
      copyright: [
        {
          text: 'Theme: vuepress-theme-modern-blog',
          link: 'https://github.com/z3by/vuepress-theme-modern-blog',
        },
        {
          text: 'Copyright © 2022 Mahbub Alam',
          link: '',
        },
      ],
    },
  }
}
