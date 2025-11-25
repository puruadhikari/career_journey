import React, { useState } from 'react';

interface ProfileAvatarProps {
  className?: string;
}

const ProfileAvatar: React.FC<ProfileAvatarProps> = ({ className = '' }) => {
  // Use absolute path to ensure it loads correctly from public folder regardless of current route
  // Updated to use .png as requested
  const [imgSrc, setImgSrc] = useState('/profile/profile.png');
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (!hasError) {
      setHasError(true);
      // Fallback to a placeholder if the local image fails
      setImgSrc('https://picsum.photos/300/300?grayscale');
    }
  };

  return (
    <img
      src={imgSrc}
      alt="Profile"
      onError={handleError}
      className={`object-cover ${className}`}
    />
  );
};

export default ProfileAvatar;