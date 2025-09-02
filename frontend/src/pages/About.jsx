import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/frontend_assets/assets";
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
    return (
        <div>
            <div className="text-2xl text-center pt-8 border-t">
                <Title text1={'ABOUT'} text2={'US'} />
            </div>

            <div className="my-10 flex flex-col md:flex-row gap-16">
                <img className="w-full md:max-w-[450px]" src={assets.about_img} alt="" />
                <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
                <p>E-commerce is the buying and selling of goods or services over the internet, making shopping fast and convenient for customers around the world. It allows businesses to reach a wider audience without the need for a physical store, reducing costs and increasing flexibility. With secure payment methods and quick delivery options, e-commerce has become a powerful tool in today’s digital economy.</p>
                <p>The rise of smartphones and online payment systems. From clothes to groceries, almost everything can now be bought online without leaving home. This digital shift is not just about convenience — it's also changing jobs, marketing, and how businesses compete worldwide.</p>
                <b className="text-gray-800">Our Mission</b>
                <p>A mission is a clear goal or purpose that guides a person, team, or organization toward what they want to achieve. It gives direction, focus, and motivation, especially during tough times. Whether it’s a company aiming to serve its customers or an individual chasing a dream, a strong mission keeps everything on track.</p>
                </div>
            </div>

            <div className="text-xl py-4">
                <Title text1={'WHY'} text2={'CHOOSE US'} />
            </div>

            <div className="flex flex-col md:flex-row text-sm mb-20">
                <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
                    <b>Quality Assuramce:</b>
                    <p className="text-gray-600">Quality assurance (QA) is the process of making sure that products or services meet certain standards before reaching customers. It involves careful testing, checking, and improving to prevent mistakes and ensure high quality. QA helps build trust with users and keeps companies competitive in the market.</p>
                </div>

                <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
                    <b>Conveniences:</b>
                    <p className="text-gray-600">Conveniences are things that make life easier, faster, or more comfortable, like smartphones, online shopping, or home appliances. They save time and effort, helping people manage their daily tasks more efficiently. In today’s busy world, we rely heavily on such conveniences to keep up with modern life.</p>
                </div>

                <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
                    <b>Exceptional Customer Service: </b>
                    <p className="text-gray-600">Exceptional customer service means going beyond basic help to truly satisfy and impress customers. It includes being friendly, solving problems quickly, and making customers feel valued and heard. When businesses provide exceptional service, they earn loyalty, positive reviews, and long-term success.</p>
                </div>
            </div>

            <NewsletterBox />


        </div>
    )
}
export default About