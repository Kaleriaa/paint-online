const drawTool = (
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    tool: string,
) => {
    switch (tool) {
        case 'brush':
            return () => {
                if (x && y) ctx?.moveTo(x, y)
                //ctx?.lineTo(offsetX, offsetY)
            }
    }
}
