import { produce } from "immer";

export const updateData = (attr, value, ...props) => {
  if (props.length === 0) {
    return value;
  }
  const [currentProp, ...remainingProps] = props;
  if (remainingProps.length === 0) {
    return produce(attr, draft => {
      draft[currentProp] = value;
    });
  }
  return produce(attr, draft => {
    if (!Object.prototype.hasOwnProperty.call(draft, currentProp)) {
      draft[currentProp] = {};
    }
    draft[currentProp] = updateData(draft[currentProp], value, ...remainingProps);
  });
};

export const themeSwitch = (theme, attributes) => {
  return produce(attributes, (draft) => {
    draft['theme'] = theme;

    switch (theme) {
      case 'themeOne':
        draft['Styles'] = {
          "container": {
            "bg": {
              "color": "#fff"
            },
            "card": {
              "height": "500px"
            }
          },
          "cardBody": {
            "title": {
              "typo": {
                "fontWeight": 600,
                "fontSize": {
                  "desktop": 24,
                  "tablet": 16,
                  "mobile": 12
                },
                "lineHeight": 1.5,
                "fontFamily": "Montserrat, sans-serif"
              },
              "colors": {
                "color": "#1a202c",
                "bg": ""
              },
              "padding": {
                "desktop": {
                  "top": "0px",
                  "left": "0px",
                  "bottom": "0px",
                  "right": "0px"
                },
                "tablet": {
                  "top": "0px",
                  "left": "0px",
                  "bottom": "0px",
                  "right": "0px"
                },
                "mobile": {
                  "top": "0px",
                  "left": "0px",
                  "bottom": "0px",
                  "right": "0px"
                }
              }
            },
            "description": {
              "typo": {
                "fontWeight": 400,
                "fontSize": {
                  "desktop": 16,
                  "tablet": 14,
                  "mobile": 12
                },
                "lineHeight": 1.5,
                "fontFamily": "Montserrat, sans-serif"
              },
              "colors": {
                "color": "#1a202c",
                "bg": ""
              },
              "padding": {
                "desktop": {
                  "top": "0px",
                  "left": "0px",
                  "bottom": "0px",
                  "right": "0px"
                },
                "tablet": {
                  "top": "0px",
                  "left": "0px",
                  "bottom": "0px",
                  "right": "0px"
                },
                "mobile": {
                  "top": "0px",
                  "left": "0px",
                  "bottom": "0px",
                  "right": "0px"
                }
              }
            },
            "button": {
              "typo": {
                "fontWeight": 600,
                "fontSize": {
                  "desktop": 14,
                  "tablet": 12,
                  "mobile": 10
                },
                "lineHeight": 1.5,
                "fontFamily": "Montserrat, sans-serif"
              },
              "colors": {
                "color": "#fff",
                "bg": "#007bff"
              },
              "padding": {
                "desktop": {
                  "top": "10px",
                  "left": "20px",
                  "bottom": "10px",
                  "right": "20px"
                },
                "tablet": {
                  "top": "10px",
                  "left": "20px",
                  "bottom": "10px",
                  "right": "20px"
                },
                "mobile": {
                  "top": "10px",
                  "left": "20px",
                  "bottom": "10px",
                  "right": "20px"
                }
              }
            }
          }
        }
        draft['column']["desktop"] = 3
        draft['column']["tablet"] = 2
        draft['column']["mobile"] = 1
        draft['column']["gap"] = "16px"
        break;
      case 'themeTwo':
        draft['Styles'] = {
          "container": {
            "bg": {
              "color": "#fff"
            },
            "card": {
              "height": "300px"
            }
          },
          "cardBody": {
            "title": {
              "typo": {
                "fontWeight": 600,
                "fontSize": {
                  "desktop": 24,
                  "tablet": 16,
                  "mobile": 12
                },
                "lineHeight": 1.5,
                "fontFamily": "Montserrat, sans-serif"
              },
              "colors": {
                "color": "#1a202c",
                "bg": ""
              },
              "padding": {
                "desktop": {
                  "top": "0px",
                  "left": "0px",
                  "bottom": "0px",
                  "right": "0px"
                },
                "tablet": {
                  "top": "0px",
                  "left": "0px",
                  "bottom": "0px",
                  "right": "0px"
                },
                "mobile": {
                  "top": "0px",
                  "left": "0px",
                  "bottom": "0px",
                  "right": "0px"
                }
              }
            },
            "description": {
              "typo": {
                "fontWeight": 400,
                "fontSize": {
                  "desktop": 16,
                  "tablet": 14,
                  "mobile": 12
                },
                "lineHeight": 1.5,
                "fontFamily": "Montserrat, sans-serif"
              },
              "colors": {
                "color": "#1a202c",
                "bg": ""
              },
              "padding": {
                "desktop": {
                  "top": "0px",
                  "left": "0px",
                  "bottom": "0px",
                  "right": "0px"
                },
                "tablet": {
                  "top": "0px",
                  "left": "0px",
                  "bottom": "0px",
                  "right": "0px"
                },
                "mobile": {
                  "top": "0px",
                  "left": "0px",
                  "bottom": "0px",
                  "right": "0px"
                }
              }
            },
            "button": {
              "typo": {
                "fontWeight": 600,
                "fontSize": {
                  "desktop": 14,
                  "tablet": 12,
                  "mobile": 10
                },
                "lineHeight": 1.5,
                "fontFamily": "Montserrat, sans-serif"
              },
              "colors": {
                "color": "#fff",
                "bg": "#007bff"
              },
              "padding": {
                "desktop": {
                  "top": "10px",
                  "left": "20px",
                  "bottom": "10px",
                  "right": "20px"
                },
                "tablet": {
                  "top": "10px",
                  "left": "20px",
                  "bottom": "10px",
                  "right": "20px"
                },
                "mobile": {
                  "top": "10px",
                  "left": "20px",
                  "bottom": "10px",
                  "right": "20px"
                }
              }
            }
          }
        }
        draft['column']["desktop"] = 2
        draft['column']["tablet"] = 2
        draft['column']["mobile"] = 1
        draft['column']["gap"] = "16px"


    }

  })
}