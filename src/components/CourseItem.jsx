import { FaStar } from "react-icons/fa"
import Heading from "./Heading"
import Image from "./Image"
import Button from "./BUtton"
import CourseOne from "../assets/images/course-img-01.png";

const CourseItem = () => {
    return (
        <div>

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
                            "w-full px-24 py-3 border-2 border-[#309DC1] rounded-l-[15px] rounded-br-[15px] text-[#6A6B6C] font-primary font-semibold text-[22px] cursor-pointer"
                        }
                    />
                </div>
            </div>
        </div>
    )
}

export default CourseItem