import Container from "../components/Container"
import Flex from "../components/Flex"
import Heading from "../components/Heading"

const Counter = () => {
  return (
    <>
    <section id="counterSection" className={"bg-counterBg"}>
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
      </section>
    </>
  )
}

export default Counter