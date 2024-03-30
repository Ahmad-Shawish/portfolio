import { useRef, useState } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/scss/image-gallery.scss";

const items = [
  {
    id: 1,
    title: "Blog Site",
    images: [
      {
        original: "./blog ss1.png",
        thumbnail: "./blog ss1.png",
        thumbnailWidth: "100px",
        thumbnailHeight: "60px",
        originalHeight: "450px",
        loading: "lazy",
      },
      {
        original: "./blog ss2.png",
        thumbnail: "./blog ss2.png",
        thumbnailWidth: "100px",
        thumbnailHeight: "60px",
        originalHeight: "450px",
        loading: "lazy",
      },
      {
        original: "./blog ss3.png",
        thumbnail: "./blog ss3.png",
        thumbnailWidth: "100px",
        thumbnailHeight: "60px",
        originalHeight: "450px",
        loading: "lazy",
      },
      {
        original: "./blog ss4.png",
        thumbnail: "./blog ss4.png",
        thumbnailWidth: "100px",
        thumbnailHeight: "60px",
        originalHeight: "450px",
        loading: "lazy",
      },
      {
        original: "./blog ss5.png",
        thumbnail: "./blog ss5.png",
        thumbnailWidth: "100px",
        thumbnailHeight: "60px",
        originalHeight: "450px",
        loading: "lazy",
      },
      {
        original: "./blog ss6.png",
        thumbnail: "./blog ss6.png",
        thumbnailWidth: "100px",
        thumbnailHeight: "60px",
        originalHeight: "450px",
        loading: "lazy",
      },
      {
        original: "./blog ss7.png",
        thumbnail: "./blog ss7.png",
        thumbnailWidth: "100px",
        thumbnailHeight: "60px",
        originalHeight: "450px",
        loading: "lazy",
      },
      {
        original: "./blog ss8.png",
        thumbnail: "./blog ss8.png",
        thumbnailWidth: "100px",
        thumbnailHeight: "60px",
        originalHeight: "450px",
        loading: "lazy",
      },
      {
        original: "./blog ss9.png",
        thumbnail: "./blog ss9.png",
        thumbnailWidth: "100px",
        thumbnailHeight: "60px",
        originalHeight: "450px",
        loading: "lazy",
      },
    ],
    desc: "A blog site built in React, SCSS, MySQL and Express, used JSONWebToken for authorization users, ReactQuill to let the user use bold, italic, bullets etc",
    ghlink: "https://github.com/Ahmad-Shawish/blog",
    tunnel: "https://sqb9npfb-3000.euw.devtunnels.ms/",
  },
  {
    id: 2,
    title: "Movie Search",
    images: [
      {
        original: "./movie ss1.png",
        thumbnail: "./movie ss1.png",
        thumbnailWidth: "100px",
        thumbnailHeight: "60px",
        originalHeight: "450px",
        loading: "lazy",
      },
      {
        original: "./movie full popular.png",
        thumbnail: "./movie full popular.png",
        thumbnailWidth: "100px",
        thumbnailHeight: "60px",
        originalHeight: "450px",
        loading: "lazy",
      },
      {
        original: "./movie ss3.png",
        thumbnail: "./movie ss3.png",
        thumbnailWidth: "100px",
        thumbnailHeight: "60px",
        originalHeight: "450px",
        loading: "lazy",
      },
      {
        original: "./movie ss4.png",
        thumbnail: "./movie ss4.png",
        thumbnailWidth: "100px",
        thumbnailHeight: "60px",
        originalHeight: "450px",
        loading: "lazy",
      },
      {
        original: "./movie ss5.png",
        thumbnail: "./movie ss5.png",
        thumbnailWidth: "100px",
        thumbnailHeight: "60px",
        originalHeight: "450px",
        loading: "lazy",
      },
      {
        original: "./movie ss6.png",
        thumbnail: "./movie ss6.png",
        thumbnailWidth: "100px",
        thumbnailHeight: "60px",
        originalHeight: "450px",
        loading: "lazy",
      },
      {
        original: "./movie ss7.png",
        thumbnail: "./movie ss7.png",
        thumbnailWidth: "100px",
        thumbnailHeight: "60px",
        originalHeight: "450px",
        loading: "lazy",
      },
      {
        original: "./movie ss8.png",
        thumbnail: "./movie ss8.png",
        thumbnailWidth: "100px",
        thumbnailHeight: "60px",
        originalHeight: "450px",
        loading: "lazy",
      },
    ],
    desc: "A movie searching site built in React, SCSS, and utilized The Movie Database (TMDB) API",
    ghlink: "https://github.com/Ahmad-Shawish/moviezSearch",
    tunnel: "https://sqb9npfb-5173.euw.devtunnels.ms/",
  },
  {
    id: 3,
    title: "MapPing App",
    images: [
      {
        original: "./map ss1.png",
        thumbnail: "./map ss1.png",
        thumbnailWidth: "100px",
        thumbnailHeight: "60px",
        originalHeight: "450px",
        loading: "lazy",
      },
      {
        original: "./map ss2.png",
        thumbnail: "./map ss2.png",
        thumbnailWidth: "100px",
        thumbnailHeight: "60px",
        originalHeight: "450px",
        loading: "lazy",
      },
      {
        original: "./map ss3.png",
        thumbnail: "./map ss3.png",
        thumbnailWidth: "100px",
        thumbnailHeight: "60px",
        originalHeight: "450px",
        loading: "lazy",
      },
      {
        original: "./map ss4.png",
        thumbnail: "./map ss4.png",
        thumbnailWidth: "100px",
        thumbnailHeight: "60px",
        originalHeight: "450px",
        loading: "lazy",
      },
    ],
    desc: "A site to add pings on the map to tell about visited places and countries with ratings, built with React, CSS, MongoDB, Express, and the map provided by MapBox",
    ghlink: "https://github.com/Ahmad-Shawish/mapPin",
    tunnel: "https://sqb9npfb-3001.euw.devtunnels.ms/",
  },
  {
    id: 4,
    title: "Car Renting",
    images: [
      {
        original: "./carrent ss1.jpeg",
        thumbnail: "./carrent ss1.jpeg",
        thumbnailHeight: "60px",
        originalHeight: "450px",
        loading: "lazy",
      },
      {
        original: "./carrent ss2.jpeg",
        thumbnail: "./carrent ss2.jpeg",
        thumbnailHeight: "60px",
        originalHeight: "450px",
        loading: "lazy",
      },
      {
        original: "./carrent ss3.jpeg",
        thumbnail: "./carrent ss3.jpeg",
        thumbnailHeight: "60px",
        originalHeight: "450px",
        loading: "lazy",
      },
      {
        original: "./carrent ss4.jpeg",
        thumbnail: "./carrent ss4.jpeg",
        thumbnailHeight: "60px",
        originalHeight: "450px",
        loading: "lazy",
      },
      {
        original: "./carrent ss5.png",
        thumbnail: "./carrent ss5.png",
        thumbnailHeight: "60px",
        originalHeight: "450px",
        loading: "lazy",
      },
      {
        original: "./carrent ss6.png",
        thumbnail: "./carrent ss6.png",
        thumbnailHeight: "60px",
        originalHeight: "450px",
        loading: "lazy",
      },
      {
        original: "./carrent ss7 (2).png",
        thumbnail: "./carrent ss7 (2).png",
        thumbnailHeight: "60px",
        originalHeight: "450px",
        loading: "lazy",
      },
    ],
    desc: "Frontend design only from Figma, built with React and SCSS",
    ghlink: "https://github.com/Ahmad-Shawish/carRent-FEdesignFigma",
    tunnel: "https://sqb9npfb-5174.euw.devtunnels.ms/",
    flink:
      "https://www.figma.com/community/file/1138316365849534403/car-rent-website-design-pickolab-studio",
  },
];

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

            <span>
              info: using a tunnel for live demo so a warning will pop up when
              accessing the link, feel free to check the pics if you don't trust
              it
            </span>

            <div className="btnCont">
              <a href={item.ghlink} target="_blank">
                <button>Source Code</button>
              </a>
              <a href={item.tunnel} target="_blank">
                <button>Live Demo</button>
              </a>
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
