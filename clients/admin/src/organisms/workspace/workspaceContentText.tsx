import { Input, Text } from "@invenio/core";
import { ContentTextTypes } from "../../../../../workspace/model/contentModel";
import { Icon } from "../../atoms/icon";

type OnChangeContentType = Partial<ContentTextTypes>;

type WorkspaceContentText = Partial<ContentTextTypes> & {
  onChangeContentText: ({ title, description }: OnChangeContentType) => void;
};

export const WorkspaceContentText = ({
  title = "",
  description = "",
  onChangeContentText,
}: WorkspaceContentText) => {
  return (
    <>
      <Input
        label="Title"
        placeholder="Title"
        defaultValue={title}
        onBlur={({ target }) => onChangeContentText({ title: target.value })}
      />
      <Text>{title}</Text>
      <Text>{description}</Text>
    </>
  );
};
