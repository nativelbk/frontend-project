/** @format */

import { Chrono } from "react-chrono";

export default function Timeline() {
  const items = [
    {
      title: "January 2024 - present . REMOTE",
      cardTitle: "AI Engineer",
      cardSubtitle:
        "Design and development of chatbots, integration of GPT functionalities into websites, creation of various automated tasks using Python.",
    },
    {
      title: "2023 . REMOTE",
      cardTitle: "Software Tester",
      cardSubtitle:
        "Development of automated test scripts to ensure efficient verification processes. Designing test frameworks to optimize the structure and reproducibility of software tests.",
    },
    {
      title: "2021 . SECURAPLAN",
      cardTitle: "Xamarin Developer",
      cardSubtitle:
        "Design, develop, and implement mobile applications using the C# programming language and associated technologies. Formulate the software architecture for the application.",
    },
    {
      title: "2019 . ONN",
      cardTitle: "Software Engineer",
      cardSubtitle:
        "Understand the company's inventory management needs and requirements. Design the user interface for an optimal user experience.",
    },
  ];

  return (
    <div style={{ width: "100%", height: "auto", margin: "0 auto" }}>
      <Chrono
        activeItemIndex={15}
        cardHeight={100}
        cardWidth={400}
        classNames={{
          card: "my-card",
          cardSubTitle: "my-card-subtitle",
          cardText: "my-card-text",
          cardTitle: "my-card-title",
          controls: "my-controls",
          title: "my-title",
        }}
        disableNavOnKey
        hideControls
        highlightCardsOnHover
        verticalBreakPoint={640}
        mode="VERTICAL_ALTERNATING"
        items={items}
        slideShow
        slideItemDuration={5000}
      />
    </div>
  );
}
