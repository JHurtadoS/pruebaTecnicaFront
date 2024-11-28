import React from "react";

const Sidebar: React.FC = () => {
    return (
        <aside className="p-4 bg-neutral-900  space-y-6 md:flex md:space-y-0 md:gap-x-6 md:flex-row lg:flex-col lg:gap-y-4 h-full">
            <div>
                <div className="flex-1">
                    <span id="search-filter">Search Filter Placeholder</span>
                </div>
                <div className="flex-1">
                    <span id="genre-filter">Genre Filter Placeholder</span>
                </div>
            </div>

        </aside>
    );
};

export default Sidebar;
