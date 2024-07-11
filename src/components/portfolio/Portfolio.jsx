import { useRef } from "react";
// import { useState } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/scss/image-gallery.scss";

import { newItems as items } from "../../items.js";

const Single = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  // const [prmImg, setPrmImg] = useState(item.images.img1);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            {/* <div className="primary">
              <img src={prmImg} alt="" className="prmImg" />
            </div>
            <div className="secondary">
              <div className="scrlcont">
                <img
                  src={item.images.img1}
                  alt=""
                  className="scndImg"
                  onClick={() => setPrmImg(item.images.img1)}
                />
                <img
                  src={item.images.img2}
                  alt=""
                  className="scndImg"
                  onClick={() => setPrmImg(item.images.img2)}
                />
                <img
                  src={item.images.img3}
                  alt=""
                  className="scndImg"
                  onClick={() => setPrmImg(item.images.img3)}
                />
                <img
                  src={item.images.img4}
                  alt=""
                  className="scndImg"
                  onClick={() => setPrmImg(item.images.img4)}
                />
                <img
                  src={item.images?.img5}
                  alt=""
                  className="scndImg"
                  onClick={() => setPrmImg(item.images.img5)}
                />
                <img
                  src={item.images?.img6}
                  alt=""
                  className="scndImg"
                  onClick={() => setPrmImg(item.images.img6)}
                />
                <img
                  src={item.images?.img7}
                  alt=""
                  className="scndImg"
                  onClick={() => setPrmImg(item.images.img7)}
                />
                <img
                  src={item.images?.img8}
                  alt=""
                  className="scndImg"
                  onClick={() => setPrmImg(item.images.img8)}
                />
                <img
                  src={item.images?.img9}
                  alt=""
                  className="scndImg"
                  onClick={() => setPrmImg(item.images.img9)}
                />
              </div>
            </div> */}
            <div className="imgcont">
              <ImageGallery
                items={item.images}
                showPlayButton={false}
                useBrowserFullscreen={false}
                lazyLoad={true}
                // showThumbnails={false}
              />
            </div>
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>
              {item.desc}
              {item.flink ? (
                <a
                  href={item.flink}
                  target="_blank"
                  style={{ color: "lightgrey", fontSize: 16 }}
                >
                  <br />
                  Figma Link
                </a>
              ) : (
                ""
              )}
            </p>

            {item.tunnel && (
              <span>
                info: using a tunnel for live demo so a warning will pop up when
                accessing the link, feel free to check the pics if you don't
                trust it
              </span>
            )}

            <div className="btnCont">
              <a href={item.ghlink} target="_blank">
                <button>Source Code</button>
              </a>
              {item.tunnel && (
                <a href={item.tunnel} target="_blank">
                  <button>Live Demo</button>
                </a>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    targer: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Projects</h1>
        <motion.div className="progressBar" style={{ scaleX }}></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
