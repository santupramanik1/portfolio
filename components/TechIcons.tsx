import React from 'react';

export interface TechIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  className?: string;
}

// 1. TypeScript
export const TypeScriptIcon: React.FC<TechIconProps> = ({ className = "w-6 h-6", ...props }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
    <path d="M1.5 0h21A1.5 1.5 0 0124 1.5v21a1.5 1.5 0 01-1.5 1.5h-21A1.5 1.5 0 010 22.5v-21A1.5 1.5 0 011.5 0z" fill="#3178C6"/>
    <path d="M13.4 12h-2.5v7.6h-2.2V12H6.2v-1.9h7.2V12zm2 5.9c.7.4 1.6.7 2.6.7 1.2 0 1.9-.5 1.9-1.3 0-.8-.6-1.2-2.1-1.7-2-.7-3.1-1.6-3.1-3.2 0-2 1.7-3.4 4.3-3.4 1.1 0 2.1.2 2.8.6l-.6 1.8c-.6-.3-1.4-.5-2.2-.5-1.1 0-1.8.5-1.8 1.2 0 .8.7 1.1 2.2 1.6 2.1.7 3.1 1.7 3.1 3.3 0 2.2-1.7 3.5-4.6 3.5-1.2 0-2.5-.3-3.3-.8l.8-1.8z" fill="#FFFFFF"/>
  </svg>
);

// 2. JavaScript
export const JavaScriptIcon: React.FC<TechIconProps> = ({ className = "w-6 h-6", ...props }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
    <path d="M0 0h24v24H0z" fill="#F7DF1E"/>
    <path d="M6.7 18.6c.9.5 1.9.9 3 .9 1.6 0 2.5-.7 2.5-1.9v-6.9H9.8v6.7c0 .6-.3.9-.9.9-.4 0-.8-.1-1.2-.3l-1 1.6zm7.2.1c1.2.6 2.6 1 4 1 2.3 0 3.7-1.1 3.7-2.9 0-1.7-1.2-2.6-3.4-3.4-1.6-.6-2.2-1-2.2-1.8 0-.7.6-1.3 1.8-1.3 1.2 0 2.1.3 2.9.7l.9-1.7c-1-.5-2.2-.9-3.7-.9-2.3 0-3.7 1.2-3.7 2.8 0 1.6 1.1 2.6 3.2 3.3 1.6.6 2.3 1.1 2.3 1.9 0 .8-.8 1.4-2 1.4-1.4 0-2.6-.4-3.6-1l-1.2 1.9z" fill="#000000"/>
  </svg>
);

// 3. C++
export const CppIcon: React.FC<TechIconProps> = ({ className = "w-6 h-6", ...props }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
    <path d="M12 0L1.75 5.92v12.16L12 24l10.25-5.92V5.92L12 0zm-1.8 15.6c-2.3 0-3.8-1.5-3.8-3.6s1.5-3.6 3.8-3.6c1.3 0 2.3.5 2.9 1.3l-1.3 1.1c-.4-.5-.9-.8-1.6-.8-1.2 0-2 .9-2 2s.8 2 2 2c.7 0 1.2-.3 1.6-.8l1.3 1.1c-.6.8-1.6 1.3-2.9 1.3zm6.6-3h-1v1h-.8v-1h-1v-.8h1v-1h.8v1h1v.8zm3.2 0h-1v1h-.8v-1h-1v-.8h1v-1h.8v1h1v.8z" fill="#00599C"/>
  </svg>
);

// 4. Python
export const PythonIcon: React.FC<TechIconProps> = ({ className = "w-6 h-6", ...props }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
    <path d="M11.87 0c-5.4 0-5.06 2.34-5.06 2.34l.01 2.42h5.13v.73H4.86S2 5.09 2 10.49c0 5.4 2.49 5.2 2.49 5.2h1.49v-2.1c0-2.39 2.06-2.4 2.06-2.4h5.08s2.06.01 2.06-2.03V4.1s.36-4.1-5.31-4.1zm-2.8 1.48a.95.95 0 1 1 0 1.9.95.95 0 0 1 0-1.9z" fill="#3776AB"/>
    <path d="M12.13 24c5.4 0 5.06-2.34 5.06-2.34l-.01-2.42h-5.13v-.73h7.09S22 18.91 22 13.51c0-5.4-2.49-5.2-2.49-5.2h-1.49v2.1c0 2.39-2.06 2.4-2.06 2.4h-5.08s-2.06-.01-2.06 2.03v5.06s-.36 4.1 5.31 4.1zm2.8-1.48a.95.95 0 1 1 0-1.9.95.95 0 0 1 0 1.9z" fill="#FFD43B"/>
  </svg>
);

