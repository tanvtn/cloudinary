import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./App.css";

function Detail() {
  const [image, setImage] = useState("");
  const { id } = useParams();

  const images = [
    {
      id: 1,
      image:
        "/image/Thermos-Stainless-King-Insulated-Food-Jar-710ml-Stainless-Steel_1_2000px.jpg",
    },
    { id: 2, image: "/image/Scanpan-Impact-5pc-Cookware-Set_1_2000px.jpg" },
    {
      id: 3,
      image:
        "image/Kitchen-Pro-Denny-24pc-Storage-Cube-Canister-Starter-Pack-HERO_3.jpg",
    },
    { id: 4, image: "/image/SodaStream-Power-Drink-Maker-Black_1_2000px.jpg" },
    {
      id: 5,
      image:
        "/image/Wolstead-Pro-Swift-Digital-Air-Fryer-Oven-12L-Black-LS_1_bgb59w.jpg",
    },
    {
      id: 6,
      image:
        "image/Salisbury-Co-Sublime-Stemless-Wine-Glass-Set-500ml-6pc_1.jpg",
    },
    {
      id: 7,
      image:
        "image/Joseph-Joseph-Folio-4pc-Chopping-Board-Set-Large-Silver_1_2000px.jpg",
    },
    {
      id: 8,
      image:
        "image/Salisbury-Co-Province-Carry-Basket-with-Suede-Handle-Large-HERO.jpg",
    },
    {
      id: 9,
      image:
        "image/KitchenAid-Artisan-KSM70-Bowl-Lift-Mixer-Candy-Apple-Red_1_2000px.jpg",
    },
    {
      id: 10,
      image: "image/Wolstead-Mineral-4pc-Cookware-Set-Ivory-HERO_01.jpg",
    },
    {
      id: 11,
      image:
        "image/Wolstead-Endure-Round-Enamel-Cast-Iron-Casserole-28cm-Red-HERO.jpg",
    },
    {
      id: 12,
      image:
        "image/Wolstead-Endure-Seasoned-Cast-Iron-Bread-Baking-Pan-39x25cm-HERO_01.jpg",
    },
  ];

  useEffect(() => {
    const pic = images.find((item) => item.id === parseInt(id));
    setImage(pic.image);
  }, [id]);

  return (
    <div className="App bg-gray-200">
      <div className="container mx-auto">
        <img src={image} className="w-full h-auto" alt={image} />
      </div>
    </div>
  );
}

export default Detail;
