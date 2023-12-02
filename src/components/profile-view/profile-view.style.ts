import styled from '@emotion/styled';

const ProfileView = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 0;
  .profile-view__avatar {
    width: 10rem;
    height: 10rem;
    border-radius: 50%;
    margin-bottom: 1rem;
  }
  .profile-view__name {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
  }
  .profile-view__email {
    font-size: 1rem;
    font-weight: 400;
    margin-bottom: 1rem;
  }
  .profile-view__logout {
    font-size: 1rem;
    font-weight: 400;
    color: #000;
    text-decoration: none;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export default {
  ProfileView,
};
