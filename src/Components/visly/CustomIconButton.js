// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
/* tslint:disable */
/* eslint-disable */
import "./textstyles/fonts.css";
import "./reset.css";
import "./CustomIconButton.css";
import React, { createContext, useContext } from "react";
import {
  exists,
  findSetVariantProps,
  makeCompositeDefaultProps,
} from "./_internal_utils";
import { IconPrimitive } from "./_internal_primitives";
import { ButtonRoot } from "./_internal_button";
import * as icons from "./icons";

const styles = [
  {
    type: "default",
    layers: {
      NFYaQaA7WN: {
        none: {
          icon: icons.questionCircle,
          useMask: true,
        },
        disabled: {
          useMask: true,
        },
      },
    },
  },
  {
    type: "enum",
    propName: "kind",
    values: [
      {
        propValue: "primary",
        layers: {
          NFYaQaA7WN: {
            none: {
              useMask: true,
            },
          },
        },
      },
      {
        propValue: "secondary",
        layers: {
          NFYaQaA7WN: {
            none: {
              useMask: true,
            },
          },
        },
      },
      {
        propValue: "quiet",
        layers: {
          NFYaQaA7WN: {
            none: {
              icon: icons.questionCircle,
              useMask: true,
            },
            hover: {
              useMask: true,
            },
            pressed: {
              useMask: true,
            },
          },
        },
      },
    ],
  },
  {
    type: "boolean",
    propName: "large",
    layers: {},
  },
  {
    type: "boolean",
    propName: "dark",
    layers: {
      NFYaQaA7WN: {
        none: {
          useMask: true,
        },
        hover: {
          useMask: true,
        },
        pressed: {
          useMask: true,
        },
      },
    },
  },
];

const defaultPropValues = [
  {
    type: "default",
    layers: {},
  },
  {
    type: "enum",
    propName: "kind",
    values: [
      {
        propValue: "primary",
        layers: {},
      },
      {
        propValue: "secondary",
        layers: {},
      },
      {
        propValue: "quiet",
        layers: {},
      },
    ],
  },
  {
    type: "boolean",
    propName: "large",
    layers: {},
  },
  {
    type: "boolean",
    propName: "dark",
    layers: {},
  },
];

const variantPropTypes = [
  {
    type: "enum",
    propName: "kind",
    propValues: ["primary", "secondary", "quiet"],
  },
  {
    type: "boolean",
    propName: "large",
  },
  {
    type: "boolean",
    propName: "dark",
  },
];

export const CustomIconButtonContext = createContext(null);

function CustomIconButton(_props) {
  const defaults = useContext(CustomIconButtonContext);
  const props = { ...defaults, ..._props };
  const activeVariants = findSetVariantProps(variantPropTypes, props);
  const getCompositeDefaultProps = makeCompositeDefaultProps(
    defaultPropValues,
    activeVariants
  );
  return (
    <ButtonRoot
      {...props}
      key="root"
      addSpacing={false}
      internal={{
        projectId: "7X7HTLRqyD",
        styles: styles,
        layerId: "root",
        scope: "PnqUUCyqeK",
        activeVariants: activeVariants,
      }}
    >
      {(getStyle) => (
        <IconPrimitive
          id={"Icon_NFYaQaA7WN"}
          className={
            "__visly_reset_7X7HTLRqyD __visly_scope_PnqUUCyqeK_NFYaQaA7WN"
          }
          key={"NFYaQaA7WN"}
          useMask={getStyle("NFYaQaA7WN", "useMask")}
          src={exists(props.icon) ? props.icon : getStyle("NFYaQaA7WN", "icon")}
        />
      )}
    </ButtonRoot>
  );
}

CustomIconButton.__variants = [
  {
    name: "kind",
    type: "group",
    variants: ["primary", "secondary", "quiet"],
  },
  {
    name: "large",
    type: "variant",
  },
  {
    name: "dark",
    type: "variant",
  },
];

export default CustomIconButton;
