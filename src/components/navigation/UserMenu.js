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
  const { currentUser, onLoginModalOpen } = useAuth();
  const location = useLocation();
  console.log(location);
  console.log(currentUser);

  const menuItems = [
    {
      title: "Profile",
      path: "/profile",
    },
    {
      title: "Privacy Policy",
      path: "/privacy",
    },
    {
      title: "Refund Policy",
      path: "/refund-policy",
    },
    {
      title: "Terms and Condition",
      path: "/termsnconditions",
    },
  ];

  const loginMenuItems = [
    {
      title: "Privacy Policy",
      path: "/privacy",
    },
    {
      title: "Refund Policy",
      path: "/refund-policy",
    },
    {
      title: "Terms and Condition",
      path: "/termsnconditions",
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
            {!currentUser ? (
              <>
                {loginMenuItems.map((item) => {
                  return (
                    <MenuItem style={{ color: "black" }}>
                      <Link to={item.path}>{item.title}</Link>
                    </MenuItem>
                  );
                })}
                <MenuItem
                  style={{ color: "black" }}
                  onClick={() => onLoginModalOpen()}
                >
                  Login
                </MenuItem>
              </>
            ) : (
              <>
                {menuItems.map((item) => {
                  return (
                    <MenuItem style={{ color: "black" }}>
                      <Link to={item.path}>{item.title}</Link>
                    </MenuItem>
                  );
                })}
                <MenuItem
                  style={{ color: "black" }}
                  onClick={() => onLoginModalOpen()}
                >
                  Logout
                </MenuItem>
              </>
            )}
          </MenuList>
        </Menu>
      </Flex>
    </>
  );
};

export default UserMenu;
