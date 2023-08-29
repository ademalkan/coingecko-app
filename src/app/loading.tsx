import React from 'react'
import ContentLoader from 'react-content-loader'

const Loading = ():React.ReactNode => {
  return (
    <ContentLoader
      width={"100%"}
      height={400}
      viewBox="0 0 768 400"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="15" y="50" rx="4" ry="4" width="100%" height="38" />
      <rect x="15" y="102" rx="4" ry="4" width="100%" height="38" />
      <rect x="15" y="152" rx="4" ry="4" width="100%" height="38" />
      <rect x="15" y="202" rx="4" ry="4" width="100%" height="38" />
      <rect x="15" y="252" rx="4" ry="4" width="100%" height="38" />
      <rect x="15" y="302" rx="4" ry="4" width="100%" height="38" />
      <rect x="15" y="352" rx="4" ry="4" width="100%" height="38" />
      <rect x="15" y="402" rx="4" ry="4" width="100%" height="38" />
      <rect x="15" y="452" rx="4" ry="4" width="100%" height="38" />
      <rect x="15" y="502" rx="4" ry="4" width="100%" height="38" />
      <rect x="15" y="552" rx="4" ry="4" width="100%" height="38" />
      <rect x="15" y="602" rx="4" ry="4" width="100%" height="38" />

    </ContentLoader>
  )
}


export default Loading