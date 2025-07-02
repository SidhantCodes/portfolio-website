import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function WorkExp() {
  const data = [
    {
      title: "Freelance Frontend Developer",
      content: (
        <div className="flex-col">
          <p className="mb-8 text-xl  md:text-3xl font-bold text-neutral-200">
            Plumcot Systems
          </p>
            <p className="mb-8 text-md md:text-xl font-bold text-neutral-500">
            [June 2024- July 2024]
          </p>
          <p className="my-5 text-xs font-normal md:text-sm text-neutral-200">
            Designed and developed a 25-page responsive website using Next.js and ShadCN UI, focusing on modern design and seamless user experience. Improved performance by optimizing API calls and implementing response data caching, resulting in a 30% reduction in page load times. Integrated the frontend with an Express.js-based backend and deployed the application on AWS Amplify, ensuring scalable, efficient, and reliable hosting.
          </p>
        </div>
      ),
    },
    {
      title: "Data Science Intern",
      content: (
        <div className="flex-col">
          <p className="mb-8 text-xl  md:text-3xl font-bold text-neutral-200">
            Insignia Consultancy Solutions 
          </p>
          <p className="mb-8 text-md md:text-xl font-bold text-neutral-500">
            [August 2024- October 2024]
          </p>
          <p className="my-5 text-xs font-normal md:text-sm text-neutral-200">
            Engineered LLM-based speech-to-text services for real-time audio processing in the Mahakumbh app, enabling seamless voice interaction. Developed a robust voice-command system that accurately maps user intents to application features, achieving 90% accuracy using large language models. Additionally, integrated MySQL with Grafana through Docker to build a real-time monitoring dashboard for 15 CCTV data streams, enhancing situational awareness and operational efficiency.
          </p>
        </div>
      ),
    },
    {
      title: "Data & AI Intern",
      content: (
        <div className="flex-col">
          <p className="mb-8 text-xl md:text-3xl font-bold text-neutral-200">
            IFI Techsolutions Ltd. 
          </p>
          <p className="mb-8 text-md md:text-xl font-bold text-neutral-500">
            [June 2024- July 2024]
          </p>
          <p className="my-5 text-xs font-normal md:text-sm text-neutral-200">
            Built a chatbot using Azure AI services to query company guidelines stored in Blob Storage, efficiently handling multiple PDFs averaging 120–130 pages each. Designed a multi-modal Retrieval-Augmented Generation (RAG) agent capable of seamless querying across images, text, and databases, enhancing information accessibility. Additionally, developed an automated video querying pipeline leveraging Azure Video Indexer, AI Search, and OpenAI, streamlining the retrieval of relevant content from video data.
          </p>
        </div>
      ),
    },
    {
      title: "Web Development Intern",
      content: (
        <div className="flex-col">
          <p className="mb-8 text-xl md:text-3xl font-bold text-neutral-200">
            OPYE
          </p>
          <p className="mb-8 text-md md:text-xl font-bold text-neutral-500">
            [February 2024- July 2024]
          </p>
          <p className="my-5 text-xs font-normal md:text-sm text-neutral-200">
            Engineered a high-performance web application using Next.js, strategically leveraging Server-Side Rendering (SSR) to achieve a 10% improvement in load times compared to traditional client-side frameworks such as React.js. Additionally, developed robust RESTful APIs utilizing Node.js and Express.js, facilitating efficient and seamless communication between the frontend and backend systems to enhance overall application responsiveness and user experience.
          </p>
        </div>
      ),
    },
  ];
  return (
    <div className="relative w-full overflow-clip" id="workex">
      <Timeline data={data} />
    </div>
  );
}
