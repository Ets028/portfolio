import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Play,
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

  const project = projects.find((p) => p.id === parseInt(id));

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

        {/* Go Back Button */}
        <button
          onClick={goBack}
          className="fixed top-6 left-6 z-50 group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
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
              {project.description.length > 200
                ? project.description.substring(0, 200) + "..."
                : project.description}
            </p>

            {/* Meta Info */}
            <div className="flex items-center justify-center gap-8 text-gray-600 dark:text-gray-400">
              <div className="flex items-center gap-2">
                <Code className="w-5 h-5" />
                <span>{project.technologies.length} Technologies</span>
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
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-gray-700 dark:text-gray-300 rounded-xl text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:scale-105"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex justify-center gap-4 pt-6">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-medium transition-all duration-300 hover:shadow-xl hover:scale-105"
              >
                <ExternalLink className="w-5 h-5" />
                Live Demo
              </a>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-gray-800 dark:bg-gray-700 hover:bg-gray-900 dark:hover:bg-gray-600 text-white px-8 py-4 rounded-xl font-medium transition-all duration-300 hover:shadow-xl hover:scale-105"
              >
                <Github className="w-5 h-5" />
                View Code
              </a>
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
                      ? "bg-blue-600 text-white shadow-lg scale-105"
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
                  {project.details.overview}
                </p>
                {project.description &&
                  project.description.length >
                    project.details.overview.length && (
                    <div className="mt-6 p-6 bg-gray-50 dark:bg-gray-700/50 rounded-xl">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                        Detailed Description
                      </h3>
                      <div className="text-gray-600 dark:text-gray-400 leading-relaxed whitespace-pre-line">
                        {project.description}
                      </div>
                    </div>
                  )}
              </div>
            </div>
          )}

          {activeTab === "features" && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Key Features
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {project.details.features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  >
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700 dark:text-gray-300">
                      {feature}
                    </span>
                  </div>
                ))}
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
                  {project.details.challenges}
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
                  {project.details.solutions}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Additional Info Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                <Code className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white">
                Technologies
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              {project.category === "fullstack"
                ? "Full-stack development with modern mobile and backend technologies."
                : "Built with modern web technologies for optimal performance."}
            </p>
          </div>

          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
                {project.title.toLowerCase().includes("inventory") ? (
                  <Shield className="w-5 h-5 text-green-600 dark:text-green-400" />
                ) : (
                  <Target className="w-5 h-5 text-green-600 dark:text-green-400" />
                )}
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white">
                {project.title.toLowerCase().includes("inventory")
                  ? "Security"
                  : "Performance"}
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              {project.title.toLowerCase().includes("inventory")
                ? "Secure authentication and role-based access control for business operations."
                : "Optimized for speed and efficiency with excellent user experience metrics."}
            </p>
          </div>

          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center">
                <Star className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white">
                Quality
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              High-quality code with comprehensive functionality and best
              practices implementation.
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .bg-grid-pattern {
          background-image: radial-gradient(
            circle at 1px 1px,
            rgba(255, 255, 255, 0.15) 1px,
            transparent 0
          );
          background-size: 20px 20px;
        }
      `}</style>
    </div>
  );
};

export default ProjectDetails;
