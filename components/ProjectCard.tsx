"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";

interface ProjectCardProps {
  title: string,
  desc: string,
  image: string,
  livelink: string,
  repolink: string
}

export function ProjectCard({ title, desc, image, livelink, repolink }: ProjectCardProps) {
  return (
    <CardContainer className="inter-var">
      <CardBody className="relative group/card  hover:shadow-2xl hover:shadow-purple-400/[0.1] bg-black  border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-white"
        >
          {title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-sm max-w-sm mt-2 text-neutral-300"
        >
          {desc}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <img
            src={image}
            height="1000"
            width="900"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          {livelink !== 'none' ? (
            <Link
              href={livelink}
              target="_blank"
              className="linkTranslateZ px-4 py-2 rounded-xl text-xs font-normal text-white hover:opacity-80"
            >
              Live URL
            </Link>
          ) : (
            <button
              disabled
              className="linkTranslateZ px-4 py-2 rounded-xl text-xs font-normal text-white opacity-50 cursor-not-allowed"
            >
              Live URL
            </button>
          )}

          {repolink !== 'none' ? (
            <Link
              href={repolink}
              target="_blank"
              className="linkTranslateZ px-4 py-2 rounded-xl bg-white text-black text-xs font-bold hover:opacity-80"
            >
              GitHub
            </Link>
          ) : (
            <button
              disabled
              className="linkTranslateZ px-4 py-2 rounded-xl bg-white text-black  text-xs font-bold opacity-50 cursor-not-allowed"
            >
              GitHub
            </button>
          )}
          
        </div>
      </CardBody>
    </CardContainer>
  );
}
