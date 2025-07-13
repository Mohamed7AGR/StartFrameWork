// import StarLine from "../StarLine/StarLine";
import img1 from "../../assets/portfolio/port1.png";
import img2 from "../../assets/portfolio/port2.png";
import img3 from "../../assets/portfolio/port3.png";

import Card from "../Card/Card";
import StarLine from "../StarLine/StarLine";
const images = [{imgSrc:img1,imgName:"image1"},
  {imgSrc:img2,imgName:"image2"},
  {imgSrc:img3,imgName:"image3"},
  {imgSrc:img1,imgName:"image5"},
  {imgSrc:img2,imgName:"image6"},
  {imgSrc:img3,imgName:"image4"}
];
export default function Portfolio() {
  return (
    <>
      <section className="mt-3 pt-32">
        <StarLine
          title="portfolio component"
          color="#2C3E50"
        />
        <div className="container grid md:grid-cols-2 lg:grid-cols-3 gap-3">
          {images.map((img, index) => (
            <Card key={index} dataSrc={img.imgSrc} dataName={img.imgSrc} />
          ))}
        </div>
      </section>
    </>
  );
}
