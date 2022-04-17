require(["esri/views/MapView", "esri/WebMap", "esri/widgets/Legend", "esri/widgets/LayerList"], (MapView, WebMap, Legend, LayerList) => {
        // Load the webmap
  const webmap = new WebMap({
    portalItem: {
      id: "c54d217ba32e47e2a0d00fb3e849655e"
    }
  });
  
  //Load it in a div
  const view = new MapView({
    map: webmap,
    container: "divMap"
  });
  
  // Add a legend
  // Code taken from https://developers.arcgis.com/javascript/latest/sample-code/widgets-layerlist-legend/
  const layerList = new LayerList({
    view: view,
    listItemCreatedFunction: (event) => {
      const item = event.item;
      if (item.layer.type != "group") {
        // don't show legend twice
        item.panel = {
          content: "legend",
          open: true
        };
      }
    }
  });
  view.ui.add(layerList, "bottom-left");
});
