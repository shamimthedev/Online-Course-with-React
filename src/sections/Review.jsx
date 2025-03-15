import Container from "../components/Container"
import Flex from "../components/Flex"
import Heading from "../components/Heading"
import ReviewItem from "../components/ReviewItem"

const Review = () => {
    return (
        <>
            <section id="reviewSection" className="pb-28 bg-[#F9FAFC] font-primary ">
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
                        <ReviewItem />
                        <ReviewItem />
                        <ReviewItem />
                    </Flex>
                </Container>
            </section>
        </>
    )
}

export default Review