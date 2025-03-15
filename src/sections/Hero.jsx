import Button from "../components/BUtton"
import Container from "../components/Container"
import Flex from "../components/Flex"
import Heading from "../components/Heading"
import Image from "../components/Image"
import HeroImg from "../assets/images/hero-img.png";

const Hero = () => {
  return (
    <>
    <section id="heroSection" className="bg-[#F9FAFC]">
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
              <Image imgSrc={HeroImg} imgAlt={"hero image"} className={"w-full"} />
            </div>
          </Flex>
        </Container>
      </section>
    </>
  )
}

export default Hero