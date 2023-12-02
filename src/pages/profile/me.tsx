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
};

export default function ProfileMePage() {
  const [userProfile] = useLocalStorageState('user-profile', {
    defaultValue: defaultUserProfile,
  });

  return <ProfileView profile={userProfile} />;
}
