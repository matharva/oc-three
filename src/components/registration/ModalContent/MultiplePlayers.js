import { Button, Heading } from "@chakra-ui/react";
const MultiplePlayers = ({
  setPayTypeOpen,
  eventData,
  currentUser,
  setJoin,
  setIsOpen,
  setJoinTypeOpen,
}) => {
  console.log("ksejygk");
  // const [code, setCode] = useState();
  // const [message, setMessage] = useState("");

  const joinUser = async () => {
    console.log("The code is: ");
    setJoinTypeOpen(true);
    setPayTypeOpen(true);
    // let joinData = await eventService.joinUser({
    //   teamCode: code,
    //   userId: currentUser.uid,
    //   eventName: eventData.Title,
    // });
    // if (!joinData.Message.includes("unsuccessfully")) {
    //   setJoin(true);
    //   setIsOpen(false);
    // } else {
    //   setMessage(joinData.Message);
    // }
  };

  return (
    <>
      <div className="modal-grid">
        <div className="section-one">
          <Heading size="xl" color={"white"} margin={"2rem 0"}>
            Join a team
          </Heading>
          <p style={{ marginBottom: "1rem", color: "white" }}>
            Enter a team code to join an already registered team
          </p>
          {/* <input
            type="text"
            placeholder="Enter your team code..."
            onChange={(e) => {
              setCode(e.target.value);
            }}
            value={code}
          /> */}
          <Button
            size="lg"
            colorScheme={"teal"}
            variant={"solid"}
            onClick={joinUser}
          >
            Join
          </Button>
          {/* <button onClick={joinUser}>Join</button> */}
          {/* <p>{message}</p> */}
        </div>
        <div className="section-two" style={{ background: "white" }}>
          {/* <h1>Referral Code</h1>
          <input type="text" placeholder="Enter referral code..." /> */}
          <Heading size="xl" color={"teal"} margin={"2rem 0"}>
            Create a team
          </Heading>
          <p style={{ color: "teal" }}>
            Once you click on the button, you will be redirected to the
            Razorpay!
          </p>
          <Button
            size="lg"
            colorScheme={"teal"}
            variant={"outline"}
            onClick={() => {
              console.log("wkuyehgfuyg");
              setPayTypeOpen(true);
            }}
          >
            Register now!
          </Button>
          {/* <button
            onClick={() => {
              console.log("wkuyehgfuyg");
              setPayTypeOpen(true);
            }}
          >
            Create a team
          </button> */}
        </div>
      </div>
    </>
  );
};

export default MultiplePlayers;
