import React, { PropsWithChildren } from "react";
import { InboxSidebar, EmptyInboxState } from "../../../components/InboxComponents";

function InboxLayout({ children }: PropsWithChildren) {
  return (
    <div
      data-theme="dracula"
      className="flex w-full h-full overflow-hidden"
    >
      {/* Sidebar - hidden on mobile, visible on desktop */}
      <div className="hidden md:flex md:w-80 lg:w-96 flex-shrink-0">
        <InboxSidebar />
      </div>

      {/* Main content area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {children}
      </div>
    </div>
  );
}

export default InboxLayout;
