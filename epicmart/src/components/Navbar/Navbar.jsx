import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Data from "./Data";
import LoginSignupModal from "../LoginSignup/LoginSignupModal";
// import CartData from "./CartData";
import { useSelector } from "react-redux";
import swal from "sweetalert";
import { store } from "../../Redux/store";
import { useDispatch } from "react-redux";
import { logOutUser } from "../../Redux/AuthReducer/action";
import { SearchBar } from "../../page/Searchbar/SearchBar";
import MiniNav from "./MiniNav";
import { AiOutlineUser } from "react-icons/ai";
import { HiShoppingCart } from "react-icons/hi";
import { RxHamburgerMenu } from "react-icons/rx";
import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  Hide,
  IconButton,
  Image,
  LinkBox,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Show,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
function Navbar() {
  const [data, setData] = useState([
    "SHOPPING",
    "CLOTHING",
    "BAGS",
    "SHOES",
    "ACCEESSORIES",
    "BEAUTY",
    "SALES",
    "PRE OWNED",
    "OCCASIONS",
  ]);
  const [modalShow, setModalShow] = React.useState(false);
  const token = useSelector((store) => store.AuthReducer.token);
  console.log("token", token);
  const dispatch = useDispatch();
  const [menu, setMenu] = useState("");
  useEffect(() => {}, [token]);
  const handleMiniNav = (ty) => {
    <MiniNav ty={ty} />;
  };
  function handleLogOut() {
    return swal({
      title: "Are you sure?",
      text: "You really want to log out?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal("Log out successfull", {
          icon: "success",
        });
      } else {
      }
    });
  }
  return (
    <Box
      position={"fixed"}
      zIndex="1000"
      bg="white"
      w={{ lg: "100%", sm: "100%", md: "100%" }}
    >
      {/* <Flex p={5}  w={{ lg: '100%', sm: '100%', md: '100%' }} justifyContent="space-evenly" color="gray.500" >
        <Show mr={10}  breakpoint='(max-width: 770px)'><Menu>
  <MenuButton
    as={IconButton}
    aria-label='Options'
    icon={<HamburgerIcon />}
    variant='outline'
  />
  <MenuList>
    <MenuItem  >
    Home
    </MenuItem>
    <MenuItem >
    FEATURE
    </MenuItem>
    <MenuItem >
    PRICE
    </MenuItem>
    <MenuItem  >
    CONTECT US
    </MenuItem>
  </MenuList>
</Menu></Show>
          <Box display={"flex"}  ml={4}  fontWeight="bold"
            textTransform="uppercase"
            fontSize={{lg:"32px",sm:"30px",md:"28px"}}
            letterSpacing="wide"
            color="orange">
            DELIVARY </Box>
<Hide below='md' >
          <Button textTransform="uppercase" bg="white" >Home</Button>
          <Button textTransform="uppercase" bg="white" >FEATURE</Button>
          <Button textTransform="uppercase" bg="white" >PRICE</Button>
          <Button textTransform="uppercase" bg="white" >CONTECT US</Button>
          </Hide>
          <Button textTransform="uppercase" bg="orange" color={"white"}>LOGIN</Button>
          </Flex> */}

      <Grid
        templateColumns="repeat(3, 1fr)"
        visibility="visible"
        zIndex={"10000"}
        // p={8}
        pt="20px"
        w={{ lg: "100%", sm: "100%", md: "100%" }}
        // justifyContent="space-evenly"
        color="gray.500"
      >
        <Show breakpoint="(max-width: 770px)">
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<HamburgerIcon />}
              variant="outline"
            />
            <MenuList>
              {data.map((i) => (
                <MenuItem>{i}</MenuItem>
              ))}
            </MenuList>
          </Menu>
        </Show>
        <Box ml="20px">
          <LinkBox to="/">
            <Image
              w={{ lg: "40%", md: "90%", sm: "100%" }}
              src="epicmart.png"
              alt=""
            />
          </LinkBox>
        </Box>
        {/* <div >

        <img className=".short_logo"
            src="https://thumbs.dreamstime.com/z/c-shape-8574661.jpg"
            alt=""
            ></img>
            </div> */}
        <Hide below="md">
          <Box
            className="links"
            display={"flex"}
            justifyContent="space-evenly"
            alignItems={"center"}
            pt="10px"
            w="100%"
          >
            <Link
              to="womens"
              onMouseEnter={() => {
                let d = "women";
                setMenu(<Data r={d} />);
              }}
              onMouseLeave={() => {
                setMenu("");
              }}
            >
              WOMEN{" "}
            </Link>
            <Link
              to="men"
              onMouseEnter={() => {
                let d = "men";
                setMenu(<Data r={d} />);
              }}
              onMouseLeave={() => {
                setMenu("");
              }}
            >
              MEN
            </Link>
            <Link
              to="beauty"
              onMouseEnter={() => {
                let d = "beauty";
                setMenu(
                  <Data
                    r={d}
                    onMouseLeave={() => {
                      setMenu("");
                    }}
                  />
                );
              }}
            >
              BEAUTY
            </Link>
            <Link
              to="kids"
              onMouseEnter={() => {
                let d = "kids";
                setMenu(
                  <Data
                    r={d}
                    onMouseLeave={() => {
                      setMenu("");
                    }}
                  />
                );
              }}
            >
              KIDS
            </Link>
            <Link
              to="/"
              onMouseEnter={() => {
                let d = "home";
                setMenu(
                  <Data
                    r={d}
                    onMouseLeave={() => {
                      setMenu("");
                    }}
                  />
                );
              }}
            >
              HOME
            </Link>
            <Link
              ml={3}
              to="offers"
              onMouseEnter={() => {
                let d = "offers";
                setMenu(
                  <Data
                    r={d}
                    onMouseLeave={() => {
                      setMenu("");
                    }}
                  />
                );
              }}
            >
              OFFERS
            </Link>
            <Link
              to="design"
              onMouseEnter={() => {
                let d = "designers";
                setMenu(
                  <Data
                    r={d}
                    onMouseLeave={() => {
                      setMenu("");
                    }}
                  />
                );
              }}
            >
              DESIGNERS
            </Link>
            <Link
              to="community"
              onMouseEnter={() => {
                let d = "community";
                setMenu(
                  <Data
                    r={d}
                    onMouseLeave={() => {
                      setMenu("");
                    }}
                  />
                );
              }}
            >
              COMMUNITY
            </Link>
            <Link
              to="whycoolmart"
              onMouseEnter={() => {
                let d = "why";
                setMenu(
                  <Data
                    r={d}
                    onMouseLeave={() => {
                      setMenu("");
                    }}
                  />
                );
              }}
            >
              WHYEPICMART
            </Link>
          </Box>
        </Hide>
        <div className="rightIcons">
          {/* <div className="flag_icon">
            <img
              src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/20px-Flag_of_India.svg.png"
              alt=""
            ></img>
          </div> */}
          <LinkBox to="cart" display="flex">
            <div style={{ color: "red" }} className="mini">
              <Link to={"/cart"}>
                <HiShoppingCart size="26px" />
              </Link>
            </div>
            {/* <Box disabled={true} fontSize="12px" className="drop">
              <Heading fontSize="12px">
                <AvatarGroup spacing="1rem">
                  <Avatar boxSize={8} bg="teal.500" />
                </AvatarGroup>
              </Heading> */}
            {/* <Box className="dropmenu" bg="white" p="30px">
                {" "}
                <Heading mt="30px" fontSize="12px">
                  Hi
                </Heading>
                <Heading mt="30px" fontSize="12px">
                  my Account
                </Heading>
                <Heading mt="30px" fontSize="12px">
                  My Wishlist
                </Heading>
                <Heading mt="30px" fontSize="12px">
                  My Orders
                </Heading>
                <Heading mt="30px" fontSize="12px">
                  My wallet
                </Heading>
                <Heading
                  onClick={() => {
                    localStorage.setItem("sts", JSON.stringify(false));
                  }}
                  mt="30px"
                  fontSize="12px"
                >
                  Logout
                </Heading>{" "}
              </Box>{" "} */}
            {/* </Box> */}
          </LinkBox>

          <LoginSignupModal
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
          <Box className="drop">
            <span>
              {token.length > 0 ? (
                <img
                  onClick={() => {
                    swal({
                      title: "Are you sure?",
                      text: "You really want to log out?",
                      icon: "warning",
                      buttons: true,
                      dangerMode: true,
                    }).then((willDelete) => {
                      if (willDelete) {
                        dispatch(logOutUser(""));
                        swal("Log out successfull", {
                          icon: "success",
                        });
                      } else {
                      }
                    });
                  }}
                  src="data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAH0AAAB9CAMAAAC4XpwXAAAAY1BMVEX///8AAADX19chISHf399paWmQkJD8/PzPz88wMDCbm5uurq7y8vLs7OwaGhqLi4uCgoLl5eVubm51dXW5ubk3NzdYWFhSUlLAwMA+Pj4ODg57e3teXl6mpqZjY2MpKSlHR0em6miQAAAD1UlEQVRoge2b23aqMBBADSDBECRcFAQR/v8rS9sERG4ZOrHr9LDf7OpySy6TmYkeDjs6UMfLcy+ib/dSL7wRRZExi77tM9CoJK+cWPAWP7XuI/cXoWPcTwMx7W45M25Yntaz8pa7Z/LxuVssydvp983pg2TZ3VIYG/0gXpW3GNLz8T6bfPrKxODTtTlX1KkBvX/RkxOSWehy66orJ0QEyHIe6ssJwR77/Lbu7Lk6qHI+H18nwQ06eQOz3yNMO4PJCfEQ5ZFWlHsGM+KlJ6i9QRz6CionBC/iwDb7N3hb3gFPO+bEexncnqBFW1ig++aKtuxy7eOtB2/RwzccIbc/Yv/dkfeAZ8wnD7Q1P1c7LSHQ9nugl80OQMxswQcs6hHrn6HyGjG3gofaGDGtpeBDLsdM7KBDX6MWFNDUCrmUhK36ArmWgj08ehXtL7ZMhtxwS5lPANVMii4/OI9fG/dPdKupGLWK6ki1jnnk+rVHp31hoHGhyNfiffEwJ2/zjONi68gOsXsmQ3g4n9sXmcFOpcSLp2e/uIWm1tuAPGlGR16dCcyGwSKeG2en7hPYl2tSmdnkc1i+K5LkeEwSwdL3qjvedx2zs7Pzf8CDyAEQ8cUoxCPtzI97PnNFGR8BJCJ0WWpNfYQgZWGZlKFOeKYeKzN7JaGZOe0vd1G9nrncT1R+cInZsp/motG8BpvGfriDTMtKnrtf5+PSta0lNvQoX7myLtmi+eu9VjPbS6bVhu7sFGH3NOOHuczU+VwACrdFVF0VTD1NM5kDR9p10yry6Wb6H+VEFswBN48rPORbOk9/e17K43SQb2gPziEHnrrqD5eqjUd+VxSOr03Xb/n1kWGNq712/QpC1FLtiFFvzUeUE7WQ5MubWoRdSfyy7oIfRZgXzvJNPfk67jRqKl72PN5yb7nIaZfjWXS7/1DJhxw2GyxMeWeXTa+z28+vPD/CgR0pxEkEzB5gurtGhq59Qy9+lr6i1rUjyp92sqYdb+DPz8mDpn3DNcQMgyjS2dmifcOF7zTDIDJlr8f2DZdfkxz7wyNaTRXsUmagWDlFN+78qPX/169PixTjuwvwSPtWw8HbcLl6csBYRlj2k9rqesP+TYNlV31qCzSRHpJdnZoCZE+Q7CrAw/bvCcmuFh3s4r5Asqs0Gfilhd2+23f7bt/tf9yOk9dtteNUsFvtONX7VvvBe9T2T9luP0TWz+Gb7Zj8rh3W5LaR7bD2V4Zsr0Dhg62/IQgKmnj0C+0cIPex5X0/dJ3SxF2+7u8OXDNfJAh0bhoacz+qpDlzl2C54R9U/gt8AGF9Qw5Vc+BZAAAAAElFTkSuQmCC"
                />
              ) : (
                <AiOutlineUser
                  size="26px"
                  onClick={() => setModalShow(true)}
                  src="https://cdn.modesens.com/static/img/20200612account_b2.svg"
                  alt=""
                />
              )}
            </span>
            <Box className="dropmenu" bg="white" p="30px">
              {" "}
              <Heading mt="30px" fontSize="12px">
                Hi
              </Heading>
              <Heading mt="30px" fontSize="12px">
                my Account
              </Heading>
              <Heading mt="30px" fontSize="12px">
                My Wishlist
              </Heading>
              <Heading mt="30px" fontSize="12px">
                My Orders
              </Heading>
              <Link to="/adminlogin">
                {" "}
                <Heading mt="30px" fontSize="12px">
                  Admin Login
                </Heading>
              </Link>
              <Heading
                onClick={() => {
                  localStorage.setItem("sts", JSON.stringify(false));
                }}
                mt="30px"
                fontSize="12px"
              >
                Logout
              </Heading>{" "}
            </Box>
          </Box>
          <div>
            {/* <span className="admin" >
              <Link to="adminlogin">
            <img 
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH4AAAB+CAMAAADV/VW6AAAAY1BMVEX///8AAABkZGSjo6PV1dWNjY339/fc3Nz09PT8/Pzp6elzc3NRUVHg4OC+vr7w8PDHx8ceHh41NTVsbGybm5stLS23t7eDg4MTExMZGRmTk5MnJyeurq56enpdXV06OjpGRkZLXcteAAAECklEQVRoge2b2ZaqMBBFpUEUZBBQxAHh/7/ykoRRhVTsU73uA/XU7YpuSSo1u9l8KfHRLuvEsoo0u+W7bz/lS3b0LKyxpLe/+wb7U2q9SZH90ReI7u9wKReXH77/mYELibjpx2KB3mwALz1fhDdy8BjpkY7Oynf0dMb995fPvZMTEz4g0S3LYaHbRLqVctD3VLplPRjwNzq+wGt/TKdzaN/JBF+jrb9HVXslaOXfGdGtLRj/MMPXYHxmhk9CLL42w1tHKD0+G+JzKD5MDPHYm7+jObtBsKpP8vQrfsWv+BWPk/BqiL9B8f5cUj0n2GDXrQzxWIdLznA6AQd7WzN6usfij2b4J5ZuqnvwNOtgQi98NN7I8GRoupnuM5T4DJSP4eFNHh+cYygJqXR0gtcKsbpS89A3mwuFnsAvXScuJdHkqWsp/lNLB7u6qXg6PndRf7HGE8TM9Mb6zqf6XOXUiXj252Q/Y1P5F4ntt9irKBk1/l2c7biddMjB0Q1FwuPDPtmR8wcdpFVWGSS2g7OSjL17OEh3w5xx5N11r1zOLl7Dzp9V69KmdUb1/E4dPPgMgHMRzEr9PTV6P/JFkQskWxbbG9vtbl9lIPkSeN2F6fFaQxigfb4bjfy83OiXZm4gDn2ovJ5t3BZ4u4l9V3r20lazX79ScsAEHu7jNcC5ytcnYcdZvlRO1z2jX98D51Nwq0KacdShnO3bwsT+jTcKT5/L6KpVMGouqSjH/7Q2+zIM2EezSVVrZPqou1J3fWa0oIq+CACjhVqSuvkDrlT/zyYh6c006VvuWaqn7Xe/LWUsFb/MglBN1y6a4pUuLDd5TXJuX1PDVIffJ/yqgqmZKjFIe3Uty8Cd8A7yTZr8s6Cff7n8SZYlTWrf0JdVNFdXfaB39pYGk6TIw+9rXbWwbh9v/Vjo2qfFl5NVqdgM7UiPjcPL5+13W7pg7YEB8UKP3MHoO5TxAiBeHL5/Hv+n7zcg8eUE+KBU/ZD4+yTau1CqTkh8c/hTvL6/j8Q3RsQbVO9ImSaD4suRV6xdyiAfFF+M7NyN1GuB4kXA1y3zKUcPxue9y3t6G5fwBiy+0fYWSrr1aHzldT5vTxumw+LFicuHzojzZGC8CB8yNR5FGmQE44XP90JHBPGkNg8YHwwJFKnDCsYPDSNtlZ0F3xeUdHE5D/7QLac1ONH4ukvfaSO0aHzR1S9o/UU0vksciL11OL49fGJzF46/q9XE6Wk4vr35xClSPF4ePsXX8+Blnk/t6+PxhVhMnR3H42WeT50qYMCLohJ1LQP+YjDRwoCvXPpvJhjwzeGT13Lgc5c8R8iBL8njLCz4J/3nMhz4K32GkwNvICt+xf/3eMPfANGEPj0ams4kE+TzQNM/KgY48no9Hz4AAAAASUVORK5CYII="
              alt=""
              />
              </Link>
              </span> */}
          </div>

          <div className="search">
            <img
              style={{ width: "50%%" }}
              src="https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/search-512.png"
              alt=""
            />
            <SearchBar />
          </div>
          <div style={{ marginTop: "-10px", cursor: "pointer" }}></div>
        </div>
      </Grid>
      <Box w="100%" position={"absolute"} bg="white">
        {menu}
      </Box>
    </Box>
  );
}

export default Navbar;
