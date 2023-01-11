export interface MessageItem {
  id: number | string;
  content: string;
  type?: "snormal";
  icon?: string;
  showIcon?: boolean;
  closable?: boolean;
  duration?: number;
  resetOnUpdate?: boolean;
  onClose?: (id: number | string) => void;
  resetOnHover?: boolean;
}
