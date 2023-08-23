import styles from "./Publications.module.scss";
import { Grid } from "@material-ui/core";
import { memo } from "react";

const publicationList = [
  {
    id: 1,
    title: "Robotic Process Automation Through Advance Process Analysis Model",
    desc: "Robotics Process Automation is an advanced technology that builds an intelligent software robot that can emulate human interactions with a business process. RPA is an efficient automated method where software agents interact through a graphical user interface in a human-like manner. RPA has various applications in most industries like banking and finance, human resources, healthcare, etc. In this paper, we have proposed our RPA process analysis model and have compared it with a traditional model using various comparison parameters like frequency of change, degree of complexity, time is taken, screen usage and volume of transactions and found out that proposed method gave efficient results over the traditional method.",
    link: "https://ieeexplore.ieee.org/document/9112447",
  },
  {
    id: 2,
    title:
      "Fake News Detection Using Convolutional Neural Networks and Random Forest A Hybrid Approach",
    desc: "Fake news formerly defined as a form of news that consists of misinformation or hoaxes. It can spread through different channels such as print and broadcast media or online social media. News helps us to keep up with the latest trends and knowledge of the world. But when fake news is spread, it creates wrong impressions in the mind of people. A spread of fake news could be done to achieve anything ranging from political to monetary gain by manipulating the general public into thinking. Nowadays, the spread of fake news articles has become easier than ever due to easy access to the Internet and the high engagement rates of the general public which misleads them; this has become a problem of high concern, and to mitigate this problem, many types of research have been carried out in the recent times. This paper aims to mitigate the problem of fake news by using a computational model that can help to detect fake news. The model presented in this paper is a hybrid approach of URL detection, convolutional neural networks (CNN) and random forest (RF). Two CNN models have been merged with different metadata of news article body and title and a random forest classifier for authorship classification. After merging all the models, we got 95.33% accuracy.",
    link: "https://link.springer.com/chapter/10.1007/978-981-33-6691-6_39",
  },
  {
    id: 3,
    title:
      "Advanced Rainfall Prediction Model for India using Various Regression Algorithms",
    desc: "India is a country that is highly dependent on agriculture, and it is the primary source of livelihood for a vast majority of the people. One of the factors that agriculture is highly dependent is rainfall. In this study, machine learning models like Support Vector Machines, Artificial Neural Networks, and Multiple Linear Regression have been used to propose a rainfall prediction model that can predict the monthly rainfall for 542 districts of India. This study uses 119 years (1901–2019) of historical data to train the various machine learning models. The final prediction is an ensemble of two different approaches that achieves an average root mean square error of 3.911 mm.",
    link: "https://link.springer.com/chapter/10.1007/978-981-16-2712-5_30",
  },
  {
    id: 4,
    title: "Crop Yield Prediction for India using Regression Algorithms",
    desc: "Agriculture is the backbone of any developing country. Currently, there is no single model that can provide accurate yield predictions at a pan-India level. Thus, in this paper, a yield prediction model has been proposed, which can predict the annual yield for 36 crops, grown in 542 districts of India. The proposed method makes use of various machine learning algorithms, linear regression, support vector machines, and artificial neural networks, to achieve an average Root Mean Square Error of 1.065 (quintals per 10 acres). The proposed model, in addition to predicting yield for all the major districts with an average accuracy of over 90%, also covers more crops as compared to existing works.",
    link: "https://link.springer.com/chapter/10.1007/978-3-030-88244-0_23",
  },
];

const Publications = () => {
  return (
    <Grid container spacing={8} className={styles.publications}>
      {publicationList.map((publicationItem) => (
        <Grid
          item
          xs={12}
          md={12}
          lg={6}
          xl={6}
          key={`publication_${publicationItem.id}`}
        >
          <a href={publicationItem.link} target="_blank" rel="noreferrer">
            <div className={styles.publicationItem}>
              <h5>{publicationItem.title}</h5>
              <h6>{publicationItem.desc}</h6>
            </div>
          </a>
        </Grid>
      ))}
    </Grid>
  );
};

export default memo(Publications);