// 5. Java
export const JavaIcon: React.FC<TechIconProps> = ({ className = "w-6 h-6", ...props }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
    <path d="M8.85 16.84c-2.48.53-3.64 1.34-3.64 2.1 0 1.25 3.1 2.06 6.79 2.06 3.69 0 6.79-.81 6.79-2.06 0-.76-1.16-1.57-3.64-2.1l-.32.61c1.86.41 2.68.96 2.68 1.49 0 .72-2.47 1.36-5.51 1.36-3.04 0-5.51-.64-5.51-1.36 0-.53.82-1.08 2.68-1.49l-.32-.61z" fill="#5382A1"/>
    <path d="M12.03 0C10.7 2.37 9.8 4.7 9.8 6.4c0 3.26 2.92 5.04 2.92 7.74 0 1.48-.68 2.76-1.85 3.73l.48.53c1.47-1.17 2.3-2.73 2.3-4.52 0-3.15-2.92-4.9-2.92-7.48 0-1.42.75-3.41 1.78-5.77l-.48-.63z" fill="#E76F00"/>
  </svg>
);

// 6. React.js
export const ReactIcon: React.FC<TechIconProps> = ({ className = "w-6 h-6", ...props }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className} {...props}>
    <ellipse cx="12" cy="12" rx="10" ry="4.2" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(0 12 12)"/>
    <ellipse cx="12" cy="12" rx="10" ry="4.2" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(60 12 12)"/>
    <ellipse cx="12" cy="12" rx="10" ry="4.2" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(120 12 12)"/>
    <circle cx="12" cy="12" r="2" fill="#61DAFB"/>
  </svg>
);

// 7. Next.js
export const NextjsIcon: React.FC<TechIconProps> = ({ className = "w-6 h-6", ...props }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
    <circle cx="12" cy="12" r="11" fill="#000" stroke="#FFFFFF" strokeWidth="1"/>
    <path d="M14.7 16.5L9.6 9.8V16.5H8V7.5H9.7L14.7 14.1V7.5H16.3V16.5H14.7Z" fill="#FFFFFF"/>
    <path d="M16 16L12.5 11.5L16 16Z" fill="#FFFFFF"/>
  </svg>
);

// 8. Tailwind CSS
export const TailwindIcon: React.FC<TechIconProps> = ({ className = "w-6 h-6", ...props }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
    <path d="M12 6c-3.3 0-5.5 1.7-6.6 5 1.1-1.7 2.5-2.2 4.1-1.7 1 .3 1.7 1 2.4 1.8C13.2 12.3 14.7 14 18 14c3.3 0 5.5-1.7 6.6-5-1.1 1.7-2.5 2.2-4.1 1.7-1-.3-1.7-1-2.4-1.8C16.8 7.7 15.3 6 12 6zm-6 6c-3.3 0-5.5 1.7-6.6 5 1.1-1.7 2.5-2.2 4.1-1.7 1 .3 1.7 1 2.4 1.8C7.2 18.3 8.7 20 12 20c3.3 0 5.5-1.7 6.6-5-1.1 1.7-2.5 2.2-4.1 1.7-1-.3-1.7-1-2.4-1.8C10.8 13.7 9.3 12 6 12z" fill="#06B6D4"/>
  </svg>
);

// 9. HTML5
export const Html5Icon: React.FC<TechIconProps> = ({ className = "w-6 h-6", ...props }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
    <path d="M1.5 0h21l-1.9 21.3L12 24l-8.6-2.7L1.5 0zm16.5 6.4H6.5l.3 3.6h10.9l-.7 7.6-5 1.4-5-1.4-.3-3.6h3.2l.2 1.8 1.9.5 1.9-.5.2-2.3H6.2L5.4 3h13l-.4 3.4z" fill="#E34F26"/>
  </svg>
);

// 10. Framer Motion
export const FramerMotionIcon: React.FC<TechIconProps> = ({ className = "w-6 h-6", ...props }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
    <path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z" fill="#0055FF"/>
  </svg>
);

// 11. Node.js
export const NodejsIcon: React.FC<TechIconProps> = ({ className = "w-6 h-6", ...props }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
    <path d="M12 0L1.75 5.9v12.2L12 24l10.25-5.9V5.9L12 0zm0 2.4l8.2 4.7v9.4L12 21.2l-8.2-4.7V7.1L12 2.4z" fill="#339933"/>
    <path d="M11.5 8v8h1v-3.5l3 3.5h1.5l-3.5-4 3.5-4H15.5l-3 3.5V8h-1z" fill="#5FA04E"/>
  </svg>
);

