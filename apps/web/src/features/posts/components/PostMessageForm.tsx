import { FormEvent, HTMLAttributes, useId } from "react";
import styled from "styled-components";

import { Input } from "@/components/Input";
import { usePostMutation } from "@/services/api/hooks";
import { visuallyHidden } from "@/assets/styles";
import { IconButton } from "@/components/IconButton";

const Label = styled.label`
  ${visuallyHidden}
`;

export type PostMessageFormProps = HTMLAttributes<HTMLFormElement> & {
  groupId: number;
};

export const PostMessageForm = ({
  groupId,
  ...props
}: PostMessageFormProps) => {
  const messageInputId = useId();
  const mutation = usePostMutation();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const message = formData.get("message") as string;

    mutation.mutate({
      group: groupId,
      title: message,
    });

    e.currentTarget.reset();
  };

  return (
    <form onSubmit={handleSubmit} {...props}>
      <Label htmlFor={messageInputId}>Your message</Label>
      <Input
        id={messageInputId}
        placeholder="Say something..."
        type="text"
        name="message"
        required
      />
      <IconButton icon="send" type="submit" />
    </form>
  );
};
