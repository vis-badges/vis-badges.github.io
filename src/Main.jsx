import React from 'react';
import {DashboardLayout} from '@toolpad/core/DashboardLayout';
import {Outlet} from "react-router-dom";
import {PageContainer} from "@toolpad/core";

export default function Main() {
    return (
        <DashboardLayout
            defaultSidebarCollapsed={true}
            slots={{
                // sidebarFooter: SidebarFooter,
            }}
        >
            <PageContainer>
                <Outlet />
            </PageContainer>
        </DashboardLayout>
    );
}
