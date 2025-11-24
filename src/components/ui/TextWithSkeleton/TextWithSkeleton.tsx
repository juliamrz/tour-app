// External deps
import clsx from 'clsx';

// Local deps
import './TextWithSkeleton.css';

interface TextWithSkeletonProps {
  text?: string | null;
  className?: string;
  width?: number | string;
  fontSize?: number;
  isTitle?: boolean;
}

const TextWithSkeleton = (props: TextWithSkeletonProps) => {
  const {
    text,
    className,
    width = "100%",
    fontSize = 16,
    isTitle = false,
  } = props;

  return (
    <div
      className={clsx("TextWithSkeleton", className)}
      style={{
        width,
        fontSize,
        height: fontSize * 1.3,
      }}
    >
      {!text ? (
        <div className="TextWithSkeleton__skeleton" />
      ) : (
        <span
          className={clsx("TextWithSkeleton__text", {
            "TextWithSkeleton__text--title": isTitle,
          })}
        >
          {text}
        </span>
      )}
    </div>
  );
};

export default TextWithSkeleton;
