import S from './profile-view.style';
import { ProfileViewProps } from './profile-view.types';

export function ProfileView(props: ProfileViewProps) {
  const { profile } = props;
  return <S.ProfileView>{JSON.stringify(profile, null, 2)}</S.ProfileView>;
}
