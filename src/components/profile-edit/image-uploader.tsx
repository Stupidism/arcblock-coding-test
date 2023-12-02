import React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const Input = styled('input')({
  display: 'none',
});

interface ImageUploaderProps {
  value: string | undefined;
  onChange: ((imageUrl: string) => void) | undefined;
  children: React.ReactNode;
}

/** Simulate async state of an api call, convert the file into a blob data image */
const uploadImage = (file: File) => {
  return new Promise<string>((resolve) => {
    const reader = new FileReader();

    reader.onload = (event) => {
      const image = new Image();
      image.src = (event.target?.result ?? '') as string;

      image.onload = () => {
        resolve(image.src);
      };
    };

    reader.readAsDataURL(file);
  });
};

/**
 * This component is only used in the ProfileEdit component for now.
 * TODO: refactor it out as a standalone component when it's used in more places.
 * @param props
 * @returns
 */
export function ImageUploader(props: ImageUploaderProps) {
  const { value, onChange, children } = props;

  const handleImageChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];

      const imageUrl = await uploadImage(file);

      onChange?.(imageUrl);
    }
  };

  return (
    <label htmlFor="upload-button">
      <Input accept="image/*" id="upload-button" type="file" onChange={handleImageChange} />
      <Button data-value={value} variant="outlined" component="span">
        {children}
      </Button>
    </label>
  );
}
