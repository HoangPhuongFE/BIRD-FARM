export type SqlConstraint = {
  constraint_name: string;
  column_name: string;
};

export function isSqlConstraint(obj: any): obj is SqlConstraint {
  return (
    obj &&
    typeof obj.constraint_name == "string" &&
    typeof obj.collumn_name == "string"
  );
}
