const siteData = {
  profile: {
    name: "Chenyang Shen",
    title: "B.Eng. Student in Automation",
    affiliation: "Harbin Institute of Technology, Weihai",
    location: "Weihai, China",
    email: "tosania@163.com",
    wechat: "Tosania",
    github: "https://github.com/Tosania",
    website: "https://tosania.top/",
    photo: "touxiang.jpg",
  },
  bio: [
    "I am an undergraduate student in Automation at Harbin Institute of Technology, Weihai. My research interests include robotics, embodied intelligence, reinforcement learning, and robot control.",
    "During my undergraduate studies, I have been working with Prof. Jingyu Zhang on soft robot control. Our research focuses on achieving high-precision control of tendon-driven soft robots under complex environments and load disturbances. We are also researching diverse structural designs and plan to design more influential integrated structure-control systems in the future.",
    "I am applying for a PhD in Robotics/Embodied Intelligence/Control and hope to conduct in-depth research in this field. I am particularly interested in combining embodied approaches with classical control methods to help robots perform more effectively and generalize better in longer-horizon and more complex tasks.",
  ],
  interests: [
    "Robotics",
    "Embodied intelligence",
    "Reinforcement learning",
    "Robot modeling and control",
  ],
  publications: [
    {
      year: "2026",
      title: "Embodied Intelligence Technology for Next-Generation Soft Robots: A Survey",
      authors:
        "Jingyu Zhang<sup><abbr class='author-marker' title='Equal contribution'>#</abbr></sup>, <strong>Chenyang Shen</strong><sup><abbr class='author-marker' title='Equal contribution'>#</abbr></sup>, Zixin Zhu, Haochuan Tong, and Qin Fang<sup><abbr class='author-marker' title='Corresponding author'>*</abbr></sup>",
      venue: "Engineered Science, 2026, 40, 2073",
      note:
        "Survey of embodied intelligence technologies for next-generation soft robots, covering modeling, simulation, perception, control, and future research directions.",
      image: "paper_image/es.jpg",
      imageAlt: "Soft robotics survey preview",
      links: [{ label: "DOI", href: "https://doi.org/10.30919/es2073" }],
    },
    {
      year: "2026",
      title: "Evolutionary Structural Optimization for Variable-Stiffness Soft Manipulators",
      authors:
        "Zixin Zhu, <strong>Chenyang Shen</strong>, Jingyu Zhang, and Qin Fang<sup><abbr class='author-marker' title='Corresponding author'>*</abbr></sup>",
      venue: "Under review, 2026",
      note:
        "Morphology-control co-design framework for variable-stiffness soft manipulators using MuJoCo and NSGA-II. Under review.",
      image: "paper_image/evolutionary-soft-manipulator.jpg",
      imageAlt: "Evolutionary structural optimization overview",
      links: [],
    },
    {
      year: "2026",
      title: "Model-Guided Residual Reinforcement Learning for Disturbance-Resilient Control of Continuum Robots",
      authors:
        "<strong>Chenyang Shen</strong>, Zixin Zhu, Wei Tang, Qin Fang, and Jingyu Zhang<sup><abbr class='author-marker' title='Corresponding author'>*</abbr></sup>",
      venue: "Under review, 2026",
      note:
        "Hybrid PCC and residual reinforcement learning framework for disturbance-resilient tip control of tendon-driven continuum robots.",
      image: "paper_image/model-guided-residual-rl-continuum-robot.jpg",
      imageAlt: "Tendon-driven continuum robot platform overview",
      links: [],
    },
  ],
  contactNote:
    "I am currently applying for PhD opportunities in robotics, embodied intelligence, and control. If my work is of interest to you, I would be grateful for any discussion, suggestions, or potential collaboration. Please feel free to contact me by email: tosania@163.com or WeChat: Tosania.",
};

window.siteData = siteData;
