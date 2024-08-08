//page.tsx
import { Metadata } from "next";
import TopBrands from "@/components/Banners_tailwind/TopBrands";
import TopBrandsRandom from "@/components/TopBrandsRandom";
import Banner_small from "@/components/Banners_tailwind/Banner_small"
import Brand_carousel from "@/components/Banners_tailwind/Brands_carousel"
import Brand_carousel_mobile from "@/components/Banners_tailwind/Brands_carousel_mobile"
import Double_banners from "@/components/Banners_tailwind/Double_banners"
import Brands_double_carousel from "@/components/Banners_tailwind/Brands_double_carousel"
import Random_block from "@/components/Banners_tailwind/Random_block"
import Jackpot_banner from "@/components/Banners_tailwind/Jackpot_banner"
import Three_part_gallery from "@/components/Banners_tailwind/Three_part_gallery"
import Fortune_wheel from "@/components/Banners_tailwind/Fortune_wheel_banner"



import FilteredHome from "@/components/Brands_home/FilteredHome";
import Fortunes from "@/components/fortune";
import NewArrivals from "@/components/newArrivals/NewArrivals";
import UserBrands from "@/components/Brands_home/UserBrands";
// import KeitaroIframe from "@/components/KeitaroIframe";

export const metadata: Metadata = {
  title: "topbon.us: Your Comprehensive Source for Casino Reviews and Insights",
  description:
    "Welcome to topbon.us, your ultimate destination for comprehensive casino reviews and invaluable insights. Whether you're a seasoned gambler or just starting your casino journey, we're here to guide you through the world of online casinos. Our expert team meticulously reviews casinos, covering game variety, bonuses, payment options, security, and more. With our in-depth analysis and unbiased recommendations, you can make informed decisions and elevate your gaming experience. Explore our extensive database, stay updated with the latest trends, and embark on a rewarding casino adventure with Bonus topbon.us.",
};

export default async function Home() {
  const banner = true;
  const target = "target-fw-brands-main-page";
  const creative = "FW_Brands_Main_Page";
  return (
    <>
      {/* <PreviewHome /> */}

      <TopBrands />
      <Banner_small/>
      <Brand_carousel/>
      <Double_banners/>
      <Brands_double_carousel/>
      <Random_block/>
      <Jackpot_banner/>
      <Brand_carousel_mobile/>
      <Three_part_gallery/>
      <Jackpot_banner/>
      <Brand_carousel/>
      <Fortune_wheel/>


      {/* <div className="main__container mt-3">
        <UserBrands />
      </div>
      <TopBrandsRandom />

      <NewArrivals />
       */}

      {/* <div className="main__container">
        <Fortunes banner={banner} target={target} creative={creative} />
      </div> */}

      <div className="background-block">
        <FilteredHome />

      </div>

    </>
  );
}