// 12. Express.js
export const ExpressIcon: React.FC<TechIconProps> = ({ className = "w-6 h-6", ...props }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
    <path d="M24 12.5a5.5 5.5 0 01-5.5 5.5h-13A5.5 5.5 0 010 12.5v-1A5.5 5.5 0 015.5 6h13a5.5 5.5 0 015.5 5.5v1z" fill="#333333"/>
    <path d="M5.5 8A3.5 3.5 0 002 11.5v1A3.5 3.5 0 005.5 16h13a3.5 3.5 0 003.5-3.5v-1A3.5 3.5 0 0018.5 8h-13z" fill="#000000"/>
    <text x="6" y="15" fill="#FFFFFF" fontSize="9" fontWeight="bold" fontFamily="monospace">ex</text>
  </svg>
);

// 13. REST API Design
export const RestApiIcon: React.FC<TechIconProps> = ({ className = "w-6 h-6", ...props }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} {...props}>
    <rect x="2" y="3" width="20" height="18" rx="3" stroke="#06B6D4" />
    <path d="M7 9h10M7 13h6M7 17h4" stroke="#38BDF8" strokeLinecap="round" />
    <circle cx="17" cy="15" r="2" fill="#34D399" />
  </svg>
);

// 14. JWT Authentication
export const JwtIcon: React.FC<TechIconProps> = ({ className = "w-6 h-6", ...props }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
    <path d="M12 0L1.8 4.5v6.8c0 6.3 4.3 12.2 10.2 12.7 5.9-.5 10.2-6.4 10.2-12.7V4.5L12 0zm-1.2 16.5l-4.5-4.5 1.7-1.7 2.8 2.8 6.5-6.5 1.7 1.7-8.2 8.2z" fill="#F50057"/>
  </svg>
);

// 15. Database Schema
export const DatabaseSchemaIcon: React.FC<TechIconProps> = ({ className = "w-6 h-6", ...props }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} {...props}>
    <ellipse cx="12" cy="5" rx="9" ry="3" stroke="#A855F7" />
    <path d="M21 12c0 1.66-4.03 3-9 3s-9-1.34-9-3M21 5v14c0 1.66-4.03 3-9 3s-9-1.34-9-3V5" stroke="#EC4899" />
  </svg>
);

// 16. MongoDB
export const MongodbIcon: React.FC<TechIconProps> = ({ className = "w-6 h-6", ...props }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
    <path d="M12 0s-5.8 8.1-5.8 13.5c0 4.2 3.1 7.5 5.8 7.5s5.8-3.3 5.8-7.5C17.8 8.1 12 0 12 0zm.4 19.8v-6.3c.7.2 1.3.7 1.3 1.5 0 1.1-1.3 2.1-1.3 4.8z" fill="#47A248"/>
  </svg>
);

// 17. MySQL
export const MysqlIcon: React.FC<TechIconProps> = ({ className = "w-6 h-6", ...props }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
    <path d="M12 2.5C6.8 2.5 2.5 6.8 2.5 12S6.8 21.5 12 21.5 21.5 17.2 21.5 12 17.2 2.5 12 2.5zm4.8 13.3c-.6.3-1.4.5-2.2.5-2.5 0-4-1.4-4-3.5 0-2.2 1.6-3.7 4.1-3.7.8 0 1.5.2 2.1.5v1.4c-.6-.4-1.3-.6-2-.6-1.6 0-2.5 1-2.5 2.4 0 1.4.9 2.3 2.5 2.3.7 0 1.4-.2 2-.5v1.2z" fill="#4479A1"/>
  </svg>
);

// 18. Git & GitHub
export const GitGithubIcon: React.FC<TechIconProps> = ({ className = "w-6 h-6", ...props }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
    <path d="M23.5 11.2l-10.7-10.7c-.6-.6-1.7-.6-2.3 0L7.4 3.7c-.5.4-.7 1.1-.5 1.7l2.8 2.8c-.3.7-.2 1.6.4 2.2.7.7 1.6.8 2.3.5l2.8 2.8v.1c0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2c-.2 0-.4 0-.6.1l-2.6-2.6c.1-.2.1-.4.1-.6 0-.8-.4-1.5-1.1-1.8L10.3 4.8l2.6-2.6 10.6 10.6c.6.6.6 1.7 0 2.3l-5.6 5.6c-.6.6-1.7.6-2.3 0L10 15.1" fill="#F05032"/>
  </svg>
);

