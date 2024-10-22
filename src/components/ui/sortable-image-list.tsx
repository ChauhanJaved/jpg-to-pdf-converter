import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
} from "@dnd-kit/sortable";

import { useFileContext } from "@/context/file-context";
import SortableImageCard from "./sortable-image-card";
interface SortableImageListProps {
  disabled: boolean;
  isPreviewVisible: boolean;
}
const SortableImageList = ({
  disabled,
  isPreviewVisible,
}: SortableImageListProps) => {
  const { fileList, setFileList } = useFileContext();
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );
  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over || !active || active.id === over.id) return;

    setFileList((fileList) => {
      const oldIndex = fileList.findIndex(({ id }) => id === active.id);
      const newIndex = fileList.findIndex(({ id }) => id === over.id);

      return arrayMove(fileList, oldIndex, newIndex);
    });
  };

  return (
    <DndContext
      sensors={sensors}
      onDragEnd={handleDragEnd}
      collisionDetection={closestCenter}
    >
      <SortableContext items={fileList} disabled={disabled}>
        {fileList.map((fileObj) => (
          <SortableImageCard
            key={fileObj.id}
            isPreviewVisible={isPreviewVisible}
            fileObject={fileObj}
          />
        ))}
      </SortableContext>
    </DndContext>
  );
};

export default SortableImageList;
