/**
 * Item Impact
 *
 * ItemImpact.js
 */

// Imports
import React, { Component } from "react";
import { Form, Grid, Menu } from "semantic-ui-react";
import AccordionMenu from "./AccordionMenu";
import Map from "./Map";

// List of data
const data = ["Custom"];

// Data options
const options = data.map((d) => ({
  key: d,
  text: `Item: ${d}`,
  value: d,
}));

class ItemImpact extends Component {
  handleChange = (_e, { name, value }) => this.setState({ [name]: value });
  render() {
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
          <Map></Map>
        </div>
      </Grid>
    );
  }
}

export default ItemImpact;
