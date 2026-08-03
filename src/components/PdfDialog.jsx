import { useEffect, useRef } from "react";
import { X } from "lucide-react";

export const PdfDialog = ({ preview, onClose }) => {
  const dialogRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!preview || !dialog) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    dialog.showModal();

    return () => {
      document.body.style.overflow = previousOverflow;
      if (dialog.open) dialog.close();
    };
  }, [preview]);

  return (
    <dialog
      ref={dialogRef}
      className="certificate-dialog"
      style={{ "--preview-ratio": preview?.aspectRatio ?? 1.294 }}
      aria-labelledby="pdf-dialog-title"
      onClose={onClose}
      onClick={(event) => {
        if (event.target === event.currentTarget) event.currentTarget.close();
      }}
    >
      {preview && (
        <>
          <header className="flex items-center justify-between gap-4 border-b border-border bg-card px-4 py-3 sm:px-5">
            <div className="min-w-0 text-left">
              <p className="truncate text-xs font-bold uppercase tracking-[0.12em] text-primary">
                {preview.issuer}
              </p>
              <h3
                id="pdf-dialog-title"
                className="truncate text-base font-bold sm:text-lg"
              >
                {preview.title}
              </h3>
            </div>
            <button
              type="button"
              className="rounded-md border border-border p-2 text-muted-foreground transition hover:border-primary hover:text-primary"
              aria-label="Close document preview"
              onClick={() => dialogRef.current?.close()}
            >
              <X className="h-5 w-5" />
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
