"use client"
import { FileChartColumnIncreasingIcon, Home } from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  useSidebar
} from '@/components/ui/sidebar';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger
} from '@/components/ui/tooltip'
import Link from "next/link";

const items = [
  {
    id: 0,
    title: "Dashboard",
    url: "/",
    icon: Home,
  },
  {
    id: 1,
    title: "Finanças",
    url: "/finance",
    icon: FileChartColumnIncreasingIcon,
  },
]

export function AppSidebar() {
  const { state } = useSidebar();
  console.log(state)

  return (
    <Sidebar collapsible='icon'>
      <SidebarHeader />
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-muted-foreground">
            VISÃO GERAL
          </SidebarGroupLabel>
          {state === 'collapsed' ? (
            <SidebarGroupContent>
              <SidebarMenu>
                {items.map((item) => (
                  <SidebarMenuItem key={item.id} className="flex items-center justify-center mb-3">
                    <SidebarMenuButton asChild>
                      <Tooltip>
                        <TooltipContent side="left">
                          {item.title}
                        </TooltipContent>
                        <TooltipTrigger>
                          <Link href={item.url}>
                            <item.icon className="size-5" />
                          </Link>
                        </TooltipTrigger>
                      </Tooltip>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          ) : (
            <SidebarGroupContent>
              <SidebarMenu>
                {items.map((item) => (
                  <SidebarMenuItem key={item.id}>
                    <SidebarMenuButton asChild>
                      <Link href={item.url}>
                        <item.icon />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          )}
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  )
}