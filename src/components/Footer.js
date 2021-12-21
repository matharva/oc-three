import React from "react";
import { useHistory, Link } from "react-router-dom";

// Assets
import Download from "../assets/android-download.png";

// Styles
import "../styles/Footer.scss";

// Icons
import { PhoneIcon, AddIcon, WarningIcon } from "@chakra-ui/icons";

import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  VisuallyHidden,
  chakra,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaTwitter, FaYoutube, FaInstagram, FaLinkedin } from "react-icons/fa";

import { OC_BG_DARK } from "../services/helpers";

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"700"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Footer() {
  const history = useHistory();
  return (
    <Box
      // bg={useColorModeValue("gray.50", "gray.900")}
      // color={useColorModeValue("gray.700", "gray.200")}
      color="white"
      bg={OC_BG_DARK}
    >
      <Container as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={8}>
          <Stack align={"center"}>
            <ListHeader>Oculus</ListHeader>
            <Link to="/aboutus">About Us</Link>
            {/* <Link to="">Blog</Link>
            <Link to="">Careers</Link> */}
            {/* <Link to="/">Contact Us</Link> */}
          </Stack>

          <Stack align={"center"}>
            <ListHeader>Legal</ListHeader>
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/termsnconditions">Terms and Conditions</Link>
            <Link to="/refund-policy">Refund Policy</Link>
          </Stack>

          <Stack align={"center"}>
            <ListHeader>Install App</ListHeader>
            {/* <AppStoreBadge />
            <PlayStoreBadge /> */}
            <div className="footer-logo" onClick={() => history.push("/")}>
              <img src={Download} alt="" />
            </div>
          </Stack>
        </SimpleGrid>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.700")}
      >
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ md: "space-between" }}
          align={{ md: "center" }}
        >
          <Text>Oculus 2022 Social Links</Text>
          <Stack direction={"row"} spacing={4}>
            {/* <SocialButton label={"Twitter"} href={"#"}>
              <FaTwitter />
            </SocialButton>
            <SocialButton label={"YouTube"} href={"#"}>
              <FaYoutube /> 
          </SocialButton>*/}
            <SocialButton
              label={"LinkedIn"}
              href={"https://www.linkedin.com/company/oculusseesall/"}
            >
              <FaLinkedin />
            </SocialButton>
            <SocialButton
              label={"Instagram"}
              href={"https://www.instagram.com/o.c.u.l.u.s_s.p.i.t/"}
            >
              <FaInstagram />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
