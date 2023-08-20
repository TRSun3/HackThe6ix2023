import React, { useState } from "react";
import { Form, Grid, Menu } from "semantic-ui-react";
import AccordionMenu from "../AccordionMenu";
import Map from "./Map";

const data = ["Custom"];

const options = data.map((d) => ({
  key: d,
  text: `Item: ${d}`,
  value: d,
}));

const ItemImpact = () => {
  const [selectedValue, setSelectedValue] = useState(options[0].value);

  const handleChange = (_e, { name, value }) => setSelectedValue(value);

  return (
    <Grid centered>
      <Grid.Row columns={2}>
        <Grid.Column>
          <h1 style={{ color: "white" }}>EcoLink Tech</h1>
          <h3>Tracing Tech Origin, Nurturing Sustainability</h3>
          <div id="flex_container">
            <Menu.Item style={{ textAlign: "left" }}>
              <AccordionMenu />
            </Menu.Item>
          </div>
        </Grid.Column>
      </Grid.Row>
      <div>
        <Map selectedValue={selectedValue} />
      </div>
    </Grid>
  );
};

export default ItemImpact;
