import { Dialog as DialogBase } from "@base-ui-components/react/dialog";

type DialogProps = {
  trigger: React.ReactNode;
  title?: React.ReactNode;
  content?: React.ReactNode;
};

export default function Dialog(props: DialogProps) {
  const { trigger, title, content } = props;

  return (
    <DialogBase.Root>
      <DialogBase.Trigger>{trigger}</DialogBase.Trigger>
      <DialogBase.Portal>
        <DialogBase.Backdrop className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-all duration-150 data-[ending-style]:opacity-0 data-[starting-style]:opacity-0 dark:opacity-70" />
        <DialogBase.Popup className="fixed top-1/2 left-1/2 -mt-8 w-96 max-w-[calc(100vw-3rem)] -translate-x-1/2 -translate-y-1/2 rounded-lg text-gray-900 transition-all duration-150 data-[ending-style]:scale-90 data-[ending-style]:opacity-0 data-[starting-style]:scale-90 data-[starting-style]:opacity-0 dark:outline-gray-300">
          <DialogBase.Close className="absolute -top-10 right-0 w-8 h-8 flex items-center justify-center rounded-full bg-gray dark:bg-gray-dark text-primary-text dark:text-primary-text-dark transition-colors">
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1L13 13M1 13L13 1"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </DialogBase.Close>
          {title && (
            <DialogBase.Title className="mb-1 text-lg font-medium">
              {title}
            </DialogBase.Title>
          )}
          <DialogBase.Description className="text-base text-gray-600">
            {content}
          </DialogBase.Description>
        </DialogBase.Popup>
      </DialogBase.Portal>
    </DialogBase.Root>
  );
}
