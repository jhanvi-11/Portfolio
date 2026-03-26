const config = {
  title: "Jhanvi Arora | Full-Stack Developer",
  description: {
    long: "Explore the portfolio of Jhanvi, a full-stack developer and creative technologist specializing in interactive web experiences, 3D animations, and innovative projects. Discover my latest work, including Coding Ducks, The Booking Desk, Ghostchat, and more. Let's build something amazing together!",
    short:
      "Discover the portfolio of Jhanvi, a full-stack developer creating interactive web experiences and innovative projects.",
  },
  keywords: [
    "Jhanvi",
    "portfolio",
    "full-stack developer",
    "creative technologist",
    "web development",
    "3D animations",
    "interactive websites",
    "Coding Ducks",
    "The Booking Desk",
    "Ghostchat",
    "web design",
    "GSAP",
    "React",
    "Next.js",
    "Spline",
    "Framer Motion",
  ],
  author: "Jhanvi Arora",
  email: "jhanviarora11105@gmail.com",
  site: "https://jhanviarora.site",

  // for github stars button
  githubUsername: "jhanvi-11",
  githubRepo: "3d-portfolio",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    whatsapp: "https://wa.me/916280846506",
    twitter: "https://x.com/",
    linkedin: "https://www.linkedin.com/in/jhanviarora",
    instagram: "https://www.instagram.com/jhanviarora/",
    facebook: "https://www.facebook.com/jhanvi.arora",
    github: "https://github.com/jhanvi-11",
  },
};
export { config };
