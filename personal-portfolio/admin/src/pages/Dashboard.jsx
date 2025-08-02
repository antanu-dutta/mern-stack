import React from "react";
import Navbar from "../components/Navbar";

import OverviewCards from "../components/OverviewCards";
import Tasks from "../components/Tasks";
import Notes from "../components/Notes";
import Bookmarks from "../components/Bookmarks";
import Snippets from "../components/Snippets";
import QuoteSection from "../components/QuoteSection";
import PinnedLinks from "../components/PinnedLinks";
import Clock from "../components/Clock";

const Dashboard = () => {
  return (
    <div className="min-h-screen">
      <div className="p-6 max-w-6xl mx-auto space-y-6">
        {/* Welcome Header */}
        <section>
          <h1 className="text-2xl font-semibold">👋 Welcome back, Antanu!</h1>
          <p className="text-gray-600 mt-1">Here's your dashboard overview.</p>
        </section>

        {/* Overview Cards */}
        <OverviewCards />

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Tasks />
          <Notes />
          <Bookmarks />
          <Snippets />
        </div>

        {/* Bottom Full Width Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <QuoteSection />
          <PinnedLinks />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
