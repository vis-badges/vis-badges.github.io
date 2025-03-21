import React from 'react';
import {DashboardLayout } from '@toolpad/core/DashboardLayout';
import {Outlet} from "react-router-dom";
import {PageContainer} from "@toolpad/core";
import ToolbarActionsSearch from "../components/ToolbarActionSearch";
import SidebarFooter from "../components/SidebarFooter";

export default function DbLayout() {
    return (
        <DashboardLayout
            defaultSidebarCollapsed={true}
            slots={{
                // toolbarActions: ToolbarActionsSearch,
                // sidebarFooter: SidebarFooter,
            }}
        >
            <PageContainer>
                <Outlet />
            </PageContainer>
        </DashboardLayout>
    );
}
