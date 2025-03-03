import { useEffect, useState, useCallback } from "react";

export const useBlockResize = (
  minSize: number,
  maxSize: number,
  initialSize: number,
  invert?: boolean
) => {
  invert = invert ?? false;
  const [blockSize, setBlockSize] = useState<number>(initialSize);
  const [isBlockResizing, setIsBlockResizing] = useState<boolean>(false);

  const handleMouseDown = () => {
    setIsBlockResizing(true);
    document.body.style.userSelect = "none"; // Запрещаем выделение текста
  };

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!isBlockResizing) return;
      setBlockSize((prev) => {
        const newWidth = invert ? prev - e.movementX : prev + e.movementX;
        return Math.min(Math.max(newWidth, minSize), maxSize);
      });
    },
    [isBlockResizing, invert, minSize, maxSize]
  )

  const handleMouseUp = useCallback(() => {
    setIsBlockResizing(false)
    document.body.style.userSelect = "auto"
  }, []);

  useEffect(() => {
    if (isBlockResizing) {
      document.addEventListener("mousemove", handleMouseMove)
      document.addEventListener("mouseup", handleMouseUp)
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseup", handleMouseUp)
    }
  }, [isBlockResizing, handleMouseMove, handleMouseUp])

  return { blockSize, handleMouseDown }
};
