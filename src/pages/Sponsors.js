import React, { useEffect, useState } from "react";

// Components
import MobileNav from "../components/navigation/MobileNav";
import DesktopNav from "../components/navigation/DesktopNav";
import { Container, Stack, SimpleGrid } from "@chakra-ui/react";

// Styles
import "../styles/Sponsor.scss";

// Assets
import Ac from "../assets/Acoustique.png";
import Footer from "../components/Footer";
import { eventService } from "../services/eventService";

const Sponsors = () => {
  const [sponser, setSponser] = useState([]);
  useEffect(async () => {
    let Sponsers = await eventService.getSponsers();
    console.log("teh sposnerliusgaare; ", Sponsers);
    setSponser(Sponsers);
  }, []);

  return (
    <div>
      <MobileNav />
      <DesktopNav />
      <div className="sponsor-main">
        {/* <div className="title">Our Sponsors</div> */}
        {/* {sponser && sponser[0] && (
          <>
            <div className="sponsor-img-container">
              <a href={sponser[0].Url}>
                <img src={sponser[0].ImageUrl} alt="" />
              </a>
            </div>
            <h1>{sponser.Type}</h1>
          </>
        )} */}
        <div className="sponsor-grid">
          {/* {sponser &&
            sponser.map((item, i) => {
              return i ? (
                <>
                  <div className="sponsor-item">
                    <div className="sponsor-img-container">
                      <a href={item.Url}>
                        <img src={item.ImageUrl} alt="" />
                      </a>
                    </div>
                    <h1>{item.Type}</h1>
                  </div>
                </>
              ) : (
                <></>
              );
            })} */}

          {/* <div className="sponsor-item">
            <div className="sponsor-img-container">
              <a href="https://lashkariagroup.com/">
                <img
                  src={
                    "https://firebasestorage.googleapis.com/v0/b/oculus2021-c12c7.appspot.com/o/Sponsor%20Images%2FLashkaria.jpeg?alt=media&token=f4dce991-80b8-4597-a907-51ff69c71ecf"
                  }
                  alt=""
                />
              </a>
            </div>
            <h1>Construction Partner</h1>
          </div>
          <div className="sponsor-item">
            <div className="sponsor-img-container">
              <a href="https://yocket.in/">
                <img
                  src={
                    "https://firebasestorage.googleapis.com/v0/b/oculus2021-c12c7.appspot.com/o/Sponsor%20Images%2FYocket.png?alt=media&token=b2ee3fa7-3f37-44a8-8e95-aedbb3b73467"
                  }
                  alt=""
                />
              </a>
            </div>
            <h1>Study Abroad Partner</h1>
          </div>
          <div className="sponsor-item">
            <div className="sponsor-img-container">
              <a href="https://www.financepeer.com/">
                <img
                  src={
                    "https://firebasestorage.googleapis.com/v0/b/oculus2021-c12c7.appspot.com/o/Sponsor%20Images%2FFinancepeer%20Logo.png?alt=media&token=d1885398-201b-497c-a495-bf444d89cdc2"
                  }
                  alt=""
                />
              </a>
            </div>
            <h1>Finance Support Partner</h1>
          </div>
          <div className="sponsor-item">
            <div className="sponsor-img-container">
              <a href="https://www.masaischool.com/">
                <img
                  src={
                    "https://firebasestorage.googleapis.com/v0/b/oculus2021-c12c7.appspot.com/o/Sponsor%20Images%2FMasaiWhite.png?alt=media&token=e2e9e373-fa27-4a3e-b19f-4f6af670bb95"
                  }
                  alt=""
                />
              </a>
            </div>
            <h1>Education Partner</h1>
          </div>
          <div className="sponsor-item">
            <div className="sponsor-img-container">
              <a href="https://www.stupidskills.com/">
                <img
                  src={
                    "https://firebasestorage.googleapis.com/v0/b/oculus2021-c12c7.appspot.com/o/Sponsor%20Images%2Fstupidskillspadded.png?alt=media&token=0c40ca2b-11e4-4a37-a237-337dd3cf484a"
                  }
                  alt=""
                />
              </a>
            </div>
            <h1>Official E-Learning Partner</h1>
          </div>
          <div className="sponsor-item">
            <div className="sponsor-img-container">
              <a href="https://thebelgianwaffle.co/">
                <img
                  src={
                    "https://firebasestorage.googleapis.com/v0/b/oculus2021-c12c7.appspot.com/o/Sponsor%20Images%2FbelgianWaffle.png?alt=media&token=fffca639-3b7b-4d60-85c2-795d11855d69"
                  }
                  alt=""
                />
              </a>
            </div>
            <h1>Official Waffle Partner</h1>
          </div> */}
        </div>
      </div>
      <Container as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid
          columns={{ base: 1, sm: 2, md: 3 }}
          spacing={8}
          minHeight={window.innerWidth > 720 ? "100vh" : "70vh"}
          position={"relative"}
        >
          <div
            style={{
              position: "absolute",
              top: "10%",
              left: "50%",
              fontSize: window.innerWidth > 720 ? "3rem" : "1.5rem",
              fontWeight: "bold",
              transform: "translate(-60%,-50%)",
              borderBottom: "2px solid white",
            }}
          >
            Our Sponsors
          </div>
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              fontSize: window.innerWidth > 720 ? "7rem" : "3rem",
              fontWeight: "bold",
              transform: "translate(-50%,-50%)",
            }}
          >
            COMING SOON
          </div>
          {/* {product.map((item) => {
            return (
              <Product
                item={item}
                currentUser={currentUser}
                onOpen={onOpen}
                onLoginModalOpen={onLoginModalOpen}
                setMerchSuccess={setMerchSuccess}
              />
            );
          })} */}
        </SimpleGrid>
      </Container>
      <Footer />
    </div>
  );
};

export default Sponsors;
