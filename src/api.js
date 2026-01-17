const diplomas = [
  {
    name: "Common ICT Programme (R58)",
    id: "common-ict-programme-r58",
    image: "/images/r58_ict_mainimage1.jpg",
    modules: [
      {
        name: "Programming Fundamentals I",
        id: "c110",
        desc: "This module introduces students to computational thinking for problem-solving in computer programming and the core concepts and constructs applicable to most programming languages. Students will learn to apply computational thinking methods to decompose problems, identify patterns, apply abstraction in problems, and assemble a series of computer instructions that solve a problem using a computer programme. Students will be able to explain and write computer instructions that employ the use of variables, input and output statements, decision-making constructs, repetition constructs, and functions. They will also learn to test and debug computer programmes to ensure optimal performance of the programmes. The module also introduces techniques for effectively leveraging Generative AI (GenAI) tools to enhance learning and the coding process.",
        module_chair: {
          name: "Aisha Zain",
          title: "Module Chair",
        },
      },
    ],
  },
  {
    name: "Diploma in Applied AI & Analytics (R13)",
    id: "diploma-in-applied-ai-and-analytics-r13",
    image: "/images/r13_dbis_mainimage1.jpg",
    modules: [
      {
        name: "AI Essentials and Innovations",
        id: "c240",
        desc: "This module equips learners with essential knowledge and skills in artificial intelligence (AI) and its varied applications. Learners will gain familiarity with AI terminology, understand key concepts, and explore the evolution of AI technologies. They will learn techniques to reduce hallucinations and enhance AI explainability while studying generative models, agentic AI systems, and advanced prompt-engineering methods. Through the use of industry-relevant tools such as Hugging Face and n8n, learners will design and develop chatbots, Retrieval-Augmented Generation (RAG) systems, and multi-agent systems incorporating sentiment analysis. Learners will investigate AI’s ethical and societal implications, earning certifications from SCS and AI Singapore in ethics. Mini-projects will provide authentic, hands-on opportunities for learners to apply coding, testing, deployment, and workflow-design skills while analysing the ethical dimensions of AI-driven solutions.",
        module_chair: {
          name: "Hew Ka Kian",
          title: "Module Chair",
        },
      },
    ],
  },
  {
    name: "Diploma in Information Technology (R47)",
    id: "diploma-in-information-technology-r47",
    image: "/images/r47_dmsd_mainimage1.jpg",
    modules: [
      {
        name: "UI/UX Design for Apps",
        id: "c218",
        desc: "Students will be equipped with knowledge in User Experience (UX) design in areas such as requirement gathering, creating and analysis of the User Interfaces (UI) in this module. Students will also gain the skills to offer users an intuitive and responsive experience as they design UI for software platforms on both web and mobile devices. Through this module, students will also learn how to create interactive prototypes using prototyping tools.",
        module_chair: {
          name: "Azhar Kamar",
          title: "Module Chair",
        },
      },
    ],
  },
  {
    name: "Diploma in Financial Technology (R18)",
    id: "diploma-in-financial-technology-r18",
    image: "/images/r18_dba_mainimage1.jpg",
    modules: [
      {
        name: "Payment Technologies",
        id: "c372",
        desc: "This module introduces students to different payment technologies and systems. Students will learn to apply or integrate these payment technologies and systems via a web application. For the latter, students will develop a web application, integrated with front-end and/or back-end payment modules. The development of this web application will involve students using various payment application programming interfaces (APIs) to facilitate or implement the payment process.",
        module_chair: {
          name: "Magdalene Lim",
          title: "Module Chair",
        },
      },
    ],
  },
  {
    name: "Diploma in Cybersecurity & Digital Forensics (R55)",
    id: "diploma-in-cybersecurity-and-digital-forensics-r55",
    image: "/images/r55_dism_mainimage1.jpg",
    modules: [
      {
        name: "IT Security and Management",
        id: "c235",
        desc: "This module addresses the best practices of the development and management of effective security systems with coverage on information, personnel, physical security, and risk analysis for information protection. It provides a broad overview of the principles and elements of information technology security. It covers the basic principles of the CIA model – Confidentiality, Integrity and Availability. Topics covered include IT security threats, security techniques, security services, and system security features. Students will also be introduced to the different information security standards available in the IT industry such as ISO 27001 that implements a security framework for organisations.",
        module_chair: {
          name: "Martin Teo",
          title: "Module Chair",
        },
      },
    ],
  },
  {
    name: "Diploma in Enterprise Cloud & Computing Management (R12)",
    id: "diploma-in-enterprise-cloud-and-computing-management-r12",
    image: "/images/r12_dit_mainimage1.jpg",
    modules: [
      {
        name: "Software Application Development",
        id: "c237",
        desc: "This module introduces students to the key concepts and practices of developing software applications for the web. Students will learn to design, build, and deploy applications that integrate both front-end interfaces and back-end services. They will implement role-based authentication and core functions such as creating, retrieving, updating, and deleting data from databases. In addition, students will be introduced to the use of AI-powered development tools that enhance software design, coding efficiency, and testing workflows. Finally, they will deploy their applications to ensure functionality, reliability, and usability. The module establishes a strong foundation for more advanced web and mobile application development in subsequent modules.",
        module_chair: {
          name: "Hannah Lim",
          title: "Module Chair",
        },
      },
    ],
  },
];

export function getModule({ moduleId, diplomaId }) {
  return diplomas
    .find(({ id }) => id === diplomaId)
    .modules.find(({ id }) => id === moduleId);
}

export function getDiploma(diplomaId) {
  return diplomas.find(({ id }) => id === diplomaId);
}

export function getDiplomas() {
  return diplomas.map(({ name, id, image }) => ({ name, id, image }));
}
