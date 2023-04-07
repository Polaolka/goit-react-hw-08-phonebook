import { Skeleton } from 'react-skeleton-generator';
export default function SkeletonSkeletoView() {
  return (
    <Skeleton.SkeletonThemeProvider>
      <Skeleton width="50px" height="50px" borderRadius="50%" />

      <Skeleton
        count={3}
        widthMultiple={['100%', '50%', '75%']}
        heightMultiple={['50px', '20px', '15px']}
      />{' '}

    </Skeleton.SkeletonThemeProvider>
  );
}
