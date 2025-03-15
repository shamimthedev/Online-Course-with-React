import Button from "../components/BUtton"
import Container from "../components/Container"
import Flex from "../components/Flex"
import Image from "../components/Image"
import Menu from "../components/Menu"
import Logo from "../assets/images/logo.png";

const Header = () => {
    return (
        <>
            <header id="headerSection">
                <Container>
                    <Flex className={"py-6 justify-between items-center font-primary"}>
                        <div className="nav_logo">
                            <Image imgSrc={Logo} imgAlt={'Logo'} />
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
            </header>
        </>
    )
}

export default Header