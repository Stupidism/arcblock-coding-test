import useLocalStorageState from 'use-local-storage-state';
import { Navigate } from 'react-router-dom';

import { ProfileEdit } from '../../../components/profile-edit';
import { UserProfile } from '../../../components/profile-view';

/**
 * ProfileEditPage component is a wrapper of ProfileEdit component.
 * It's the route layer. Responsible for routing and data fetching.
 * @returns
 */
export default function ProfileEditPage() {
  const [userProfile] = useLocalStorageState<UserProfile>('user-profile');

  if (!userProfile) {
    return <Navigate to="/profile/me" />;
  }

  return <ProfileEdit />;
}
