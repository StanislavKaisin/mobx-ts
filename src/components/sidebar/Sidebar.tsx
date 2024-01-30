import React, { FC, useEffect, useMemo, useState } from "react";
import { Box } from "@mui/material";
import {
  Sidebar as ProSidebar,
  Menu,
  MenuItem,
  useProSidebar,
} from "react-pro-sidebar";
import { WebsiteRoutes } from "../../constants/routes";
import { Link, useLocation } from "react-router-dom";
import { useUserAuth } from "../../UserAuthContext";

interface SidebarProps {
  isSideBarOpen: boolean;
}

export const Sidebar: FC<SidebarProps> = ({ isSideBarOpen }) => {
  let location = useLocation();
  const userContext = useUserAuth();
  const [selected, setSelected] = useState<string>(location.pathname);
  const { collapseSidebar } = useProSidebar();
  useEffect(() => {
    collapseSidebar(isSideBarOpen);
  }, [isSideBarOpen, collapseSidebar]);

  const menuItems = useMemo(() => {
    if (!userContext?.user) {
      return allMenuItems.filter((item) => !item.protected);
    } else {
      return allMenuItems;
    }
  }, [userContext?.user]);

  return (
    <Box>
      <ProSidebar collapsedWidth="0" style={{ height: "400px" }}>
        <Menu>
          {menuItems.map(({ link, text }) => {
            return (
              <MenuItem
                component={<Link to={link} />}
                key={text}
                onClick={() => setSelected(link)}
                active={selected === link}
                rootStyles={{
                  backgroundColor: selected === link ? "Highlight" : "",
                }}
              >
                {text}
              </MenuItem>
            );
          })}
        </Menu>
      </ProSidebar>
    </Box>
  );
};

const allMenuItems = [
  { link: `${WebsiteRoutes.home}`, text: "Home", protected: false },
  { link: `${WebsiteRoutes.login}`, text: "Login", protected: false },
  { link: `${WebsiteRoutes.carts}`, text: "Carts", protected: true },
  { link: `${WebsiteRoutes.users}`, text: "Customers", protected: true },
  { link: `${WebsiteRoutes.products}`, text: "Products", protected: true },
  { link: `${WebsiteRoutes.dashboard}`, text: "Dashboard", protected: true },
];
