// External deps
import clsx from 'clsx';

// Local deps
import './ImgWithSkeleton.css';

interface ImgWithSkeletonProps {
  src: string | null;
  alt: string | null;
  className?: string;
  height?: number;
  isShowSkeleton: boolean
}

const ImgWithSkeleton = (props: ImgWithSkeletonProps) => {
  const {
    className,
    src,
    alt,
    height = 140,
    isShowSkeleton = false,
  } = props;

  return (
    <div className={clsx("ImgWithSkeleton", className)} style={{ height: `${height}px` }}>
      {isShowSkeleton && <div className="ImgWithSkeleton__skeleton"/>}
      {src ? <img src={src ?? ''} alt={alt ?? ''} className={clsx("ImgWithSkeleton__img")}/> : null}
    </div>
  )
}

export default ImgWithSkeleton;
