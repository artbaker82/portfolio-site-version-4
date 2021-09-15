import React from "react";
import reactDom from "react-dom";
import Projects from "./components/Projects";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(fab, faTimes);

reactDom.render(<Projects />, document.getElementById("projects-thumbnail-container"));
