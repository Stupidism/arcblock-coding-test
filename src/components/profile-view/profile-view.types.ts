/**
 * The type definition for user-profile model should be in a separate file
 * TODO: Move this to a generated ts definition file from the GraphQL schema
 */
export interface UserProfile {
  id: string;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  avatar: string;
  bio: string;
}

export interface ProfileViewProps {
  profile: UserProfile;
}
