import {
  Flex,
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { DUMMY_USER_ICON } from "../../constants";
import { useAuth } from "../../contexts/AppContext";
import { useLocation } from "react-router-dom";

const UserMenu = () => {
  const { currentUser, onOpen } = useAuth();
  const location = useLocation();
  console.log(location);
  console.log(currentUser);

  const menuItems = [
    {
      title: "Profile",
      path: "/profile",
      fn: () => {},
    },
    {
      title: "Privacy Policy",
      path: "/privacy",
      fn: () => {},
    },
    {
      title: `Logout`,
      path: `${location.pathname}`,
      fn: () => onOpen(),
    },
  ];

  const loginMenuItems = [
    {
      title: "Privacy Policy",
      path: "/privacy",
      fn: () => {},
    },
    {
      title: `Login`,
      path: `${location.pathname}`,
      fn: () => onOpen(),
    },
  ];

  return (
    <>
      <Flex alignItems={"center"}>
        <Menu>
          {/* Menu Icon */}
          <MenuButton
            as={Button}
            rounded={"full"}
            variant={"link"}
            cursor={"pointer"}
            minW={0}
          >
            <Avatar
              size={"sm"}
              src={currentUser ? currentUser.photo : DUMMY_USER_ICON}
            />
          </MenuButton>

          {/* Menu Dropdown*/}
          <MenuList>
            {!currentUser
              ? loginMenuItems.map((item) => {
                  return (
                    <MenuItem style={{ color: "black" }} onClick={item.fn}>
                      <Link to={`${item.path}`}>{item.title}</Link>
                    </MenuItem>
                  );
                })
              : menuItems.map((item) => {
                  return (
                    <MenuItem style={{ color: "black" }}>
                      <Link to={`/${item.path}`}>{item.title}</Link>
                    </MenuItem>
                  );
                })}
          </MenuList>
        </Menu>
      </Flex>
    </>
  );
};

export default UserMenu;
