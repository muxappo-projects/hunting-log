import { forwardRef } from "react";

const ScrollToTop = forwardRef(({}, ref) => {
  function scrollUp() {
    ref.current.scrollIntoView({ behavior: "smooth" });
  }
  return <button onClick={scrollUp}>Scroll To Top</button>;
});

export default ScrollToTop;
