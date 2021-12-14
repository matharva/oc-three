import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
  Button,
} from "@chakra-ui/react";

import { FcMoneyTransfer } from "react-icons/fc";
import Oculus from "../../assets/Oculus.png";
import axios from "axios";

function loadScript(src) {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    document.body.appendChild(script);
    script.onload = () => {
      console.log("done");
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
  });
}

const IMAGE =
  "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg";

export default function Product({
  item,
  currentUser,
  onOpen,
  onLoginModalOpen,
  setMerchSuccess,
}) {
  const eventName = "Vitual Stock Market";

  // onOpen();
  async function showRazorpayModal() {
    // const amount = details.filter((i) => i.Type == paymentType)[0].Fee;
    const amount = item.price;
    console.log("The result is:", amount, eventName);
    const result = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );
    if (!result) {
      alert("Dard");
      return;
    }
    const data = {
      event: eventName,
      amount: parseInt(amount),
    };

    console.log("The result is:", result, data, eventName);

    if (currentUser.phoneNumber) {
      console.log("The data is: ", currentUser);
      const resData = await axios.post(
        "https://us-central1-oculus2022-75997.cloudfunctions.net/payment",
        data
      );
      console.log("The resData is: ", resData);
      //
      const options = {
        key: resData?.data?.key, // Enter the Key ID generated from the Dashboard
        amount: resData?.data?.order?.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        currency: "INR",
        name: eventName,
        description: `${eventName} Transaction`,
        image: Oculus,
        order_id: resData?.data?.order?.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        handler: async function (response) {
          console.log("Response: ", response);
          setMerchSuccess(true);
          // let paymentData = await eventService.postPayment({
          //   paymentId: response.razorpay_payment_id,
          //   eventName: eventName,
          //   userId: currentUser.uid,
          //   teamName: "Dardadad",
          //   inviteCode: refCode,
          // });
          // console.log("The payment data is: ", paymentData);
          // if (paymentData.registrationDetails) {
          //   setPaymentDone(true);
          //   setIsPaymentSuccess(true);
          // }
        },
        prefill: {
          name: currentUser.name,
          contact: currentUser.phoneNumber,
          email: currentUser.email,
        },
        notes: {
          address: "Razorpay Corporate Office",
        },
        theme: {
          color: "#3399cc",
        },
      };
      console.log("The options are: ", options);
      var rzp1 = new window.Razorpay(options);
      rzp1.open();
    } else {
      setMerchSuccess(false);
      console.log("Add PhoneNumber");
    }
    onOpen();
  }

  return (
    <Center py={12}>
      <Box
        role={"group"}
        p={6}
        maxW={"330px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        rounded={"lg"}
        pos={"relative"}
      >
        <Box
          rounded={"lg"}
          mt={-12}
          pos={"relative"}
          height={"230px"}
          _after={{
            transition: "all .3s ease",
            content: '""',
            w: "full",
            h: "full",
            pos: "absolute",
            top: 5,
            left: 0,
            backgroundImage: `url(${IMAGE})`,
            filter: "blur(15px)",
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: "blur(20px)",
            },
          }}
        >
          <Image
            rounded={"lg"}
            height={230}
            width={282}
            objectFit={"cover"}
            src={IMAGE}
          />
        </Box>
        <Stack pt={10} align={"center"}>
          <Text color={"gray.500"} fontSize={"sm"}>
            {item?.brand}
          </Text>
          <Heading fontSize={"2xl"} fontFamily={"body"} fontWeight={500}>
            {item.item}
          </Heading>
          <Stack direction={"row"} align={"center"}>
            {currentUser ? (
              <>
                <Button
                  leftIcon={<FcMoneyTransfer />}
                  colorScheme="teal"
                  variant="solid"
                  onClick={() => {
                    console.log("hiii");
                    showRazorpayModal();
                  }}
                >
                  <Text fontWeight={800} fontSize={"xl"}>
                    Rs: {item.price}
                  </Text>
                </Button>
              </>
            ) : (
              <>
                <Button
                  leftIcon={<FcMoneyTransfer />}
                  colorScheme="teal"
                  variant="solid"
                  // disabled
                  onClick={() => {
                    // onOpen();
                    onLoginModalOpen();
                  }}
                >
                  <Text fontWeight={800} fontSize={"xl"}>
                    Rs: {item.price}
                  </Text>
                </Button>
              </>
            )}
          </Stack>
        </Stack>
      </Box>
    </Center>
  );
}
