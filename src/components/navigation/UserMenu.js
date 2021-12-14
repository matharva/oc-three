import {
  Flex,
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Center,
  Box,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { DUMMY_USER_ICON } from "../../constants";
import { useAuth } from "../../contexts/AppContext";
import { useLocation } from "react-router-dom";
import { OC_BG } from "../../services/helpers";

const UserMenu = () => {
  const { currentUser, onLoginModalOpen } = useAuth();
  const location = useLocation();
  console.log(location);
  console.log(currentUser);

  const menuItems = [
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
          <MenuList
            bg={""}
            style={{
              // border: "2px solid red",
              backdropFilter: "blur(16px) saturate(180%)",
              // -webkit-backdrop-filter: blur(16px) saturate(180%);
              backgroundColor: "rgba(17, 25, 40, 0.75)",
              borderRadius: "12px",
              border: "1px solid rgba(255, 255, 255, 0.125)",
            }}
          >
            {!currentUser ? (
              <>
                {menuItems.map((item) => {
                  return (
                    <Link to={item.path}>
                      <MenuItem
                        _hover={{
                          //
                          // backgroundColor: "red",
                          color: "black",
                        }}
                      >
                        {item.title}
                      </MenuItem>
                    </Link>
                  );
                })}
                <MenuItem
                  onClick={() => onLoginModalOpen()}
                  _hover={{
                    //
                    // backgroundColor: "red",
                    color: "black",
                  }}
                >
                  Login
                </MenuItem>
              </>
            ) : (
              <>
                {/* <MenuItem
                  style={{ color: "black" }}
                  onClick={() => onLoginModalOpen()}
                > */}
                <Box style={{ color: "white" }}>
                  <Center>
                    <Avatar
                      size={"2xl"}
                      src={
                        currentUser?.photo ||
                        "https://avatars.dicebear.com/api/male/username.svg"
                      }
                    />
                  </Center>
                  <br />
                  <Center>
                    <p style={{ fontWeight: "bold" }}>{currentUser?.name}</p>
                  </Center>

                  <Center>
                    <p style={{ fontWeight: "bold", margin: "0.5rem 0" }}>
                      Referral Code:{" "}
                      <span style={{ fontWeight: "normal" }}>
                        {currentUser?.inviteCode || "fafdsafds"}
                      </span>
                    </p>
                  </Center>
                  <Center>
                    <p style={{ fontWeight: "bold" }}>
                      Referral Score:{" "}
                      <span style={{ fontWeight: "normal" }}>
                        {/* {currentUser?.invited || "5"}
                         */}
                        {currentUser.invited}
                      </span>
                    </p>
                  </Center>
                </Box>
                <MenuDivider />
                {/* </MenuItem> */}
                {menuItems.map((item) => {
                  return (
                    <MenuItem
                      _hover={{
                        //
                        // backgroundColor: "red",
                        color: "black",
                      }}
                    >
                      <Link to={item.path}>{item.title}</Link>
                    </MenuItem>
                  );
                })}
                <MenuItem
                  _hover={{
                    //
                    // backgroundColor: "red",
                    color: "black",
                  }}
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
