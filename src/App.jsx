import Container from "./components/Container";
import Flex from "./components/Flex";
import Image from "./components/Image";
import Logo from "./assets/images/logo.png";
import Menu from "./components/Menu";
import Button from "./components/BUtton";
import Hero from "./assets/images/hero-img.png";
import Heading from "./components/Heading";
import OneMonitor from "./assets/images/icon-01.png";
import TwoMonitor from "./assets/images/icon-02.png";
import ThreeMonitor from "./assets/images/icon-03.png";
import Benifits from "./assets/images/benifits-img.png";
import CourseOne from "./assets/images/course-img-01.png";
import { FaStar } from "react-icons/fa";
import Author from "./assets/images/author.png";
import { RiSingleQuotesL } from "react-icons/ri";
import fLogo from "./assets/images/footer-logo.png";
import fSocial from "./assets/images/socials.png";

function App() {
  return (
    <>
      {/* Header Section Start */}
      <div id="headerSection">
        <Container>
          <Flex className={"py-6 justify-between items-center font-primary"}>
            <div className="nav_logo">
              <Image imgSrc={Logo} imgAlt={Logo} />
            </div>
            <div className="nav_links">
              <Flex
                className={"space-x-12 font-primary text-[22px] text-[#6A6B6C]"}
              >
                <Menu mText={"Home"} />
                <Menu mText={"Course"} />
                <Menu mText={"Monitors"} />
                <Menu mText={"About"} />
              </Flex>
            </div>
            <div className="nav_btn">
              <Button
                bText={"Get Started"}
                className={
                  "px-7 py-4 bg-buttonBg text-[#190D30] font-semibold text-[20px] rounded-[20px]"
                }
              />
            </div>
          </Flex>
        </Container>
      </div>
      {/* Header Section End */}

      {/* Hero Section Start */}
      <div id="heroSection" className="bg-[#F9FAFC]">
        <Container>
          <Flex className={"pt-24 pb-28 items-center space-x-[122px]"}>
            <div className="hero_left w-1/2 font-primary">
              <Heading
                as={"h1"}
                text={"Getting Quality Education is now more Easy"}
                className={
                  "max-w-2xl mb-4 font-secondary font-bold text-[90px] text-3131 leading-[125%]"
                }
              />
              <Heading
                as={"p"}
                text={
                  "It is a long established fact that a reader will be distracted by the readable content of a page when looking."
                }
                className={
                  "max-w-2xl mb-8 font-medium text-[22px] text-[#565A5B] leading-[150%]"
                }
              />
              <div className="hero_btn flex space-x-7">
                <Button
                  bText={"Join Us Free"}
                  className={
                    "px-7 py-4 bg-buttonBg text-[#190D30] font-semibold text-[20px] rounded-[20px]"
                  }
                />
                <Button
                  bText={"Join Us Free"}
                  className={
                    "px-7 py-4 text-[#6A6B6C] border border-[#309DC1] font-semibold text-[20px] rounded-[25px]"
                  }
                />
              </div>
            </div>
            <div className="hero_right w-1/2">
              <Image imgSrc={Hero} imgAlt={"hero image"} className={"w-full"} />
            </div>
          </Flex>
        </Container>
      </div>
      {/* Hero Section End */}

      {/* Counter Section Start */}
      <div id="counterSection" className={"bg-counterBg"}>
        <Container>
          <Flex className={"py-20 items-center"}>
            <div className="counter_item pr-28 font-primary border-r border-white">
              <Heading
                as={"h3"}
                text={"8200"}
                className={
                  "mb-3 font-secondary font-bold text-[50px] text-white leading-[125%]"
                }
              />
              <Heading
                as={"p"}
                text={"Success Stories"}
                className={
                  "max-w-2xl mb-8 text-[25px] text-white leading-[150%]"
                }
              />
            </div>
            <div className="counter_item px-28 font-primary border-r border-white">
              <Heading
                as={"h3"}
                text={"8200"}
                className={
                  "mb-3 font-secondary font-bold text-[50px] text-white leading-[125%]"
                }
              />
              <Heading
                as={"p"}
                text={"Success Stories"}
                className={
                  "max-w-2xl mb-8 text-[25px] text-white leading-[150%]"
                }
              />
            </div>
            <div className="counter_item px-28 font-primary border-r border-white">
              <Heading
                as={"h3"}
                text={"8200"}
                className={
                  "mb-3 font-secondary font-bold text-[50px] text-white leading-[125%]"
                }
              />
              <Heading
                as={"p"}
                text={"Success Stories"}
                className={
                  "max-w-2xl mb-8 text-[25px] text-white leading-[150%]"
                }
              />
            </div>
            <div className="counter_item pl-28 font-primary">
              <Heading
                as={"h3"}
                text={"8200"}
                className={
                  "mb-3 font-secondary font-bold text-[50px] text-white leading-[125%]"
                }
              />
              <Heading
                as={"p"}
                text={"Success Stories"}
                className={
                  "max-w-2xl mb-8 text-[25px] text-white leading-[150%]"
                }
              />
            </div>
          </Flex>
        </Container>
      </div>
      {/* Counter Section End */}

      {/* Benifits Section Start */}
      <div id="benifitsSection" className="bg-[#F9FAFC]">
        <Container>
          <div className="benifits_heading text-center font-primary">
            <Heading
              as={"h2"}
              text={"Benefits of online Education"}
              className={
                "mb-4 pt-28 font-secondary font-bold text-[60px] text-[#07222C] leading-[125%]"
              }
            />
            <Heading
              as={"p"}
              text={
                "It is a long established fact that a reader will be distracted by the readable content of a page when looking."
              }
              className={
                "max-w-2xl mx-auto mb-8 font-medium text-[22px] text-[#565A5B] leading-[150%]"
              }
            />
          </div>
          <Flex className={"justify-between space-x-14 pt-16 pb-28"}>
            <div className="benifits_heading p-9 bg-white rounded-[25px] font-primary">
              <Image imgSrc={OneMonitor} className={"mb-8 w-[86px]"} />
              <Heading
                as={"h4"}
                text={"One on One Monitor"}
                className={
                  "mb-5 font-secondary font-bold text-[30px] text-[#07222C] leading-[125%]"
                }
              />
              <Heading
                as={"p"}
                text={
                  "Lorem Ipsum is simply dummy text of the printing and typesetting"
                }
                className={
                  "max-w-2xl text-[22px] text-[#565A5B] leading-[150%]"
                }
              />
            </div>
            <div className="benifits_heading p-9 bg-white rounded-[25px] font-primary">
              <Image imgSrc={TwoMonitor} className={"mb-8 w-[86px]"} />
              <Heading
                as={"h4"}
                text={"24/7 Mentor "}
                className={
                  "mb-5 font-secondary font-bold text-[30px] text-[#07222C] leading-[125%]"
                }
              />
              <Heading
                as={"p"}
                text={
                  "Lorem Ipsum is simply dummy text of the printing and typesetting"
                }
                className={
                  "max-w-2xl text-[22px] text-[#565A5B] leading-[150%]"
                }
              />
            </div>
            <div className="benifits_heading p-9 bg-white rounded-[25px] font-primary">
              <Image imgSrc={OneMonitor} className={"mb-8 w-[86px]"} />
              <Heading
                as={"h4"}
                text={"Whiteboard"}
                className={
                  "mb-5 font-secondary font-bold text-[30px] text-[#07222C] leading-[125%]"
                }
              />
              <Heading
                as={"p"}
                text={
                  "Lorem Ipsum is simply dummy text of the printing and typesetting"
                }
                className={
                  "max-w-2xl text-[22px] text-[#565A5B] leading-[150%]"
                }
              />
            </div>
            <div className="benifits_heading p-9 bg-white rounded-[25px] font-primary">
              <Image imgSrc={ThreeMonitor} className={"mb-8 w-[86px]"} />
              <Heading
                as={"h4"}
                text={"Affordable Price"}
                className={
                  "mb-5 font-secondary font-bold text-[30px] text-[#07222C] leading-[125%]"
                }
              />
              <Heading
                as={"p"}
                text={
                  "Lorem Ipsum is simply dummy text of the printing and typesetting"
                }
                className={
                  "max-w-2xl text-[22px] text-[#565A5B] leading-[150%]"
                }
              />
            </div>
          </Flex>
          <Flex className={"pt-24 pb-28 items-center space-x-[185px]"}>
            <div className="hero_right w-1/2">
              <Image
                imgSrc={Benifits}
                imgAlt={"hero image"}
                className={"w-full"}
              />
            </div>
            <div className="hero_left w-1/2 font-primary">
              <Heading
                as={"h2"}
                text={"We are Always Ensure Best Course for your learning"}
                className={
                  "max-w-2xl mb-4 font-secondary font-bold text-[58px] text-[#06053A] leading-[125%]"
                }
              />
              <Heading
                as={"p"}
                text={
                  "Lorem Ipsum is simply dummy text of the printing and It typesetting industry. Lorem Ipsum has been the  "
                }
                className={
                  "max-w-2xl mb-8 font-medium text-[22px] text-[#565A5B] leading-[150%]"
                }
              />
              <div className="">
                <Button
                  bText={"Join Us Free"}
                  className={
                    "px-7 py-4 bg-buttonBg text-[#190D30] font-semibold text-[20px] rounded-[20px]"
                  }
                />
              </div>
            </div>
          </Flex>
        </Container>
      </div>
      {/* Benifits Section End */}

      {/* Course Section Start */}
      <div id="courseSection" className="pb-28 bg-[#F9FAFC] font-primary">
        <Container>
          <div className="course_heading mb-16 text-center font-primary">
            <Heading
              as={"h2"}
              text={"Our Popular Course"}
              className={
                "mb-4 pt-12 font-secondary font-bold text-[60px] text-[#07222C] leading-[125%]"
              }
            />
            <Heading
              as={"p"}
              text={
                "It is a long established fact that a reader will be distracted by the readable content of a page when looking."
              }
              className={
                "max-w-2xl mx-auto mb-8 font-medium text-[22px] text-[#565A5B] leading-[150%]"
              }
            />
          </div>
          <Flex className={"mb-12 justify-between flex-wrap gap-16"}>
            <div className="course_item bg-white rounded-[25px] shadow-3xl">
              <Image imgSrc={CourseOne} />
              <div className="course_details p-8">
                <Heading
                  as={"h5"}
                  text={"Web Design  Basic to advance"}
                  className={
                    "mb-5 font-secondary font-bold text-[25px] text-[#07152F] leading-[150%]"
                  }
                />
                <div className="course_icons mb-7 flex items-center">
                  <div className="star_icon flex space-x-3 text-xl text-[#F1C40F]">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                  <div className="course_rating ml-8 font-primary font-medium text-[#6A6B6C] flex items-center">
                    <Heading
                      as={"p"}
                      text={"5.0"}
                      className={"text-lg leading-[150%]"}
                    />
                    <Heading
                      as={"p"}
                      text={"(2 rating)"}
                      className={"ml-[10px] text-[15px] leading-[150%]"}
                    />
                  </div>
                </div>
                <Button
                  bText={"Add to Cart"}
                  className={
                    "w-full px-24 py-3 border-2 border-[#309DC1] rounded-l-[15px] rounded-br-[15px] text-[#6A6B6C] font-primary font-semibold text-[22px]"
                  }
                />
              </div>
            </div>
            <div className="course_item bg-white rounded-[25px] shadow-3xl">
              <Image imgSrc={CourseOne} />
              <div className="course_details p-8">
                <Heading
                  as={"h5"}
                  text={"Web Design  Basic to advance"}
                  className={
                    "mb-5 font-secondary font-bold text-[25px] text-[#07152F] leading-[150%]"
                  }
                />
                <div className="course_icons mb-7 flex items-center">
                  <div className="star_icon flex space-x-3 text-xl text-[#F1C40F]">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                  <div className="course_rating ml-8 font-primary font-medium text-[#6A6B6C] flex items-center">
                    <Heading
                      as={"p"}
                      text={"5.0"}
                      className={"text-lg leading-[150%]"}
                    />
                    <Heading
                      as={"p"}
                      text={"(2 rating)"}
                      className={"ml-[10px] text-[15px] leading-[150%]"}
                    />
                  </div>
                </div>
                <Button
                  bText={"Add to Cart"}
                  className={
                    "w-full px-24 py-3 border-2 border-[#309DC1] rounded-l-[15px] rounded-br-[15px] text-[#6A6B6C] font-primary font-semibold text-[22px]"
                  }
                />
              </div>
            </div>
            <div className="course_item bg-white rounded-[25px] shadow-3xl">
              <Image imgSrc={CourseOne} />
              <div className="course_details p-8">
                <Heading
                  as={"h5"}
                  text={"Web Design  Basic to advance"}
                  className={
                    "mb-5 font-secondary font-bold text-[25px] text-[#07152F] leading-[150%]"
                  }
                />
                <div className="course_icons mb-7 flex items-center">
                  <div className="star_icon flex space-x-3 text-xl text-[#F1C40F]">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                  <div className="course_rating ml-8 font-primary font-medium text-[#6A6B6C] flex items-center">
                    <Heading
                      as={"p"}
                      text={"5.0"}
                      className={"text-lg leading-[150%]"}
                    />
                    <Heading
                      as={"p"}
                      text={"(2 rating)"}
                      className={"ml-[10px] text-[15px] leading-[150%]"}
                    />
                  </div>
                </div>
                <Button
                  bText={"Add to Cart"}
                  className={
                    "w-full px-24 py-3 border-2 border-[#309DC1] rounded-l-[15px] rounded-br-[15px] text-[#6A6B6C] font-primary font-semibold text-[22px]"
                  }
                />
              </div>
            </div>
            <div className="course_item bg-white rounded-[25px] shadow-3xl">
              <Image imgSrc={CourseOne} />
              <div className="course_details p-8">
                <Heading
                  as={"h5"}
                  text={"Web Design  Basic to advance"}
                  className={
                    "mb-5 font-secondary font-bold text-[25px] text-[#07152F] leading-[150%]"
                  }
                />
                <div className="course_icons mb-7 flex items-center">
                  <div className="star_icon flex space-x-3 text-xl text-[#F1C40F]">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                  <div className="course_rating ml-8 font-primary font-medium text-[#6A6B6C] flex items-center">
                    <Heading
                      as={"p"}
                      text={"5.0"}
                      className={"text-lg leading-[150%]"}
                    />
                    <Heading
                      as={"p"}
                      text={"(2 rating)"}
                      className={"ml-[10px] text-[15px] leading-[150%]"}
                    />
                  </div>
                </div>
                <Button
                  bText={"Add to Cart"}
                  className={
                    "w-full px-24 py-3 border-2 border-[#309DC1] rounded-l-[15px] rounded-br-[15px] text-[#6A6B6C] font-primary font-semibold text-[22px]"
                  }
                />
              </div>
            </div>
            <div className="course_item bg-white rounded-[25px] shadow-3xl">
              <Image imgSrc={CourseOne} />
              <div className="course_details p-8">
                <Heading
                  as={"h5"}
                  text={"Web Design  Basic to advance"}
                  className={
                    "mb-5 font-secondary font-bold text-[25px] text-[#07152F] leading-[150%]"
                  }
                />
                <div className="course_icons mb-7 flex items-center">
                  <div className="star_icon flex space-x-3 text-xl text-[#F1C40F]">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                  <div className="course_rating ml-8 font-primary font-medium text-[#6A6B6C] flex items-center">
                    <Heading
                      as={"p"}
                      text={"5.0"}
                      className={"text-lg leading-[150%]"}
                    />
                    <Heading
                      as={"p"}
                      text={"(2 rating)"}
                      className={"ml-[10px] text-[15px] leading-[150%]"}
                    />
                  </div>
                </div>
                <Button
                  bText={"Add to Cart"}
                  className={
                    "w-full px-24 py-3 border-2 border-[#309DC1] rounded-l-[15px] rounded-br-[15px] text-[#6A6B6C] font-primary font-semibold text-[22px]"
                  }
                />
              </div>
            </div>
            <div className="course_item bg-white rounded-[25px] shadow-3xl">
              <Image imgSrc={CourseOne} />
              <div className="course_details p-8">
                <Heading
                  as={"h5"}
                  text={"Web Design  Basic to advance"}
                  className={
                    "mb-5 font-secondary font-bold text-[25px] text-[#07152F] leading-[150%]"
                  }
                />
                <div className="course_icons mb-7 flex items-center">
                  <div className="star_icon flex space-x-3 text-xl text-[#F1C40F]">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                  <div className="course_rating ml-8 font-primary font-medium text-[#6A6B6C] flex items-center">
                    <Heading
                      as={"p"}
                      text={"5.0"}
                      className={"text-lg leading-[150%]"}
                    />
                    <Heading
                      as={"p"}
                      text={"(2 rating)"}
                      className={"ml-[10px] text-[15px] leading-[150%]"}
                    />
                  </div>
                </div>
                <Button
                  bText={"Add to Cart"}
                  className={
                    "w-full px-24 py-3 border-2 border-[#309DC1] rounded-l-[15px] rounded-br-[15px] text-[#6A6B6C] font-primary font-semibold text-[22px]"
                  }
                />
              </div>
            </div>
          </Flex>
          <div className="course_btn text-center">
            <Button
              bText={"See More"}
              className={
                "px-7 py-4 bg-buttonBg text-[#190D30] font-semibold text-[20px] rounded-[20px]"
              }
            />
          </div>
        </Container>
      </div>
      {/* Course Section End */}

      {/* Review Section Start */}
      <div id="reviewSection" className="pb-28 bg-[#F9FAFC] font-primary ">
        <Container>
          <div className="review_heading mb-12 text-center">
            <Heading
              as={"h2"}
              text={"What our Students say"}
              className={
                "mb-4 pt-12 font-secondary font-bold text-[60px] text-[#07222C] leading-[125%]"
              }
            />
            <Heading
              as={"p"}
              text={
                "There are many variations of passages of Lorem Ipsum available."
              }
              className={
                "max-w-3xl mx-auto mb-8 font-medium text-[22px] text-[#565A5B] leading-[150%]"
              }
            />
          </div>
          <Flex className={"justify-between space-x-11"}>
            <div className="review_item px-8 py-11 mb-12 rounded-[20px] bg-white">
              <Heading
                as={"h4"}
                text={"Great Platform"}
                className={
                  "mb-4 font-secondary font-bold text-[30px] text-[#190D30] leading-[125%]"
                }
              />
              <div className="review_quote mb-4 text-[#190D30] text-4xl">
                <RiSingleQuotesL />
              </div>
              <Heading
                as={"p"}
                text={
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took."
                }
                className={
                  "max-w-[415px] mb-8 text-[22px] text-[#534D5E] leading-[150%]"
                }
              />
              <div className={"mb-5 bg-[#B1B3B6] h-[1px] w-full"}></div>
              <div className="review_authors flex space-x-3 items-center">
                <Image imgSrc={Author} />
                <div className="author_details flex flex-col items-start justify-start">
                  <Heading
                    as={"p"}
                    text={"Beth Luna"}
                    className={"mb-1 text-[20px] text-[#534D5E] font-bold"}
                  />
                  <div className="star_icon flex space-x-2 text-sm text-[#F1C40F]">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                </div>
              </div>
            </div>
            <div className="review_item px-8 py-11 mb-12 rounded-[20px] bg-white">
              <Heading
                as={"h4"}
                text={"Great Platform"}
                className={
                  "mb-4 font-secondary font-bold text-[30px] text-[#190D30] leading-[125%]"
                }
              />
              <div className="review_quote mb-4 text-[#190D30] text-4xl">
                <RiSingleQuotesL />
              </div>
              <Heading
                as={"p"}
                text={
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took."
                }
                className={
                  "max-w-[415px] mb-8 text-[22px] text-[#534D5E] leading-[150%]"
                }
              />
              <div className={"mb-5 bg-[#B1B3B6] h-[1px] w-full"}></div>
              <div className="review_authors flex space-x-3 items-center">
                <Image imgSrc={Author} />
                <div className="author_details flex flex-col items-start justify-start">
                  <Heading
                    as={"p"}
                    text={"Beth Luna"}
                    className={"mb-1 text-[20px] text-[#534D5E] font-bold"}
                  />
                  <div className="star_icon flex space-x-2 text-sm text-[#F1C40F]">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                </div>
              </div>
            </div>
            <div className="review_item px-8 py-11 mb-12 rounded-[20px] bg-white">
              <Heading
                as={"h4"}
                text={"Great Platform"}
                className={
                  "mb-4 font-secondary font-bold text-[30px] text-[#190D30] leading-[125%]"
                }
              />
              <div className="review_quote mb-4 text-[#190D30] text-4xl">
                <RiSingleQuotesL />
              </div>
              <Heading
                as={"p"}
                text={
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took."
                }
                className={
                  "max-w-[415px] mb-8 text-[22px] text-[#534D5E] leading-[150%]"
                }
              />
              <div className={"mb-5 bg-[#B1B3B6] h-[1px] w-full"}></div>
              <div className="review_authors flex space-x-3 items-center">
                <Image imgSrc={Author} />
                <div className="author_details flex flex-col items-start justify-start">
                  <Heading
                    as={"p"}
                    text={"Beth Luna"}
                    className={"mb-1 text-[20px] text-[#534D5E] font-bold"}
                  />
                  <div className="star_icon flex space-x-2 text-sm text-[#F1C40F]">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                </div>
              </div>
            </div>
          </Flex>
        </Container>
      </div>
      {/* Review Section End */}

      {/* Footer Section Start */}
      <div id="footerSection" className="bg-[#0166FF] font-primary text-white">
        <Container>
          <Flex className={'justify-between pt-32 pb-40'}>
            <div className="footer_logo">
              <Image imgSrc={fLogo} className={"mb-4"} />
              <Heading
                as={"p"}
                text={"Follow on social service"}
                className={"mb-4 font-medium text-[25px]"}
              />
              <div className="footer_socials">
                <Image imgSrc={fSocial} />
              </div>
            </div>
            <div className="f_links text-[20px]">
              <Heading
                as={"h5"}
                text={"Links"}
                className={"mb-4 font-secondary font-bold text-[30px]"}
              />
              <Menu mText={"Home"} className={'mb-4'}/>
              <Menu mText={"Help center"} className={'mb-4'}/>
              <Menu mText={"Service"} className={'mb-4'}/>
            </div>
            <div className="f_links text-[20px]">
              <Heading
                as={"h5"}
                text={"Resource "}
                className={"mb-4 font-secondary font-bold text-[30px]"}
              />
              <Menu mText={"About Us"} className={'mb-4'}/>
              <Menu mText={"Carrier"} className={'mb-4'}/>
              <Menu mText={"Legal Notice"} className={'mb-4'}/>
            </div>
            <div className="f_links text-[20px]">
              <Heading
                as={"h5"}
                text={"Contacts "}
                className={"mb-4 font-secondary font-bold text-[30px]"}
              />
              <Menu mText={"192. New york"} className={'mb-4'}/>
              <Menu mText={"Support "} className={'mb-4'}/>
              <Menu mText={"+1125156363"} className={'mb-4'}/>
            </div>
          </Flex>
          <div className="h-[2px] w-3/5 mx-auto bg-white mb-7"></div>
          <div className="copyright">
            <Heading
                as={"p"}
                text={"Copyright 2020@ all right"}
                className={"pb-14 text-center text-[20px]"}
              />
          </div>
        </Container>
      </div>
      {/* Footer Section End */}
    </>
  );
}

export default App;
