import React, { FC, useEffect, useState } from "react";
import { Box } from "@mui/material";
import {
  Sidebar as ProSidebar,
  Menu,
  MenuItem,
  useProSidebar,
} from "react-pro-sidebar";
import { WebsiteRoutes } from "../../constants/routes";
import { Link, useLocation } from "react-router-dom";

interface SidebarProps {
  isSideBarOpen: boolean;
}

export const Sidebar: FC<SidebarProps> = ({ isSideBarOpen }) => {
  let location = useLocation();
  const [selected, setSelected] = useState<string>(location.pathname);
  const { collapseSidebar } = useProSidebar();
  useEffect(() => {
    collapseSidebar(isSideBarOpen);
  }, [isSideBarOpen, collapseSidebar]);

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

const menuItems = [
  { link: `${WebsiteRoutes.home}`, text: "Home" },
  { link: `${WebsiteRoutes.carts}`, text: "Carts" },
  { link: `${WebsiteRoutes.users}`, text: "Customers" },
  { link: `${WebsiteRoutes.products}`, text: "Products" },
];
