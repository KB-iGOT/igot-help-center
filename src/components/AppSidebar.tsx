import { useLocation, useNavigate } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { categories } from "@/data/features";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  useSidebar,
} from "@/components/ui/sidebar";

export function AppSidebar() {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname;

  const [openGroups, setOpenGroups] = useState<Record<string, boolean>>(
    Object.fromEntries(categories.map((c) => [c.id, true]))
  );

  const toggleGroup = (id: string) => {
    setOpenGroups((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <Sidebar collapsible="icon" className="border-r border-border">
      <SidebarHeader className="p-4 border-b border-border">
        {!collapsed && (
          <div>
            <h2 className="font-display text-base font-bold text-foreground">iGOT Karmayogi</h2>
            <p className="text-xs text-muted-foreground">Portal Feature Guide</p>
          </div>
        )}
      </SidebarHeader>
      <SidebarContent className="py-2">
        {/* Home link */}
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              isActive={currentPath === "/"}
              onClick={() => navigate("/")}
              className="cursor-pointer"
            >
              <div className="flex items-center gap-2 px-4 py-2">
                <span className="text-sm">🏠</span>
                {!collapsed && <span className="text-sm font-medium">Overview</span>}
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>

        {categories.map((cat) => {
          const Icon = cat.icon;
          const isGroupOpen = openGroups[cat.id];

          return (
            <SidebarGroup key={cat.id}>
              <SidebarGroupLabel
                className={`cursor-pointer flex items-center justify-between px-4 py-2 hover:bg-muted/50 transition-colors ${cat.colorClass}`}
                onClick={() => toggleGroup(cat.id)}
              >
                <div className="flex items-center gap-2">
                  <Icon className="w-4 h-4" />
                  {!collapsed && <span className="text-xs font-semibold uppercase tracking-wider">{cat.title}</span>}
                </div>
                {!collapsed && (
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform ${isGroupOpen ? "rotate-0" : "-rotate-90"}`}
                  />
                )}
              </SidebarGroupLabel>

              {isGroupOpen && (
                <SidebarGroupContent>
                  <SidebarMenu>
                    {cat.features.map((feature) => {
                      const FeatureIcon = feature.icon;
                      const featurePath = `/feature/${feature.id}`;
                      const isActive = currentPath === featurePath;

                      return (
                        <SidebarMenuItem key={feature.id}>
                          <SidebarMenuButton
                            asChild
                            isActive={isActive}
                            onClick={() => navigate(featurePath)}
                            className="cursor-pointer"
                          >
                            <div className="flex items-center gap-2 px-4 py-2">
                              <FeatureIcon className={`w-4 h-4 ${isActive ? cat.colorClass : "text-muted-foreground"}`} />
                              {!collapsed && (
                                <span className={`text-sm ${isActive ? "font-semibold text-foreground" : "text-muted-foreground"}`}>
                                  {feature.title}
                                </span>
                              )}
                            </div>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      );
                    })}
                  </SidebarMenu>
                </SidebarGroupContent>
              )}
            </SidebarGroup>
          );
        })}
      </SidebarContent>
    </Sidebar>
  );
}
