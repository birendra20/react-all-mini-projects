import SimpleCarousel from "simple-react-carousel";

export default function Carousel() {
  return (
    <div className="App">
      <SimpleCarousel>
        <img
          src="https://picsum.photos/200/300"
          alt="You can use images in the carousel!"
        />
        <div>
          <h2>OMG Text!</h2>
          <p>You can use text here too!</p>
        </div>
        <div>
          <h2>Text and Images!?</h2>
          <div>
            <p>Here is a pretty image:</p>
            <img
              src="https://picsum.photos/200/300"
              alt="You can use text and images in the same slide"
            />
          </div>
        </div>
      </SimpleCarousel>
    </div>
  );
}
