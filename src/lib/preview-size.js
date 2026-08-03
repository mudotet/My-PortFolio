const MAX_DIALOG_WIDTH = 1120;

export const getPreviewDialogSize = ({
  viewportWidth,
  viewportHeight,
  headerHeight,
  aspectRatio,
}) => {
  const maxHeight = viewportHeight * 0.92;
  const width = Math.min(
    viewportWidth * 0.94,
    MAX_DIALOG_WIDTH,
    Math.max(0, (maxHeight - headerHeight) * aspectRatio)
  );

  return {
    width: Math.floor(width),
    height: Math.floor(width / aspectRatio + headerHeight),
  };
};
