import { useEffect, useState } from "react"

export const useBlockResize = (minSize: number, maxSize: number, initialSize: number, invert?: boolean) => {

    invert = invert ?? false;
    const [blockSize, setBlockSize] = useState<number>(initialSize)
    const [isBlockResizing, setIsBlockResizing] = useState<boolean>(false)

    const handleMouseDown = () => {
        setIsBlockResizing(true)
    };

    const handleMouseMove = (e: MouseEvent) => {
        if (!isBlockResizing) return
        setBlockSize((prev) => {
            let newWidth
            if (invert){
                newWidth = prev - e.movementX;
            } else {
                newWidth = prev + e.movementX;
            }
            return Math.min(Math.max(newWidth, minSize), maxSize);
        });
    }

    const handleMouseUp = () => {
        setIsBlockResizing(false)
    }

    useEffect(() => {
        if (isBlockResizing) {
            document.addEventListener("mousemove", handleMouseMove)
            document.addEventListener("mouseup", handleMouseUp)
        }

        return () => {
            document.removeEventListener("mousemove", handleMouseMove)
            document.removeEventListener("mouseup", handleMouseUp)
        }
    }, [isBlockResizing])

    return {blockSize, handleMouseDown};
}