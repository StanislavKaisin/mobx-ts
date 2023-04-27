import React, { useState } from "react";
import { Box } from "@mui/material";
import { Sidebar as ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { WebsiteRoutes } from "../../constants/routes";
import { Link, useLocation } from "react-router-dom";

export const Sidebar = () => {
  let location = useLocation();
  const [selected, setSelected] = useState<string>(location.pathname);
  return (
    <Box>
      <ProSidebar>
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
  { link: `${WebsiteRoutes.users}`, text: "Users" },
  { link: `${WebsiteRoutes.products}`, text: "Products" },
];
