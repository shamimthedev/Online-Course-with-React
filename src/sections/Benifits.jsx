import Button from "../components/Button"
import Container from "../components/Container"
import Flex from "../components/Flex"
import Heading from "../components/Heading"
import Image from "../components/Image"
import OneMonitor from "../assets/images/icon-01.png";
import TwoMonitor from "../assets/images/icon-02.png";
import ThreeMonitor from "../assets/images/icon-03.png";
import BenifitsImg from "../assets/images/benifits-img.png";

const Benifits = () => {
  return (
    <>
      <section id="benifitsSection" className="bg-[#F9FAFC]">
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
                imgSrc={BenifitsImg}
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
      </section>
    </>
  )
}

export default Benifits