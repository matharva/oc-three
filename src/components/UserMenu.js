import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Image,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { DUMMY_USER_ICON } from "../constants";
import { useAuth } from "../contexts/AppContext";

const UserMenu = () => {
  const { currentUser } = useAuth();

  const menuItems = [
    {
      title: "Profile",
      path: "/path",
    },
    {
      title: `${currentUser ? "Logout" : "Login"}`,
      path: "/path",
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
              src={currentUser ? currentUser.photoURL : DUMMY_USER_ICON}
            />
          </MenuButton>

          {/* Menu Dropdown*/}
          <MenuList>
            {menuItems.map((item) => {
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
