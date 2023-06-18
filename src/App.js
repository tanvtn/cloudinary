import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <img
              src="image/Scanpan-Impact-5pc-Cookware-Set_1_2000px.jpg"
              className="w-full h-auto"
              alt="Scanpan-Impact-5pc-Cookware-Set_1_2000px"
            />
          </div>
          <div>
            <img
              src="https://res.cloudinary.com/dbt9zpjzn/image/upload/v1687102073/KitchenAid-Artisan-KSM70-Bowl-Lift-Mixer-Candy-Apple-Red_1_2000px_eg4lyz.jpg"
              className="w-full h-auto"
              alt="KitchenAid-Artisan-KSM70-Bowl-Lift-Mixer-Candy-Apple-Red_1_2000px"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
