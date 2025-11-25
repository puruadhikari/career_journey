import { PortfolioNode } from './types';

export const PROFILE_Summary = `
Staff Engineer with 23 years of experience driving enterprise transformation across finance, insurance, and technology domains—bridging hands-on engineering, architecture strategy, and applied AI innovation to deliver measurable business impact.
`;

export const PORTFOLIO_NODES: PortfolioNode[] = [
  {
    id: 1,
    title: "Experience",
    content: "Staff Engineer with **23 years** of experience driving enterprise transformation across finance, insurance, and technology domains—bridging hands-on engineering, architecture strategy, and applied AI innovation to deliver measurable business impact.",
    details: "With over two decades in the technology sector, I have spearheaded critical initiatives for Fortune 500 companies. My journey includes driving large-scale cloud migrations, modernizing legacy monoliths into microservices, and establishing engineering best practices that reduce time-to-market. I specialize in bridging the gap between high-level strategic goals and low-level technical implementation, ensuring that architectural decisions translate directly into business value.",
    position: 'left',
    colorClass: 'bg-[#0066cc]', // Vibrant Blue
    textColorClass: 'text-[#0066cc]',
  },
  {
    id: 2,
    title: "Technologies",
    content: "Extensive hands-on experience across diverse technology stacks including **Python, Java, Microsoft .NET, API and microservices architecture**, cloud platforms, and AI/ML technologies such as **ML model development, Generative AI, and Natural Language Processing (NLP)**.",
    details: "My technical toolkit is vast and constantly evolving to meet modern challenges. I possess deep expertise in backend development using Java (Spring Boot), Python (FastAPI/Django), and .NET Core. On the infrastructure side, I architect cloud-native solutions on AWS and Azure using Kubernetes and Terraform. Recently, my focus has shifted to Applied AI, where I build and deploy LLM-based applications, fine-tune models for enterprise use cases, and implement RAG (Retrieval-Augmented Generation) architectures to solve complex information retrieval problems.",
    position: 'right',
    colorClass: 'bg-[#17a2b8]', // Cyan/Teal
    textColorClass: 'text-[#17a2b8]',
  },
  {
    id: 3,
    title: "Domain",
    content: "Extensive domain experience spanning **Financial services (American Express, Lloyds Banking Group)**, insurance, **healthcare and imaging (HP)**, and **Technology consulting** delivering enterprise scale architecture, automation, and AI-driven solutions across diverse business environments.",
    details: "My domain expertise is deeply rooted in highly regulated industries where security, compliance, and reliability are paramount. In Financial Services, I've worked with American Express and Lloyds Banking Group to modernize payment processing and fraud detection systems. In Healthcare and Imaging (HP), I contributed to systems requiring high precision and data integrity. This cross-industry experience allows me to adapt quickly to new environments and understand the unique constraints and opportunities within different business sectors.",
    position: 'right',
    colorClass: 'bg-[#4a6fa5]', // Muted Blue
    textColorClass: 'text-[#4a6fa5]',
  },
  {
    id: 4,
    title: "Strategic Technical Leadership",
    content: "Provide strategic technical leadership across **engineering, architecture**, and AI, partnering with senior leaders to shape AI strategy, prioritise investments, and align technology roadmaps with business outcomes. Define delivery principles, mentor senior engineers, and drive large-scale platform and **AI transformation initiatives** across the organisation.",
    details: "My career path demonstrates a consistent upward trajectory in responsibility and impact. Starting as a Software Engineer, I mastered the craft of coding and system design. As a Solution Architect, I learned to design systems that scale and withstand failure. Transitioning to Enterprise Architect, I focused on organizational strategy, governance, and portfolio management. Now, as a Staff Engineer, I operate at the intersection of leadership and deep technical work, mentoring senior engineers and setting the technical vision for critical AI and transformation initiatives.",
    position: 'right',
    colorClass: 'bg-[#1f2937]', // Dark Navy
    textColorClass: 'text-[#1f2937]',
  },
  {
    id: 5,
    title: "Certifications & Awards",
    content: "Holds multiple professional certifications including **TOGAF 9 (Enterprise Architecture), Microsoft Certified Application Developer (MCAD)**, PEGA Certified Senior System Architect (CSSA), and SAFe 4 Practitioner, recognized with the **American Express Inventor Award (2023)** and the Chairman’s Award for Leadership.",
    details: "I am committed to professional excellence and continuous learning. My certifications validate my expertise in enterprise architecture frameworks (TOGAF 9), agile methodologies (SAFe 4), and specific technology stacks (Microsoft, PEGA). Recognition such as the American Express Inventor Award (2023) highlights my contribution to intellectual property and innovation within the company, while the Chairman’s Award for Leadership underscores my ability to inspire teams and drive results.",
    position: 'left',
    colorClass: 'bg-[#38bdf8]', // Sky Blue
    textColorClass: 'text-[#38bdf8]',
  },
  {
    id: 6,
    title: "Patents",
    content: "Inventor with **four patents**, including **one** granted and **three** under review covering innovations in AI-driven knowledge systems, User Experience designs, Natural Language Processing, Retrieval-Augmented Generation (RAG).",
    details: "Innovation is a core part of my professional identity. I have successfully filed four patents, focusing on cutting-edge applications of Artificial Intelligence. My granted patent and pending applications cover novel approaches to AI-driven knowledge management systems, adaptive User Experience designs that personalize interfaces in real-time, and advanced NLP techniques for improving the accuracy of Retrieval-Augmented Generation (RAG) systems. These inventions represent practical solutions to complex enterprise problems.",
    position: 'left',
    colorClass: 'bg-[#0f4c75]', // Deep Blue
    textColorClass: 'text-[#0f4c75]',
  }
];

export const SYSTEM_INSTRUCTION = `
You are an AI assistant representing Puru, a Senior Staff Engineer with 23 years of experience. 
Use the following context to answer questions about Puru's profile.
Always refer to the candidate as "Puru" or "he".
Be professional, concise, and impressive.

Profile Context:
${JSON.stringify(PORTFOLIO_NODES)}
`;