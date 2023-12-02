import useLocalStorageState from 'use-local-storage-state';

import { ProfileView, UserProfile } from '../../components/profile-view';

const defaultUserProfile: UserProfile = {
  id: '1',
  username: 'stupidism',
  firstName: 'Feng',
  lastName: 'Sun',
  email: 'sunfeng32@qq.com',
  phone: '123456789',
  avatar: 'https://i.pravatar.cc/300',
  bio: 'This is a user bio. It contains information about the user.',
};

/**
 * ProfileMePage component is a wrapper of ProfileView component.
 * It's the route layer to view the specific user profile of the current user.
 * Responsible for routing and data fetching.
 * @returns
 */
export default function ProfileMePage() {
  // TODO: fetch user profile with an API instead of local storage
  const [userProfile] = useLocalStorageState('user-profile', {
    defaultValue: defaultUserProfile,
  });

  return <ProfileView profile={userProfile} />;
}
