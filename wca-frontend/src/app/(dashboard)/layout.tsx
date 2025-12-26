import React from 'react';

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="h-dvh flex flex-col overflow-hidden">
            {children}
        </div>
    );
}
