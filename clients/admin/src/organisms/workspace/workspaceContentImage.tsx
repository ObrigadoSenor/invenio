import { Image } from "@invenio/core";
import { ContentImageTypes } from "../../../../../workspace/model/contentModel";

type WorkspaceContentImage = Partial<ContentImageTypes>;

export const WorkspaceContentImage = ({
  alt = "",
  src = "",
}: WorkspaceContentImage) => {
  return (
    <>
      <Image alt={alt} src={src} lowResSrc={src} />
    </>
  );
};
