import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const images = [
    "https://res.cloudinary.com/dbt9zpjzn/image/upload/v1686931579/Scanpan-Impact-5pc-Cookware-Set_1_2000px_jhkkhx.jpg",
    "https://res.cloudinary.com/dbt9zpjzn/image/upload/v1686931579/Kitchen-Pro-Denny-24pc-Storage-Cube-Canister-Starter-Pack-HERO_3_bjyqfd.jpg",
    "https://res.cloudinary.com/dbt9zpjzn/image/upload/v1686931578/Thermos-Stainless-King-Insulated-Food-Jar-710ml-Stainless-Steel_1_2000px_encjsl.jpg",
    "https://res.cloudinary.com/dbt9zpjzn/image/upload/v1686931577/Salisbury-Co-Sublime-Stemless-Wine-Glass-Set-500ml-6pc_1_umvrud.jpg",
    "https://res.cloudinary.com/dbt9zpjzn/image/upload/v1686931578/Wolstead-Pro-Swift-Digital-Air-Fryer-Oven-12L-Black-LS_1_bgb59w_n1bvab.jpg",
    "https://res.cloudinary.com/dbt9zpjzn/image/upload/v1686931578/Salisbury-Co-Province-Carry-Basket-with-Suede-Handle-Large-HERO_tga3mf.jpg",
    "https://res.cloudinary.com/dbt9zpjzn/image/upload/v1686931578/SodaStream-Power-Drink-Maker-Black_1_2000px_s11xvx.jpg",
    "https://res.cloudinary.com/dbt9zpjzn/image/upload/v1686931578/Joseph-Joseph-Folio-4pc-Chopping-Board-Set-Large-Silver_1_2000px_uarkee.jpg",
    "https://res.cloudinary.com/dbt9zpjzn/image/upload/v1686931577/Wolstead-Endure-Seasoned-Cast-Iron-Bread-Baking-Pan-39x25cm-HERO_01_kbymnj.jpg",
    "https://res.cloudinary.com/dbt9zpjzn/image/upload/v1686931576/Wolstead-Mineral-4pc-Cookware-Set-Ivory-HERO_01_d5fi5r.jpg",
    "https://res.cloudinary.com/dbt9zpjzn/image/upload/v1686931576/Wolstead-Endure-Round-Enamel-Cast-Iron-Casserole-28cm-Red-HERO_z4wu67.jpg",
    "https://res.cloudinary.com/dbt9zpjzn/image/upload/v1686931577/KitchenAid-Artisan-KSM70-Bowl-Lift-Mixer-Candy-Apple-Red_1_2000px_rtltlz.jpg",
  ];

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image) => {
          return <img src={image} className="w-full h-auto" />;
        })}
      </div>
    </div>
  );
}
