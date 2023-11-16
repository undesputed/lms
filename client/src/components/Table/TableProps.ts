export type Column = {
  key: string;
  title: string;
  displayConverter?:
    | ((value: string) => string)
    | ((value: any) => any)
    | (({ cell }: { cell: Date | string }) => string | Date);
  columnType?:
    | "bar"
    | "status"
    | "edit"
    | "delete"
    | "view"
    | "date"
    | "copy"
    | "icon";
  csvConverter?: boolean | ((value: string) => string);
};

export type TableProps = {
  columns: Column[];
  data: any;
  type: "view" | "update" | "delete";
};
