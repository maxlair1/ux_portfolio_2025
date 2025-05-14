// FollowLabelTarget.tsx
import React from 'react';

interface FollowLabelTargetProps {
  label: string;
  children: React.ReactNode;
}

const FollowLabelTarget = ({ label, children }: FollowLabelTargetProps) => {
  const handleMouseEnter = () => {
    (window as any).__FOLLOW_LABEL__?.handleHover(label);
  };

  const handleMouseLeave = () => {
    (window as any).__FOLLOW_LABEL__?.handleLeave();
  };

  return (
    <span onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {children}
    </span>
  );
};

export default FollowLabelTarget;