import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider } from "react-router-dom";

import { router } from "./router/router";
import BoardProvider from "./contexts/board";
import ListProvider from "./contexts/List";
import TaskProvider from "./contexts/Task";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
	<React.StrictMode>
		<BoardProvider>
			<ListProvider>
				<TaskProvider>
					<RouterProvider router={router} />
				</TaskProvider>
			</ListProvider>
		</BoardProvider>
	</React.StrictMode>
);

reportWebVitals();