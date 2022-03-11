/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Image, Text, View } from "@aws-amplify/ui-react";
export default function Frame1(props) {
  const { book, overrides, ...rest } = props;
  return (
    <View
      width="366px"
      height="513px"
      overflow="hidden"
      position="relative"
      borderRadius="10px"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "Frame1")}
    >
      <Image
        width="284px"
        height="359px"
        position="absolute"
        top="0px"
        left="41px"
        padding="0px 0px 0px 0px"
        src={book?.image_src}
        {...getOverrideProps(overrides, "Rectangle 1")}
      ></Image>
      <Text
        fontFamily="Noto Sans JP"
        fontSize="18px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="21.09375px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="center"
        letterSpacing="1.65px"
        width="358px"
        height="55px"
        position="absolute"
        top="358.5px"
        left="8.5px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={book?.title}
        {...getOverrideProps(overrides, "\u30BF\u30A4\u30C8\u30EB")}
      ></Text>
      <Text
        fontFamily="Noto Sans JP"
        fontSize="18px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="21.09375px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        width="254px"
        height="30px"
        position="absolute"
        top="413px"
        left="112px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={book?.author}
        {...getOverrideProps(overrides, "\u8457\u8005")}
      ></Text>
      <Text
        fontFamily="Noto Sans JP"
        fontSize="18px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="21.09375px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        width="83px"
        height="30px"
        position="absolute"
        top="413px"
        left="29px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Author"
        {...getOverrideProps(overrides, "Author")}
      ></Text>
      <Text
        fontFamily="Noto Sans JP"
        fontSize="18px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="21.09375px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        width="83px"
        height="30px"
        position="absolute"
        top="443px"
        left="29px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Genre"
        {...getOverrideProps(overrides, "Genre")}
      ></Text>
      <Text
        fontFamily="Noto Sans JP"
        fontSize="18px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="21.09375px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        width="83px"
        height="30px"
        position="absolute"
        top="473px"
        left="29px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Release"
        {...getOverrideProps(overrides, "Release")}
      ></Text>
      <Text
        fontFamily="Noto Sans JP"
        fontSize="18px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="21.09375px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        width="254px"
        height="30px"
        position="absolute"
        top="443px"
        left="112px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={book?.genre}
        {...getOverrideProps(overrides, "\u30B8\u30E3\u30F3\u30EB")}
      ></Text>
      <Text
        fontFamily="Noto Sans JP"
        fontSize="18px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="21.09375px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        width="254px"
        height="30px"
        position="absolute"
        top="473px"
        left="112px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={book?.release_date}
        {...getOverrideProps(overrides, "\u767A\u58F2\u65E5")}
      ></Text>
    </View>
  );
}
