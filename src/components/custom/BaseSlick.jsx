import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function BaseSlider({ settings, children, sliderRef }) {
  return <Slider ref={sliderRef} {...settings}>{children}</Slider>;
}

export default BaseSlider;
