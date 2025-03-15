import Container from "../components/Container"
import Flex from "../components/Flex"
import Heading from "../components/Heading"
import Button from "../components/BUtton"
import CourseItem from "../components/CourseItem"

const Course = () => {
  return (
    <>
     <section id="courseSection" className="pb-28 bg-[#F9FAFC] font-primary">
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
            <CourseItem/>
            <CourseItem/>
            <CourseItem/>
            <CourseItem/>
            <CourseItem/>
            <CourseItem/>
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
      </section>
    </>
  )
}

export default Course