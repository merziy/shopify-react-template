import React from "react";
import { createRoot } from "react-dom/client";
import components from "./react/components/index.js";

// Import Tailwind base
import "./input.css";

const { designMode, inspectMode } = window.Shopify;
const isDesignMode = designMode || inspectMode;

const renderReactApp = (root, componentKey) => {
  const app = createRoot(root);
  const Component = components[componentKey];
  app.render(<Component />);

  // Hot reload in Shopify Theme Customizer
  if (isDesignMode) {
    const handleAppSectionLoad = (event) => {
      const parentSectionId = `#shopify-section-${event.detail.sectionId}`;
      if (root.closest(parentSectionId) !== null) {
        app.unmount();
        document.removeEventListener(
          "shopify:section:load",
          handleAppSectionLoad,
        );
      }
    };
    document.addEventListener("shopify:section:load", handleAppSectionLoad);
  }
};

const handleRefreshReact = (event) => {
  if (event?.detail?.sectionId) {
    const selector = `#shopify-section-${event.detail.sectionId} [data-react-root]`;
    renderReactApp(document.querySelector(selector), event.detail.sectionId);
  }
};

const renderReactApps = () => {
  const reactRoots = document.querySelectorAll("[data-react-root]");
  reactRoots.forEach((root) => renderReactApp(root, root.dataset.reactRoot));
};

window.addEventListener("load", () => {
  renderReactApps();
});

if (isDesignMode) {
  window.renderReactApps = renderReactApps;
  document.addEventListener("shopify:section:load", handleRefreshReact);
  document.addEventListener("shopify:section:deselect", handleRefreshReact);
  document.addEventListener("shopify:section:reorder", handleRefreshReact);
}
