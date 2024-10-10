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
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

import { useFileContext } from "@/context/FileContext";
import SortableImageCard from "./SortableImageCard";

const SortableImageList = () => {
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
      <SortableContext items={fileList} strategy={verticalListSortingStrategy}>
        {fileList.map((fileObj) => (
          <SortableImageCard key={fileObj.id} fileObject={fileObj} />
        ))}
      </SortableContext>
    </DndContext>
  );
};

export default SortableImageList;
