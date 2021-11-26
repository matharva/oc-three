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
          <h1>Join a team</h1>
          {/* <input
            type="text"
            placeholder="Enter your team code..."
            onChange={(e) => {
              setCode(e.target.value);
            }}
            value={code}
          /> */}
          <button onClick={joinUser}>Join</button>
          {/* <p>{message}</p> */}
        </div>
        <div className="section-two">
          {/* <h1>Referral Code</h1>
          <input type="text" placeholder="Enter referral code..." /> */}
          <p>
            Once you click on the button, you will be redirected to the Razorpay
            dashboard!
          </p>
          <button
            onClick={() => {
              console.log("wkuyehgfuyg");
              setPayTypeOpen(true);
            }}
          >
            Create a team
          </button>
        </div>
      </div>
    </>
  );
};

export default MultiplePlayers;
