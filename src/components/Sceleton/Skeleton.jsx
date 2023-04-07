import { Skeleton } from 'react-skeleton-generator';
export default function Skeleton() {
  return (
    <Skeleton.SkeletonThemeProvider>
      <Skeleton width="50px" height="50px" borderRadius="50%" /> // Simple,
      generated single line circle skeleton
      <Skeleton
        count={3}
        widthMultiple={['100%', '50%', '75%']}
        heightMultiple={['50px', '20px', '15px']}
      />{' '}
      // Three skeleton lines
    </Skeleton.SkeletonThemeProvider>
  );
}
