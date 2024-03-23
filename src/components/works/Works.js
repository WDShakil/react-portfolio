/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "../content/TextDecrypt";

import "./Works.css";

// Import ../../assets/recentprojects/
import applewebsite from "../../assets/recentprojects/apple-website.png";
import schoolsite from "../../assets/recentprojects/school-site.png";
import shoeecommerce from "../../assets/recentprojects/shoe-ecommerce.png";
import music from "../../assets/recentprojects/music.png";
import beauty from "../../assets/recentprojects/beauty.png";
import softstok from "../../assets/recentprojects/softstok.png";

const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: "100vw",
    marginTop: "3em",
    marginBottom: "auto",
  },
}));

export const Works = () => {
  const classes = useStyles();
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "Software Company",
      description: `Unlock boundless possibilities with SoftStok. Empowering businesses with innovative software solutions for seamless operations and sustainable growth.`,
      alter: "React Portfolio",
      image: `${softstok}`,
    },
    {
      id: 2,
      title: "Apple Brand Store",
      description: `I have created a super modern and professional website for an Apple brand store. Elevate your shopping experience with us.`,
      alter: "React Portfolio",
      image: `${applewebsite}`,
    },
    {
      id: 3,
      title: "Fauget School",
      description: `Empowering education for all. Navigate curriculum, events, and communication effortlessly on our innovative school website.`,
      alter: "Fauget School",
      image: `${schoolsite}`,
    },
    {
      id: 4,
      title: "Mordan Ecommerce ",
      description: `Step into style with our modern e-commerce shoe store. Explore a curated collection of trendy footwear for every occasion, all just a click away.`,
      alter: "Mordan Ecommerce",
      image: `${shoeecommerce}`,
    },
    {
      id: 5,
      title: "The Arrowai",
      description: `Immerse yourself in the world of music with our platform. Discover new artists, explore diverse genres, and enjoy seamless listening experiences tailored to your taste.`,
      alter: "Music Platforms",
      image: `${music}`,
    },
    {
      id: 6,
      title: "Beauty Care ",
      description: `Indulge in the ultimate beauty experience with our platform. Discover curated skincare, makeup, and wellness products, tailored to enhance your natural radiance and confidence.`,
      alter:
        "Indulge in the ultimate beauty experience with our platform. Discover curated skincare, makeup, and wellness products, tailored to enhance your natural radiance and confidence.",
      image: `${beauty}`,
    },
  ]);

  return (
    <section id="works">
      <Container component="main" className={classes.main} maxWidth="md">
        {projects.map((project) => (
          <div className="project" key={project.id}>
            <div className="__img_wrapper">
              <img src={project.image} alt={project.alter} />
            </div>
            <div className="__content_wrapper">
              <h3 className="title">
                <TextDecrypt text={project.id + ". " + project.title} />
              </h3>
              <p className="description">{project.description}</p>
            </div>
          </div>
        ))}
      </Container>
    </section>
  );
};