// 19. Vercel
export const VercelIcon: React.FC<TechIconProps> = ({ className = "w-6 h-6", ...props }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
    <path d="M12 1L24 22H0L12 1Z" fill="#FFFFFF"/>
  </svg>
);

// 20. Render
export const RenderIcon: React.FC<TechIconProps> = ({ className = "w-6 h-6", ...props }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm0 18c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z" fill="#46E3B7"/>
  </svg>
);

// 21. Postman
export const PostmanIcon: React.FC<TechIconProps> = ({ className = "w-6 h-6", ...props }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm5.1 10.6l-5.8 4.2c-.3.2-.7.3-1.1.2l-3.3-1.2c-.4-.1-.7-.5-.7-.9V8.6c0-.4.3-.8.7-.9l3.3-1.2c.4-.1.8 0 1.1.2l5.8 4.2c.3.2.5.5.5.8s-.2.7-.5.9z" fill="#FF6C37"/>
  </svg>
);

// 22. AWS S3
export const AwsS3Icon: React.FC<TechIconProps> = ({ className = "w-6 h-6", ...props }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
    <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.4l7.2 3.6-7.2 3.6-7.2-3.6L12 4.4zM4 9.1l7 3.5v7l-7-3.5V9.1zm16 7l-7 3.5v-7l7-3.5v7z" fill="#FF9900"/>
  </svg>
);

// 23. Generative AI
export const GenerativeAiIcon: React.FC<TechIconProps> = ({ className = "w-6 h-6", ...props }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} {...props}>
    <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" stroke="#A855F7" strokeLinecap="round"/>
    <circle cx="12" cy="12" r="4" fill="#38BDF8"/>
  </svg>
);

// 24. LangChain / LLM
export const LangChainIcon: React.FC<TechIconProps> = ({ className = "w-6 h-6", ...props }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-2 15l-4-4 1.4-1.4L10 14.2l6.6-6.6L18 9l-8 8z" fill="#1C3C3C"/>
    <circle cx="12" cy="12" r="8" fill="none" stroke="#2DD4BF" strokeWidth="2" />
  </svg>
);

// 25. Claude Code / AI Spark
export const ClaudeIcon: React.FC<TechIconProps> = ({ className = "w-6 h-6", ...props }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
    <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" fill="#D97706"/>
  </svg>
);

// Helper Icon Dispatcher Component
export const TechnologyIcon: React.FC<{ name: string; className?: string }> = ({ name, className = "w-6 h-6" }) => {
  const normName = name.toLowerCase();

  if (normName.includes('typescript')) return <TypeScriptIcon className={className} />;
  if (normName.includes('javascript')) return <JavaScriptIcon className={className} />;
  if (normName.includes('c++')) return <CppIcon className={className} />;
  if (normName.includes('python')) return <PythonIcon className={className} />;
  if (normName.includes('java')) return <JavaIcon className={className} />;
  if (normName.includes('react')) return <ReactIcon className={className} />;
  if (normName.includes('next')) return <NextjsIcon className={className} />;
  if (normName.includes('tailwind')) return <TailwindIcon className={className} />;
  if (normName.includes('html')) return <Html5Icon className={className} />;
  if (normName.includes('framer')) return <FramerMotionIcon className={className} />;
  if (normName.includes('node')) return <NodejsIcon className={className} />;
  if (normName.includes('express')) return <ExpressIcon className={className} />;
  if (normName.includes('rest')) return <RestApiIcon className={className} />;
  if (normName.includes('jwt')) return <JwtIcon className={className} />;
  if (normName.includes('schema')) return <DatabaseSchemaIcon className={className} />;
  if (normName.includes('mongo')) return <MongodbIcon className={className} />;
  if (normName.includes('mysql')) return <MysqlIcon className={className} />;
  if (normName.includes('git')) return <GitGithubIcon className={className} />;
  if (normName.includes('vercel')) return <VercelIcon className={className} />;
  if (normName.includes('render')) return <RenderIcon className={className} />;
  if (normName.includes('postman')) return <PostmanIcon className={className} />;
  if (normName.includes('aws') || normName.includes('s3')) return <AwsS3Icon className={className} />;
  if (normName.includes('generative')) return <GenerativeAiIcon className={className} />;
  if (normName.includes('langchain') || normName.includes('llm')) return <LangChainIcon className={className} />;
  if (normName.includes('claude')) return <ClaudeIcon className={className} />;

  return <GenerativeAiIcon className={className} />;
};
