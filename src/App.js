import "./App.css";

function App() {
  const thumbnail =
    "image/upload/c_fill,g_face,w_106/f_auto/Supplier%20Images%20/2000px/Villeroy-Boch-Rose-Garden-Sugar-Pot-270ml_1_2000px.jpg?imagetype=pdp_thumbnail";

  const gallery =
    "image/upload/c_fill,g_face,w_106/f_auto/t_PDP_2000x2000/Supplier%20Images%20/2000px/Villeroy-Boch-Rose-Garden-Sugar-Pot-270ml_1_2000px.jpg?imagetype=pdp_gallery";
  const full =
    "image/upload/c_fill,g_face,w_1250/f_auto/t_PDP_2000x2000/Supplier%20Images%20/2000px/Villeroy-Boch-Rose-Garden-Sugar-Pot-270ml_1_2000px.jpg?imagetype=pdp_full";

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
