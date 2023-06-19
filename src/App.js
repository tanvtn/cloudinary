import "./App.css";

function App() {
  const images = [
    "https://cloudinary-nu.vercel.app/image/Thermos-Stainless-King-Insulated-Food-Jar-710ml-Stainless-Steel_1_2000px.jpg",
    "https://cloudinary-nu.vercel.app/image/Scanpan-Impact-5pc-Cookware-Set_1_2000px.jpg",
    "https://cloudinary-nu.vercel.app/image/Kitchen-Pro-Denny-24pc-Storage-Cube-Canister-Starter-Pack-HERO_3.jpg",
    "https://cloudinary-nu.vercel.app/image/SodaStream-Power-Drink-Maker-Black_1_2000px.jpg",
    "https://cloudinary-nu.vercel.app/image/Wolstead-Pro-Swift-Digital-Air-Fryer-Oven-12L-Black-LS_1_bgb59w.jpg",
    "https://cloudinary-nu.vercel.app/image/Salisbury-Co-Sublime-Stemless-Wine-Glass-Set-500ml-6pc_1.jpg",
    "https://cloudinary-nu.vercel.app/image/Joseph-Joseph-Folio-4pc-Chopping-Board-Set-Large-Silver_1_2000px.jpg",
    "https://cloudinary-nu.vercel.app/image/Salisbury-Co-Province-Carry-Basket-with-Suede-Handle-Large-HERO.jpg",
    "https://cloudinary-nu.vercel.app/image/KitchenAid-Artisan-KSM70-Bowl-Lift-Mixer-Candy-Apple-Red_1_2000px.jpg",
    "https://cloudinary-nu.vercel.app/image/Wolstead-Mineral-4pc-Cookware-Set-Ivory-HERO_01.jpg",
    "https://cloudinary-nu.vercel.app/image/Wolstead-Endure-Round-Enamel-Cast-Iron-Casserole-28cm-Red-HERO.jpg",
    "https://cloudinary-nu.vercel.app/image/Wolstead-Endure-Seasoned-Cast-Iron-Bread-Baking-Pan-39x25cm-HERO_01.jpg",
  ];
  return (
    <div className="App bg-gray-200">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((item, index) => {
            return (
              <div key={index}>
                <img src={item} className="w-full h-auto" alt={item} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
