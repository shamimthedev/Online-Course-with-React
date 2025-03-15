import Container from "../components/Container"
import Flex from "../components/Flex"
import Heading from "../components/Heading"
import Image from "../components/Image"
import Menu from "../components/Menu"
import fLogo from "../assets/images/footer-logo.png";
import fSocial from "../assets/images/socials.png";

const Footer = () => {
    return (
        <>
            <footer id="footerSection" className="bg-[#0166FF] font-primary text-white">
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
                            <Menu mText={"Home"} className={'mb-4'} />
                            <Menu mText={"Help center"} className={'mb-4'} />
                            <Menu mText={"Service"} className={'mb-4'} />
                        </div>
                        <div className="f_links text-[20px]">
                            <Heading
                                as={"h5"}
                                text={"Resource "}
                                className={"mb-4 font-secondary font-bold text-[30px]"}
                            />
                            <Menu mText={"About Us"} className={'mb-4'} />
                            <Menu mText={"Carrier"} className={'mb-4'} />
                            <Menu mText={"Legal Notice"} className={'mb-4'} />
                        </div>
                        <div className="f_links text-[20px]">
                            <Heading
                                as={"h5"}
                                text={"Contacts "}
                                className={"mb-4 font-secondary font-bold text-[30px]"}
                            />
                            <Menu mText={"192. New york"} className={'mb-4'} />
                            <Menu mText={"Support "} className={'mb-4'} />
                            <Menu mText={"+1125156363"} className={'mb-4'} />
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
            </footer>
        </>
    )
}

export default Footer