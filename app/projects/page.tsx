'use client';
import React from 'react'
import { useEffect, useState } from 'react';
import { HoverEffect } from "@/components/ui/card-hover-effect";

const Projects = () => {
  const [repositories, setRepositories] = useState<any[]>([]);

  const fetchRepositories = async () => {
    try {
      const response = await fetch('/api/github-repos');
      if (!response.ok) {
        throw new Error('Failed to fetch repositories');
      }
      const data = await response.json();
      setRepositories(data);
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
