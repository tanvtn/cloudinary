import "./App.css";

function App() {
  const thumbnail =
    "image/upload/Supplier%20Images%20/2000px/KitchenAid-Artisan-KSM70-Bowl-Lift-Mixer-Pebbled-Palm_1_2000px.jpg?imagetype=pdp_thumbnail";
  const gallery =
    "image/upload/Supplier%20Images%20/2000px/KitchenAid-Artisan-KSM70-Bowl-Lift-Mixer-Pebbled-Palm_1_2000px.jpg?imagetype=pdp_gallery";
  const full =
    "image/upload/Supplier%20Images%20/2000px/KitchenAid-Artisan-KSM70-Bowl-Lift-Mixer-Pebbled-Palm_1_2000px.jpg?imagetype=pdp_full";
  return (
    <div className="App bg-gray-200">
      <div className="container mx-auto">
        <div className="grid grid-cols-4 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div>
            <img src={thumbnail} alt="thumbnail" />
          </div>
          <div className="col-span-3">
            <img src={gallery} alt="gallery" />
          </div>
        </div>
        <div>
          <img src={full} alt="full" />
        </div>
      </div>
    </div>
  );
}

export default App;
