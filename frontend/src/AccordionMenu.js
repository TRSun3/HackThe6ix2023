/**
 * Item Impact
 *
 * AccordionMenu.js
 *
 * Accordion Menu that expands and collapses when clicked
 */

// Imports
import * as React from "react";

/*
 * Accordion Menu that expands and collapses when clicked
 *
 * Reference: https://www.freecodecamp.org/news/build-accordion-menu-in-react-without-external-libraries/
 */
const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = React.useState(false);

  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <h4 style={{ color: "green" }}>
          {title} {isActive ? "-" : "+"}
        </h4>
      </div>
      {isActive && <div className="accordion-content">{content}</div>}
      <hr />
    </div>
  );
};

/*
 * Accordion Menu Titles and Content
 */
const AccordionMenu = () => {
  const accordionData = [
    {
      title: "title 1",
      content: "content 1",
    },
    {
      title: "title 2",
      content: "content 2",
    },
  ];

  return (
    <div>
      <div className="accordion">
        {accordionData.map(({ title, content }) => (
          <Accordion key={title} title={title} content={content} />
        ))}
      </div>
    </div>
  );
};

export default AccordionMenu;
