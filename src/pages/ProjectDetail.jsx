import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Star,
  Calendar,
  Code,
  Zap,
  Target,
  Lightbulb,
  Smartphone,
  Database,
  Shield,
} from "lucide-react";
import { projects } from "../constants/projectsData";

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("overview");

  // Debug: Log untuk memastikan data tersedia
  console.log("Project ID:", id);
  console.log("All projects:", projects);

  const project = projects.find((p) => p.id === parseInt(id));
  console.log("Found project:", project);

  if (!project) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Project Not Found
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            The project you're looking for doesn't exist.
          </p>
          <button
            onClick={() => navigate(-1)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  const goBack = () => {
    navigate(-1);
  };

  // Get category icon
  const getCategoryIcon = () => {
    if (project.category === "fullstack") return Database;
    return Code;
  };

  const CategoryIcon = getCategoryIcon();

  const tabs = [
    { id: "overview", label: "Overview", icon: Target },
    { id: "features", label: "Features", icon: Star },
    { id: "challenges", label: "Challenges", icon: Zap },
    { id: "solutions", label: "Solutions", icon: Lightbulb },
  ];

  // Handle external link clicks dengan logging yang lebih detail
  const handleLiveDemoClick = (e) => {
    e.preventDefault();
    e.stopPropagation();

    console.log("=== LIVE DEMO CLICK DEBUG ===");
    console.log("Event:", e);
    console.log("Project:", project);
    console.log("Live URL:", project?.liveUrl);
    console.log("Project keys:", Object.keys(project));

    if (project?.liveUrl) {
      console.log("Opening live demo URL:", project.liveUrl);
      try {
        // Test dengan window.location terlebih dahulu
        window.open(project.liveUrl, "_blank", "noopener,noreferrer");
        console.log("Window.open called successfully");
      } catch (error) {
        console.error("Failed to open live demo:", error);
        // Fallback ke window.location
        window.location.href = project.liveUrl;
      }
    } else {
      console.log("No live URL available");
      alert("Live demo is not available for this project.");
    }
  };

  const handleGithubClick = (e) => {
    e.preventDefault();
    e.stopPropagation();

    console.log("=== GITHUB CLICK DEBUG ===");
    console.log("Event:", e);
    console.log("Project:", project);
    console.log("GitHub URL:", project?.githubUrl);

    if (project?.githubUrl) {
      console.log("Opening GitHub URL:", project.githubUrl);
      try {
        window.open(project.githubUrl, "_blank", "noopener,noreferrer");
        console.log("Window.open called successfully");
      } catch (error) {
        console.error("Failed to open GitHub:", error);
        window.location.href = project.githubUrl;
      }
    } else {
      console.log("No GitHub URL available");
      alert("GitHub repository is not available for this project.");
    }
  };

  // Test function untuk memastikan onClick bekerja
  const testClick = () => {
    console.log("Test button clicked!");
    alert("Test button works!");
  };

  return (
    <div className="min-h-screen from-slate-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Go Back Button */}
        <button
          onClick={goBack}
          className="fixed top-6 left-6 z-50 group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-full p-3 shadow-lg hover:scale-110 transition-transform"
        >
          <ArrowLeft className="w-5 h-5 text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
        </button>

        {/* Hero Content */}
        <div className="max-w-4xl mx-auto px-6 pt-24 pb-12">
          <div className="text-center space-y-8">
            {/* Status Badges */}
            <div className="flex items-center justify-center gap-3">
              <span className="px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-full text-sm font-medium flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                Completed
              </span>
              <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium flex items-center gap-2">
                <CategoryIcon className="w-3 h-3" />
                {project.category.charAt(0).toUpperCase() +
                  project.category.slice(1)}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
              {project.title}
            </h1>

            {/* Description */}
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              {project.description?.length > 200
                ? project.description.substring(0, 200) + "..."
                : project.description}
            </p>

            {/* Meta Info */}
            <div className="flex items-center justify-center gap-8 text-gray-600 dark:text-gray-400">
              <div className="flex items-center gap-2">
                <Code className="w-5 h-5" />
                <span>{project.technologies?.length || 0} Technologies</span>
              </div>
              {project.category === "fullstack" && (
                <div className="flex items-center gap-2">
                  <Smartphone className="w-5 h-5" />
                  <span>Mobile & Web</span>
                </div>
              )}
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>2024</span>
              </div>
            </div>

            {/* Tech Stack */}
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {project.technologies?.map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-gray-700 dark:text-gray-300 rounded-xl text-sm font-medium border border-gray-200 dark:border-gray-700 hover:scale-105 transition-transform cursor-pointer"
                >
                  {tech}
                </span>
              )) || []}
            </div>

            {/* Action Buttons - Simplified Version */}
            <div className="flex justify-center gap-4 pt-6">
              {/* Live Demo Button */}
              {project.liveUrl ? (
                <button
                  onClick={handleLiveDemoClick}
                  className="flex items-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium transition-all duration-300 cursor-pointer"
                  type="button"
                >
                  <ExternalLink className="w-5 h-5" />
                  Live Demo
                </button>
              ) : (
                <div className="flex items-center gap-3 px-8 py-4 bg-gray-400 text-gray-200 rounded-xl font-medium cursor-not-allowed">
                  <ExternalLink className="w-5 h-5" />
                  Demo Unavailable
                </div>
              )}

              {/* GitHub Button */}
              {project.githubUrl ? (
                <button
                  onClick={handleGithubClick}
                  className="flex items-center gap-3 px-8 py-4 bg-gray-800 dark:bg-gray-700 hover:bg-gray-900 dark:hover:bg-gray-600 text-white rounded-xl font-medium transition-all duration-300 cursor-pointer"
                  type="button"
                >
                  <Github className="w-5 h-5" />
                  View Code
                </button>
              ) : (
                <div className="flex items-center gap-3 px-8 py-4 bg-gray-400 text-gray-200 rounded-xl font-medium cursor-not-allowed">
                  <Github className="w-5 h-5" />
                  Code Unavailable
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-6 pb-20">
        {/* Tab Navigation */}
        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-xl p-2 mb-8 border border-gray-200 dark:border-gray-700">
          <div className="flex flex-wrap gap-1">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    activeTab === tab.id
                      ? "bg-blue-600 text-white shadow-lg"
                      : "text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-700"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab Content */}
        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-700">
          {activeTab === "overview" && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Project Overview
              </h2>
              <div className="prose prose-gray dark:prose-invert max-w-none">
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg whitespace-pre-line">
                  {project.details?.overview || "Overview not available"}
                </p>
              </div>
            </div>
          )}

          {activeTab === "features" && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Key Features
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {project.details?.features?.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  >
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700 dark:text-gray-300">
                      {feature}
                    </span>
                  </div>
                )) || <p className="text-gray-500">No features available</p>}
              </div>
            </div>
          )}

          {activeTab === "challenges" && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Challenges Faced
              </h2>
              <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6 rounded-r-lg">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {project.details?.challenges || "Challenges not documented"}
                </p>
              </div>
            </div>
          )}

          {activeTab === "solutions" && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Solutions Implemented
              </h2>
              <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-6 rounded-r-lg">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {project.details?.solutions || "Solutions not documented"}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
