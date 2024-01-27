import PropTypes from "prop-types";
import { useState } from "react";
export default function TextExpander({
  children,
  collapsedNumWords = 10,
  className,
  expanded = false,
  expandButtonText = "Show more",
  collapseButtonText = "Show less",
  buttonColor = "#1f09cd",
}) {
  const [isExpanded, setIsExpanded] = useState(expanded);

  return (
    <div className={className}>
      <span>
        {!isExpanded &&
          children.split(" ").slice(0, collapsedNumWords).join(" ")}
        {isExpanded && children}
        {"... "}
      </span>
      <span
        style={{ color: buttonColor, cursor: "pointer" }}
        onClick={() => setIsExpanded((isExpanded) => !isExpanded)}
      >
        {isExpanded ? collapseButtonText : expandButtonText}
      </span>
    </div>
  );
}

TextExpander.propTypes = {
  children: PropTypes.node.isRequired,
  collapsedNumWords: PropTypes.number,
  className: PropTypes.string,
  expanded: PropTypes.bool,
  expandButtonText: PropTypes.string,
  collapseButtonText: PropTypes.string,
  buttonColor: PropTypes.string,
};
