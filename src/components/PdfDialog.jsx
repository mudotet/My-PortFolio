import { useEffect, useRef } from "react";
import { X } from "lucide-react";
import { getPreviewDialogSize } from "../lib/preview-size";

export const PdfDialog = ({ preview, onClose }) => {
  const dialogRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!preview || !dialog) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    dialog.showModal();

    const resizeDialog = () => {
      const viewport = window.visualViewport;
      const size = getPreviewDialogSize({
        viewportWidth: viewport?.width ?? window.innerWidth,
        viewportHeight: viewport?.height ?? window.innerHeight,
        headerHeight: dialog.querySelector("header")?.offsetHeight ?? 68,
        aspectRatio: preview.aspectRatio ?? 1.294,
      });

      dialog.style.width = `${size.width}px`;
      dialog.style.height = `${size.height}px`;
    };

    const frameId = requestAnimationFrame(resizeDialog);
    window.addEventListener("resize", resizeDialog);
    window.addEventListener("orientationchange", resizeDialog);
    window.visualViewport?.addEventListener("resize", resizeDialog);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", resizeDialog);
      window.removeEventListener("orientationchange", resizeDialog);
      window.visualViewport?.removeEventListener("resize", resizeDialog);
      document.body.style.overflow = previousOverflow;
      if (dialog.open) dialog.close();
    };
  }, [preview]);

  return (
    <dialog
      ref={dialogRef}
      className="certificate-dialog"
      aria-labelledby="pdf-dialog-title"
      onClose={onClose}
      onClick={(event) => {
        if (event.target === event.currentTarget) event.currentTarget.close();
      }}
    >
      {preview && (
        <>
          <header className="flex items-center justify-between gap-4 border-b-4 border-black bg-secondary px-4 py-3 text-black sm:px-5">
            <div className="min-w-0 text-left">
              <p className="truncate text-xs font-bold uppercase tracking-[0.12em] text-black">
                {preview.issuer}
              </p>
              <h3
                id="pdf-dialog-title"
                className="truncate text-base font-black uppercase sm:text-lg"
              >
                {preview.title}
              </h3>
            </div>
            <button
              type="button"
              className="neo-icon-button bg-primary"
              aria-label="Close document preview"
              onClick={() => dialogRef.current?.close()}
            >
              <X className="h-5 w-5 stroke-[3]" />
            </button>
          </header>
          {preview.image ? (
            <img
              src={preview.image}
              alt={`${preview.title} certificate`}
              className="resume-preview"
            />
          ) : (
            <iframe
              key={preview.file}
              src={`${preview.file}#view=Fit&toolbar=0&navpanes=0`}
              title={`${preview.title} preview`}
              className="certificate-frame"
            />
          )}
        </>
      )}
    </dialog>
  );
};
