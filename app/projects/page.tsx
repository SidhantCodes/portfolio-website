'use client';
import React from 'react'
import { useEffect, useState } from 'react';
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { Octokit } from "@octokit/core";

const Projects = () => {
  const [repositories, setRepositories] = useState<any[]>([]);

  const fetchRepositories = async () => {
    const token = process.env.NEXT_PUBLIC_GITHUB_API_TOKEN;
    const octokit = new Octokit({
      auth: token
    });

    try {
      const response = await octokit.request('GET /users/SidhantCodes/repos', {
        headers: {
          'X-GitHub-Api-Version': '2022-11-28'
        }
      });
      setRepositories(response.data);
    } catch (error) {
      console.error('Error fetching repositories:', error);
    }
  };

  useEffect(() => {
    fetchRepositories();
  }, []);

  const transformedProjects = repositories.map(repo => ({
    title: repo.name,
    description: repo.description || "No description provided",
    link: repo.html_url
  }));
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={transformedProjects} />
    </div>
  );
};

export default Projects;
