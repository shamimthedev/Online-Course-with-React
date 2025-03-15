import { RiSingleQuotesL } from "react-icons/ri"
import Heading from "./Heading"
import Image from "./Image"
import { FaStar } from "react-icons/fa"
import Author from "../assets/images/author.png";

const ReviewItem = () => {
    return (
        <>
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
        </>
    )
}

export default ReviewItem