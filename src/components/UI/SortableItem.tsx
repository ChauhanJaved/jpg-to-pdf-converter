import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

interface SortableItemProps {
  id: string | number; // Depending on how you're managing ids, you can use `string` or `number`
}

export function SortableItem({ id }: SortableItemProps) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transform: transform ? CSS.Transform.toString(transform) : undefined,
    transition,
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <h1>{id}</h1>
      <div className="border border-red-900">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum error
        quibusdam, voluptatibus tenetur ipsum sunt commodi beatae quia nostrum
        eligendi odit, consequatur dolore repellendus ullam, exercitationem ex
        rem at suscipit.
      </div>
    </div>
  );
}
