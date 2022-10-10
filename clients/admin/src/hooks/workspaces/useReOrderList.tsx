import { equals, findIndex, isNil, move } from "ramda";
import { RefObject, useCallback, useState, useEffect, DragEvent } from "react";
import { WorkspaceContentType } from "../../../redux/slices/workspaces";

export type UseReOrderListReturn = {
  onDragStart: () => void;
  onDrag: () => void;
  onDragEnd: () => void;
};

type UseReOrderList = {
  containerRef: RefObject<HTMLUListElement>;
  childrenToRender: WorkspaceContentType["children"];
};

type OnReOrderList = {
  id: string;
};

type DragObject = {
  id: string | null;
  index: number | null;
};

export const useReOrderList = ({
  containerRef,
  childrenToRender,
}: UseReOrderList) => {
  const [dropped, setDropped] = useState<boolean>(false);
  const [dragFrom, setDragFrom] = useState<DragObject>({
    id: null,
    index: null,
  });
  const [dragTo, setDragTo] = useState<DragObject>({
    id: null,
    index: null,
  });
  const { children: refChildren = [] } = containerRef.current || {};

  const [reOrderedChildren, setReOrderChildren] = useState<
    WorkspaceContentType["children"]
  >(childrenToRender || []);

  useEffect(() => {
    setReOrderChildren(childrenToRender);
  }, [childrenToRender]);

  const onReOrderList = useCallback(
    ({ id }: OnReOrderList) => {
      const onDragStart = (event: DragEvent) => {
        event.dataTransfer.setDragImage(new Image(), 0, 0);

        const dragFromIndex = findIndex(
          ({ id: childId }) => childId === id,
          [...refChildren]
        );

        setDropped(false);
        setDragFrom({ index: dragFromIndex, id });
      };

      const onDragEnd = () => {
        setDragTo({
          id: null,
          index: null,
        });
        setDragFrom({
          id: null,
          index: null,
        });
        setDropped(true);
      };

      const onDragEnter = () => {
        const dragToIndex = findIndex(
          ({ id: childId }) => childId === id,
          [...refChildren]
        );

        setDragTo({ id, index: dragToIndex });

        if (!isNil(dragFrom?.index) && !isNil(dragToIndex)) {
          setReOrderChildren(
            move(dragFrom.index, dragToIndex, reOrderedChildren)
          );
        }
      };
      return {
        onDragEnd,
        onDragEnter,
        onDragStart,
      };
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [refChildren, dragFrom]
  );

  return {
    onReOrderList,
    reOrderedChildren,
    dragTo,
    dragFrom,
    dropped,
  };
};
