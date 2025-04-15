import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";
import Graphic from "@arcgis/core/Graphic";

export class HighlightManager {
    constructor(view, onLocationSelect) {
        this.view = view;
        this.onLocationSelect = onLocationSelect;
        this.highlightLayer = new GraphicsLayer({
            id: "highlightLayer",
            title: "Highlight Layer",
            listMode: "hide"
        });
        this.view.map.add(this.highlightLayer);
          // Bind methods to instance
          this.highlightFeature = this.highlightFeature.bind(this);
          this.highlightSearchResult = this.highlightSearchResult.bind(this);
          this.clearHighlight = this.clearHighlight.bind(this);
          this.destroy = this.destroy.bind(this);
  
          // Symbol for polygon highlighting
          this.symbols = {
              polygon: {
                  type: "simple-fill",
                  color: [19, 253, 252, 0.2],
                  outline: {
                      color: [19, 253, 252, 0.6],
                      width: 2
                  }
              },
              point: {
                  type: "simple-marker",
                  style: "circle",
                  color: [19, 253, 252, 0.6],
                  size: "12px",
                  outline: {
                      color: [19, 253, 252, 1],
                      width: 2
                  }
              },
              polyline: {
                  type: "simple-line",
                  color: [19, 253, 252, 0.6],
                  width: 4
              }
          };
  
        // Add click event handler
        this.clickHandler = this.view.on("click", async (event) => {

            try {
                const parishLayer = this.view.map.layers.find(
                    layer => layer.title === 'Parishes (sokn)'
                );

                if (!parishLayer) {
                    console.log('Parish layer not found');
                    return;
                }

                // Query the features at the clicked location
                const query = parishLayer.createQuery();
                query.geometry = event.mapPoint;
                query.spatialRelationship = "intersects";
                query.outFields = ["COUNTY", "MUNICIPALITY", "Par_NAME"];
                query.returnGeometry = true;

                const result = await parishLayer.queryFeatures(query);

                if (result.features && result.features.length > 0) {
                    const feature = result.features[0];
                    const attributes = feature.attributes;

                    // Create highlight graphic
                    const symbol = this.getSymbolForGeometry(feature.geometry);
                    const highlightGraphic = new Graphic({
                        geometry: feature.geometry,
                        symbol: symbol
                    });

                    // Clear previous highlights and add new one
                    this.clearHighlight();
                    this.highlightLayer.add(highlightGraphic);

                    // Call the selection callback with the location details
                    if (this.onLocationSelect) {
                        this.onLocationSelect({
                            county: attributes.COUNTY || '',
                            municipality: attributes.MUNICIPALITY || '',
                            parish: attributes.Par_NAME || ''
                        });
                    }
                } else {
                    // If clicked outside any feature, clear everything
                    this.clearHighlight();
                    if (this.onLocationSelect) {
                        this.onLocationSelect({
                            county: '',
                            municipality: '',
                            parish: ''
                        });
                    }
                }
            } catch (error) {
                console.log('Error handling map click:', error);
                this.clearHighlight();
            }
        });
    }

    getSymbolForGeometry(geometry) {
        if (!geometry || !geometry.type) {
            console.warn('Invalid geometry provided');
            return this.symbols.polygon; // Default fallback
        }

        const type = geometry.type.toLowerCase();

        switch (type) {
            case "point":
            case "multipoint":
                return this.symbols.point;
            case "polyline":
                return this.symbols.polyline;
            case "polygon":
            case "extent":
                return this.symbols.polygon;
            default:
                console.warn(`Unsupported geometry type: ${type}`);
                return this.symbols.polygon;
        }
    }

    async highlightFeature(layer, whereClause) {
        try {
            if (!layer || !whereClause) return;

            // Clear existing highlights and popup
            this.clearHighlight();

            if (whereClause !== "1=1") {
                // Query the features
                const query = layer.createQuery();
                query.where = whereClause;
                query.returnGeometry = true;
                query.outFields = ["*"];

                const results = await layer.queryFeatures(query);

                if (results.features && results.features.length > 0) {
                    results.features.forEach(feature => {
                        if (feature.geometry) {
                            const symbol = this.getSymbolForGeometry(feature.geometry);
                            const highlightGraphic = new Graphic({
                                geometry: feature.geometry,
                                symbol: symbol,
                                attributes: feature.attributes
                            });
                            this.highlightLayer.add(highlightGraphic);
                        }
                    });

                    // Show popup for the first feature
                    const feature = results.features[0];
                    if (feature && this.view?.popup) {
                        this.view.openPopup(
                            {
                                location: feature.geometry.centroid || feature.geometry,
                                features: [feature]
                            }
                        )
                    }
                    return true;
                }
            }
            return false;
        } catch (error) {
            console.error('Error highlighting feature:', error);
            return false;
        }
    }

    highlightSearchResult(searchResult) {
        try {
            if (!searchResult || !searchResult.feature) {
                console.warn('Invalid search result');
                return false;
            }

            this.clearHighlight();

            const { feature } = searchResult;

            if (!feature.geometry) {
                console.warn('Search result feature has no geometry');
                return false;
            }

            const symbol = this.getSymbolForGeometry(feature.geometry);

            const highlightGraphic = new Graphic({
                geometry: feature.geometry,
                symbol: symbol
            });

            this.highlightLayer.add(highlightGraphic);
            return true;
        } catch (error) {
            console.error('Error highlighting search result:', error);
            return false;
        }
    }

    clearHighlight() {
        if (this.highlightLayer) {
            this.highlightLayer.removeAll();
        }
        if (this.view?.popup) {
            this.view.popup.visible = false;
            this.view.popup.features = [];
        }
    }

    destroy() {
        if (this.highlightLayer) {
            this.view.map.remove(this.highlightLayer);
        }
        if (this.view?.popup) {
            this.view.popup.visible = false;
            this.view.popup.features = [];
        }
    }
}