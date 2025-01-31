import { Image } from "@gluestack-ui/themed";
import { ComponentProps } from "react";

type Prop = ComponentProps<typeof Image>;

export function UserPhoto({...rest}: Prop) {
  return (
    <Image 
      rounded="$full" 
      borderWidth="$2" 
      borderColor="$gray400" 
      backgroundColor="$gray500"
      {...rest}
    />
  )
};
