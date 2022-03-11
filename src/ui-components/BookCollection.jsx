/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { Book } from "../models";
import {
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import Frame1 from "./Frame1";
import { Collection } from "@aws-amplify/ui-react";
export default function BookCollection(props) {
  const { items: itemsProp, overrideItems, overrides, ...rest } = props;
  const items =
    itemsProp !== undefined
      ? itemsProp
      : useDataStoreBinding({
          type: "collection",
          model: Book,
        }).items;
  return (
    <Collection
      type="grid"
      searchPlaceholder="Search..."
      templateRows="1fr 1fr"
      autoFlow="column"
      alignItems="stretch"
      justifyContent="stretch"
      items={items || []}
      {...rest}
      {...getOverrideProps(overrides, "BookCollection")}
    >
      {(item, index) => (
        <Frame1
          book={item}
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></Frame1>
      )}
    </Collection>
  );
}
