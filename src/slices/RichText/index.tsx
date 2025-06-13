import type { FC } from "react";
import type { Content } from "@prismicio/client";
import type { SliceComponentProps, JSXMapSerializer } from "@prismicio/react";

import { PrismicNextLink } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";

import styles from "./index.module.css";

const components: JSXMapSerializer = {
  hyperlink: ({ node, children }) => {
    return <PrismicNextLink field={node.data}>{children}</PrismicNextLink>;
  },
  label: ({ node, children }) => {
    if (node.data.label === "codespan") {
      return <code>{children}</code>;
    }
  },
};

/**
 * Props for `RichText`.
 */
type RichTextProps = SliceComponentProps<Content.RichTextSlice>;

/**
 * Component for "RichText" Slices.
 */
const RichText: FC<RichTextProps> = ({ slice }) => {
  return (
    <section className={styles.richtext}>
      <PrismicRichText components={components} field={slice.primary.content} />
    </section>
  );
};

export default RichText;
